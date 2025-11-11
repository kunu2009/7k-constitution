import React, { useState, useMemo, useEffect } from 'react';
import { Article } from '../../types';
import ExamHeader from '../exam/ExamHeader';

const FillBlanksMode: React.FC<{ articles: Article[] }> = ({ articles }) => {
  const [question, setQuestion] = useState<{ article: Article; question: string; answer: string } | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questionPool = useMemo(() => {
    return articles
      .filter(a => a.fillInTheBlanks && a.fillInTheBlanks.length > 0)
      .flatMap(a => a.fillInTheBlanks!.map(q => ({ ...q, article: a })));
  }, [articles]);

  const generateNewQuestion = () => {
    if (questionPool.length === 0) {
      setQuestion(null);
      return;
    }
    const newQ = questionPool[Math.floor(Math.random() * questionPool.length)];
    setQuestion(newQ);
    setUserAnswer('');
    setIsAnswered(false);
    setIsCorrect(false);
  };

  useEffect(() => {
    generateNewQuestion();
  }, [articles]); // Regenerate if filter changes

  const handleCheckAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question || isAnswered) return;

    const correct = userAnswer.trim().toLowerCase() === question.answer.toLowerCase();
    setIsCorrect(correct);
    setIsAnswered(true);
  };

  if (!question) {
    return (
      <div className="flex flex-col h-full">
        <ExamHeader title="Fill in the Blanks" onBack={() => window.history.back()} />
        <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No Questions Found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">There are no "fill in the blank" questions for the current filter. Try selecting 'All' parts and tags.</p>
        </div>
      </div>
    );
  }

  const questionTextParts = question.question.split('____');

  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900">
        <ExamHeader title="Fill in the Blanks" onBack={() => window.history.back()} />
        <div className="flex-grow flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center">
                <p className="text-sm font-semibold text-saffron uppercase tracking-wider mb-2">{question.article.id}: {question.article.title}</p>
                <div className="text-xl md:text-2xl font-serif text-gray-700 dark:text-gray-300 leading-relaxed my-6">
                    "{questionTextParts[0]}
                    <form onSubmit={handleCheckAnswer} className="inline-block mx-2">
                        <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            disabled={isAnswered}
                            className={`w-32 text-center text-xl md:text-2xl font-bold bg-transparent border-b-2 transition-colors pb-1 ${
                                isAnswered 
                                    ? (isCorrect ? 'border-green-500 text-green-600 dark:text-green-400' : 'border-red-500 text-red-600 dark:text-red-400')
                                    : 'border-gray-400 dark:border-gray-500 focus:border-navy dark:focus:border-saffron text-navy dark:text-saffron'
                            } outline-none`}
                            aria-label="Your answer"
                        />
                    </form>
                    {questionTextParts[1]}"
                </div>

                {!isAnswered ? (
                    <button onClick={handleCheckAnswer} className="px-8 py-3 bg-navy text-white font-bold rounded-lg shadow-md hover:bg-blue-900 transition-colors">
                        Check Answer
                    </button>
                ) : (
                    <div className="animate-fade-in">
                        {isCorrect ? (
                            <p className="text-lg font-bold text-green-600 dark:text-green-400">Correct! Well done.</p>
                        ) : (
                            <p className="text-lg font-bold text-red-600 dark:text-red-400">Not quite. The correct answer is "{question.answer}".</p>
                        )}
                        <button onClick={generateNewQuestion} className="mt-4 px-8 py-3 bg-saffron text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition-colors">
                            Next Question &rarr;
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default FillBlanksMode;
