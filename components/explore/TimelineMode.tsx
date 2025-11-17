import React from 'react';
import { CONSTITUTION_AMENDMENTS } from '../../constants/amendments';
import { Article } from '../../types';
import ExamHeader from '../exam/ExamHeader';

interface TimelineModeProps {
  onSelectArticle: (article: Article) => void;
}

const TimelineMode: React.FC<TimelineModeProps> = ({ onSelectArticle }) => {
  const sortedAmendments = [...CONSTITUTION_AMENDMENTS].sort((a, b) => a.year - b.year);

  return (
    <div className="flex flex-col h-full bg-light-background dark:bg-gray-900">
      <ExamHeader title="Amendments Timeline" onBack={() => window.history.back()} />
      <div className="flex-grow overflow-y-auto p-4 md:p-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-light-text/20 dark:bg-gray-600 transform -translate-x-1/2"></div>
          
          {sortedAmendments.map((amendment, index) => (
            <div key={amendment.id} className={`relative mb-8 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {/* Dot on the timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-navy dark:bg-saffron border-4 border-light-background dark:border-gray-900"></div>

              {/* Content Card */}
              <div className={`w-[calc(50%-2rem)] bg-light-surface dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 ${index % 2 === 0 ? 'border-orange-500 dark:border-saffron' : 'border-green'} animate-fade-in`}>
                <p className="text-xl font-bold text-navy dark:text-saffron mb-2">{amendment.year}</p>
                <h3 className="text-lg font-semibold text-light-text dark:text-white mb-2">{amendment.title}</h3>
                <p className="text-sm text-light-text-secondary dark:text-gray-400 leading-relaxed">{amendment.summary}</p>
                {amendment.affectedArticles.length > 0 && (
                    <div className="mt-4">
                        <h4 className="text-xs font-bold uppercase text-light-text-secondary dark:text-gray-400">Key Articles Affected</h4>
                        <p className="text-sm text-light-text dark:text-gray-300 mt-1">{amendment.affectedArticles.join(', ')}</p>
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineMode;