import React, { useState, useMemo, useEffect } from 'react';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, articles, onSelectArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  const filteredArticles = useMemo(() => {
    if (!searchQuery) {
      return [];
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    return articles.filter(
      article =>
        article.id.toLowerCase().includes(lowercasedQuery) ||
        article.title.toLowerCase().includes(lowercasedQuery)
    );
  }, [searchQuery, articles]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-start pt-20"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <input
            type="text"
            placeholder="Search by Article ID or Title..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            autoFocus
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-md border-transparent focus:ring-2 focus:ring-navy focus:border-transparent text-gray-900 dark:text-gray-100"
          />
        </div>
        <div className="overflow-y-auto max-h-[60vh]">
          {filteredArticles.length > 0 ? (
            <ul>
              {filteredArticles.map(article => (
                <li key={article.id}>
                  <button
                    onClick={() => onSelectArticle(article)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-bold text-navy dark:text-saffron">{article.id}:</span>
                    <span className="ml-2 text-gray-800 dark:text-gray-200">{article.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            searchQuery && (
              <p className="p-8 text-center text-gray-500 dark:text-gray-400">
                No articles found for "{searchQuery}".
              </p>
            )
          )}
           {!searchQuery && (
              <p className="p-8 text-center text-gray-500 dark:text-gray-400">
                Start typing to find an article.
              </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;