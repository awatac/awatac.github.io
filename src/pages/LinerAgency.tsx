import React from 'react';

const LinerAgency: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="w-full h-64 md:h-96 relative">
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center transition-colors">
        <svg width="350" height="200" viewBox="0 0 350 200">
          <defs>
            <linearGradient id="liner-ship-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="liner-ocean-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          
          {/* Ocean */}
          <path d="M0 150 Q100 140 200 150 T350 150 L350 200 L0 200 Z" fill="url(#liner-ocean-gradient)" opacity="0.6" />
          <path d="M0 155 Q50 145 100 155 T200 155 T300 155" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.6" />
          
          {/* Main container ship */}
          <path d="M80 120 L270 120 L260 150 L90 150 Z" fill="url(#liner-ship-gradient)" />
          
          {/* Container stacks */}
          <rect x="100" y="100" width="20" height="20" fill="#EF4444" />
          <rect x="125" y="100" width="20" height="20" fill="#10B981" />
          <rect x="150" y="100" width="20" height="20" fill="#F59E0B" />
          <rect x="175" y="100" width="20" height="20" fill="#8B5CF6" />
          <rect x="200" y="100" width="20" height="20" fill="#EC4899" />
          <rect x="225" y="100" width="20" height="20" fill="#06B6D4" />
          
          {/* Second row */}
          <rect x="110" y="80" width="20" height="20" fill="#84CC16" />
          <rect x="135" y="80" width="20" height="20" fill="#F97316" />
          <rect x="160" y="80" width="20" height="20" fill="#3B82F6" />
          <rect x="185" y="80" width="20" height="20" fill="#EF4444" />
          <rect x="210" y="80" width="20" height="20" fill="#10B981" />
          
          {/* Third row */}
          <rect x="120" y="60" width="20" height="20" fill="#F59E0B" />
          <rect x="145" y="60" width="20" height="20" fill="#8B5CF6" />
          <rect x="170" y="60" width="20" height="20" fill="#EC4899" />
          <rect x="195" y="60" width="20" height="20" fill="#06B6D4" />
          
          {/* Ship bridge */}
          <rect x="240" y="90" width="20" height="30" fill="url(#liner-ship-gradient)" />
          <rect x="245" y="70" width="10" height="20" fill="url(#liner-ship-gradient)" />
          <circle cx="250" cy="75" r="3" fill="#FCD34D" />
          <circle cx="250" cy="85" r="3" fill="#FCD34D" />
          <circle cx="250" cy="95" r="3" fill="#FCD34D" />
          <circle cx="250" cy="105" r="3" fill="#FCD34D" />
          
          {/* Port facilities */}
          <rect x="40" y="100" width="5" height="50" fill="#6B7280" />
          <rect x="35" y="105" width="15" height="3" fill="#6B7280" />
          <rect x="300" y="100" width="5" height="50" fill="#6B7280" />
          <rect x="295" y="105" width="15" height="3" fill="#6B7280" />
          
          {/* Agency office */}
          <rect x="20" y="40" width="40" height="30" fill="#F3F4F6" className="dark:fill-gray-600" stroke="#3B82F6" strokeWidth="2" />
          <rect x="25" y="45" width="30" height="20" fill="#60A5FA" opacity="0.5" />
          <text x="40" y="60" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">AGENCY</text>
          
          {/* Communication lines */}
          <path d="M60 55 Q150 30 240 75" stroke="#6B7280" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="60" cy="55" r="3" fill="#10B981" />
          <circle cx="240" cy="75" r="3" fill="#10B981" />
          
          {/* Documentation */}
          <rect x="290" y="40" width="30" height="40" fill="white" className="dark:fill-gray-200" stroke="#3B82F6" strokeWidth="1" />
          <line x1="295" y1="50" x2="315" y2="50" stroke="#3B82F6" strokeWidth="1" />
          <line x1="295" y1="60" x2="315" y2="60" stroke="#3B82F6" strokeWidth="1" />
          <line x1="295" y1="70" x2="315" y2="70" stroke="#3B82F6" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Liner Agency</h1>
        <p className="text-white mt-2">Efficient, reliable liner agency solutions</p>
      </div>
    </div>

    {/* Main Section */}
    <div className="max-w-5xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Liner Agency</h2>
        <p className="mb-4 dark:text-gray-300">Our technical team of expertise combined with cutting edge facilities enables us to undertake comprehensive Liner agency package in an efficient and cost effective manner. Our key features include:</p>
        <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
          <li>Fully-integrated operational system</li>
          <li>Up-to date analysis of traffic flows</li>
          <li>Full inventory control of equipment</li>
          <li>Import and export documentation</li>
        </ul>
        <p className="mb-4 dark:text-gray-300">We always strive to meet the demands and requirements of our clients in accordance with the country-specific and industry regulations.</p>
      </div>
      <div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center transition-colors">
          <svg width="200" height="150" viewBox="0 0 200 150">
            <defs>
              <linearGradient id="agencyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
            </defs>
            
            {/* Agency office */}
            <rect x="50" y="50" width="100" height="60" fill="url(#agencyGradient)" />
            <rect x="55" y="55" width="90" height="50" fill="#F3F4F6" className="dark:fill-gray-600" />
            
            {/* Windows */}
            <rect x="60" y="60" width="15" height="15" fill="#60A5FA" opacity="0.8" />
            <rect x="85" y="60" width="15" height="15" fill="#60A5FA" opacity="0.8" />
            <rect x="110" y="60" width="15" height="15" fill="#60A5FA" opacity="0.8" />
            <rect x="135" y="60" width="15" height="15" fill="#60A5FA" opacity="0.8" />
            
            {/* Door */}
            <rect x="95" y="85" width="20" height="20" fill="#6B7280" />
            <rect x="100" y="95" width="2" height="2" fill="#FCD34D" />
            
            {/* Agency sign */}
            <rect x="75" y="40" width="50" height="10" fill="white" className="dark:fill-gray-200" />
            <text x="100" y="48" textAnchor="middle" fill="#1E40AF" fontSize="8" fontWeight="bold">AWATAC AGENCY</text>
            
            {/* Ship silhouette */}
            <path d="M20 120 L40 120 L38 125 L22 125 Z" fill="#3B82F6" opacity="0.6" />
            <path d="M160 120 L180 120 L178 125 L162 125 Z" fill="#3B82F6" opacity="0.6" />
            
            {/* Connection lines */}
            <path d="M40 120 Q100 100 160 120" stroke="#6B7280" strokeWidth="1" strokeDasharray="2,2" />
            
            {/* Documents */}
            <rect x="20" y="70" width="15" height="20" fill="white" className="dark:fill-gray-200" stroke="#3B82F6" strokeWidth="1" />
            <rect x="165" y="70" width="15" height="20" fill="white" className="dark:fill-gray-200" stroke="#3B82F6" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default LinerAgency;