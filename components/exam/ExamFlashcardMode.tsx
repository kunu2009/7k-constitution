import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Article, UserData } from '../../types';
import { CONSTITUTION_ARTICLES } from '../../constants/articles';
import { InfoIcon } from '../../constants/icons';
import { Flashcard } from '../FlashcardMode';
import ExamHeader from './ExamHeader';
import { useUserData } from '../../hooks/useUserData';

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
      details.push({ question: article.summary, type: 'Summary' });
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

const ExamFlashcardMode: React.FC<{ onSelectArticle: (article: Article) => void; onBack: () => void; }> = ({ onSelectArticle, onBack }) => {
  const { userData, updateArticleMastery } = useUserData();
  const [isDetailMode, setIsDetailMode] = useState(false);
  const [flashcardDeck, setFlashcardDeck] = useState<FlashcardContent[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const touchState = useRef({ startX: 0, startY: 0 });

  useEffect(() => {
    const prioritizedArticles = getPrioritizedArticles(CONSTITUTION_ARTICLES, userData);
    const newDeck = generateFlashcardContent(prioritizedArticles, isDetailMode);
    setFlashcardDeck(shuffleArray(newDeck));
    setCurrentIndex(0);
    setIsRevealed(false);
    setAnimationClass('');
  }, [isDetailMode, userData]);

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

  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900">
      <ExamHeader title="Flashcards" onBack={onBack} />
      <div className="flex-grow flex flex-col items-center justify-center p-4 overflow-hidden">
        <div className="flex items-center mb-4">
          <label htmlFor="detail-mode-toggle" className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-3">
            Focus on Details:
          </label>
          <button
            id="detail-mode-toggle"
            onClick={() => setIsDetailMode(!isDetailMode)}
            className={`${isDetailMode ? 'bg-navy' : 'bg-gray-200 dark:bg-gray-600'} relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy`}
            aria-pressed={isDetailMode}
          >
            <span className="sr-only">Focus on Details</span>
            <span className={`${isDetailMode ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
          </button>
        </div>
        <div className="w-full max-w-2xl h-80 sm:h-96 mb-6">
          {currentCard ? (
            <Flashcard 
              question={currentCard.question} 
              answer={currentCard.answer} 
              isRevealed={isRevealed} 
              onClick={handleReveal}
              touchHandlers={touchHandlers}
              animationClass={animationClass}
            />
          ) : <div className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-2xl"><p>Loading cards...</p></div>}
        </div>
        <div className="text-center text-gray-600 dark:text-gray-400 mb-6">
          Card {currentIndex + 1} of {flashcardDeck.length}
        </div>
        {!isRevealed ? (
            <p className="text-gray-500 dark:text-gray-400 text-sm h-10 flex items-center px-6 py-3">Tap card to reveal. Swipe to change.</p>
        ) : (
            <div className="flex items-center space-x-4 animate-fade-in h-10">
                <button onClick={() => handleAssessment('incorrect')} className="px-6 py-3 rounded-lg bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 font-semibold shadow-md hover:bg-red-200 dark:hover:bg-red-900 transition">
                    Review Again
                </button>
                <button onClick={() => handleAssessment('correct')} className="px-6 py-3 rounded-lg bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-semibold shadow-md hover:bg-green-200 dark:hover:bg-green-900 transition">
                    Got It!
                </button>
            </div>
        )}
        <button 
          onClick={() => currentCard && onSelectArticle(currentCard.article)} 
          className="mt-6 flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          <InfoIcon />
          <span>View Full Details for {currentCard?.article.id}</span>
        </button>
      </div>
    </div>
  );
};

export default ExamFlashcardMode;