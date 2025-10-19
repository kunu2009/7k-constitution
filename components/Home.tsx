
import React from 'react';

interface HomeProps {
  onStart: () => void;
}

const FeatureCard: React.FC<{ title: string; description: string; icon: string; }> = ({ title, description, icon }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
        <div className="text-4xl mb-4 text-navy dark:text-saffron">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
);

const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 sm:p-8 text-center bg-gray-50 dark:bg-gray-900 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
          Master the Indian Constitution
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          An interactive guide to Articles 1-51A. Learn, revise, and test your knowledge with tools designed for long-term retention.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           <FeatureCard title="Flashcards" description="Flip through articles for quick revision. Perfect for active recall." icon="🃏" />
           <FeatureCard title="MCQs" description="Test your understanding with multiple-choice questions." icon="✅" />
           <FeatureCard title="Reels" description="Scroll through bite-sized summaries in a fun, engaging format." icon="📱" />
        </div>

        <button 
          onClick={onStart} 
          className="px-8 py-4 bg-gradient-to-r from-saffron to-orange-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default Home;
