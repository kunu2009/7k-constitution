import React, { useState, useMemo } from 'react';
import { Article, MCQQuestion } from '../types';
import { CONSTITUTION_ARTICLES } from '../constants/articles';
import { Flashcard } from './FlashcardMode'; // Re-use the Flashcard component

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// --- Flashcard Generation Logic ---
type ArticleFlashcard = {
  question: React.ReactNode;
  answer: React.ReactNode;
};

const generateArticleFlashcards = (article: Article): ArticleFlashcard[] => {
  const cards: ArticleFlashcard[] = [];
  
  // Card 1: Title -> ID
  cards.push({
    question: (
      <>
        <span className="text-sm font-semibold text-saffron uppercase tracking-wider">{article.part}</span>
        <p className="text-md text-gray-600 dark:text-gray-400 mt-2">Which article is titled:</p>
        <h2 className="text-xl font-bold text-navy dark:text-white mt-1">"{article.title}"?</h2>
      </>
    ),
    answer: (
      <>
        <h2 className="text-5xl font-extrabold text-navy dark:text-saffron mb-2">{article.id}</h2>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">{article.title}</p>
      </>
    ),
  });

  // Card 2: Summary -> ID
  cards.push({
    question: (
      <>
        <span className="text-sm font-semibold text-saffron uppercase tracking-wider">Summary</span>
        <p className="text-md text-gray-600 dark:text-gray-400 mt-2">Which article states:</p>
        <h2 className="text-lg font-bold text-navy dark:text-white mt-1">"{article.summary}"</h2>
      </>
    ),
    answer: (
      <>
        <h2 className="text-5xl font-extrabold text-navy dark:text-saffron mb-2">{article.id}</h2>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">{article.title}</p>
      </>
    ),
  });

  // Card 3: Landmark Cases -> ID
  if (article.landmarkCases.length > 0) {
    const caseItem = article.landmarkCases[0];
    cards.push({
      question: (
        <>
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">Landmark Case</span>
          <p className="text-md text-gray-600 dark:text-gray-400 mt-2">Which article is associated with the case "{caseItem.caseName}"?</p>
           <p className="text-sm italic text-gray-500 dark:text-gray-400 mt-2">Hint: The case was about {caseItem.caseSummary.substring(0, 100)}...</p>
        </>
      ),
      answer: (
        <>
          <h2 className="text-5xl font-extrabold text-navy dark:text-saffron mb-2">{article.id}</h2>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">{article.title}</p>
        </>
      ),
    });
  }
  
  return shuffleArray(cards);
};

// --- MCQ Generation Logic ---
const generateArticleMCQs = (correctArticle: Article): MCQQuestion[] => {
    const questions: MCQQuestion[] = [];
    const articlesCopy = [...CONSTITUTION_ARTICLES].filter(a => a.id !== correctArticle.id);

    // Question 1: What is the title?
    const titleQ = (() => {
        const wrongArticles = shuffleArray(articlesCopy).slice(0, 3);
        const options = shuffleArray([correctArticle.title, ...wrongArticles.map(a => a.title)]);
        return {
            questionText: `Which of the following is the correct title for **${correctArticle.id}**?`,
            article: correctArticle,
            options,
            correctAnswer: correctArticle.title,
            explanation: `The title of ${correctArticle.id} is "${correctArticle.title}".`
        };
    })();
    questions.push(titleQ);

    // Question 2: Which article covers this summary?
    const summaryQ = (() => {
        const wrongArticles = shuffleArray(articlesCopy).slice(0, 3);
        const formatOption = (art: Article) => `${art.id}: ${art.title}`;
        const options = shuffleArray([formatOption(correctArticle), ...wrongArticles.map(formatOption)]);
        return {
            questionText: `Which article's summary is: *"${correctArticle.summary}"*?`,
            article: correctArticle,
            options,
            correctAnswer: formatOption(correctArticle),
            explanation: `This summary belongs to ${correctArticle.id}.`
        };
    })();
    questions.push(summaryQ);
    
    return shuffleArray(questions);
};

// --- Sub-components for Practice Module ---
const Explanation: React.FC<{ text: string }> = ({ text }) => {
    const lines = text.split('\n').map((line, i) => {
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-navy dark:text-saffron">$1</strong>');
        line = line.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
        return <p key={i} dangerouslySetInnerHTML={{ __html: line }} />;
    });
    return <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{lines}</div>;
};

const Stepper: React.FC<{ current: number, total: number, onPrev: () => void, onNext: () => void }> = ({ current, total, onPrev, onNext }) => (
    <div className="flex items-center justify-center space-x-4 mt-4">
        <button onClick={onPrev} className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">&larr; Prev</button>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{current + 1} / {total}</span>
        <button onClick={onNext} className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Next &rarr;</button>
    </div>
);

