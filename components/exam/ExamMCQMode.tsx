import React, { useState, useEffect, useMemo } from 'react';
import { CONSTITUTION_ARTICLES } from '../../constants/articles';
import { Article, MCQQuestion } from '../../types';
import { CheckIcon, XIcon } from '../../constants/icons';
import ExamHeader from './ExamHeader';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const generateTitleMCQ = (questionPool: Article[]): MCQQuestion | null => {
  if (questionPool.length === 0) return null;
  const correctArticle = questionPool[Math.floor(Math.random() * questionPool.length)];
  const wrongArticles: Article[] = [];
  const articlesCopy = [...CONSTITUTION_ARTICLES].filter(a => a.id !== correctArticle.id);
  while (wrongArticles.length < 3 && articlesCopy.length > 0) {
    const wrongArticleIndex = Math.floor(Math.random() * articlesCopy.length);
    wrongArticles.push(articlesCopy.splice(wrongArticleIndex, 1)[0]);
  }
  const options = shuffleArray([correctArticle.title, ...wrongArticles.map(a => a.title)]);
  const explanationParts: string[] = [`**Correct:** "${correctArticle.title}" is the correct title for **${correctArticle.id}**. This article focuses on *${correctArticle.summary.split('.')[0]}*.`];
  if (wrongArticles.length > 0) {
      explanationParts.push(`\n**Incorrect Options:**`);
      wrongArticles.forEach(wa => explanationParts.push(`• **"${wa.title}"** is the title for **${wa.id}**.`));
  }
  return { article: correctArticle, options, correctAnswer: correctArticle.title, explanation: explanationParts.join('\n') };
};

const generateDetailMCQ = (questionPool: Article[]): MCQQuestion | null => {
  if (questionPool.length === 0) return null;
  const correctArticle = questionPool[Math.floor(Math.random() * questionPool.length)];
  const details: string[] = [correctArticle.summary];
  if (correctArticle.limitationsAndExceptions) details.push(correctArticle.limitationsAndExceptions);
  const selectedDetail = shuffleArray(details)[0];
  const questionText = `Which article covers the principle: "${selectedDetail.substring(0, 200)}..."?`;
  const wrongArticles: Article[] = [];
  const articlesCopy = [...CONSTITUTION_ARTICLES].filter(a => a.id !== correctArticle.id);
  while (wrongArticles.length < 3 && articlesCopy.length > 0) {
    const wrongArticleIndex = Math.floor(Math.random() * articlesCopy.length);
    wrongArticles.push(articlesCopy.splice(wrongArticleIndex, 1)[0]);
  }
  const formatOption = (article: Article) => `${article.id}: ${article.title}`;
  const options = shuffleArray([formatOption(correctArticle), ...wrongArticles.map(formatOption)]);
  const explanation = `**${correctArticle.id}** is correct. The question refers to its summary/limitation: *"${selectedDetail.split('.')[0]}."*`;
  return { questionText, article: correctArticle, options, correctAnswer: formatOption(correctArticle), explanation };
};

const Explanation: React.FC<{ text: string }> = ({ text }) => {
    const lines = text.split('\n').map((line, i) => {
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-navy dark:text-saffron">$1</strong>');
        line = line.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
        if (line.startsWith('•')) {
            line = `<span class="mr-2 text-gray-500 dark:text-gray-400">•</span>${line.substring(1)}`;
            return <p key={i} className="flex" dangerouslySetInnerHTML={{ __html: line }} />;
        }
        return <p key={i} dangerouslySetInnerHTML={{ __html: line }} />;
    });
    return <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{lines}</div>;
};

