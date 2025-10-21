
import React from 'react';

interface FilterBarProps {
  parts: string[];
  activePart: string;
  onPartFilterChange: (part: string) => void;
  tags: string[];
  activeTag: string;
  onTagFilterChange: (tag: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ parts, activePart, onPartFilterChange, tags, activeTag, onTagFilterChange }) => {
  return (
    <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-800/50 p-4 border-b border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
      <div className="flex items-center">
        <label htmlFor="part-filter" className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-3">
          Part:
        </label>
        <select
          id="part-filter"
          value={activePart}
          onChange={(e) => onPartFilterChange(e.target.value)}
          className="block w-full max-w-xs pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-navy focus:border-navy sm:text-sm rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
        >
          {parts.map(part => (
            <option key={part} value={part}>
              {part}
            </option>
          ))}
        </select>
      </div>
       <div className="flex items-center">
        <label htmlFor="tag-filter" className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-3">
          Tag:
        </label>
        <select
          id="tag-filter"
          value={activeTag}
          onChange={(e) => onTagFilterChange(e.target.value)}
          className="block w-full max-w-xs pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-navy focus:border-navy sm:text-sm rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
        >
          {tags.map(tag => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
