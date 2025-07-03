import React from 'react';

const InventoryManagement: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Inventory Management</h1>
      <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="250" height="150" viewBox="0 0 250 150">
          <defs>
            <linearGradient id="inventoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
          
          {/* Warehouse shelves */}
          <rect x="40" y="40" width="170" height="80" fill="#F3F4F6" className="dark:fill-gray-600" stroke="#6B7280" strokeWidth="2" />
          
          {/* Shelf dividers */}
          <line x1="40" y1="60" x2="210" y2="60" stroke="#6B7280" strokeWidth="2" />
          <line x1="40" y1="80" x2="210" y2="80" stroke="#6B7280" strokeWidth="2" />
          <line x1="40" y1="100" x2="210" y2="100" stroke="#6B7280" strokeWidth="2" />
          
          <line x1="70" y1="40" x2="70" y2="120" stroke="#6B7280" strokeWidth="2" />
          <line x1="100" y1="40" x2="100" y2="120" stroke="#6B7280" strokeWidth="2" />
          <line x1="130" y1="40" x2="130" y2="120" stroke="#6B7280" strokeWidth="2" />
          <line x1="160" y1="40" x2="160" y2="120" stroke="#6B7280" strokeWidth="2" />
          <line x1="190" y1="40" x2="190" y2="120" stroke="#6B7280" strokeWidth="2" />
          
          {/* Inventory items */}
          <rect x="45" y="45" width="20" height="10" fill="#EF4444" />
          <rect x="75" y="45" width="20" height="10" fill="#F59E0B" />
          <rect x="105" y="45" width="20" height="10" fill="#10B981" />
          <rect x="135" y="45" width="20" height="10" fill="#3B82F6" />
          <rect x="165" y="45" width="20" height="10" fill="#8B5CF6" />
          
          <rect x="45" y="65" width="20" height="10" fill="#EC4899" />
          <rect x="75" y="65" width="20" height="10" fill="#06B6D4" />
          <rect x="105" y="65" width="20" height="10" fill="#84CC16" />
          <rect x="135" y="65" width="20" height="10" fill="#F97316" />
          <rect x="165" y="65" width="20" height="10" fill="#EF4444" />
          
          <rect x="45" y="85" width="20" height="10" fill="#F59E0B" />
          <rect x="75" y="85" width="20" height="10" fill="#10B981" />
          <rect x="105" y="85" width="20" height="10" fill="#3B82F6" />
          <rect x="135" y="85" width="20" height="10" fill="#8B5CF6" />
          <rect x="165" y="85" width="20" height="10" fill="#EC4899" />
          
          <rect x="45" y="105" width="20" height="10" fill="#06B6D4" />
          <rect x="75" y="105" width="20" height="10" fill="#84CC16" />
          <rect x="105" y="105" width="20" height="10" fill="#F97316" />
          <rect x="135" y="105" width="20" height="10" fill="#EF4444" />
          <rect x="165" y="105" width="20" height="10" fill="#F59E0B" />
          
          {/* Inventory management system */}
          <rect x="220" y="40" width="25" height="40" fill="url(#inventoryGradient)" />
          <rect x="225" y="45" width="15" height="25" fill="#F3F4F6" className="dark:fill-gray-200" />
          <line x1="227" y1="50" x2="238" y2="50" stroke="#3B82F6" strokeWidth="1" />
          <line x1="227" y1="55" x2="238" y2="55" stroke="#3B82F6" strokeWidth="1" />
          <line x1="227" y1="60" x2="238" y2="60" stroke="#3B82F6" strokeWidth="1" />
          <line x1="227" y1="65" x2="238" y2="65" stroke="#3B82F6" strokeWidth="1" />
          
          {/* Barcode scanner */}
          <rect x="220" y="90" width="15" height="8" fill="#6B7280" />
          <path d="M235 94 L245 94" stroke="#EF4444" strokeWidth="1" />
          
          {/* Worker */}
          <circle cx="20" cy="90" r="5" fill="#FCD34D" />
          <rect x="17" y="95" width="6" height="15" fill="#3B82F6" />
          <line x1="17" y1="100" x2="23" y2="100" stroke="#3B82F6" strokeWidth="1" />
          
          {/* Inventory label */}
          <rect x="75" y="20" width="100" height="15" rx="3" fill="white" className="dark:fill-gray-200" />
          <text x="125" y="30" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">INVENTORY MANAGEMENT</text>
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">AWATAC provides advanced inventory management solutions to optimize your supply chain. Our systems ensure accurate stock levels, real-time visibility, and efficient order fulfillment for your business.</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>Real-time inventory tracking</li>
        <li>Automated stock replenishment</li>
        <li>Order picking and packing</li>
        <li>Integration with warehousing and distribution</li>
        <li>Customizable reporting and analytics</li>
      </ul>
      <p className="dark:text-gray-300">Contact us to streamline your inventory management processes.</p>
    </div>
  </div>
);

export default InventoryManagement;