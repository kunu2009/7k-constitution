import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Article } from '../../types';
import ExamHeader from '../exam/ExamHeader';

interface Node {
  id: string;
  x: number;
  y: number;
  article: Article;
}

const MindMapMode: React.FC<{ articles: Article[]; onSelectArticle: (article: Article) => void }> = ({ articles, onSelectArticle }) => {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);
  const isPanning = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const nodes = useMemo(() => {
    const partGroups = articles.reduce((acc, article) => {
      acc[article.part] = [...(acc[article.part] || []), article];
      return acc;
    }, {} as Record<string, Article[]>);

    const result: Node[] = [];
    let yOffset = 150;

    Object.values(partGroups).forEach((group) => {
      const angleStep = (2 * Math.PI) / group.length;
      const radius = Math.max(100, group.length * 15);
      group.forEach((article, index) => {
        result.push({
          id: article.id,
          x: 400 + radius * Math.cos(index * angleStep),
          y: yOffset + radius * Math.sin(index * angleStep),
          article,
        });
      });
      yOffset += radius * 2 + 100;
    });
    return result;
  }, [articles]);

  const nodeMap = useMemo(() => new Map(nodes.map(n => [n.id, n])), [nodes]);

  const edges = useMemo(() => {
    const result: { source: Node; target: Node }[] = [];
    nodes.forEach(sourceNode => {
      sourceNode.article.relatedArticles?.forEach(targetId => {
        const targetNode = nodeMap.get(targetId);
        if (targetNode) {
          result.push({ source: sourceNode, target: targetNode });
        }
      });
    });
    return result;
  }, [nodes, nodeMap]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const newZoom = Math.max(0.2, Math.min(3, zoom - e.deltaY * 0.001));
    setZoom(newZoom);
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    isPanning.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    if(svgRef.current) svgRef.current.style.cursor = 'grabbing';
  };
  
  const handleMouseUp = () => {
    isPanning.current = false;
    if(svgRef.current) svgRef.current.style.cursor = 'grab';
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning.current) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const getOpacity = (itemNode: Node) => {
    if (!selectedNode) return 1;
    if (selectedNode.id === itemNode.id) return 1;
    if (selectedNode.article.relatedArticles?.includes(itemNode.id)) return 0.8;
    return 0.2;
  };

  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900">
      <ExamHeader title="Concept Mind Map" onBack={() => window.history.back()} />
      <div className="flex-grow relative overflow-hidden">
        <svg
          ref={svgRef}
          className="w-full h-full"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: 'grab', background: 'var(--bg-color)' }}
        >
          <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
            {edges.map(({ source, target }, i) => (
              <line
                key={i}
                x1={source.x} y1={source.y}
                x2={target.x} y2={target.y}
                className="stroke-current text-gray-300 dark:text-gray-600 transition-opacity"
                strokeWidth={selectedNode ? 2 : 1}
                opacity={(selectedNode && (selectedNode.id === source.id || selectedNode.id === target.id)) ? 0.7 : 0.2}
              />
            ))}
            {nodes.map(node => (
              <g key={node.id} transform={`translate(${node.x}, ${node.y})`}
                 onClick={() => setSelectedNode(node)}
                 onDoubleClick={() => onSelectArticle(node.article)}
                 className="cursor-pointer group"
                 style={{ transition: 'opacity 0.3s', opacity: getOpacity(node) }}>
                <circle r="30" className="fill-current text-white dark:text-gray-800" strokeWidth="2" stroke="currentColor" />
                <circle r="28" className={`fill-current ${selectedNode?.id === node.id ? 'text-blue-200 dark:text-blue-900' : 'text-gray-100 dark:text-gray-700'}`} />
                <text textAnchor="middle" dy="0.3em" className="fill-current text-navy dark:text-saffron font-bold text-sm select-none">
                  {node.article.id.replace('Article ', '')}
                </text>
                 <title>{node.article.id}: {node.article.title}</title>
              </g>
            ))}
          </g>
        </svg>
        <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg text-xs text-gray-600 dark:text-gray-400">
            <p>Scroll to zoom, Drag to pan.</p>
            <p>Click a node to highlight relations.</p>
            <p>Double-click to view article details.</p>
        </div>
         {selectedNode && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-md text-center animate-fade-in">
                <h3 className="font-bold text-navy dark:text-saffron">{selectedNode.article.id}: {selectedNode.article.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{selectedNode.article.summary}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default MindMapMode;
