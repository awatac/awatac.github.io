import React, { ReactNode } from 'react';
import PageBanner from './PageBanner';
import { useCelebration } from '../context/CelebrationContext';

interface ServiceLayoutProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children: ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ 
  title, 
  subtitle, 
  backgroundImage,
  children 
}) => {
  const { isCelebrationMode } = useCelebration();
  
  return (
    <main className="pt-20">
      <PageBanner 
        title={title} 
        subtitle={subtitle} 
        backgroundImage={backgroundImage} 
      />
      <section className={`py-12 ${isCelebrationMode ? 'bg-blue-50 dark:bg-blue-900' : 'bg-white dark:bg-gray-900'} transition-colors`}>
        <div className="container mx-auto px-4">
          {isCelebrationMode && (
            <div className="mb-8 p-4 bg-blue-100 dark:bg-blue-800 rounded-lg border-l-4 border-blue-500 shadow-md">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                🎉 Celebrating Excellence in Global Logistics Every Day 🎉
              </p>
            </div>
          )}
          {children}
        </div>
      </section>
    </main>
  );
};

export default ServiceLayout;