import React, { useState, useMemo } from 'react';
import { Article, MCQQuestion } from '../types';
import { CONSTITUTION_ARTICLES } from '../constants/articles';
import { useUserData } from '../hooks/useUserData';

// --- Flashcard Component ---
const PracticeFlashcard: React.FC<{ question: React.ReactNode; answer: React.ReactNode; }> = ({ question, answer }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  return (
    <div className="w-full h-full cursor-pointer group flex flex-col justify-center items-center text-center p-4 bg-light-surface dark:bg-gray-800 rounded-xl shadow-lg border border-black/10 dark:border-gray-700 relative overflow-hidden" onClick={() => setIsRevealed(!isRevealed)}>
      <div className={`transition-opacity duration-300 w-full h-full flex flex-col justify-center items-center overflow-y-auto ${isRevealed ? 'opacity-0' : 'opacity-100'}`}>
        {question}
      </div>
      <div className={`absolute inset-0 p-4 flex flex-col justify-center items-center transition-opacity duration-300 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>
        {answer}
      </div>
      <p className="absolute bottom-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        {isRevealed ? 'Tap to hide' : 'Tap to reveal'}
      </p>
    </div>
  );
};

// --- Helper Functions ---
const shuffleArray = <T,>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

// --- Flashcard Generation Logic ---
type ArticleFlashcard = { question: React.ReactNode; answer: React.ReactNode; };

const generateArticleFlashcards = (article: Article): ArticleFlashcard[] => {
  const cards: ArticleFlashcard[] = [];
  cards.push({
    question: <><span className="text-xs font-semibold text-saffron uppercase">{article.part}</span><p className="text-sm text-light-text-secondary dark:text-gray-400 mt-1">Which article is titled:</p><h2 className="text-md font-bold text-navy dark:text-white mt-1">"{article.title}"?</h2></>,
    answer: <><h2 className="text-4xl font-extrabold text-navy dark:text-saffron mb-1">{article.id}</h2><p className="text-md font-semibold text-light-text dark:text-gray-300 text-center">{article.title}</p></>,
  });
  cards.push({
    question: <><span className="text-xs font-semibold text-saffron uppercase">Summary</span><p className="text-sm text-light-text-secondary dark:text-gray-400 mt-1">Which article states:</p><h2 className="text-sm font-bold text-navy dark:text-white mt-1">"{article.summary}"</h2></>,
    answer: <><h2 className="text-4xl font-extrabold text-navy dark:text-saffron mb-1">{article.id}</h2><p className="text-md font-semibold text-light-text dark:text-gray-300 text-center">{article.title}</p></>,
  });
  if (article.landmarkCases.length > 0) {
    const caseItem = article.landmarkCases[0];
    cards.push({
      question: <><span className="text-xs font-semibold text-saffron uppercase">Landmark Case</span><p className="text-sm text-light-text-secondary dark:text-gray-400 mt-1">Which article is associated with the case "{caseItem.caseName}"?</p><p className="text-xs italic text-gray-500 dark:text-gray-400 mt-1">Hint: {caseItem.caseSummary.substring(0, 100)}...</p></>,
      answer: <><h2 className="text-4xl font-extrabold text-navy dark:text-saffron mb-1">{article.id}</h2><p className="text-md font-semibold text-light-text dark:text-gray-300 text-center">{article.title}</p></>,
    });
  }
  return shuffleArray(cards);
};

// --- MCQ Generation Logic ---
const generateArticleMCQs = (correctArticle: Article): MCQQuestion[] => {
    const questions: MCQQuestion[] = [];
    const articlesCopy = [...CONSTITUTION_ARTICLES].filter(a => a.id !== correctArticle.id);
    const titleQ = (() => {
        const wrongArticles = shuffleArray(articlesCopy).slice(0, 3);
        const options = shuffleArray([correctArticle.title, ...wrongArticles.map(a => a.title)]);
        return { questionText: `Which of the following is the correct title for **${correctArticle.id}**?`, article: correctArticle, options, correctAnswer: correctArticle.title, explanation: `The title of ${correctArticle.id} is "${correctArticle.title}".` };
    })();
    questions.push(titleQ);
    const summaryQ = (() => {
        const wrongArticles = shuffleArray(articlesCopy).slice(0, 3);
        const formatOption = (art: Article) => `${art.id}: ${art.title}`;
        const options = shuffleArray([formatOption(correctArticle), ...wrongArticles.map(formatOption)]);
        return { questionText: `Which article's summary is: *"${correctArticle.summary}"*?`, article: correctArticle, options, correctAnswer: formatOption(correctArticle), explanation: `This summary belongs to ${correctArticle.id}.` };
    })();
    questions.push(summaryQ);
    return shuffleArray(questions);
};

// --- Sub-components ---
const Explanation: React.FC<{ text: string }> = ({ text }) => {
    const lines = text.split('\n').map((line, i) => {
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-navy dark:text-saffron">$1</strong>');
        line = line.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
        return <p key={i} dangerouslySetInnerHTML={{ __html: line }} />;
    });
    return <div className="space-y-2 text-xs text-light-text dark:text-gray-300 leading-relaxed">{lines}</div>;
};

