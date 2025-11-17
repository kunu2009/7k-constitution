import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Article, UserData } from '../types';
import { InfoIcon } from '../constants/icons';
import { useUserData } from '../hooks/useUserData';

// FIX: Add shuffleArray helper function to randomize the flashcard deck.
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const getPrioritizedArticles = (articles: Article[], userData: UserData): Article[] => {
  if (!articles.length) return [];
  const pool: Article[] = [];
  articles.forEach(article => {
    const masteryLevel = userData[article.id]?.masteryLevel ?? 0;
    const weight = Math.max(1, 6 - masteryLevel); // Weight: 6 for unseen, 1 for mastered
    for (let i = 0; i < weight; i++) {
      pool.push(article);
    }
  });
  return pool.sort(() => Math.random() - 0.5);
};


type FlashcardContent = {
  question: React.ReactNode;
  answer: React.ReactNode;
  article: Article;
};

const generateFlashcardContent = (articles: Article[], isDetailMode: boolean): FlashcardContent[] => {
  if (isDetailMode) {
    const detailCards = articles.flatMap(article => {
      const details: { question: string; type: string }[] = [];
      const summaryParts = article.summary.split('.');
      let summaryForCard = summaryParts[0];
      if (summaryParts.length > 1 && summaryParts.slice(1).join('').trim().length > 0) {
          summaryForCard += '...';
      } else {
          summaryForCard += '.';
      }
      details.push({ question: summaryForCard, type: 'Summary' });
      if (article.limitationsAndExceptions) {
        details.push({ question: article.limitationsAndExceptions, type: 'Limitations & Exceptions' });
      }
      article.landmarkCases.forEach(lc => {
        details.push({ question: lc.caseSummary, type: `Landmark Case: ${lc.caseName}` });
      });
      return details.map(detail => ({
        question: (
          <>
            <span className="text-sm font-semibold text-saffron uppercase tracking-wider">{detail.type}</span>
            <p className="text-md text-light-text-secondary dark:text-gray-400 mt-4">Which article covers the following point?</p>
            <h2 className="text-lg sm:text-xl font-bold text-navy dark:text-white mt-2 leading-tight">"{detail.question}"</h2>
          </>
        ),
        answer: (
          <>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-navy dark:text-saffron mb-2">{article.id}</h2>
            <p className="text-lg font-semibold text-light-text dark:text-gray-300 text-center">{article.title}</p>
          </>
        ),
        article: article
      }));
    });
    return detailCards.filter(card => card.question !== null);
  } else {
    return articles.map(article => ({
      question: (
        <>
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">{article.part}</span>
          <p className="text-lg text-light-text-secondary dark:text-gray-400 mt-4">Which article is titled:</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-2">"{article.title}"?</h2>
        </>
      ),
      answer: (
        <>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-navy dark:text-saffron mb-2">{article.id}</h2>
          <p className="text-lg font-semibold text-light-text dark:text-gray-300">{article.title}</p>
        </>
      ),
      article: article
    }));
  }
};

export const Flashcard: React.FC<{ question: React.ReactNode; answer: React.ReactNode; isRevealed: boolean; onClick: () => void; touchHandlers: object; animationClass: string }> = ({ question, answer, isRevealed, onClick, touchHandlers, animationClass }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full h-full group flex flex-col justify-center items-center text-center p-6 bg-light-surface dark:bg-gray-800 rounded-xl shadow-2xl border border-black/10 dark:border-gray-700 relative overflow-hidden cursor-pointer ${animationClass}`}
      {...touchHandlers}
      aria-live="polite"
    >
      <div className={`transition-opacity duration-300 w-full h-full flex flex-col justify-center overflow-y-auto ${isRevealed ? 'opacity-0' : 'opacity-100'}`}>
        {question}
      </div>
      <div className={`absolute inset-0 p-6 flex flex-col justify-center items-center transition-opacity duration-300 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>
        {answer}
      </div>
    </div>
  );
};

