import React from 'react';

const LCLConsolidation: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">LCL Consolidation</h1>
      <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="250" height="150" viewBox="0 0 250 150">
          <defs>
            <linearGradient id="lclGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          
          {/* Container outline */}
          <rect x="50" y="40" width="150" height="80" fill="url(#lclGradient)" />
          <rect x="55" y="45" width="140" height="70" fill="#F3F4F6" className="dark:fill-gray-600" />
          
          {/* LCL cargo - multiple small shipments */}
          <rect x="60" y="50" width="15" height="15" fill="#EF4444" />
          <rect x="80" y="50" width="20" height="15" fill="#F59E0B" />
          <rect x="105" y="50" width="10" height="15" fill="#10B981" />
          <rect x="120" y="50" width="25" height="15" fill="#3B82F6" />
          <rect x="150" y="50" width="15" height="15" fill="#8B5CF6" />
          <rect x="170" y="50" width="20" height="15" fill="#EC4899" />
          
          <rect x="60" y="70" width="25" height="20" fill="#06B6D4" />
          <rect x="90" y="70" width="15" height="20" fill="#84CC16" />
          <rect x="110" y="70" width="30" height="20" fill="#F97316" />
          <rect x="145" y="70" width="20" height="20" fill="#3B82F6" />
          <rect x="170" y="70" width="20" height="20" fill="#EF4444" />
          
          <rect x="60" y="95" width="20" height="15" fill="#10B981" />
          <rect x="85" y="95" width="30" height="15" fill="#F59E0B" />
          <rect x="120" y="95" width="15" height="15" fill="#8B5CF6" />
          <rect x="140" y="95" width="25" height="15" fill="#EC4899" />
          <rect x="170" y="95" width="20" height="15" fill="#06B6D4" />
          
          {/* Shipping labels */}
          <rect x="65" y="55" width="5" height="5" fill="white" className="dark:fill-gray-200" />
          <rect x="85" y="55" width="5" height="5" fill="white" className="dark:fill-gray-200" />
          <rect x="125" y="55" width="5" height="5" fill="white" className="dark:fill-gray-200" />
          <rect x="155" y="55" width="5" height="5" fill="white" className="dark:fill-gray-200" />
          <rect x="175" y="55" width="5" height="5" fill="white" className="dark:fill-gray-200" />
          
          {/* Consolidation arrows */}
          <path d="M30 60 L45 60" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M30 80 L45 80" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M30 100 L45 100" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
            </marker>
          </defs>
          
          {/* LCL label */}
          <rect x="100" y="20" width="50" height="15" rx="3" fill="white" className="dark:fill-gray-200" />
          <text x="125" y="30" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">LCL</text>
          
          {/* Ocean indication */}
          <path d="M0 130 Q50 120 100 130 T200 130 T250 130 L250 150 L0 150 Z" fill="url(#oceanGradient)" opacity="0.3" />
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">AWATAC offers Less-than-Container Load (LCL) consolidation services, combining multiple shipments to optimize costs and efficiency. Our global network ensures timely and secure delivery for smaller cargo volumes.</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>Regular LCL consolidation schedules</li>
        <li>Cost-effective shipping for small loads</li>
        <li>Secure handling and tracking</li>
        <li>Customs clearance and documentation</li>
        <li>Door-to-door delivery options</li>
      </ul>
      <p className="dark:text-gray-300">Contact us to benefit from our LCL consolidation expertise.</p>
    </div>
  </div>
);

export default LCLConsolidation;