const Stepper: React.FC<{ current: number, total: number, onPrev: () => void, onNext: () => void }> = ({ current, total, onPrev, onNext }) => (
    <div className="flex items-center justify-center space-x-4 mt-4">
        <button onClick={onPrev} className="px-4 py-2 rounded-md bg-black/5 dark:bg-gray-700 text-sm hover:bg-black/10 dark:hover:bg-gray-600 transition-colors">&larr; Prev</button>
        <span className="text-sm font-medium text-light-text-secondary dark:text-gray-400">{current + 1} / {total}</span>
        <button onClick={onNext} className="px-4 py-2 rounded-md bg-black/5 dark:bg-gray-700 text-sm hover:bg-black/10 dark:hover:bg-gray-600 transition-colors">Next &rarr;</button>
    </div>
);

// --- Main Component ---
const ArticlePractice: React.FC<{ article: Article }> = ({ article }) => {
  const [practiceMode, setPracticeMode] = useState<'flashcards' | 'mcq'>('flashcards');
  const { updateArticleMastery } = useUserData();

  const flashcardDeck = useMemo(() => generateArticleFlashcards(article), [article]);
  const [fcIndex, setFcIndex] = useState(0);

  const mcqDeck = useMemo(() => generateArticleMCQs(article), [article]);
  const [mcqIndex, setMcqIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isMcqAnswered, setIsMcqAnswered] = useState(false);

  const currentMcq = mcqDeck[mcqIndex];

  const handleFcNav = (direction: 'next' | 'prev') => {
    if (direction === 'next') setFcIndex(prev => (prev + 1) % flashcardDeck.length);
    else setFcIndex(prev => (prev - 1 + flashcardDeck.length) % flashcardDeck.length);
  };
  
  const handleMcqNav = (direction: 'next' | 'prev') => {
      setSelectedAnswer(null);
      setIsMcqAnswered(false);
      if (direction === 'next') setMcqIndex(prev => (prev + 1) % mcqDeck.length);
      else setMcqIndex(prev => (prev - 1 + mcqDeck.length) % mcqDeck.length);
  };

  const handleMcqAnswer = (option: string) => {
      if (isMcqAnswered) return;
      const isCorrect = option === currentMcq.correctAnswer;
      setSelectedAnswer(option);
      setIsMcqAnswered(true);
      updateArticleMastery(article.id, isCorrect ? 'correct' : 'incorrect');
  }

  const getMcqButtonClass = (option: string) => {
    const base = 'p-3 rounded-lg text-sm text-left text-light-text dark:text-gray-200 border-2 border-transparent transition-all duration-300';
    if (!isMcqAnswered) return `${base} bg-light-surface dark:bg-gray-700 hover:bg-light-background/80 dark:hover:bg-gray-600`;
    if (option === currentMcq.correctAnswer) return `${base} bg-green-200 dark:bg-green-800 border-green-500`;
    if (option === selectedAnswer) return `${base} bg-red-200 dark:bg-red-800 border-red-500`;
    return `${base} bg-light-surface dark:bg-gray-700 opacity-60`;
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-light-text dark:text-white mb-6">Practice This Article</h2>
      <div className="flex justify-center mb-6 border-b border-black/10 dark:border-gray-700">
          <TabButton label="Flashcards" isActive={practiceMode === 'flashcards'} onClick={() => setPracticeMode('flashcards')} />
          <TabButton label="Quiz" isActive={practiceMode === 'mcq'} onClick={() => setPracticeMode('mcq')} />
      </div>
      {practiceMode === 'flashcards' && (
        <div className="animate-fade-in">
          <div className="h-56"><PracticeFlashcard question={flashcardDeck[fcIndex].question} answer={flashcardDeck[fcIndex].answer} /></div>
          <Stepper current={fcIndex} total={flashcardDeck.length} onPrev={() => handleFcNav('prev')} onNext={() => handleFcNav('next')} />
        </div>
      )}
      {practiceMode === 'mcq' && (
          <div className="w-full bg-light-background/80 dark:bg-gray-800/60 p-4 rounded-lg shadow-sm animate-fade-in">
              <p className="text-base font-semibold mb-4 text-center text-light-text dark:text-gray-200" dangerouslySetInnerHTML={{ __html: currentMcq.questionText || '' }} />
              <div className="grid grid-cols-1 gap-3">
                  {currentMcq.options.map((option, index) => (
                      <button key={index} onClick={() => handleMcqAnswer(option)} disabled={isMcqAnswered} className={getMcqButtonClass(option)}>
                          {option}
                      </button>
                  ))}
              </div>
              {isMcqAnswered && <div className="mt-4 text-left"><Explanation text={currentMcq.explanation} /></div>}
               <Stepper current={mcqIndex} total={mcqDeck.length} onPrev={() => handleMcqNav('prev')} onNext={() => handleMcqNav('next')} />
          </div>
      )}
    </div>
  );
};

const TabButton: React.FC<{label: string, isActive: boolean, onClick: () => void}> = ({ label, isActive, onClick }) => {
    const activeClasses = 'border-navy dark:border-saffron text-navy dark:text-saffron';
    const inactiveClasses = 'border-transparent text-light-text-secondary hover:text-light-text hover:border-black/10 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600';
    return <button onClick={onClick} className={`-mb-px py-2 px-6 font-semibold border-b-2 transition-colors ${isActive ? activeClasses : inactiveClasses}`}>{label}</button>;
}

export default ArticlePractice;