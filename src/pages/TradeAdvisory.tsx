import React from 'react';

const TradeAdvisory: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Trade Advisory</h1>
      <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="200" height="150" viewBox="0 0 200 150">
          <defs>
            <linearGradient id="advisoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
          
          {/* Globe */}
          <circle cx="100" cy="75" r="40" fill="url(#advisoryGradient)" opacity="0.2" />
          <circle cx="100" cy="75" r="38" fill="none" stroke="url(#advisoryGradient)" strokeWidth="2" />
          <ellipse cx="100" cy="75" rx="38" ry="15" fill="none" stroke="url(#advisoryGradient)" strokeWidth="1" />
          <line x1="62" y1="75" x2="138" y2="75" stroke="url(#advisoryGradient)" strokeWidth="1" />
          <line x1="100" y1="37" x2="100" y2="113" stroke="url(#advisoryGradient)" strokeWidth="1" />
          
          {/* Trade routes */}
          <path d="M80 55 Q100 45 120 55" stroke="#F59E0B" strokeWidth="2" fill="none" />
          <path d="M80 95 Q100 105 120 95" stroke="#10B981" strokeWidth="2" fill="none" />
          <path d="M80 65 Q100 85 120 65" stroke="#EF4444" strokeWidth="2" fill="none" />
          
          {/* Trade points */}
          <circle cx="80" cy="55" r="3" fill="#F59E0B" />
          <circle cx="120" cy="55" r="3" fill="#F59E0B" />
          <circle cx="80" cy="95" r="3" fill="#10B981" />
          <circle cx="120" cy="95" r="3" fill="#10B981" />
          <circle cx="80" cy="65" r="3" fill="#EF4444" />
          <circle cx="120" cy="65" r="3" fill="#EF4444" />
          
          {/* Documents */}
          <rect x="30" y="50" width="25" height="35" fill="white" className="dark:fill-gray-200" stroke="#6B7280" strokeWidth="1" />
          <line x1="35" y1="60" x2="50" y2="60" stroke="#6B7280" strokeWidth="1" />
          <line x1="35" y1="65" x2="50" y2="65" stroke="#6B7280" strokeWidth="1" />
          <line x1="35" y1="70" x2="50" y2="70" stroke="#6B7280" strokeWidth="1" />
          <line x1="35" y1="75" x2="45" y2="75" stroke="#6B7280" strokeWidth="1" />
          
          <rect x="145" y="50" width="25" height="35" fill="white" className="dark:fill-gray-200" stroke="#6B7280" strokeWidth="1" />
          <line x1="150" y1="60" x2="165" y2="60" stroke="#6B7280" strokeWidth="1" />
          <line x1="150" y1="65" x2="165" y2="65" stroke="#6B7280" strokeWidth="1" />
          <line x1="150" y1="70" x2="165" y2="70" stroke="#6B7280" strokeWidth="1" />
          <line x1="150" y1="75" x2="160" y2="75" stroke="#6B7280" strokeWidth="1" />
          
          {/* Advisor figure */}
          <circle cx="40" cy="110" r="8" fill="#FCD34D" />
          <rect x="36" y="118" width="8" height="12" fill="#3B82F6" />
          <line x1="32" y1="125" x2="48" y2="125" stroke="#3B82F6" strokeWidth="2" />
          
          {/* Lightbulb - advice */}
          <circle cx="160" cy="110" r="10" fill="#F59E0B" />
          <circle cx="160" cy="110" r="15" fill="#F59E0B" opacity="0.3" />
          <path d="M160 100 L160 105 M155 102 L165 102" stroke="white" strokeWidth="2" />
          
          {/* Trade advisory label */}
          <rect x="75" y="20" width="50" height="15" rx="3" fill="white" className="dark:fill-gray-200" />
          <text x="100" y="30" textAnchor="middle" fill="#1E40AF" fontSize="8" fontWeight="bold">TRADE ADVISORY</text>
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">AWATAC provides trade advisory services to help you navigate complex international trade regulations and opportunities. Our experts offer guidance on compliance, market entry, and risk management.</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>International trade compliance</li>
        <li>Market entry strategy</li>
        <li>Risk assessment and mitigation</li>
        <li>Tariff and duty consulting</li>
        <li>Customs and regulatory advisory</li>
      </ul>
      <p className="dark:text-gray-300">Contact us for expert trade advisory support for your business growth.</p>
    </div>
  </div>
);

export default TradeAdvisory;