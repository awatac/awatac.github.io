import React from 'react';

const ReverseLogistics: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Reverse Logistics</h1>
      <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="200" height="150" viewBox="0 0 200 150">
          <defs>
            <linearGradient id="reverseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
          
          {/* Circular arrows */}
          <circle cx="100" cy="75" r="40" fill="none" stroke="url(#reverseGradient)" strokeWidth="3" />
          <path d="M100 35 L100 45 L110 40 Z" fill="url(#reverseGradient)" />
          <path d="M140 75 L130 75 L135 85 Z" fill="url(#reverseGradient)" />
          <path d="M100 115 L100 105 L90 110 Z" fill="url(#reverseGradient)" />
          <path d="M60 75 L70 75 L65 65 Z" fill="url(#reverseGradient)" />
          
          {/* Return package */}
          <rect x="85" y="60" width="30" height="30" fill="#F3F4F6" className="dark:fill-gray-600" stroke="#6B7280" strokeWidth="2" />
          <path d="M85 60 L115 60 L115 90 L85 90 Z" fill="none" stroke="#EF4444" strokeWidth="2" />
          <text x="100" y="80" textAnchor="middle" fill="#EF4444" fontSize="10" fontWeight="bold">RETURN</text>
          
          {/* Process elements */}
          <rect x="40" y="40" width="20" height="20" fill="#10B981" />
          <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1</text>
          
          <rect x="140" y="40" width="20" height="20" fill="#F59E0B" />
          <text x="150" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">2</text>
          
          <rect x="140" y="100" width="20" height="20" fill="#8B5CF6" />
          <text x="150" y="115" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">3</text>
          
          <rect x="40" y="100" width="20" height="20" fill="#EC4899" />
          <text x="50" y="115" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">4</text>
          
          {/* Process labels */}
          <text x="50" y="30" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold">COLLECT</text>
          <text x="150" y="30" textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold">SORT</text>
          <text x="150" y="130" textAnchor="middle" fill="#8B5CF6" fontSize="8" fontWeight="bold">PROCESS</text>
          <text x="50" y="130" textAnchor="middle" fill="#EC4899" fontSize="8" fontWeight="bold">REUSE</text>
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">AWATAC offers comprehensive reverse logistics solutions, managing returns, recycling, and disposal efficiently. Our services help you recover value, reduce waste, and maintain customer satisfaction.</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>Product returns management</li>
        <li>Recycling and disposal solutions</li>
        <li>Refurbishment and repackaging</li>
        <li>Reverse supply chain optimization</li>
        <li>Reporting and compliance support</li>
      </ul>
      <p className="dark:text-gray-300">Contact us for efficient and sustainable reverse logistics services.</p>
    </div>
  </div>
);

export default ReverseLogistics;