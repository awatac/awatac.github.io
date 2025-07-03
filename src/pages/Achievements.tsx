import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const Achievements: React.FC = () => (
  <ServiceLayout 
    title="Achievements" 
    subtitle="Our Milestones & Success Stories"
  >
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Our Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-6 transition-colors">
          <div className="w-32 h-32 flex items-center justify-center rounded-full mb-4">
            <svg width="80" height="80" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
              </defs>
              <path d="M30 20 L70 20 L70 50 C70 65 60 75 50 75 C40 75 30 65 30 50 Z" fill="url(#trophyGradient)" />
              <path d="M30 20 L20 20 L20 30 C20 40 25 40 30 40 Z" fill="url(#trophyGradient)" opacity="0.8" />
              <path d="M70 20 L80 20 L80 30 C80 40 75 40 70 40 Z" fill="url(#trophyGradient)" opacity="0.8" />
              <rect x="45" y="75" width="10" height="15" fill="#92400E" />
              <rect x="35" y="90" width="30" height="5" fill="#92400E" />
              <circle cx="50" cy="40" r="10" fill="#FEF3C7" opacity="0.8" />
              <text x="50" y="44" textAnchor="middle" fill="#92400E" fontSize="12" fontWeight="bold">1</text>
            </svg>
          </div>
          <h3 className="font-bold text-lg mb-2 dark:text-white">Milestone 1</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center">Description of achievement or milestone 1.</p>
        </div>
        <div className="flex flex-col items-center bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-6 transition-colors">
          <div className="w-32 h-32 flex items-center justify-center rounded-full mb-4">
            <svg width="80" height="80" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="trophyGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
              <path d="M30 20 L70 20 L70 50 C70 65 60 75 50 75 C40 75 30 65 30 50 Z" fill="url(#trophyGradient2)" />
              <path d="M30 20 L20 20 L20 30 C20 40 25 40 30 40 Z" fill="url(#trophyGradient2)" opacity="0.8" />
              <path d="M70 20 L80 20 L80 30 C80 40 75 40 70 40 Z" fill="url(#trophyGradient2)" opacity="0.8" />
              <rect x="45" y="75" width="10" height="15" fill="#1E40AF" />
              <rect x="35" y="90" width="30" height="5" fill="#1E40AF" />
              <circle cx="50" cy="40" r="10" fill="#DBEAFE" opacity="0.8" />
              <text x="50" y="44" textAnchor="middle" fill="#1E40AF" fontSize="12" fontWeight="bold">2</text>
            </svg>
          </div>
          <h3 className="font-bold text-lg mb-2 dark:text-white">Milestone 2</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center">Description of achievement or milestone 2.</p>
        </div>
        <div className="flex flex-col items-center bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-6 transition-colors">
          <div className="w-32 h-32 flex items-center justify-center rounded-full mb-4">
            <svg width="80" height="80" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="trophyGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
              <path d="M30 20 L70 20 L70 50 C70 65 60 75 50 75 C40 75 30 65 30 50 Z" fill="url(#trophyGradient3)" />
              <path d="M30 20 L20 20 L20 30 C20 40 25 40 30 40 Z" fill="url(#trophyGradient3)" opacity="0.8" />
              <path d="M70 20 L80 20 L80 30 C80 40 75 40 70 40 Z" fill="url(#trophyGradient3)" opacity="0.8" />
              <rect x="45" y="75" width="10" height="15" fill="#065F46" />
              <rect x="35" y="90" width="30" height="5" fill="#065F46" />
              <circle cx="50" cy="40" r="10" fill="#D1FAE5" opacity="0.8" />
              <text x="50" y="44" textAnchor="middle" fill="#065F46" fontSize="12" fontWeight="bold">3</text>
            </svg>
          </div>
          <h3 className="font-bold text-lg mb-2 dark:text-white">Milestone 3</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center">Description of achievement or milestone 3.</p>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default Achievements;