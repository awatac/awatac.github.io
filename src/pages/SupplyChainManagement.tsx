import React from 'react';

const SupplyChainManagement: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Supply Chain Management</h1>
      <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="300" height="150" viewBox="0 0 300 150">
          <defs>
            <linearGradient id="supplyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
          
          {/* Supply chain flow */}
          <rect x="20" y="60" width="40" height="30" rx="5" fill="#10B981" />
          <text x="40" y="80" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">SOURCE</text>
          
          <rect x="90" y="60" width="40" height="30" rx="5" fill="#F59E0B" />
          <text x="110" y="80" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">MAKE</text>
          
          <rect x="160" y="60" width="40" height="30" rx="5" fill="#3B82F6" />
          <text x="180" y="80" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">DELIVER</text>
          
          <rect x="230" y="60" width="40" height="30" rx="5" fill="#8B5CF6" />
          <text x="250" y="80" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">RETURN</text>
          
          {/* Flow arrows */}
          <path d="M60 75 L90 75" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M130 75 L160 75" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M200 75 L230 75" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M250 90 Q200 120 150 120 Q100 120 50 90" stroke="#6B7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
            </marker>
          </defs>
          
          {/* Supply chain elements */}
          <rect x="25" y="30" width="30" height="20" fill="#F3F4F6" className="dark:fill-gray-600" />
          <circle cx="40" cy="40" r="5" fill="#10B981" />
          
          <rect x="95" y="30" width="30" height="20" fill="#F3F4F6" className="dark:fill-gray-600" />
          <rect x="100" y="35" width="20" height="10" fill="#F59E0B" />
          
          <rect x="165" y="30" width="30" height="20" fill="#F3F4F6" className="dark:fill-gray-600" />
          <path d="M170 40 L190 40 L185 45 L175 45 Z" fill="#3B82F6" />
          
          <rect x="235" y="30" width="30" height="20" fill="#F3F4F6" className="dark:fill-gray-600" />
          <path d="M245 35 L255 35 L255 45 L245 45 Z" fill="#8B5CF6" />
          <path d="M250 35 L250 45" stroke="#8B5CF6" strokeWidth="1" />
          <path d="M245 40 L255 40" stroke="#8B5CF6" strokeWidth="1" />
          
          {/* Data visualization */}
          <rect x="120" y="100" width="60" height="30" fill="white" className="dark:fill-gray-200" />
          <line x1="130" y1="110" x2="170" y2="110" stroke="#3B82F6" strokeWidth="1" />
          <line x1="130" y1="115" x2="160" y2="115" stroke="#3B82F6" strokeWidth="1" />
          <line x1="130" y1="120" x2="165" y2="120" stroke="#3B82F6" strokeWidth="1" />
          <path d="M130 125 L135 122 L140 127 L145 120 L150 123 L155 118 L160 125 L165 115 L170 120" stroke="#EF4444" strokeWidth="1" fill="none" />
          
          {/* Supply chain management label */}
          <rect x="75" y="10" width="150" height="15" rx="3" fill="white" className="dark:fill-gray-200" />
          <text x="150" y="20" textAnchor="middle" fill="#1E40AF" fontSize="8" fontWeight="bold">SUPPLY CHAIN MANAGEMENT</text>
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">AWATAC delivers end-to-end supply chain management solutions, optimizing every link from procurement to delivery. Our expertise ensures efficiency, cost savings, and seamless integration for your business operations.</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>Procurement and sourcing</li>
        <li>Inventory and warehouse management</li>
        <li>Order fulfillment and distribution</li>
        <li>Supply chain visibility and analytics</li>
        <li>Custom solutions for complex supply chains</li>
      </ul>
      <p className="dark:text-gray-300">Contact us to streamline your supply chain with our expert solutions.</p>
    </div>
  </div>
);

export default SupplyChainManagement;