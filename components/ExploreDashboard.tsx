import React from 'react';
import { LearningMode } from '../types';
import { MindMapIcon, TimelineIcon } from '../constants/icons';

interface ExploreDashboardProps {
  setMode: (mode: LearningMode) => void;
}

const ExploreDashboard: React.FC<ExploreDashboardProps> = ({ setMode }) => {
  return (
    <div className="flex flex-col h-full p-4 sm:p-6 lg:p-8 bg-light-background dark:bg-gray-900 overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-white mb-6">
          Explore Visually
        </h1>
        
        <div className="mb-8">
            <p className="text-light-text-secondary dark:text-gray-400 mb-6">Understand the bigger picture with these visual tools.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ExploreCard 
                    title="Mind Map" 
                    description="See how articles connect with each other." 
                    icon={<MindMapIcon />} 
                    color="text-purple-500"
                    onClick={() => setMode(LearningMode.MindMap)} />
                <ExploreCard 
                    title="Amendments Timeline" 
                    description="Discover the history of constitutional changes." 
                    icon={<TimelineIcon />} 
                    color="text-orange-500"
                    onClick={() => setMode(LearningMode.Timeline)} />
            </div>
        </div>
      </div>
    </div>
  );
};

const ExploreCard: React.FC<{ title: string; description: string; icon: React.ReactNode; color: string; onClick: () => void; }> = ({ title, description, icon, color, onClick }) => (
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

export default ExploreDashboard;