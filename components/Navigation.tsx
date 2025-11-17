import React, { useState } from 'react';
import { LearningMode } from '../types';
import { HomeIcon, ExamIcon, CardIcon, QuestionIcon, ReelsIcon, ProgressIcon, ListIcon, GamesIcon, ExploreIcon, MoreIcon } from '../constants/icons';

interface NavigationProps {
  activeMode: LearningMode;
  setMode: (mode: LearningMode) => void;
}

const NavButton: React.FC<{
  label: string;
  icon: React.ReactElement;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  const activeClasses = 'bg-blue-100 text-navy dark:bg-blue-900 dark:text-white';
  const inactiveClasses = 'text-light-text-secondary hover:bg-black/5 dark:text-gray-400 dark:hover:bg-gray-700';
  
  return (
    <button
      onClick={onClick}
      title={label}
      className={`relative group flex flex-col items-center justify-center w-full md:w-auto md:h-14 md:px-0 px-2 py-2 rounded-lg transition-colors duration-200 font-medium ${isActive ? activeClasses : inactiveClasses}`}
      aria-label={`Switch to ${label} mode`}
    >
      {icon}
      <span className="text-xs mt-1 md:hidden">{label}</span>
      <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block whitespace-nowrap">
        {label}
      </span>
    </button>
  );
};

const ALL_NAV_ITEMS = [
    { mode: LearningMode.Home, label: 'Home', icon: <HomeIcon /> },
    { mode: LearningMode.Exam, label: 'Exam', icon: <ExamIcon /> },
    { mode: LearningMode.Flashcards, label: 'Flashcards', icon: <CardIcon /> },
    { mode: LearningMode.MCQ, label: 'MCQ', icon: <QuestionIcon /> },
    { mode: LearningMode.List, label: 'Browse', icon: <ListIcon /> },
    { mode: LearningMode.Games, label: 'Games', icon: <GamesIcon /> },
    { mode: LearningMode.Explore, label: 'Explore', icon: <ExploreIcon /> },
    { mode: LearningMode.Reels, label: 'Reels', icon: <ReelsIcon /> },
    { mode: LearningMode.Progress, label: 'Progress', icon: <ProgressIcon /> },
];

const PRIMARY_NAV_ITEMS = [
    { mode: LearningMode.Home, label: 'Home', icon: <HomeIcon /> },
    { mode: LearningMode.Flashcards, label: 'Flashcards', icon: <CardIcon /> },
    { mode: LearningMode.MCQ, label: 'MCQ', icon: <QuestionIcon /> },
    { mode: LearningMode.Progress, label: 'Progress', icon: <ProgressIcon /> },
];

const SECONDARY_NAV_ITEMS = [
    { mode: LearningMode.Exam, label: 'Exam', icon: <ExamIcon /> },
    { mode: LearningMode.List, label: 'Browse', icon: <ListIcon /> },
    { mode: LearningMode.Games, label: 'Games', icon: <GamesIcon /> },
    { mode: LearningMode.Explore, label: 'Explore', icon: <ExploreIcon /> },
    { mode: LearningMode.Reels, label: 'Reels', icon: <ReelsIcon /> },
];
const SECONDARY_MODES = SECONDARY_NAV_ITEMS.map(item => item.mode);


const Navigation: React.FC<NavigationProps> = ({ activeMode, setMode }) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const handleSetMode = (mode: LearningMode) => {
    setMode(mode);
    setIsMoreMenuOpen(false);
  };
  
  const isMoreActive = SECONDARY_MODES.includes(activeMode);
  
  return (
    <>
      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-light-surface dark:bg-gray-800 border-t border-black/10 dark:border-gray-700 flex justify-around items-center p-1 z-20">
        {PRIMARY_NAV_ITEMS.map(item => (
            <NavButton
                key={item.mode}
                label={item.label}
                icon={item.icon}
                isActive={activeMode === item.mode}
                onClick={() => handleSetMode(item.mode)}
            />
        ))}
        <NavButton
          label="More"
          icon={<MoreIcon />}
          isActive={isMoreActive}
          onClick={() => setIsMoreMenuOpen(true)}
        />
      </nav>

      {/* More Menu Modal */}
      {isMoreMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 animate-fade-in"
          onClick={() => setIsMoreMenuOpen(false)}
        >
          <div 
            className="fixed bottom-0 left-0 right-0 bg-light-surface dark:bg-gray-800 rounded-t-2xl p-4 animate-slide-in-from-bottom"
            onClick={e => e.stopPropagation()}
          >
            <div className="grid grid-cols-3 gap-4">
              {SECONDARY_NAV_ITEMS.map(item => (
                <button
                  key={item.mode}
                  onClick={() => handleSetMode(item.mode)}
                  className="flex flex-col items-center justify-center space-y-2 p-2 rounded-lg text-light-text dark:text-gray-300 hover:bg-light-background dark:hover:bg-gray-700"
                >
                  <div className="p-3 bg-light-background dark:bg-gray-700 rounded-full">{item.icon}</div>
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Right Sidebar */}
      <nav className="hidden md:flex flex-col w-20 bg-light-surface dark:bg-gray-800 border-l border-black/10 dark:border-gray-700 items-center py-4 space-y-4 z-20">
         {ALL_NAV_ITEMS.map(item => (
            <NavButton
                key={item.mode}
                label={item.label}
                icon={item.icon}
                isActive={activeMode === item.mode}
                onClick={() => setMode(item.mode)}
            />
        ))}
      </nav>
    </>
  );
};

export default Navigation;