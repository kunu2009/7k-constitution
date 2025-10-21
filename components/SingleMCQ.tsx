import React, { useState, useMemo } from 'react';
import { CONSTITUTION_ARTICLES } from '../constants/articles';
import { Article, MCQQuestion } from '../types';

const generateSingleMCQ = (correctArticle: Article): MCQQuestion | null => {
  if (!correctArticle) {
    return null;
  }
  
  // Wrong answers can be from the whole constitution to ensure variety
  const articlesCopy = [...CONSTITUTION_ARTICLES].filter(a => a.id !== correctArticle.id);
  
  const options = [correctArticle.title];
  
  // Ensure we have enough articles to generate 3 other options
  const numOptionsToGenerate = Math.min(3, articlesCopy.length);

  while (options.length < (numOptionsToGenerate + 1) && articlesCopy.length > 0) {
    const wrongArticleIndex = Math.floor(Math.random() * articlesCopy.length);
    const wrongArticle = articlesCopy.splice(wrongArticleIndex, 1)[0];
    options.push(wrongArticle.title);
  }

  // Shuffle options
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  
  return {
    article: correctArticle,
    options,
    correctAnswer: correctArticle.title,
  };
};

const SingleMCQ: React.FC<{ article: Article }> = ({ article }) => {
  const [question, setQuestion] = useState<MCQQuestion | null>(() => generateSingleMCQ(article));
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === question?.correctAnswer) {
      setIsCorrect(true);
    } else {
        setIsCorrect(false);
    }
  };

  const handleTryAgain = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setQuestion(generateSingleMCQ(article)); // Regenerate to shuffle options
  };

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600';
    }
    if (option === question?.correctAnswer) {
      return 'bg-green-200 dark:bg-green-800 border-green-500';
    }
    if (option === selectedAnswer) {
      return 'bg-red-200 dark:bg-red-800 border-red-500';
    }
    return 'bg-white dark:bg-gray-700 opacity-60';
  };

  if (!question) {
    return <p>Could not load quiz.</p>;
  }

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-800/60 p-4 rounded-lg shadow-sm h-full">
      <h2 className="text-base font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">
        Which of the following is the title of <span className="font-bold text-navy dark:text-saffron">{question.article.id}</span>?
      </h2>
      
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={isAnswered}
            className={`p-3 rounded-lg text-sm text-left text-gray-800 dark:text-gray-200 border-2 border-transparent transition-all duration-300 ${getButtonClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="mt-4 text-center">
            {isCorrect ? (
                 <p className="font-semibold text-green-600 dark:text-green-400">Correct!</p>
            ) : (
                <p className="font-semibold text-red-600 dark:text-red-400">Not quite. Try again!</p>
            )}
            <button onClick={handleTryAgain} className="mt-2 px-4 py-1 bg-navy text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-900 transition-colors">
                Try Again
            </button>
        </div>
      )}
    </div>
  );
};

export default SingleMCQ;
