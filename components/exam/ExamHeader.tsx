import React from 'react';

interface ExamHeaderProps {
  title: string;
  onBack: () => void;
}

const ExamHeader: React.FC<ExamHeaderProps> = ({ title, onBack }) => (
  <header className="w-full bg-light-surface dark:bg-gray-800 shadow-md p-4 flex items-center justify-between z-10 flex-shrink-0">
    <button
      onClick={onBack}
      className="px-4 py-2 rounded-md bg-black/5 dark:bg-gray-700 hover:bg-black/10 dark:hover:bg-gray-600 font-semibold transition-colors flex items-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
      Dashboard
    </button>
    <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-b from-saffron via-gray-500 to-green dark:via-gray-400">
      Exam: {title}
    </h1>
    <div className="w-28 text-right"></div> {/* Spacer */}
  </header>
);

export default ExamHeader;