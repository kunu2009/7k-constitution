import React, { useState, useMemo, useEffect } from 'react';
import { Article } from '../types';
import { InfoIcon } from '../constants/icons';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const Flashcard: React.FC<{ article: Article; isRevealed: boolean; onReveal: () => void }> = ({ article, isRevealed, onReveal }) => {
  return (
    <div
      className="w-full h-full cursor-pointer group flex flex-col justify-center items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative"
      onClick={onReveal}
      aria-live="polite"
    >
      {!isRevealed ? (
        // Question View
        <>
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">{article.part}</span>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Which article is titled:</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-2">"{article.title}"?</h2>
          <p className="absolute bottom-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Click to reveal</p>
        </>
      ) : (
        // Answer View
        <>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-navy dark:text-saffron mb-2">{article.id}</h2>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{article.title}</p>
          <p className="absolute bottom-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Click to hide</p>
        </>
      )}
    </div>
  );
};


const FlashcardMode: React.FC<{ onSelectArticle: (article: Article) => void; articles: Article[] }> = ({ onSelectArticle, articles: filteredArticles }) => {
  const [articles, setArticles] = useState(() => shuffleArray(filteredArticles));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  
  useEffect(() => {
    setArticles(shuffleArray(filteredArticles));
    setCurrentIndex(0);
    setIsRevealed(false);
  }, [filteredArticles]);

  const handleReveal = () => {
    setIsRevealed(!isRevealed);
  };

  const goToNext = () => {
    if (articles.length === 0) return;
    setIsRevealed(false);
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const goToPrev = () => {
    if (articles.length === 0) return;
    setIsRevealed(false);
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const shuffleCards = () => {
    if (filteredArticles.length === 0) return;
    setArticles(shuffleArray(filteredArticles));
    setCurrentIndex(0);
    setIsRevealed(false);
  };
  
  const currentArticle = useMemo(() => articles[currentIndex], [articles, currentIndex]);

  if (filteredArticles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No Articles Found</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Please change your filter to see more articles.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-2xl h-80 sm:h-96 mb-6">
        <Flashcard article={currentArticle} isRevealed={isRevealed} onReveal={handleReveal} />
      </div>

      <div className="text-center text-gray-600 dark:text-gray-400 mb-6">
        Card {currentIndex + 1} of {articles.length}
      </div>

      <div className="flex items-center space-x-4">
        <button onClick={goToPrev} className="px-6 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-semibold shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition">
          Prev
        </button>
        <button onClick={shuffleCards} className="px-6 py-3 rounded-lg bg-saffron text-white font-semibold shadow-lg hover:bg-orange-500 transition">
          Shuffle
        </button>
        <button onClick={goToNext} className="px-6 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-semibold shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition">
          Next
        </button>
      </div>
       <button 
        onClick={() => onSelectArticle(currentArticle)} 
        className="mt-6 flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        <InfoIcon />
        <span>View Full Details</span>
      </button>
    </div>
  );
};

export default FlashcardMode;