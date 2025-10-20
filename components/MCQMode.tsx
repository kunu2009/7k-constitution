import React, { useState, useEffect } from 'react';
import { CONSTITUTION_ARTICLES } from '../constants/articles';
import { Article, MCQQuestion } from '../types';

const generateMCQ = (): MCQQuestion => {
  const articlesCopy = [...CONSTITUTION_ARTICLES];
  
  const correctArticleIndex = Math.floor(Math.random() * articlesCopy.length);
  const correctArticle = articlesCopy.splice(correctArticleIndex, 1)[0];
  
  const options = [correctArticle.title];
  
  while (options.length < 4 && articlesCopy.length > 0) {
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

const MCQMode: React.FC<{ onSelectArticle: (article: Article) => void }> = ({ onSelectArticle }) => {
  const [question, setQuestion] = useState<MCQQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  useEffect(() => {
    setQuestion(generateMCQ());
  }, []);

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === question?.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    setQuestion(generateMCQ());
    setQuestionCount(questionCount + 1);
  };
  
  const handleRestart = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    setQuestion(generateMCQ());
    setScore(0);
    setQuestionCount(0);
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
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-semibold text-saffron">{question.article.part}</p>
            <p className="font-bold text-lg text-gray-700 dark:text-gray-300">Score: {score} / {questionCount}</p>
        </div>

        <h2 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
          Which of the following is the title of <span className="font-bold text-navy dark:text-saffron">{question.article.id}</span>?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={isAnswered}
              className={`p-4 rounded-lg text-left text-gray-800 dark:text-gray-200 border-2 border-transparent transition-all duration-300 ${getButtonClass(option)}`}
            >
              {option}
            </button>
          ))}
        </div>

        {isAnswered && (
          <div className="mt-6">
            <div className="bg-green-50 dark:bg-gray-700/50 p-4 rounded-lg border-l-4 border-green-500 text-left mb-6 transition-opacity duration-500">
              <h4 className="font-bold text-green-800 dark:text-green-300">
                {selectedAnswer === question.correctAnswer ? "Correct!" : "Explanation"}
              </h4>
              <p className="mt-1 text-gray-800 dark:text-gray-200">
                <span className="font-semibold">{question.article.id}</span> is about "{question.correctAnswer}".
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {question.article.summary}
              </p>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => onSelectArticle(question.article)} 
                  className="px-8 py-3 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-bold rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                >
                  View Article Details
                </button>
                <button onClick={handleNext} className="px-8 py-3 bg-navy text-white font-bold rounded-lg shadow-md hover:bg-blue-900 transition-colors">
                  Next Question
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
       <button onClick={handleRestart} className="mt-6 px-6 py-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
          Restart Quiz
        </button>
    </div>
  );
};

export default MCQMode;