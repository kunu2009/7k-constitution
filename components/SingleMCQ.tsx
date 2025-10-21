import React, { useState, useMemo } from 'react';
import { CONSTITUTION_ARTICLES } from '../constants/articles';
import { Article, MCQQuestion } from '../types';

const generateSingleMCQ = (correctArticle: Article): MCQQuestion | null => {
  if (!correctArticle) {
    return null;
  }
  
  const articlesCopy = [...CONSTITUTION_ARTICLES].filter(a => a.id !== correctArticle.id);
  const wrongArticles: Article[] = [];
  
  const numOptionsToGenerate = Math.min(3, articlesCopy.length);

  while (wrongArticles.length < numOptionsToGenerate && articlesCopy.length > 0) {
    const wrongArticleIndex = Math.floor(Math.random() * articlesCopy.length);
    wrongArticles.push(articlesCopy.splice(wrongArticleIndex, 1)[0]);
  }
  
  const options = [correctArticle.title, ...wrongArticles.map(a => a.title)];

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  
  const explanationParts: string[] = [];
  explanationParts.push(`**Correct:** "${correctArticle.title}" is the correct title for **${correctArticle.id}**. This article focuses on *${correctArticle.summary.split('.')[0]}*.`);
  
  if (wrongArticles.length > 0) {
      explanationParts.push(`\n**Incorrect Options:**`);
      wrongArticles.forEach(wa => {
          explanationParts.push(`• **"${wa.title}"** is the title for **${wa.id}**.`);
      });
  }
  const explanation = explanationParts.join('\n');

  return {
    article: correctArticle,
    options,
    correctAnswer: correctArticle.title,
    explanation,
  };
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
    return <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{lines}</div>;
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
    <div className="w-full bg-gray-50 dark:bg-gray-800/60 p-4 rounded-lg shadow-sm h-full flex flex-col">
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
        <div className="mt-4 text-center flex-grow flex flex-col">
            <div className="flex-grow">
              {isCorrect ? (
                  <p className="font-semibold text-green-600 dark:text-green-400">Correct!</p>
              ) : (
                  <p className="font-semibold text-red-600 dark:text-red-400">Not quite.</p>
              )}
              <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600 text-left">
                  <Explanation text={question.explanation} />
              </div>
            </div>
            <button onClick={handleTryAgain} className="mt-2 w-full px-4 py-2 bg-navy text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-900 transition-colors">
                Try Again
            </button>
        </div>
      )}
    </div>
  );
};

export default SingleMCQ;
