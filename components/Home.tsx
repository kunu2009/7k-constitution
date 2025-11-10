import React, { useMemo } from 'react';
import { Article, LearningMode, UserData } from '../types';
import { CONSTITUTION_ARTICLES } from '../constants/articles';
import { CardIcon, QuestionIcon, ReelsIcon, ProgressIcon } from '../constants/icons';

interface HomeProps {
  setMode: (mode: LearningMode) => void;
  onSelectArticle: (article: Article) => void;
  userData: UserData;
  totalArticles: number;
}

const getArticleOfTheDay = () => {
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    return CONSTITUTION_ARTICLES[dayOfYear % CONSTITUTION_ARTICLES.length];
};

const Home: React.FC<HomeProps> = ({ setMode, onSelectArticle, userData, totalArticles }) => {
  const articleOfTheDay = useMemo(() => getArticleOfTheDay(), []);
  const briefSummaryOfTheDay = articleOfTheDay.summary.split('.')[0] + '.';

  const studiedCount = useMemo(() => {
      // FIX: Switched from Object.values to Object.keys for type safety.
      // `Object.values` was inferring the array item type as 'unknown', causing a type error.
      // Iterating by keys allows for safe access to `userData[id]`, which is correctly typed.
      return Object.keys(userData).filter(id => userData[id].isFavorite || userData[id].notes.trim() !== '').length;
  }, [userData]);
  
  const studiedPercentage = totalArticles > 0 ? Math.round((studiedCount / totalArticles) * 100) : 0;

  return (
    <div className="flex flex-col h-full p-4 sm:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome Back!
        </h1>
        
        {/* Article of the Day */}
        <div className="mb-8 bg-gradient-to-r from-navy to-blue-900 p-6 rounded-2xl shadow-lg text-white">
            <h2 className="text-sm font-bold uppercase tracking-wider text-saffron mb-2">Article of the Day</h2>
            <h3 className="text-2xl font-bold">{articleOfTheDay.id}: {articleOfTheDay.title}</h3>
            <p className="mt-2 text-blue-200 leading-relaxed truncate" title={briefSummaryOfTheDay}>{briefSummaryOfTheDay}</p>
            <button 
                onClick={() => onSelectArticle(articleOfTheDay)}
                className="mt-4 px-4 py-2 bg-white text-navy font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-colors"
            >
                Read More
            </button>
        </div>

        {/* Practice Modes */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Start Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <QuickStartCard 
                    title="Flashcards" 
                    description="Quick revision" 
                    icon={<CardIcon />} 
                    color="text-blue-500"
                    onClick={() => setMode(LearningMode.Flashcards)} />
                <QuickStartCard 
                    title="MCQ Quiz" 
                    description="Test yourself" 
                    icon={<QuestionIcon />} 
                    color="text-green-500"
                    onClick={() => setMode(LearningMode.MCQ)} />
                <QuickStartCard 
                    title="Reels" 
                    description="Bite-sized summaries" 
                    icon={<ReelsIcon />} 
                    color="text-purple-500"
                    onClick={() => setMode(LearningMode.Reels)} />
            </div>
        </div>

        {/* Progress Snapshot */}
        <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Your Progress</h2>
            <div 
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setMode(LearningMode.Progress)}
            >
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">Articles Studied</h3>
                    <span className="font-bold text-navy dark:text-saffron">{studiedPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full" style={{ width: `${studiedPercentage}%` }}></div>
                </div>
                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-right">
                    {studiedCount} of {totalArticles} articles
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

const QuickStartCard: React.FC<{ title: string; description: string; icon: React.ReactNode; color: string; onClick: () => void; }> = ({ title, description, icon, color, onClick }) => (
    <button 
        onClick={onClick}
        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-left flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300 w-full"
    >
        <div className={`text-3xl ${color} [&>svg]:h-8 [&>svg]:w-8`}>
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
    </button>
);


export default Home;