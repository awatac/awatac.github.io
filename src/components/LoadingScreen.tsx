import React, { useEffect, useState } from 'react';
import logoImg from '../assets/images/logo.png';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => {
          const newProgress = prev + Math.floor(Math.random() * 10) + 5;
          return Math.min(newProgress, 100);
        });
      } else if (onLoadingComplete) {
        setTimeout(() => {
          onLoadingComplete();
        }, 500); // Slight delay before hiding
      }
    }, 200);
    
    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);
  
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-50 transition-opacity duration-500">
      <div className="flex flex-col items-center">
        <img src={logoImg} alt="AWATAC Logo" className="h-24 mb-8 animate-pulse" />
        <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;