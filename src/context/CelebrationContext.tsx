import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CelebrationContextType {
  isCelebrationMode: boolean;
  toggleCelebrationMode: () => void;
}

const CelebrationContext = createContext<CelebrationContextType>({
  isCelebrationMode: false,
  toggleCelebrationMode: () => {},
});

export const useCelebration = () => useContext(CelebrationContext);

interface CelebrationProviderProps {
  children: ReactNode;
}

export const CelebrationProvider: React.FC<CelebrationProviderProps> = ({ children }) => {
  const [isCelebrationMode, setIsCelebrationMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('celebrationMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('celebrationMode', JSON.stringify(isCelebrationMode));
  }, [isCelebrationMode]);

  const toggleCelebrationMode = () => {
    setIsCelebrationMode(prev => !prev);
  };

  return (
    <CelebrationContext.Provider value={{ isCelebrationMode, toggleCelebrationMode }}>
      {children}
    </CelebrationContext.Provider>
  );
};