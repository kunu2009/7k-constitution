import React, { useState } from 'react';
import { Article, LearningMode } from '../types';
import { CardIcon, QuestionIcon, ReelsIcon } from '../constants/icons';
import ExamFlashcardMode from './exam/ExamFlashcardMode';
import ExamMCQMode from './exam/ExamMCQMode';
import ExamReelsMode from './exam/ExamReelsMode';

type ExamPracticeMode = 'dashboard' | 'flashcards' | 'mcq' | 'reels';

interface ExamDashboardProps {
  setMode: (mode: LearningMode) => void;
  onSelectArticle: (article: Article) => void;
}

const ExamDashboard: React.FC<ExamDashboardProps> = ({ setMode, onSelectArticle }) => {
  const [practiceMode, setPracticeMode] = useState<ExamPracticeMode>('dashboard');

  const handleBackToDashboard = () => {
    setPracticeMode('dashboard');
  };

  if (practiceMode === 'flashcards') {
    return <ExamFlashcardMode onBack={handleBackToDashboard} onSelectArticle={onSelectArticle} />;
  }

  if (practiceMode === 'mcq') {
    return <ExamMCQMode onBack={handleBackToDashboard} onSelectArticle={onSelectArticle} />;
  }

  if (practiceMode === 'reels') {
    return <ExamReelsMode onBack={handleBackToDashboard} onSelectArticle={onSelectArticle} />;
  }
  
  return (
    <div className="flex flex-col h-full p-4 sm:p-6 lg:p-8 bg-light-background dark:bg-gray-900 overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-white mb-6">
          Exam Dashboard
        </h1>
        
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-light-text dark:text-white mb-4">Practice Modes</h2>
            <p className="text-light-text-secondary dark:text-gray-400 mb-6">These modes cover all articles for comprehensive preparation and are separate from the filtered practice in other sections.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <QuickStartCard 
                    title="Flashcards" 
                    description="Comprehensive review" 
                    icon={<CardIcon />} 
                    color="text-blue-500"
                    onClick={() => setPracticeMode('flashcards')} />
                <QuickStartCard 
                    title="MCQ Quiz" 
                    description="Full knowledge test" 
                    icon={<QuestionIcon />} 
                    color="text-green-500"
                    onClick={() => setPracticeMode('mcq')} />
                <QuickStartCard 
                    title="Reels" 
                    description="All articles, bite-sized" 
                    icon={<ReelsIcon />} 
                    color="text-purple-500"
                    onClick={() => setPracticeMode('reels')} />
            </div>
        </div>
      </div>
    </div>
  );
};

const QuickStartCard: React.FC<{ title: string; description: string; icon: React.ReactNode; color: string; onClick: () => void; }> = ({ title, description, icon, color, onClick }) => (
    <button 
        onClick={onClick}
        className="bg-light-surface dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-left flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300 w-full"
    >
        <div className={`text-3xl ${color} [&>svg]:h-8 [&>svg]:w-8`}>
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-semibold text-light-text dark:text-white">{title}</h3>
            <p className="text-light-text-secondary dark:text-gray-400">{description}</p>
        </div>
    </button>
);

export default ExamDashboard;