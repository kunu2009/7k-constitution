
import React, { useMemo } from 'react';
import { UserData, LearningMode } from '../types';

interface ProgressViewProps {
  userData: UserData;
  totalArticles: number;
  setMode: (mode: LearningMode) => void;
}

const ProgressCard: React.FC<{ title: string; value: number; max: number; color: string; format?: 'count' | 'percentage' }> = ({ title, value, max, color, format = 'percentage' }) => {
  const percentage = max > 0 ? (value / max) * 100 : 0;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{title}</h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-2xl font-bold text-navy dark:text-saffron">
          {format === 'count' ? value : `${Math.round(percentage)}%`}
        </span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {value} / {max}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className={`${color} h-2.5 rounded-full`}
          style={{ width: `${percentage}%`, transition: 'width 0.5s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const MASTERY_LEVELS = {
  0: { label: 'Unseen', color: 'bg-gray-400' },
  1: { label: 'Learning', color: 'bg-red-500' },
  2: { label: 'Familiar', color: 'bg-orange-500' },
  3: { label: 'Confident', color: 'bg-yellow-500' },
  4: { label: 'Mastered', color: 'bg-green-500' },
  5: { label: 'Expert', color: 'bg-blue-500' },
};

const ProgressView: React.FC<ProgressViewProps> = ({ userData, totalArticles, setMode }) => {
  const stats = useMemo(() => {
    const userArticleIds = Object.keys(userData);

    const studiedCount = userArticleIds.filter(id => userData[id].isFavorite || userData[id].notes.trim() !== '' || (userData[id].masteryLevel > 0)).length;
    const favoritesCount = userArticleIds.filter(id => userData[id].isFavorite).length;
    const notesCount = userArticleIds.filter(id => userData[id].notes.trim() !== '').length;

    const masteryCounts: number[] = Array(6).fill(0);
    const seenArticleIds = new Set<string>();

    Object.values(userData).forEach(data => {
        const level = data.masteryLevel ?? 0;
        masteryCounts[level]++;
    });
    
    // Account for articles not yet in userData (mastery level 0)
    masteryCounts[0] += totalArticles - Object.keys(userData).length;


    return { studiedCount, favoritesCount, notesCount, masteryCounts };
  }, [userData, totalArticles]);
  
  const getMotivationalQuote = (percentage: number) => {
      if (percentage >= 100) return "Incredible! You've mastered the foundational articles!";
      if (percentage > 75) return "You're so close to the finish line! Keep up the amazing work.";
      if (percentage > 50) return "You're more than halfway there! The momentum is with you.";
      if (percentage > 25) return "A strong start! Every article studied is a step forward.";
      if (percentage > 0) return "The first step is the most important. Keep going!";
      return "Begin your journey to master the Constitution, one article at a time.";
  }
  
  const studiedPercentage = totalArticles > 0 ? (stats.studiedCount / totalArticles) * 100 : 0;

  return (
    <div className="flex flex-col items-center h-full p-4 sm:p-8 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-2 text-center">
          Your Learning Progress
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center">
          {getMotivationalQuote(studiedPercentage)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ProgressCard
            title="Articles Studied"
            value={stats.studiedCount}
            max={totalArticles}
            color="bg-gradient-to-r from-green-400 to-blue-500"
          />
          <ProgressCard
            title="Favorites Marked"
            value={stats.favoritesCount}
            max={totalArticles}
            color="bg-gradient-to-r from-yellow-400 to-orange-500"
            format="count"
          />
          <ProgressCard
            title="Notes Taken"
            value={stats.notesCount}
            max={totalArticles}
            color="bg-gradient-to-r from-purple-400 to-indigo-500"
            format="count"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Mastery Breakdown</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            {stats.masteryCounts.map((count, level) => {
              const levelInfo = MASTERY_LEVELS[level as keyof typeof MASTERY_LEVELS];
              const percentage = totalArticles > 0 ? (count / totalArticles) * 100 : 0;
              return (
                <div key={level} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-center mb-1 text-sm">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{levelInfo.label}</span>
                    <span className="font-medium text-gray-500 dark:text-gray-400">{count} Articles</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className={`${levelInfo.color} h-2.5 rounded-full`}
                      style={{ width: `${percentage}%`, transition: 'width 0.5s ease-in-out' }}
                      title={`${Math.round(percentage)}%`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProgressView;