import React, { useState, useMemo, useEffect } from 'react';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

const levenshteinDistance = (s1: string, s2: string): number => {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) {
      costs[s2.length] = lastValue;
    }
  }
  return costs[s2.length];
};


const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, articles, onSelectArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  const articlesWithSearchableWords = useMemo(() => {
    return articles.map(article => {
      const searchableWords = new Set([
        ...article.id.toLowerCase().split(/\s+/),
        ...article.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/),
        ...article.tags.map(t => t.toLowerCase())
      ].filter(Boolean));
      return { article, searchableWords: Array.from(searchableWords) };
    });
  }, [articles]);

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return [];
    }

    const queryTokens = query.split(/\s+/).filter(Boolean);

    const results = articlesWithSearchableWords.map(({ article, searchableWords }) => {
      let score = 0;
      let matches = 0;

      for (const token of queryTokens) {
        let bestMatchScore = Infinity;
        let tokenMatched = false;

        for (const word of searchableWords) {
          if (word.includes(token)) {
            bestMatchScore = 0; // Exact/substring match is high priority
            tokenMatched = true;
            break;
          }
          const dist = levenshteinDistance(token, word);
          const maxDist = token.length <= 4 ? 0 : 1; // Allow 1 typo for longer words
          if (dist <= maxDist) {
            tokenMatched = true;
            bestMatchScore = Math.min(bestMatchScore, dist);
          }
        }
        
        if (tokenMatched) {
          matches++;
          score += bestMatchScore;
        }
      }
      
      // All tokens must match for an article to be included in results
      if (matches === queryTokens.length) {
        return { article, score };
      }
      return null;
    }).filter((r): r is { article: Article, score: number } => r !== null);
    
    // Sort by score (lower is better), then by article ID
    return results
      .sort((a, b) => {
        if (a.score !== b.score) {
          return a.score - b.score;
        }
        return a.article.id.localeCompare(b.article.id, undefined, { numeric: true });
      })
      .map(r => r.article);

  }, [searchQuery, articlesWithSearchableWords]);

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
            placeholder="Search by ID, Title, or Tag (e.g. 'Article 14 equality')"
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