const FlashcardMode: React.FC<{ onSelectArticle: (article: Article) => void; articles: Article[]; isDetailMode: boolean }> = ({ onSelectArticle, articles: filteredArticles, isDetailMode }) => {
  const { userData, updateArticleMastery } = useUserData();
  const [flashcardDeck, setFlashcardDeck] = useState<FlashcardContent[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const touchState = useRef({ startX: 0, startY: 0 });

  useEffect(() => {
    const prioritizedArticles = getPrioritizedArticles(filteredArticles, userData);
    const newDeck = generateFlashcardContent(prioritizedArticles, isDetailMode);
    setFlashcardDeck(shuffleArray(newDeck));
    setCurrentIndex(0);
    setIsRevealed(false);
    setAnimationClass('');
  }, [filteredArticles, isDetailMode, userData]);

  const handleReveal = () => setIsRevealed(prev => !prev);
  
  const changeCard = (direction: 'next' | 'prev') => {
    if (isAnimating || flashcardDeck.length === 0) return;
    setIsAnimating(true);
    const outClass = direction === 'next' ? 'animate-slide-out-left' : 'animate-slide-out-right';
    const inClass = direction === 'next' ? 'animate-slide-in-from-right' : 'animate-slide-in-from-left';
    setAnimationClass(outClass);
    setTimeout(() => {
      setIsRevealed(false);
      const newIndex = direction === 'next'
        ? (currentIndex + 1) % flashcardDeck.length
        : (currentIndex - 1 + flashcardDeck.length) % flashcardDeck.length;
      setCurrentIndex(newIndex);
      setAnimationClass(inClass);
      setTimeout(() => { setAnimationClass(''); setIsAnimating(false); }, 300);
    }, 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchState.current.startX = e.touches[0].clientX;
    touchState.current.startY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchState.current.startX === 0) return;

    const deltaX = e.changedTouches[0].clientX - touchState.current.startX;
    const deltaY = e.changedTouches[0].clientY - touchState.current.startY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        changeCard('next');
      } else {
        changeCard('prev');
      }
    }

    touchState.current.startX = 0;
    touchState.current.startY = 0;
  };
  
  const touchHandlers = { onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd };
  
  const handleAssessment = (result: 'correct' | 'incorrect') => {
    if (currentCard) {
      updateArticleMastery(currentCard.article.id, result);
    }
    changeCard('next');
  };

  const currentCard = useMemo(() => flashcardDeck[currentIndex], [flashcardDeck, currentIndex]);

  if (flashcardDeck.length === 0 || !currentCard) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4 text-center">
        <h3 className="text-xl font-semibold text-light-text dark:text-gray-300">No Articles Found</h3>
        <p className="text-light-text-secondary dark:text-gray-400 mt-2">Please change your filter to see more articles.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-light-background dark:bg-gray-900 overflow-hidden">
      <div className="w-full max-w-2xl h-80 sm:h-96 mb-6">
        <Flashcard 
          question={currentCard.question} 
          answer={currentCard.answer} 
          isRevealed={isRevealed} 
          onClick={handleReveal}
          touchHandlers={touchHandlers}
          animationClass={animationClass}
        />
      </div>

      <div className="text-center text-light-text-secondary dark:text-gray-400 mb-6">
        Card {currentIndex + 1} of {flashcardDeck.length}
      </div>

      {!isRevealed ? (
         <p className="text-light-text-secondary dark:text-gray-400 text-sm h-10 flex items-center px-6 py-4">Tap card to reveal. Swipe to change.</p>
      ) : (
        <div className="flex items-center space-x-4 animate-fade-in h-10">
          <button onClick={() => handleAssessment('incorrect')} className="px-6 py-3 rounded-lg bg-red-500/10 dark:bg-red-900/50 text-red-800 dark:text-red-300 font-semibold shadow-md hover:bg-red-500/20 dark:hover:bg-red-900 transition">
            Review Again
          </button>
          <button onClick={() => handleAssessment('correct')} className="px-6 py-3 rounded-lg bg-green-500/10 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-semibold shadow-md hover:bg-green-500/20 dark:hover:bg-green-900 transition">
            Got It!
          </button>
        </div>
      )}
      
       <button 
        onClick={() => onSelectArticle(currentCard.article)} 
        className="mt-6 flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        <InfoIcon />
        <span>View Full Details for {currentCard.article.id}</span>
      </button>
    </div>
  );
};

export default FlashcardMode;