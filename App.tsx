import React, { useState, useMemo, useEffect } from 'react';
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
import { SearchIcon, AppLogo, InstallIcon, FilterIcon } from './constants/icons';
import ArticleListView from './components/ArticleListView';
import SplashScreen from './components/SplashScreen';
import ExamDashboard from './components/ExamDashboard';
import GamesDashboard from './components/GamesDashboard';
import ExploreDashboard from './components/ExploreDashboard';
import FillBlanksMode from './components/games/FillBlanksMode';
import MatchMode from './components/games/MatchMode';
import MindMapMode from './components/explore/MindMapMode';
import TimelineMode from './components/explore/TimelineMode';

const App: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isSplashFading, setIsSplashFading] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<Event | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
        e.preventDefault();
        setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsSplashFading(true);
    }, 2000); // Start fading after 2 seconds

    const unmountTimer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2500); // Remove from DOM after 0.5s fade

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);
  
  const [mode, setMode] = useState<LearningMode>(() => {
    const params = new URLSearchParams(window.location.search);
    const modeFromURL = params.get('mode')?.toUpperCase();
    if (modeFromURL && Object.values(LearningMode).includes(modeFromURL as LearningMode)) {
        return modeFromURL as LearningMode;
    }
    return LearningMode.Home;
  });
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const { userData, toggleFavorite, updateNotes } = useUserData();
  const [activePartFilter, setActivePartFilter] = useState<string>('All');
  const [activeTagFilter, setActiveTagFilter] = useState<string>('All');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isDetailMode, setIsDetailMode] = useState(false);
  const [isFilterBarVisible, setIsFilterBarVisible] = useState(true);


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

  const partCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    const articlesToCount = CONSTITUTION_ARTICLES.filter(a => 
      activeTagFilter === 'All' || a.tags.includes(activeTagFilter)
    );
    
    allParts.forEach(part => {
      if (part === 'All') {
        counts[part] = articlesToCount.length;
      } else {
        counts[part] = articlesToCount.filter(a => a.part === part).length;
      }
    });
    return counts;
  }, [activeTagFilter, allParts]);

  const tagCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    const articlesToCount = CONSTITUTION_ARTICLES.filter(a =>
      activePartFilter === 'All' || a.part === activePartFilter
    );

    allTags.forEach(tag => {
      if (tag === 'All') {
        counts[tag] = articlesToCount.length;
      } else {
        counts[tag] = articlesToCount.filter(a => a.tags.includes(tag)).length;
      }
    });
    return counts;
  }, [activePartFilter, allTags]);

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
  
  const handleInstallClick = () => {
    if (!installPrompt) return;
    (installPrompt as any).prompt();
    (installPrompt as any).userChoice.then((choiceResult: { outcome: 'accepted' | 'dismissed' }) => {
        if (choiceResult.outcome === 'dismissed') {
            console.log('User dismissed the install prompt');
        }
        setInstallPrompt(null);
    });
  };

  const showFilterBar = [
    LearningMode.Flashcards, 
    LearningMode.MCQ, 
    LearningMode.List, 
    LearningMode.Reels,
    LearningMode.MindMap,
    LearningMode.FillBlanks,
    LearningMode.Match
  ].includes(mode);
  
  const handleSetMode = (newMode: LearningMode) => {
    setActivePartFilter('All');
    setActiveTagFilter('All');
    setMode(newMode);
  };

  const renderContent = () => {
    switch (mode) {
      case LearningMode.Exam:
        return <ExamDashboard setMode={setMode} onSelectArticle={handleSelectArticle} />;
      case LearningMode.Flashcards:
        return <FlashcardMode articles={filteredArticles} onSelectArticle={handleSelectArticle} isDetailMode={isDetailMode} />;
      case LearningMode.MCQ:
        return <MCQMode articles={filteredArticles} onSelectArticle={handleSelectArticle} isDetailMode={isDetailMode} />;
      case LearningMode.List:
        return <ArticleListView articles={filteredArticles} onSelectArticle={handleSelectArticle} />;
      case LearningMode.Reels:
        return <ReelsMode articles={filteredArticles} onSelectArticle={handleSelectArticle} isDetailMode={isDetailMode} setMode={handleSetMode} />;
      case LearningMode.Progress:
        return <ProgressView userData={userData} totalArticles={CONSTITUTION_ARTICLES.length} setMode={handleSetMode} />;
      case LearningMode.Games:
        return <GamesDashboard setMode={setMode} />;
      case LearningMode.Explore:
        return <ExploreDashboard setMode={setMode} />;
      case LearningMode.FillBlanks:
        return <FillBlanksMode articles={filteredArticles} onBack={() => handleSetMode(LearningMode.Games)} />;
      case LearningMode.Match:
        return <MatchMode articles={filteredArticles} />;
      case LearningMode.MindMap:
        return <MindMapMode articles={filteredArticles} onSelectArticle={handleSelectArticle} />;
      case LearningMode.Timeline:
        return <TimelineMode onSelectArticle={handleSelectArticle} />;
      case LearningMode.Home:
      default:
        return <Home setMode={setMode} onSelectArticle={handleSelectArticle} userData={userData} totalArticles={CONSTITUTION_ARTICLES.length} />;
    }
  };

  const mainHeaderVisible = !selectedArticle && ![
    LearningMode.Reels, 
    LearningMode.Exam,
    LearningMode.Timeline,
    LearningMode.MindMap,
    LearningMode.FillBlanks,
    LearningMode.Match,
  ].includes(mode);

  return (
    <>
      {isSplashVisible && <SplashScreen isFading={isSplashFading} />}
      <div className={`flex h-screen font-sans bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 ${isSplashVisible ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <div className="flex-1 flex flex-col overflow-hidden">
          {mainHeaderVisible && (
            <header className="w-full bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between z-10 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <AppLogo />
                <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-saffron via-gray-500 to-green dark:via-gray-400">
                  7k Constitution
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                 {installPrompt && (
                    <button
                        onClick={handleInstallClick}
                        className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2 bg-blue-100 dark:bg-blue-900"
                        aria-label="Install App"
                        title="Install App"
                    >
                        <InstallIcon />
                        <span className="hidden sm:inline text-sm font-medium text-navy dark:text-white pr-2">Install</span>
                    </button>
                )}
                 {showFilterBar && (
                  <button
                    onClick={() => setIsFilterBarVisible(!isFilterBarVisible)}
                    className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle filters"
                    title="Toggle filters"
                  >
                    <FilterIcon />
                  </button>
                )}
                <button
                  onClick={() => setIsSearchModalOpen(true)}
                  className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Search for an article"
                >
                  <SearchIcon />
                </button>
              </div>
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
                {showFilterBar && mode !== LearningMode.Exam && (
                   <div className={`transition-all duration-300 ease-in-out ${isFilterBarVisible ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <FilterBar
                      parts={allParts}
                      activePart={activePartFilter}
                      onPartFilterChange={setActivePartFilter}
                      tags={allTags}
                      activeTag={activeTagFilter}
                      onTagFilterChange={setActiveTagFilter}
                      isDetailMode={isDetailMode}
                      onDetailModeChange={setIsDetailMode}
                      partCounts={partCounts}
                      tagCounts={tagCounts}
                    />
                  </div>
                )}
                <div className="flex-grow overflow-y-auto pb-20 md:pb-0">
                  {renderContent()}
                </div>
              </div>
            )}
          </main>
        </div>

        {!selectedArticle && mode !== LearningMode.Reels && <Navigation activeMode={mode} setMode={handleSetMode} />}
        
        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={() => setIsSearchModalOpen(false)}
          articles={CONSTITUTION_ARTICLES}
          onSelectArticle={handleSelectArticleFromSearch}
        />
      </div>
    </>
  );
};

export default App;