import React from 'react';
import { LearningMode } from '../types';
import { HomeIcon, CardIcon, QuestionIcon, ReelsIcon } from '../constants/icons';

interface NavbarProps {
  activeMode: LearningMode;
  setMode: (mode: LearningMode) => void;
}

const NavButton: React.FC<{
  label: string;
  // FIX: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactElement;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  const activeClasses = 'bg-blue-100 text-navy dark:bg-blue-900 dark:text-white';
  const inactiveClasses = 'text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700';
  
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 text-sm font-medium ${isActive ? activeClasses : inactiveClasses}`}
      aria-label={`Switch to ${label} mode`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};


const Navbar: React.FC<NavbarProps> = ({ activeMode, setMode }) => {
  return (
    <nav className="flex items-center space-x-1 sm:space-x-2 bg-gray-100 dark:bg-gray-900 p-1 rounded-lg">
      <NavButton
        label="Home"
        icon={<HomeIcon />}
        isActive={activeMode === LearningMode.Home}
        onClick={() => setMode(LearningMode.Home)}
      />
      <NavButton
        label="Flashcards"
        icon={<CardIcon />}
        isActive={activeMode === LearningMode.Flashcards}
        onClick={() => setMode(LearningMode.Flashcards)}
      />
      <NavButton
        label="MCQ"
        icon={<QuestionIcon />}
        isActive={activeMode === LearningMode.MCQ}
        onClick={() => setMode(LearningMode.MCQ)}
      />
      <NavButton
        label="Reels"
        icon={<ReelsIcon />}
        isActive={activeMode === LearningMode.Reels}
        onClick={() => setMode(LearningMode.Reels)}
      />
    </nav>
  );
};

export default Navbar;