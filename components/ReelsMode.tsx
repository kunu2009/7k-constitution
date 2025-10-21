import React, { useMemo } from 'react';
import { Article, LearningMode } from '../types';
import { InfoIcon } from '../constants/icons';

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
    <button onClick={onClick} className="absolute top-6 left-6 z-20 p-3 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-colors" aria-label="Go back">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    </button>
);

const ReelCard: React.FC<{ reel: ReelContent; color: string; onSelectArticle: (article: Article) => void; onBack: () => void }> = ({ reel, color, onSelectArticle, onBack }) => {
  return (
    <div className={`h-full w-full flex-shrink-0 snap-center flex flex-col justify-center items-center p-8 text-white relative ${color}`}>
      <BackButton onClick={onBack} />
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

interface ReelsModeProps {
    articles: Article[];
    onSelectArticle: (article: Article) => void;
    isDetailMode: boolean;
    setMode: (mode: LearningMode) => void;
}

const ReelsMode: React.FC<ReelsModeProps> = ({ articles, onSelectArticle, isDetailMode, setMode }) => {
    const reelDeck = useMemo(() => generateReelContent(articles, isDetailMode), [articles, isDetailMode]);
    
    const colors = [
        'bg-gradient-to-br from-blue-500 to-indigo-700',
        'bg-gradient-to-br from-purple-500 to-pink-700',
        'bg-gradient-to-br from-green-500 to-teal-700',
        'bg-gradient-to-br from-orange-500 to-red-700',
        'bg-gradient-to-br from-cyan-500 to-light-blue-700',
    ];
    
    if (reelDeck.length === 0) {
        return (
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No Content Found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Please change your filter to see content for Reels.</p>
          </div>
        );
      }

  return (
    <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory">
      {reelDeck.map((reel, index) => (
        <ReelCard 
          key={reel.id} 
          reel={reel} 
          color={colors[index % colors.length]}
          onSelectArticle={onSelectArticle}
          onBack={() => setMode(LearningMode.Home)}
        />
      ))}
    </div>
  );
};

export default ReelsMode;