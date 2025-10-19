import React, { useState } from 'react';
import { LearningMode, Article } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FlashcardMode from './components/FlashcardMode';
import MCQMode from './components/MCQMode';
import ReelsMode from './components/ReelsMode';
import ArticleDetailView from './components/ArticleDetailView';
import { useUserData } from './hooks/useUserData';

const App: React.FC = () => {
  const [mode, setMode] = useState<LearningMode>(LearningMode.Home);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const { userData, toggleFavorite, updateNotes } = useUserData();

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseDetailView = () => {
    setSelectedArticle(null);
  };

  const renderContent = () => {
    switch (mode) {
      case LearningMode.Flashcards:
        return <FlashcardMode onSelectArticle={handleSelectArticle} />;
      case LearningMode.MCQ:
        return <MCQMode onSelectArticle={handleSelectArticle} />;
      case LearningMode.Reels:
        return <ReelsMode onSelectArticle={handleSelectArticle} />;
      case LearningMode.Home:
      default:
        return <Home onStart={() => setMode(LearningMode.Flashcards)} />;
    }
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      {!selectedArticle && (
        <header className="w-full bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between z-10">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-saffron via-navy to-green">
            7k Constitution
          </h1>
          <Navbar activeMode={mode} setMode={setMode} />
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
          renderContent()
        )}
      </main>
    </div>
  );
};

export default App;
