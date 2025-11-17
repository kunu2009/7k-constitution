import React, { useState, useEffect } from 'react';
import { Article } from '../../types';
import ExamHeader from '../exam/ExamHeader';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const GAME_SIZE = 5;

const MatchMode: React.FC<{ articles: Article[] }> = ({ articles }) => {
  const [gameItems, setGameItems] = useState<{ id: string; title: string }[]>([]);
  const [leftColumn, setLeftColumn] = useState<{ id: string; title: string }[]>([]);
  const [rightColumn, setRightColumn] = useState<{ id: string; title: string }[]>([]);
  
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [mistakes, setMistakes] = useState<string[]>([]);

  const setupGame = () => {
    const shuffled = shuffleArray(articles);
    const selected = shuffled.slice(0, Math.min(GAME_SIZE, shuffled.length));
    
    setGameItems(selected.map(a => ({ id: a.id, title: a.title })));
    setLeftColumn(shuffleArray(selected.map(a => ({ id: a.id, title: a.title }))));
    setRightColumn(shuffleArray(selected.map(a => ({ id: a.id, title: a.title }))));
    
    setMatchedPairs({});
    setMistakes([]);
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  useEffect(() => {
    setupGame();
  }, [articles]);

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      const leftItem = gameItems.find(item => item.id === selectedLeft);
      if (leftItem && leftItem.title === selectedRight) {
        // Correct match
        setMatchedPairs(prev => ({ ...prev, [selectedLeft]: selectedRight }));
      } else {
        // Incorrect match
        if(selectedLeft) setMistakes(prev => [...prev, selectedLeft]);
        if(selectedRight) setMistakes(prev => [...prev, selectedRight]);
        setTimeout(() => {
            setMistakes([]);
        }, 800);
      }
      // Reset selection
      setTimeout(() => {
          setSelectedLeft(null);
          setSelectedRight(null);
      }, 200);
    }
  }, [selectedLeft, selectedRight]);
  
  const isGameWon = Object.keys(matchedPairs).length === gameItems.length && gameItems.length > 0;

  const getButtonClass = (id: string, column: 'left' | 'right') => {
    const base = 'w-full p-4 rounded-lg text-left transition-all duration-200 border-2';
    const content = column === 'left' ? `font-bold text-navy dark:text-saffron` : `text-sm text-light-text dark:text-gray-300`;

    if ((column === 'left' && matchedPairs[id]) || (column === 'right' && Object.values(matchedPairs).includes(id))) {
      return `${base} ${content} bg-green-100 dark:bg-green-900/50 border-green-500 opacity-50 cursor-not-allowed`;
    }
    if (mistakes.includes(id)) {
      return `${base} ${content} bg-red-100 dark:bg-red-900/50 border-red-500 animate-pulse`;
    }
    if ((column === 'left' && selectedLeft === id) || (column === 'right' && selectedRight === id)) {
        return `${base} ${content} bg-blue-100 dark:bg-blue-900/50 border-blue-500 ring-2 ring-blue-500`;
    }
    return `${base} ${content} bg-light-surface dark:bg-gray-800 border-black/10 dark:border-gray-600 hover:bg-light-background/80 dark:hover:bg-gray-700`;
  };

  if (gameItems.length === 0) {
    return (
        <div className="flex flex-col h-full">
            <ExamHeader title="Match the Following" onBack={() => window.history.back()} />
            <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-xl font-semibold text-light-text dark:text-gray-300">Not Enough Articles</h3>
                <p className="text-light-text-secondary dark:text-gray-400 mt-2">At least {GAME_SIZE} articles are needed to start a game. Please broaden your filter.</p>
            </div>
        </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-light-background dark:bg-gray-900">
      <ExamHeader title="Match the Following" onBack={() => window.history.back()} />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
            {isGameWon ? (
                <div className="text-center p-8 bg-light-surface dark:bg-gray-800 rounded-2xl shadow-xl animate-fade-in">
                    <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">Congratulations!</h2>
                    <p className="text-lg text-light-text dark:text-gray-300 mb-6">You've successfully matched all the articles.</p>
                    <button onClick={setupGame} className="px-8 py-3 bg-navy text-white font-bold rounded-lg shadow-md hover:bg-blue-900 transition-colors">
                        Play Again
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                    {/* Left Column (Article IDs) */}
                    <div className="space-y-3">
                        {leftColumn.map(item => (
                            <button key={item.id} onClick={() => setSelectedLeft(item.id)} className={getButtonClass(item.id, 'left')} disabled={!!matchedPairs[item.id]}>
                                {item.id}
                            </button>
                        ))}
                    </div>
                    {/* Right Column (Titles) */}
                    <div className="space-y-3">
                        {rightColumn.map(item => (
                            <button key={item.title} onClick={() => setSelectedRight(item.title)} className={getButtonClass(item.title, 'right')} disabled={Object.values(matchedPairs).includes(item.title)}>
                                {item.title}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default MatchMode;