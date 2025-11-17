import React from 'react';
import { LearningMode } from '../types';
import { FillBlanksIcon, MatchIcon } from '../constants/icons';

interface GamesDashboardProps {
  setMode: (mode: LearningMode) => void;
}

const GamesDashboard: React.FC<GamesDashboardProps> = ({ setMode }) => {
  return (
    <div className="flex flex-col h-full p-4 sm:p-6 lg:p-8 bg-light-background dark:bg-gray-900 overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-white mb-6">
          Game Modes
        </h1>
        
        <div className="mb-8">
            <p className="text-light-text-secondary dark:text-gray-400 mb-6">Test your knowledge with these interactive challenges.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GameCard 
                    title="Fill in the Blanks" 
                    description="Complete key sentences from articles." 
                    icon={<FillBlanksIcon />} 
                    color="text-blue-500"
                    onClick={() => setMode(LearningMode.FillBlanks)} />
                <GameCard 
                    title="Match the Following" 
                    description="Connect articles with their titles." 
                    icon={<MatchIcon />} 
                    color="text-green-500"
                    onClick={() => setMode(LearningMode.Match)} />
            </div>
        </div>
      </div>
    </div>
  );
};

const GameCard: React.FC<{ title: string; description: string; icon: React.ReactNode; color: string; onClick: () => void; }> = ({ title, description, icon, color, onClick }) => (
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

export default GamesDashboard;