import React from 'react';
import { useCelebration } from '../context/CelebrationContext';

const CelebrationToggle: React.FC = () => {
  const { isCelebrationMode, toggleCelebrationMode } = useCelebration();

  return (
    <button
      onClick={toggleCelebrationMode}
      className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle celebration mode"
    >
      <span className="text-lg">{isCelebrationMode ? '🎉' : '🏢'}</span>
      <span className="hidden sm:inline text-sm font-medium">
        {isCelebrationMode ? 'Celebration Mode' : 'Standard Mode'}
      </span>
    </button>
  );
};

export default CelebrationToggle;