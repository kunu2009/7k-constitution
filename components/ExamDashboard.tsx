import React from 'react';
import { LearningMode } from '../types';
import { CardIcon, QuestionIcon, ReelsIcon } from '../constants/icons';

interface ExamDashboardProps {
  setMode: (mode: LearningMode) => void;
}

const ExamDashboard: React.FC<ExamDashboardProps> = ({ setMode }) => {
  return (
    <div className="flex flex-col h-full p-4 sm:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Exam Dashboard
        </h1>
        
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Practice Modes</h2>
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

export default ExamDashboard;