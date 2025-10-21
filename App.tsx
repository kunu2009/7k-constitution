import React, { useState, useMemo } from 'react';
import { LearningMode, Article } from './types';
import Navigation from './components/Navigation';
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
import { SearchIcon, AppLogo } from './constants/icons';

const App: React.FC = () => {
  const [mode, setMode] = useState<LearningMode>(LearningMode.Home);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const { userData, toggleFavorite, updateNotes } = useUserData();
  const [activePartFilter, setActivePartFilter] = useState<string>('All');
  const [activeTagFilter, setActiveTagFilter] = useState<string>('All');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const allParts = useMemo(() => {
    const parts = new Set(CONSTITUTION_ARTICLES.map(a => a.part));
    return ['All', ...Array.from(parts)];
  }, []);
  
  const allTags = useMemo(() => {
    const tags = new Set(CONSTITUTION_ARTICLES.flatMap(a => a.tags));
    return ['All', ...Array.from(tags).sort()];
  }, []);

  const filteredArticles = useMemo(() => {
    return CONSTITUTION_ARTICLES.filter(a => 
      (activePartFilter === 'All' || a.part === activePartFilter) &&
      (activeTagFilter === 'All' || a.tags.includes(activeTagFilter))
    );
  }, [activePartFilter, activeTagFilter]);

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
  const isImmersiveMode = mode === LearningMode.Reels;

  const renderContent = () => {
    switch (mode) {
      case LearningMode.Flashcards:
        return <FlashcardMode articles={filteredArticles} onSelectArticle={handleSelectArticle} />;
      case LearningMode.MCQ:
        return <MCQMode articles={filteredArticles} onSelectArticle={handleSelectArticle} />;
      case LearningMode.Reels:
        return <ReelsMode onSelectArticle={handleSelectArticle} />;
      case LearningMode.Progress:
        return <ProgressView userData={userData} totalArticles={CONSTITUTION_ARTICLES.length} setMode={handleSetMode} />;
      case LearningMode.Home:
      default:
        return <Home setMode={setMode} onSelectArticle={handleSelectArticle} userData={userData} totalArticles={CONSTITUTION_ARTICLES.length} />;
    }
  };
  
  const handleSetMode = (newMode: LearningMode) => {
    setActivePartFilter('All');
    setActiveTagFilter('All');
    setMode(newMode);
  };

  return (
    <div className={`flex h-screen font-sans bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 ${isImmersiveMode ? 'h-screen' : ''}`}>
      <div className="flex-1 flex flex-col overflow-hidden">
        {!selectedArticle && !isImmersiveMode && (
          <header className="w-full bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between z-10 flex-shrink-0">
            <div className="flex items-center space-x-2">
              <AppLogo />
              <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-saffron via-gray-500 to-green dark:via-gray-400">
                7k Constitution
              </h1>
            </div>
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Search for an article"
            >
              <SearchIcon />
            </button>
          </header>
        )}
        <main className={`flex-grow overflow-hidden ${isImmersiveMode ? 'h-full' : ''}`}>
          {selectedArticle ? (
            <ArticleDetailView
              article={selectedArticle}
              userData={userData[selectedArticle.id]}
              onClose={handleCloseDetailView}
              onToggleFavorite={() => toggleFavorite(selectedArticle.id)}
              onUpdateNotes={(notes) => updateNotes(selectedArticle.id, notes)}
            />
          ) : (
            <div className={`h-full flex flex-col ${isImmersiveMode ? 'h-screen' : ''}`}>
              {showFilterBar && (
                <FilterBar
                  parts={allParts}
                  activePart={activePartFilter}
                  onPartFilterChange={setActivePartFilter}
                  tags={allTags}
                  activeTag={activeTagFilter}
                  onTagFilterChange={setActiveTagFilter}
                />
              )}
              <div className="flex-grow overflow-y-auto pb-16 md:pb-0">
                {renderContent()}
              </div>
            </div>
          )}
        </main>
      </div>

      {!selectedArticle && !isImmersiveMode && <Navigation activeMode={mode} setMode={handleSetMode} />}
      
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
