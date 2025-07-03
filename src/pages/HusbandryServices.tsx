import React from 'react';

const HusbandryServices: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Vessel Husbandry</h1>
      <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="250" height="150" viewBox="0 0 250 150">
          <defs>
            <linearGradient id="vesselGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          
          {/* Ocean */}
          <path d="M0 120 Q50 110 100 120 T200 120 T250 120 L250 150 L0 150 Z" fill="url(#oceanGradient)" opacity="0.6" />
          <path d="M0 125 Q30 115 60 125 T120 125 T180 125 T240 125" stroke="#93C5FD" strokeWidth="2" fill="none" opacity="0.8" />
          
          {/* Vessel */}
          <path d="M50 100 L200 100 L190 120 L60 120 Z" fill="url(#vesselGradient)" />
          <rect x="180" y="80" width="20" height="20" fill="url(#vesselGradient)" />
          <rect x="185" y="60" width="10" height="20" fill="url(#vesselGradient)" />
          <circle cx="190" cy="65" r="3" fill="#FCD34D" />
          <circle cx="190" cy="75" r="3" fill="#FCD34D" />
          <circle cx="190" cy="85" r="3" fill="#FCD34D" />
          <circle cx="190" cy="95" r="3" fill="#FCD34D" />
          
          {/* Husbandry services */}
          {/* Supplies */}
          <rect x="80" y="70" width="20" height="15" fill="#10B981" />
          <rect x="85" y="60" width="10" height="10" fill="#10B981" />
          
          {/* Crew change */}
          <circle cx="120" cy="80" r="5" fill="#FCD34D" />
          <rect x="117" y="85" width="6" height="10" fill="#3B82F6" />
          <circle cx="130" cy="80" r="5" fill="#FCD34D" />
          <rect x="127" y="85" width="6" height="10" fill="#F59E0B" />
          
          {/* Repairs */}
          <rect x="150" y="80" width="10" height="10" fill="#6B7280" />
          <path d="M152 85 L158 85 M155 82 L155 88" stroke="white" strokeWidth="1" />
          
          {/* Port services */}
          <rect x="20" y="90" width="5" height="30" fill="#6B7280" />
          <rect x="15" y="90" width="15" height="3" fill="#6B7280" />
          
          {/* Documentation */}
          <rect x="220" y="60" width="20" height="25" fill="white" className="dark:fill-gray-200" />
          <line x1="225" y1="65" x2="235" y2="65" stroke="#374151" strokeWidth="1" />
          <line x1="225" y1="70" x2="235" y2="70" stroke="#374151" strokeWidth="1" />
          <line x1="225" y1="75" x2="235" y2="75" stroke="#374151" strokeWidth="1" />
          <line x1="225" y1="80" x2="235" y2="80" stroke="#374151" strokeWidth="1" />
          
          {/* Service label */}
          <rect x="75" y="30" width="100" height="20" rx="3" fill="white" className="dark:fill-gray-200" />
          <text x="125" y="44" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">VESSEL HUSBANDRY</text>
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">Many of your pre-defined port call requirements become an integral part of AWATAC Vessel Husbandry operational system. Our deft staff of experts works as your trusted extension team to help you get back to sea as quickly as possible.</p>
      <p className="mb-4 dark:text-gray-300">We strive to make your port calls efficient by providing comprehensive port agent services that include:</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>Pre-arrival and post-departure documentation</li>
        <li>Assist in obtaining port work and maintenance permits</li>
        <li>Monitor and coordinate engine, machinery or other equipment repairs</li>
        <li>Provide marine fuels and lubricants</li>
      </ul>
      <p className="mb-4 dark:text-gray-300">We maintain excellent relationships with local authorities to provide most reliable cost-effective services to our esteemed clients.</p>
    </div>
  </div>
);

export default HusbandryServices;