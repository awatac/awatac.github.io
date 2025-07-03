import React from 'react';
import { useCelebration } from '../context/CelebrationContext';

const CelebrationBanner: React.FC = () => {
  const { isCelebrationMode } = useCelebration();

  if (!isCelebrationMode) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-2 text-center animate-pulse">
      <p className="font-bold">🎉 Celebrating Excellence in Global Logistics Every Day 🎉</p>
    </div>
  );
};

export default CelebrationBanner;