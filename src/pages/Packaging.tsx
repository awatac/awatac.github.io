import React from 'react';

const Packaging: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Packaging</h1>
      <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="200" height="150" viewBox="0 0 200 150">
          <defs>
            <linearGradient id="packageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          
          {/* Main package */}
          <rect x="70" y="50" width="60" height="60" fill="url(#packageGradient)" />
          <rect x="75" y="55" width="50" height="50" fill="#F3F4F6" className="dark:fill-gray-600" />
          
          {/* Package tape */}
          <rect x="70" y="75" width="60" height="10" fill="#6B7280" />
          <rect x="95" y="50" width="10" height="60" fill="#6B7280" />
          
          {/* Shipping label */}
          <rect x="80" y="60" width="20" height="10" fill="white" className="dark:fill-gray-200" />
          <line x1="82" y1="63" x2="98" y2="63" stroke="#374151" strokeWidth="1" />
          <line x1="82" y1="66" x2="95" y2="66" stroke="#374151" strokeWidth="1" />
          <line x1="82" y1="69" x2="98" y2="69" stroke="#374151" strokeWidth="1" />
          
          {/* Barcode */}
          <rect x="110" y="60" width="10" height="10" fill="white" className="dark:fill-gray-200" />
          <line x1="111" y1="62" x2="111" y2="68" stroke="#374151" strokeWidth="1" />
          <line x1="113" y1="62" x2="113" y2="68" stroke="#374151" strokeWidth="1" />
          <line x1="115" y1="62" x2="115" y2="68" stroke="#374151" strokeWidth="1" />
          <line x1="117" y1="62" x2="117" y2="68" stroke="#374151" strokeWidth="1" />
          <line x1="119" y1="62" x2="119" y2="68" stroke="#374151" strokeWidth="1" />
          
          {/* Fragile symbol */}
          <rect x="80" y="85" width="15" height="15" fill="#EF4444" />
          <text x="87" y="95" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">!</text>
          
          {/* This side up */}
          <rect x="105" y="85" width="15" height="15" fill="#10B981" />
          <path d="M112 88 L112 95 L108 92 L112 88 L116 92 L112 95" fill="white" />
          
          {/* Packaging materials */}
          <rect x="30" y="70" width="30" height="20" fill="#E5E7EB" className="dark:fill-gray-500" opacity="0.7" />
          <rect x="140" y="70" width="30" height="20" fill="#E5E7EB" className="dark:fill-gray-500" opacity="0.7" />
          <path d="M30 80 Q45 60 60 80" stroke="#E5E7EB" className="dark:stroke-gray-500" strokeWidth="3" fill="none" opacity="0.7" />
          <path d="M140 80 Q155 60 170 80" stroke="#E5E7EB" className="dark:stroke-gray-500" strokeWidth="3" fill="none" opacity="0.7" />
          
          {/* Packaging tools */}
          <rect x="40" y="100" width="20" height="5" fill="#6B7280" />
          <rect x="45" y="95" width="10" height="5" fill="#6B7280" />
          
          <rect x="140" y="100" width="20" height="5" fill="#6B7280" />
          <circle cx="150" cy="95" r="5" fill="#6B7280" />
          
          {/* Packaging label */}
          <rect x="75" y="30" width="50" height="15" rx="3" fill="white" className="dark:fill-gray-200" />
          <text x="100" y="40" textAnchor="middle" fill="#D97706" fontSize="8" fontWeight="bold">PROFESSIONAL PACKAGING</text>
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">AWATAC provides professional packaging solutions to protect your goods during transit and storage. Our services include custom packing, labeling, and compliance with international shipping standards.</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>Custom packaging for all cargo types</li>
        <li>Protective materials and techniques</li>
        <li>Labeling and barcoding</li>
        <li>Compliance with shipping regulations</li>
        <li>On-site packing services</li>
      </ul>
      <p className="dark:text-gray-300">Contact us for secure and compliant packaging solutions.</p>
    </div>
  </div>
);

export default Packaging;