const ExamMCQMode: React.FC<{ onSelectArticle: (article: Article) => void; onBack: () => void; }> = ({ onSelectArticle, onBack }) => {
  const [isDetailMode, setIsDetailMode] = useState(false);
  const [question, setQuestion] = useState<MCQQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  const questionGenerator = useMemo(() => isDetailMode ? generateDetailMCQ : generateTitleMCQ, [isDetailMode]);

  useEffect(() => {
    setQuestion(questionGenerator(CONSTITUTION_ARTICLES));
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuestionCount(0);
  }, [isDetailMode, questionGenerator]);

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === question?.correctAnswer) setScore(score + 1);
  };

  const handleNext = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    setQuestion(questionGenerator(CONSTITUTION_ARTICLES));
    setQuestionCount(questionCount + 1);
  };
  
  const handleRestart = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    setQuestion(questionGenerator(CONSTITUTION_ARTICLES));
    setScore(0);
    setQuestionCount(0);
  };

  const getButtonClass = (option: string) => {
    const baseClasses = 'p-4 w-full rounded-lg text-left border-2 transition-all duration-300 flex items-center justify-between text-gray-800 dark:text-gray-200';
    if (!isAnswered) {
      return `${baseClasses} bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-600`;
    }
    if (option === question?.correctAnswer) {
      // Apply a pulse animation to the correct answer to make it stand out.
      return `${baseClasses} bg-green-100 dark:bg-green-900/50 border-green-500 font-semibold animate-correct-answer-pulse`;
    }
    if (option === selectedAnswer) {
      return `${baseClasses} bg-red-100 dark:bg-red-900/50 border-red-500 font-semibold`;
    }
    return `${baseClasses} bg-white dark:bg-gray-700 opacity-60 border-gray-300 dark:border-gray-600`;
  };

  const questionPrompt = useMemo(() => {
    if (!question) return '';
    if (isDetailMode) return question.questionText || '';
    return `From <span class="font-semibold text-gray-500 dark:text-gray-400">${question.article.part}</span>, which of the following is the title of <span class="font-bold text-navy dark:text-saffron">${question.article.id}</span>?`;
  }, [question, isDetailMode]);

  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900">
      <ExamHeader title="MCQ Quiz" onBack={onBack} />
      <div className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <div className="w-full max-w-3xl">
            <div className="flex items-center justify-center mb-4">
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
            <div className="flex justify-between items-center mb-6 text-sm font-medium text-gray-600 dark:text-gray-400">
                <span>Question {questionCount + 1}</span>
                <span className="font-bold text-lg text-gray-800 dark:text-gray-200">Score: {score}</span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl">
                <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: questionPrompt }}/>
                <div className="grid grid-cols-1 gap-4">
                    {question?.options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswer(option)} disabled={isAnswered} className={getButtonClass(option)}>
                        <span>{option}</span>
                        {isAnswered && (
                        <span className="w-6 h-6 flex items-center justify-center rounded-full">
                            {option === question.correctAnswer && <CheckIcon />}
                            {option === selectedAnswer && option !== question.correctAnswer && <XIcon />}
                        </span>
                        )}
                    </button>
                    ))}
                </div>
                {isAnswered && question && (
                    <div className="mt-8 text-left animate-fade-in">
                    <div className="text-center">
                        {selectedAnswer === question.correctAnswer ? <h3 className="text-xl font-bold text-green-600 dark:text-green-400">Correct!</h3> : <div><h3 className="text-xl font-bold text-red-600 dark:text-red-400">Not quite.</h3><p className="mt-2 text-gray-600 dark:text-gray-300">The correct answer for <span className="font-semibold">{question.article.id}</span> is "{question.correctAnswer}".</p></div>}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Explanation</h4>
                        <Explanation text={question.explanation} />
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => onSelectArticle(question.article)} className="w-full sm:w-auto px-6 py-3 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-bold rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">Learn More</button>
                        <button onClick={handleNext} className="w-full sm:w-auto px-6 py-3 bg-navy text-white font-bold rounded-lg shadow-md hover:bg-blue-900 transition-colors">Next Question &rarr;</button>
                    </div>
                    </div>
                )}
            </div>
            <div className="text-center mt-6">
                <button onClick={handleRestart} className="px-6 py-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Restart Quiz</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExamMCQMode;