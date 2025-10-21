import React, { useState, useMemo, useEffect } from 'react';
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

export const Flashcard: React.FC<{ question: React.ReactNode; answer: React.ReactNode; isRevealed: boolean; onReveal: () => void }> = ({ question, answer, isRevealed, onReveal }) => {
  return (
    <div
      className="w-full h-full cursor-pointer group flex flex-col justify-center items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
      onClick={onReveal}
      aria-live="polite"
    >
      <div className={`transition-opacity duration-300 w-full h-full flex flex-col justify-center overflow-y-auto ${isRevealed ? 'opacity-0' : 'opacity-100'}`}>
        {question}
      </div>
      <div className={`absolute inset-0 p-6 flex flex-col justify-center items-center transition-opacity duration-300 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>
        {answer}
      </div>
      <p className="absolute bottom-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        {isRevealed ? 'Click to hide' : 'Click to reveal'}
      </p>
    </div>
  );
};

const FlashcardMode: React.FC<{ onSelectArticle: (article: Article) => void; articles: Article[]; isDetailMode: boolean }> = ({ onSelectArticle, articles: filteredArticles, isDetailMode }) => {
  const [flashcardDeck, setFlashcardDeck] = useState(() => shuffleArray(generateFlashcardContent(filteredArticles, isDetailMode)));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const newDeck = shuffleArray(generateFlashcardContent(filteredArticles, isDetailMode));
    setFlashcardDeck(newDeck);
    setCurrentIndex(0);
    setIsRevealed(false);
  }, [filteredArticles, isDetailMode]);

  const handleReveal = () => {
    setIsRevealed(!isRevealed);
  };

  const goToNext = () => {
    if (flashcardDeck.length === 0) return;
    setIsRevealed(false);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % flashcardDeck.length);
    }, 150)
  };

  const goToPrev = () => {
    if (flashcardDeck.length === 0) return;
    setIsRevealed(false);
     setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + flashcardDeck.length) % flashcardDeck.length);
    }, 150)
  };

  const shuffleCards = () => {
    if (flashcardDeck.length === 0) return;
    setFlashcardDeck(shuffleArray(flashcardDeck));
    setCurrentIndex(0);
    setIsRevealed(false);
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
    <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-2xl h-80 sm:h-96 mb-6">
        <Flashcard question={currentCard.question} answer={currentCard.answer} isRevealed={isRevealed} onReveal={handleReveal} />
      </div>

      <div className="text-center text-gray-600 dark:text-gray-400 mb-6">
        Card {currentIndex + 1} of {flashcardDeck.length}
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