// --- Main Practice Component ---
const ArticlePractice: React.FC<{ article: Article }> = ({ article }) => {
  const [practiceMode, setPracticeMode] = useState<'flashcards' | 'mcq'>('flashcards');

  // Flashcard State
  const flashcardDeck = useMemo(() => generateArticleFlashcards(article), [article]);
  const [fcIndex, setFcIndex] = useState(0);
  const [isFcRevealed, setIsFcRevealed] = useState(false);

  // MCQ State
  const mcqDeck = useMemo(() => generateArticleMCQs(article), [article]);
  const [mcqIndex, setMcqIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isMcqAnswered, setIsMcqAnswered] = useState(false);

  const currentMcq = mcqDeck[mcqIndex];

  const handleFcNav = (direction: 'next' | 'prev') => {
    setIsFcRevealed(false);
    setTimeout(() => {
        if (direction === 'next') setFcIndex(prev => (prev + 1) % flashcardDeck.length);
        else setFcIndex(prev => (prev - 1 + flashcardDeck.length) % flashcardDeck.length);
    }, 150);
  };
  
  const handleMcqNav = (direction: 'next' | 'prev') => {
      setSelectedAnswer(null);
      setIsMcqAnswered(false);
      if (direction === 'next') setMcqIndex(prev => (prev + 1) % mcqDeck.length);
      else setMcqIndex(prev => (prev - 1 + mcqDeck.length) % mcqDeck.length);
  };

  const handleMcqAnswer = (option: string) => {
      if (isMcqAnswered) return;
      setSelectedAnswer(option);
      setIsMcqAnswered(true);
  }

  const getMcqButtonClass = (option: string) => {
    const base = 'p-3 rounded-lg text-sm text-left text-gray-800 dark:text-gray-200 border-2 border-transparent transition-all duration-300';
    if (!isMcqAnswered) return `${base} bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600`;
    if (option === currentMcq.correctAnswer) return `${base} bg-green-200 dark:bg-green-800 border-green-500`;
    if (option === selectedAnswer) return `${base} bg-red-200 dark:bg-red-800 border-red-500`;
    return `${base} bg-white dark:bg-gray-700 opacity-60`;
  };
  
  const currentFlashcard = flashcardDeck[fcIndex];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">Practice This Article</h2>
      
      <div className="flex justify-center mb-6 border-b border-gray-200 dark:border-gray-700">
          <TabButton label="Flashcards" isActive={practiceMode === 'flashcards'} onClick={() => setPracticeMode('flashcards')} />
          <TabButton label="Quiz" isActive={practiceMode === 'mcq'} onClick={() => setPracticeMode('mcq')} />
      </div>

      {practiceMode === 'flashcards' && (
        <div className="animate-fade-in">
          <div className="h-64">
            <Flashcard 
              question={currentFlashcard.question} 
              answer={currentFlashcard.answer} 
              isRevealed={isFcRevealed} 
              onReveal={() => setIsFcRevealed(!isFcRevealed)} 
              touchHandlers={{}} 
              animationClass="" 
            />
          </div>
          <Stepper current={fcIndex} total={flashcardDeck.length} onPrev={() => handleFcNav('prev')} onNext={() => handleFcNav('next')} />
        </div>
      )}

      {practiceMode === 'mcq' && (
          <div className="w-full bg-gray-50 dark:bg-gray-800/60 p-4 rounded-lg shadow-sm animate-fade-in">
              <p className="text-base font-semibold mb-4 text-center text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: currentMcq.questionText || '' }} />
              <div className="grid grid-cols-1 gap-3">
                  {currentMcq.options.map((option, index) => (
                      <button key={index} onClick={() => handleMcqAnswer(option)} disabled={isMcqAnswered} className={getMcqButtonClass(option)}>
                          {option}
                      </button>
                  ))}
              </div>
              {isMcqAnswered && (
                  <div className="mt-4 text-left">
                      <Explanation text={currentMcq.explanation} />
                  </div>
              )}
               <Stepper current={mcqIndex} total={mcqDeck.length} onPrev={() => handleMcqNav('prev')} onNext={() => handleMcqNav('next')} />
          </div>
      )}
    </div>
  );
};

const TabButton: React.FC<{label: string, isActive: boolean, onClick: () => void}> = ({ label, isActive, onClick }) => {
    const activeClasses = 'border-navy dark:border-saffron text-navy dark:text-saffron';
    const inactiveClasses = 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600';
    return (
        <button
            onClick={onClick}
            className={`-mb-px py-2 px-6 font-semibold border-b-2 transition-colors ${isActive ? activeClasses : inactiveClasses}`}
        >
            {label}
        </button>
    );
}

export default ArticlePractice;