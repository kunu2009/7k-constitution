import React from 'react';
import { LearningMode } from '../types';
import { ExamIcon, CardIcon, QuestionIcon, ReelsIcon, ProgressIcon, ListIcon } from '../constants/icons';

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
  const inactiveClasses = 'text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700';
  
  return (
    <button
      onClick={onClick}
      title={label}
      className={`relative group flex flex-col md:flex-row items-center justify-center w-full md:w-auto md:h-14 md:px-0 px-2 py-2 rounded-lg transition-colors duration-200 font-medium ${isActive ? activeClasses : inactiveClasses}`}
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

const NAV_ITEMS = [
    { mode: LearningMode.Home, label: 'Exam', icon: <ExamIcon /> },
    { mode: LearningMode.Flashcards, label: 'Flashcards', icon: <CardIcon /> },
    { mode: LearningMode.MCQ, label: 'MCQ', icon: <QuestionIcon /> },
    { mode: LearningMode.List, label: 'Browse', icon: <ListIcon /> },
    { mode: LearningMode.Reels, label: 'Reels', icon: <ReelsIcon /> },
    { mode: LearningMode.Progress, label: 'Progress', icon: <ProgressIcon /> },
]

const Navigation: React.FC<NavigationProps> = ({ activeMode, setMode }) => {
  return (
    <>
      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-around p-1 z-20">
        {NAV_ITEMS.map(item => (
            <NavButton
                key={item.mode}
                label={item.label}
                icon={item.icon}
                isActive={activeMode === item.mode}
                onClick={() => setMode(item.mode)}
            />
        ))}
      </nav>

      {/* Desktop Right Sidebar */}
      <nav className="hidden md:flex flex-col w-20 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 items-center py-4 space-y-4 z-20">
         {NAV_ITEMS.map(item => (
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