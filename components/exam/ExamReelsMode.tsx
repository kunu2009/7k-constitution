import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Article } from '../../types';
import { CONSTITUTION_ARTICLES } from '../../constants/articles';
import { InfoIcon, FullscreenIcon, ExitFullscreenIcon } from '../../constants/icons';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

interface ReelContent {
    id: string;
    type: string;
    content: string;
    article: Article;
}

const generateReelContent = (articles: Article[], isDetailMode: boolean): ReelContent[] => {
    if (isDetailMode) {
        const detailReels = articles.flatMap(article => {
            const details: { type: string; content: string }[] = [];
            details.push({ type: 'Summary', content: article.summary });
            if (article.limitationsAndExceptions) {
                details.push({ type: 'Limitations & Exceptions', content: article.limitationsAndExceptions });
            }
            article.landmarkCases.forEach(lc => {
                details.push({ type: `Landmark Case: ${lc.caseName}`, content: lc.caseSummary });
            });
            
            return details.map((detail, index) => ({
                id: `${article.id}-detail-${index}`,
                ...detail,
                article: article,
            }));
        });
        return shuffleArray(detailReels);
    } else {
        return articles.map(article => ({
            id: article.id,
            type: article.part,
            content: article.summary,
            article: article,
        }));
    }
};

const BackButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button onClick={onClick} className="absolute top-6 left-6 z-20 p-3 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-colors" aria-label="Go back to dashboard">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    </button>
);

const FullscreenButton: React.FC<{ onClick: () => void, isFullscreen: boolean }> = ({ onClick, isFullscreen }) => (
  <button onClick={onClick} className="absolute top-6 right-6 z-20 p-3 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-colors" aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}>
    {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
  </button>
);

const ReelCard: React.FC<{ reel: ReelContent; color: string; onSelectArticle: (article: Article) => void; onBack: () => void; onToggleFullscreen: () => void; isFullscreen: boolean }> = ({ reel, color, onSelectArticle, onBack, onToggleFullscreen, isFullscreen }) => {
  return (
    <div className={`h-full w-full flex-shrink-0 snap-center flex flex-col justify-center items-center p-8 text-white relative ${color}`}>
      <BackButton onClick={onBack} />
      <FullscreenButton onClick={onToggleFullscreen} isFullscreen={isFullscreen} />
      <div className="w-full max-w-md bg-black bg-opacity-30 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
        <span className="text-sm font-bold uppercase tracking-widest opacity-80">{reel.type}</span>
        <h2 className="text-4xl font-extrabold my-3">{reel.article.id}</h2>
        <h3 className="text-2xl font-semibold mb-4 opacity-90">{reel.article.title}</h3>
        <p className="text-lg leading-relaxed max-h-48 overflow-y-auto">{reel.content}</p>
        <button 
            onClick={() => onSelectArticle(reel.article)}
            className="mt-6 w-full flex items-center justify-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
            <InfoIcon />
            <span>Explore Article</span>
        </button>
      </div>
    </div>
  );
};

interface ExamReelsModeProps {
    onSelectArticle: (article: Article) => void;
    onBack: () => void;
}

const ExamReelsMode: React.FC<ExamReelsModeProps> = ({ onSelectArticle, onBack }) => {
    const [isDetailMode, setIsDetailMode] = useState(false);
    const reelDeck = useMemo(() => generateReelContent(CONSTITUTION_ARTICLES, isDetailMode), [isDetailMode]);
    const reelsContainerRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);

    useEffect(() => {
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const toggleFullscreen = () => {
        if (!reelsContainerRef.current) return;
        if (!document.fullscreenElement) {
            reelsContainerRef.current.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    };
    
    const colors = ['bg-gradient-to-br from-blue-500 to-indigo-700', 'bg-gradient-to-br from-purple-500 to-pink-700', 'bg-gradient-to-br from-green-500 to-teal-700', 'bg-gradient-to-br from-orange-500 to-red-700', 'bg-gradient-to-br from-cyan-500 to-light-blue-700'];

  return (
    <div ref={reelsContainerRef} className="h-full w-full overflow-y-scroll snap-y snap-mandatory bg-black">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 bg-black bg-opacity-40 p-2 rounded-lg flex items-center space-x-2">
          <label htmlFor="detail-mode-toggle" className="text-xs font-medium text-white mr-2">
            Details
          </label>
          <button
            id="detail-mode-toggle"
            onClick={() => setIsDetailMode(!isDetailMode)}
            className={`${isDetailMode ? 'bg-saffron' : 'bg-gray-500'} relative inline-flex items-center h-5 rounded-full w-9 transition-colors`}
          >
            <span className={`${isDetailMode ? 'translate-x-5' : 'translate-x-1'} inline-block w-3.5 h-3.5 transform bg-white rounded-full transition-transform`} />
          </button>
      </div>
      {reelDeck.map((reel, index) => (
        <ReelCard 
          key={reel.id} 
          reel={reel} 
          color={colors[index % colors.length]}
          onSelectArticle={onSelectArticle}
          onBack={onBack}
          onToggleFullscreen={toggleFullscreen}
          isFullscreen={isFullscreen}
        />
      ))}
    </div>
  );
};

export default ExamReelsMode;
