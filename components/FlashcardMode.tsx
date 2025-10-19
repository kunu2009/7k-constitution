import React, { useState, useMemo } from 'react';
import { CONSTITUTION_ARTICLES } from '../constants/articles';
import { Article } from '../types';
import { InfoIcon } from '../constants/icons';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Flashcard: React.FC<{ article: Article; isFlipped: boolean; onFlip: () => void }> = ({ article, isFlipped, onFlip }) => {
  return (
    <div
      className="w-full h-full cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={onFlip}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <span className="text-sm font-semibold text-saffron uppercase">{article.part}</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy dark:text-white mt-2">{article.id}</h2>
          <p className="text-xl text-center text-gray-700 dark:text-gray-300 mt-4">{article.title}</p>
          <p className="absolute bottom-4 text-sm text-gray-400">Click to flip</p>
        </div>
        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden flex flex-col justify-center p-6 bg-blue-50 dark:bg-gray-700 rounded-xl shadow-2xl border border-blue-200 dark:border-blue-600" style={{ transform: 'rotateY(180deg)' }}>
          <h3 className="text-lg font-bold text-navy dark:text-saffron mb-2">Summary</h3>
          <p className="text-base text-gray-800 dark:text-gray-200 overflow-y-auto text-center">{article.summary}</p>
           <p className="absolute bottom-4 text-sm text-gray-400">Click to flip</p>
        </div>
      </div>
    </div>
  );
};


const FlashcardMode: React.FC<{ onSelectArticle: (article: Article) => void }> = ({ onSelectArticle }) => {
  const [articles, setArticles] = useState(() => shuffleArray(CONSTITUTION_ARTICLES));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const goToNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 150); // Delay to allow flip back animation
  };

  const goToPrev = () => {
    setIsFlipped(false);
     setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
    }, 150);
  };

  const shuffleCards = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setArticles(shuffleArray(CONSTITUTION_ARTICLES));
        setCurrentIndex(0);
    }, 150);
  };
  
  const currentArticle = useMemo(() => articles[currentIndex], [articles, currentIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-2xl h-80 sm:h-96 mb-6">
        <Flashcard article={currentArticle} isFlipped={isFlipped} onFlip={() => setIsFlipped(!isFlipped)} />
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
