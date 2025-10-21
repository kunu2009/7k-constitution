import React, { useState } from 'react';
import { Article, UserArticleData, LandmarkCase } from '../types';
import { StarIcon } from '../constants/icons';
import { Flashcard } from './FlashcardMode';
import SingleMCQ from './SingleMCQ';

interface ArticleDetailViewProps {
  article: Article;
  userData: UserArticleData | undefined;
  onClose: () => void;
  onToggleFavorite: () => void;
  onUpdateNotes: (notes: string) => void;
}

const DetailSection: React.FC<{ title: string; borderColorClass: string; children: React.ReactNode }> = ({ title, borderColorClass, children }) => (
    <div className={`bg-slate-50 dark:bg-slate-800/60 p-4 rounded-lg border-l-4 ${borderColorClass} mb-6 shadow-sm`}>
        <h2 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-2">{title}</h2>
        {children}
    </div>
);

const LandmarkCaseCard: React.FC<{ caseItem: LandmarkCase }> = ({ caseItem }) => (
  <div className="mb-4 last:mb-0">
    <h3 className="font-semibold text-md text-gray-800 dark:text-gray-200">{caseItem.caseName}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{caseItem.caseSummary}</p>
  </div>
);


const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({ article, userData, onClose, onToggleFavorite, onUpdateNotes }) => {
  const isFavorite = userData?.isFavorite || false;
  const notes = userData?.notes || '';
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900">
      <header className="flex-shrink-0 bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between z-10">
        <button onClick={onClose} className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold transition-colors">
          &larr; Back
        </button>
        <h1 className="text-xl font-bold text-center text-navy dark:text-gray-100 mx-4 truncate">
          {article.id}: {article.title}
        </h1>
        <button 
          onClick={onToggleFavorite} 
          className={`p-2 rounded-full transition-colors ${isFavorite ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900' : 'text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <StarIcon isFilled={isFavorite} />
        </button>
      </header>

      <div className="flex-grow p-4 sm:p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          
          <DetailSection title="Part" borderColorClass="border-saffron">
             <p className="text-lg text-gray-800 dark:text-gray-200">{article.part}</p>
          </DetailSection>

          <DetailSection title="Summary" borderColorClass="border-blue-500">
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">{article.summary}</p>
          </DetailSection>

           <DetailSection title="Detailed Explanation" borderColorClass="border-navy">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{article.detailedExplanation}</p>
          </DetailSection>

          <DetailSection title="Limitations and Exceptions" borderColorClass="border-yellow-500">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{article.limitationsAndExceptions}</p>
          </DetailSection>
          
          <DetailSection title="Full Text" borderColorClass="border-green">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap font-serif">{article.fullText}</p>
          </DetailSection>

          {article.landmarkCases && article.landmarkCases.length > 0 && (
             <DetailSection title="Landmark Cases" borderColorClass="border-red-500">
              {article.landmarkCases.map((caseItem) => (
                <LandmarkCaseCard key={caseItem.caseName} caseItem={caseItem} />
              ))}
            </DetailSection>
          )}

          <hr className="my-8 border-gray-200 dark:border-gray-700" />
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">Practice This Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <h3 className="font-semibold text-lg mb-4 text-center text-gray-700 dark:text-gray-300">Flashcard</h3>
                    <div className="h-64">
                        <Flashcard article={article} isRevealed={isRevealed} onReveal={() => setIsRevealed(!isRevealed)} />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-4 text-center text-gray-700 dark:text-gray-300">Quick Quiz</h3>
                    <SingleMCQ article={article} />
                </div>
            </div>
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div>
            <h2 className="text-sm font-semibold uppercase text-navy dark:text-blue-300 tracking-wider mb-3">My Notes</h2>
            <textarea
              value={notes}
              onChange={(e) => onUpdateNotes(e.target.value)}
              placeholder="Add your notes, mnemonics, or thoughts here..."
              className="w-full h-40 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArticleDetailView;
