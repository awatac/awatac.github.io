import React from 'react';

const PortAgency: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Port Agency</h1>
      <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="250" height="150" viewBox="0 0 250 150">
          <defs>
            <linearGradient id="portGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
          
          {/* Port infrastructure */}
          <rect x="20" y="60" width="210" height="60" fill="#6B7280" />
          
          {/* Berths */}
          <rect x="30" y="60" width="40" height="60" fill="#9CA3AF" />
          <rect x="80" y="60" width="40" height="60" fill="#9CA3AF" />
          <rect x="130" y="60" width="40" height="60" fill="#9CA3AF" />
          <rect x="180" y="60" width="40" height="60" fill="#9CA3AF" />
          
          {/* Vessels at berth */}
          <path d="M35 90 L65 90 L60 110 L40 110 Z" fill="url(#portGradient)" />
          <rect x="55" y="80" width="5" height="10" fill="url(#portGradient)" />
          
          <path d="M85 100 L115 100 L110 120 L90 120 Z" fill="#10B981" />
          <rect x="105" y="90" width="5" height="10" fill="#10B981" />
          
          <path d="M135 95 L165 95 L160 115 L140 115 Z" fill="#F59E0B" />
          <rect x="155" y="85" width="5" height="10" fill="#F59E0B" />
          
          <path d="M185 90 L215 90 L210 110 L190 110 Z" fill="#EF4444" />
          <rect x="205" y="80" width="5" height="10" fill="#EF4444" />
          
          {/* Cranes */}
          <rect x="40" y="30" width="5" height="30" fill="#374151" />
          <rect x="30" y="35" width="25" height="5" fill="#374151" />
          <line x1="35" y1="35" x2="35" y2="50" stroke="#374151" strokeWidth="2" />
          <rect x="30" y="50" width="10" height="5" fill="#374151" />
          
          <rect x="90" y="30" width="5" height="30" fill="#374151" />
          <rect x="80" y="35" width="25" height="5" fill="#374151" />
          <line x1="85" y1="35" x2="85" y2="50" stroke="#374151" strokeWidth="2" />
          <rect x="80" y="50" width="10" height="5" fill="#374151" />
          
          <rect x="140" y="30" width="5" height="30" fill="#374151" />
          <rect x="130" y="35" width="25" height="5" fill="#374151" />
          <line x1="135" y1="35" x2="135" y2="50" stroke="#374151" strokeWidth="2" />
          <rect x="130" y="50" width="10" height="5" fill="#374151" />
          
          <rect x="190" y="30" width="5" height="30" fill="#374151" />
          <rect x="180" y="35" width="25" height="5" fill="#374151" />
          <line x1="185" y1="35" x2="185" y2="50" stroke="#374151" strokeWidth="2" />
          <rect x="180" y="50" width="10" height="5" fill="#374151" />
          
          {/* Port agency office */}
          <rect x="100" y="20" width="50" height="30" fill="#F3F4F6" className="dark:fill-gray-600" stroke="#3B82F6" strokeWidth="2" />
          <rect x="105" y="25" width="40" height="20" fill="#60A5FA" opacity="0.5" />
          <text x="125" y="40" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">PORT AGENCY</text>
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">AWATAC offers comprehensive port agency services, ensuring smooth vessel operations at all major ports. Our experienced team handles all port formalities, crew changes, and supply arrangements efficiently.</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>Vessel arrival and departure formalities</li>
        <li>Crew change and repatriation</li>
        <li>Supply and spare parts delivery</li>
        <li>Port clearance and documentation</li>
        <li>24/7 support and coordination</li>
      </ul>
      <p className="dark:text-gray-300">Contact us for reliable port agency solutions.</p>
    </div>
  </div>
);

export default PortAgency;