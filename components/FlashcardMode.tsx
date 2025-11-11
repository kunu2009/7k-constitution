import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Article } from '../types';
import { InfoIcon } from '../constants/icons';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

type FlashcardContent = {
  question: React.ReactNode;
  answer: React.ReactNode;
  article: Article;
};

const generateFlashcardContent = (articles: Article[], isDetailMode: boolean): FlashcardContent[] => {
  if (isDetailMode) {
    // Generate detail-focused cards
    const detailCards = articles.flatMap(article => {
      const details: { question: string; type: string }[] = [];
      
      // Truncate summary for the flashcard question
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
            <p className="text-md text-gray-600 dark:text-gray-400 mt-4">Which article covers the following point?</p>
            <h2 className="text-lg sm:text-xl font-bold text-navy dark:text-white mt-2 leading-tight">"{detail.question}"</h2>
          </>
        ),
        answer: (
          <>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-navy dark:text-saffron mb-2">{article.id}</h2>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">{article.title}</p>
          </>
        ),
        article: article
      }));
    });
    return detailCards.filter(card => card.question !== null);
  } else {
    // Generate title-focused cards (original behavior)
    return articles.map(article => ({
      question: (
        <>
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">{article.part}</span>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Which article is titled:</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-2">"{article.title}"?</h2>
        </>
      ),
      answer: (
        <>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-navy dark:text-saffron mb-2">{article.id}</h2>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{article.title}</p>
        </>
      ),
      article: article
    }));
  }
};

export const Flashcard: React.FC<{ question: React.ReactNode; answer: React.ReactNode; isRevealed: boolean; onReveal: () => void; touchHandlers: object, animationClass: string }> = ({ question, answer, isRevealed, onReveal, touchHandlers, animationClass }) => {
  return (
    <div
      className={`w-full h-full cursor-pointer group flex flex-col justify-center items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden ${animationClass}`}
      {...touchHandlers}
      aria-live="polite"
    >
      <div className={`transition-opacity duration-300 w-full h-full flex flex-col justify-center overflow-y-auto ${isRevealed ? 'opacity-0' : 'opacity-100'}`}>
        {question}
      </div>
      <div className={`absolute inset-0 p-6 flex flex-col justify-center items-center transition-opacity duration-300 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>
        {answer}
      </div>
      <p className="absolute bottom-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        {isRevealed ? 'Tap to hide' : 'Tap to reveal'}
      </p>
    </div>
  );
};

const FlashcardMode: React.FC<{ onSelectArticle: (article: Article) => void; articles: Article[]; isDetailMode: boolean }> = ({ onSelectArticle, articles: filteredArticles, isDetailMode }) => {
  const [flashcardDeck, setFlashcardDeck] = useState(() => shuffleArray(generateFlashcardContent(filteredArticles, isDetailMode)));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const touchState = useRef({
    startX: 0,
    startY: 0,
    isScrolling: false, // User is scrolling vertically
    isSwiping: false,   // User is swiping horizontally
  });

  useEffect(() => {
    const newDeck = shuffleArray(generateFlashcardContent(filteredArticles, isDetailMode));
    setFlashcardDeck(newDeck);
    setCurrentIndex(0);
    setIsRevealed(false);
    setAnimationClass('');
  }, [filteredArticles, isDetailMode]);

  const handleReveal = () => {
    setIsRevealed(!isRevealed);
  };
  
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

      setTimeout(() => {
        setAnimationClass('');
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  const goToNext = () => changeCard('next');
  const goToPrev = () => changeCard('prev');

  const shuffleCards = () => {
    if (flashcardDeck.length === 0) return;
    setFlashcardDeck(shuffleArray(flashcardDeck));
    setCurrentIndex(0);
    setIsRevealed(false);
  };

  const touchHandlers = {
    onTouchStart: (e: React.TouchEvent) => {
      // Reset state on new touch
      touchState.current = {
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        isScrolling: false,
        isSwiping: false,
      };
    },
    onTouchMove: (e: React.TouchEvent) => {
      // If we've already decided it's a scroll or swipe, do nothing more.
      if (touchState.current.isScrolling || touchState.current.isSwiping) {
        return;
      }
  
      const deltaX = Math.abs(e.touches[0].clientX - touchState.current.startX);
      const deltaY = Math.abs(e.touches[0].clientY - touchState.current.startY);
  
      // We need a minimum movement threshold to trigger a scroll/swipe
      if (deltaX > 10 || deltaY > 10) {
        // It's a vertical scroll if Y movement is greater
        if (deltaY > deltaX) {
          touchState.current.isScrolling = true;
        } else {
          // Otherwise, it's a horizontal swipe
          touchState.current.isSwiping = true;
        }
      }
    },
    onTouchEnd: (e: React.TouchEvent) => {
      // If it was a vertical scroll, do nothing and let the browser handle it.
      if (touchState.current.isScrolling) {
        return;
      }
      
      const deltaX = e.changedTouches[0].clientX - touchState.current.startX;
      
      // If it was a horizontal swipe and it moved far enough
      if (touchState.current.isSwiping && Math.abs(deltaX) > 50) {
        if (deltaX < 0) {
          goToNext();
        } else {
          goToPrev();
        }
      } else {
        // If it wasn't a scroll or a significant swipe, it's a tap.
        handleReveal();
      }
    },
  };
  
  const currentCard = useMemo(() => flashcardDeck[currentIndex], [flashcardDeck, currentIndex]);

  if (flashcardDeck.length === 0 || !currentCard) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No Articles Found</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Please change your filter to see more articles.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="w-full max-w-2xl h-80 sm:h-96 mb-6">
        <Flashcard 
          question={currentCard.question} 
          answer={currentCard.answer} 
          isRevealed={isRevealed} 
          onReveal={handleReveal}
          touchHandlers={touchHandlers}
          animationClass={animationClass}
        />
      </div>

      <div className="text-center text-gray-600 dark:text-gray-400 mb-6">
        Card {currentIndex + 1} of {flashcardDeck.length}
      </div>

      <div className="flex items-center space-x-4">
        <button onClick={goToPrev} disabled={isAnimating} className="px-6 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-semibold shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition disabled:opacity-50">
          Prev
        </button>
        <button onClick={shuffleCards} disabled={isAnimating} className="px-6 py-3 rounded-lg bg-saffron text-white font-semibold shadow-lg hover:bg-orange-500 transition disabled:opacity-50">
          Shuffle
        </button>
        <button onClick={goToNext} disabled={isAnimating} className="px-6 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-semibold shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition disabled:opacity-50">
          Next
        </button>
      </div>
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