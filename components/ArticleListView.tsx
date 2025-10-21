import React from 'react';
import { Article } from '../types';

const ArticleCard: React.FC<{ article: Article; onSelect: () => void }> = ({ article, onSelect }) => {
  // Extract the first sentence for a brief summary.
  const briefSummary = article.summary.split('.')[0] + '.';

  return (
    <button
      onClick={onSelect}
      className="w-full text-left bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col h-full"
    >
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-navy dark:text-saffron pr-4">{article.id}: {article.title}</h3>
        {/* Display the truncated first sentence of the summary below the title for a quick preview. */}
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 truncate" title={briefSummary}>
          {briefSummary}
        </p>
      </div>
      <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wider mt-4">{article.part}</p>
    </button>
  );
};

const ArticleListView: React.FC<{ articles: Article[]; onSelectArticle: (article: Article) => void }> = ({ articles, onSelectArticle }) => {
  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No Articles Found</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Please change your filter to see more articles.</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} onSelect={() => onSelectArticle(article)} />
        ))}
      </div>
    </div>
  );
};

export default ArticleListView;