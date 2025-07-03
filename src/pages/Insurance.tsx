import React from 'react';

const Insurance: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Insurance</h1>
      <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="200" height="150" viewBox="0 0 200 150">
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
          
          {/* Shield */}
          <path d="M100 20 L140 40 L140 90 C140 110 120 130 100 130 C80 130 60 110 60 90 L60 40 Z" fill="url(#shieldGradient)" />
          <path d="M100 30 L130 45 L130 90 C130 105 115 120 100 120 C85 120 70 105 70 90 L70 45 Z" fill="#F3F4F6" className="dark:fill-gray-600" />
          
          {/* Checkmark */}
          <path d="M85 85 L95 95 L115 70" stroke="#10B981" strokeWidth="5" fill="none" />
          
          {/* Cargo elements */}
          <rect x="40" y="60" width="20" height="20" fill="#F59E0B" />
          <rect x="140" y="60" width="20" height="20" fill="#F59E0B" />
          <rect x="40" y="90" width="20" height="20" fill="#F59E0B" />
          <rect x="140" y="90" width="20" height="20" fill="#F59E0B" />
          
          {/* Protection indicators */}
          <circle cx="50" cy="70" r="15" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="2,2" />
          <circle cx="150" cy="70" r="15" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="2,2" />
          <circle cx="50" cy="100" r="15" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="2,2" />
          <circle cx="150" cy="100" r="15" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="2,2" />
          
          {/* Document */}
          <rect x="160" y="30" width="25" height="30" fill="white" className="dark:fill-gray-200" stroke="#6B7280" strokeWidth="1" />
          <line x1="165" y1="40" x2="180" y2="40" stroke="#6B7280" strokeWidth="1" />
          <line x1="165" y1="45" x2="180" y2="45" stroke="#6B7280" strokeWidth="1" />
          <line x1="165" y1="50" x2="180" y2="50" stroke="#6B7280" strokeWidth="1" />
          <circle cx="175" cy="35" r="5" fill="#EF4444" opacity="0.8" />
          <text x="175" y="38" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">INS</text>
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">AWATAC offers comprehensive cargo insurance solutions to protect your shipments against loss or damage. Our insurance partners provide tailored coverage for all types of cargo and transport modes.</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>All-risk and specific-risk coverage</li>
        <li>Fast claims processing</li>
        <li>Competitive premiums</li>
        <li>Coverage for all cargo types</li>
        <li>Expert insurance consulting</li>
      </ul>
      <p className="dark:text-gray-300">Contact us to secure your cargo with the right insurance plan.</p>
    </div>
  </div>
);

export default Insurance;