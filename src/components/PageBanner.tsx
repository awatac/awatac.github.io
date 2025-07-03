import React from 'react';
import { useCelebration } from '../context/CelebrationContext';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}) => {
  const { isCelebrationMode } = useCelebration();
  
  return (
    <section className="relative w-full h-64 md:h-96 flex items-center justify-center bg-gray-200 overflow-hidden">
      <img
        src={backgroundImage}
        alt={`${title} Banner`}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className={`absolute inset-0 w-full h-full ${isCelebrationMode ? 'bg-blue-900 bg-opacity-50' : 'bg-black bg-opacity-40'} z-10`}></div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-white text-center px-4">
        <h1 className={`text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg ${isCelebrationMode ? 'celebration-float' : ''}`}>{title}</h1>
        {subtitle && <p className="text-lg md:text-xl mb-2">{subtitle}</p>}
        {isCelebrationMode && (
          <div className="mt-4 py-2 px-4 bg-blue-600 bg-opacity-70 rounded-lg celebration-pulse">
            <p className="text-white font-bold">🎉 Celebrating Excellence in Global Logistics Every Day 🎉</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageBanner;