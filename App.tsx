import React, { useState, useMemo } from 'react';
import { LearningMode, Article } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FlashcardMode from './components/FlashcardMode';
import MCQMode from './components/MCQMode';
import ReelsMode from './components/ReelsMode';
import ArticleDetailView from './components/ArticleDetailView';
import ProgressView from './components/ProgressView';
import SearchModal from './components/SearchModal';
import { useUserData } from './hooks/useUserData';
import { CONSTITUTION_ARTICLES } from './constants/articles';
import FilterBar from './components/FilterBar';
import { SearchIcon } from './constants/icons';

const App: React.FC = () => {
  const [mode, setMode] = useState<LearningMode>(LearningMode.Home);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const { userData, toggleFavorite, updateNotes } = useUserData();
  const [activePartFilter, setActivePartFilter] = useState<string>('All');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const allParts = useMemo(() => {
    const parts = new Set(CONSTITUTION_ARTICLES.map(a => a.part));
    return ['All', ...Array.from(parts)];
  }, []);

  const filteredArticles = useMemo(() => {
    if (activePartFilter === 'All' || !activePartFilter) {
      return CONSTITUTION_ARTICLES;
    }
    return CONSTITUTION_ARTICLES.filter(a => a.part === activePartFilter);
  }, [activePartFilter]);

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseDetailView = () => {
    setSelectedArticle(null);
  };

  const handleSelectArticleFromSearch = (article: Article) => {
    handleSelectArticle(article);
    setIsSearchModalOpen(false);
  };

  const showFilterBar = mode === LearningMode.Flashcards || mode === LearningMode.MCQ;

  const renderContent = () => {
    switch (mode) {
      case LearningMode.Flashcards:
        return <FlashcardMode articles={filteredArticles} onSelectArticle={handleSelectArticle} />;
      case LearningMode.MCQ:
        return <MCQMode articles={filteredArticles} onSelectArticle={handleSelectArticle} />;
      case LearningMode.Reels:
        return <ReelsMode onSelectArticle={handleSelectArticle} />;
      case LearningMode.Progress:
        return <ProgressView userData={userData} totalArticles={CONSTITUTION_ARTICLES.length} />;
      case LearningMode.Home:
      default:
        return <Home onStart={() => setMode(LearningMode.Flashcards)} />;
    }
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      {!selectedArticle && (
        <header className="w-full bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between z-10 flex-shrink-0">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-saffron via-navy to-green">
              7k Constitution
            </h1>
             <button
              onClick={() => setIsSearchModalOpen(true)}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Search for an article"
            >
              <SearchIcon />
            </button>
          </div>
          <Navbar activeMode={mode} setMode={(newMode) => {
            setActivePartFilter('All');
            setMode(newMode);
          }} />
        </header>
      )}
      <main className="flex-grow overflow-hidden">
        {selectedArticle ? (
          <ArticleDetailView
            article={selectedArticle}
            userData={userData[selectedArticle.id]}
            onClose={handleCloseDetailView}
            onToggleFavorite={() => toggleFavorite(selectedArticle.id)}
            onUpdateNotes={(notes) => updateNotes(selectedArticle.id, notes)}
          />
        ) : (
          <div className="h-full flex flex-col">
            {showFilterBar && (
              <FilterBar
                parts={allParts}
                activePart={activePartFilter}
                onFilterChange={setActivePartFilter}
              />
            )}
            <div className="flex-grow overflow-y-auto">
              {renderContent()}
            </div>
          </div>
        )}
      </main>
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        articles={CONSTITUTION_ARTICLES}
        onSelectArticle={handleSelectArticleFromSearch}
      />
    </div>
  );
};

export default App;