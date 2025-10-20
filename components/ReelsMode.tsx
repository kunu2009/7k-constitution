import React from 'react';
import { CONSTITUTION_ARTICLES } from '../constants/articles';
import { Article } from '../types';
import { InfoIcon } from '../constants/icons';

const ReelCard: React.FC<{ article: Article; color: string; onSelectArticle: (article: Article) => void }> = ({ article, color, onSelectArticle }) => {
  return (
    <div className={`h-screen w-full flex-shrink-0 snap-center flex flex-col justify-center items-center p-8 text-white ${color}`}>
      <div className="w-full max-w-md bg-black bg-opacity-30 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
        <span className="text-sm font-bold uppercase tracking-widest opacity-80">{article.part}</span>
        <h2 className="text-4xl font-extrabold my-3">{article.id}</h2>
        <h3 className="text-2xl font-semibold mb-4 opacity-90">{article.title}</h3>
        <p className="text-lg leading-relaxed">{article.summary}</p>
        <button 
            onClick={() => onSelectArticle(article)}
            className="mt-6 w-full flex items-center justify-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
            <InfoIcon />
            <span>Explore Article</span>
        </button>
      </div>
    </div>
  );
};

const ReelsMode: React.FC<{ onSelectArticle: (article: Article) => void }> = ({ onSelectArticle }) => {
    const colors = [
        'bg-gradient-to-br from-blue-500 to-indigo-700',
        'bg-gradient-to-br from-purple-500 to-pink-700',
        'bg-gradient-to-br from-green-500 to-teal-700',
        'bg-gradient-to-br from-orange-500 to-red-700',
        'bg-gradient-to-br from-cyan-500 to-light-blue-700',
    ];
    
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      {CONSTITUTION_ARTICLES.map((article, index) => (
        <ReelCard 
          key={article.id} 
          article={article} 
          color={colors[index % colors.length]}
          onSelectArticle={onSelectArticle}
        />
      ))}
    </div>
  );
};

export default ReelsMode;
