import React from 'react';

const ValueAddedServices: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Value Added Services</h1>
      <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="250" height="150" viewBox="0 0 250 150">
          <defs>
            <linearGradient id="valueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
          
          {/* Central plus symbol */}
          <circle cx="125" cy="75" r="30" fill="url(#valueGradient)" />
          <path d="M115 75 L135 75 M125 65 L125 85" stroke="white" strokeWidth="5" />
          
          {/* Service elements */}
          <circle cx="60" cy="50" r="20" fill="#10B981" opacity="0.8" />
          <rect x="50" y="45" width="20" height="10" fill="white" className="dark:fill-gray-200" />
          <text x="60" y="53" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold">PACKING</text>
          
          <circle cx="60" cy="100" r="20" fill="#F59E0B" opacity="0.8" />
          <path d="M50 100 L70 100 M60 90 L60 110" stroke="white" strokeWidth="2" />
          <text x="60" y="120" textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold">LABELING</text>
          
          <circle cx="190" cy="50" r="20" fill="#EF4444" opacity="0.8" />
          <circle cx="190" cy="50" r="10" fill="none" stroke="white" strokeWidth="2" />
          <path d="M190 40 L190 45 M185 50 L195 50" stroke="white" strokeWidth="2" />
          <text x="190" y="70" textAnchor="middle" fill="#EF4444" fontSize="8" fontWeight="bold">INSURANCE</text>
          
          <circle cx="190" cy="100" r="20" fill="#8B5CF6" opacity="0.8" />
          <rect x="180" y="90" width="20" height="15" fill="white" className="dark:fill-gray-200" stroke="#8B5CF6" strokeWidth="1" />
          <line x1="185" y1="95" x2="195" y2="95" stroke="#8B5CF6" strokeWidth="1" />
          <line x1="185" y1="100" x2="195" y2="100" stroke="#8B5CF6" strokeWidth="1" />
          <text x="190" y="120" textAnchor="middle" fill="#8B5CF6" fontSize="8" fontWeight="bold">DOCUMENTS</text>
          
          {/* Connection lines */}
          <line x1="80" y1="50" x2="95" y2="60" stroke="#6B7280" strokeWidth="2" />
          <line x1="80" y1="100" x2="95" y2="90" stroke="#6B7280" strokeWidth="2" />
          <line x1="170" y1="50" x2="155" y2="60" stroke="#6B7280" strokeWidth="2" />
          <line x1="170" y1="100" x2="155" y2="90" stroke="#6B7280" strokeWidth="2" />
          
          {/* Value added label */}
          <rect x="75" y="20" width="100" height="15" rx="3" fill="white" className="dark:fill-gray-200" />
          <text x="125" y="30" textAnchor="middle" fill="#1E40AF" fontSize="8" fontWeight="bold">VALUE ADDED SERVICES</text>
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">AWATAC offers a range of value added services to enhance your logistics experience. From packaging and labeling to consulting and insurance, we provide comprehensive support for your supply chain needs.</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>Packing and repacking</li>
        <li>Labeling and barcoding</li>
        <li>Insurance and documentation</li>
        <li>Consulting and trade advisory</li>
        <li>Custom solutions for unique requirements</li>
      </ul>
      <p className="dark:text-gray-300">Contact us to learn more about our value added services.</p>
    </div>
  </div>
);

export default ValueAddedServices;