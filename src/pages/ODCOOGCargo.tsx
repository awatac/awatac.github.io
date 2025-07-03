import React from 'react';

const ODCOOGCargo: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">ODC/OOG Cargo</h1>
      <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="250" height="150" viewBox="0 0 250 150">
          <defs>
            <linearGradient id="odcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="truckGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
          
          {/* Road */}
          <rect x="20" y="120" width="210" height="20" fill="#6B7280" />
          <rect x="30" y="129" width="20" height="2" fill="white" />
          <rect x="70" y="129" width="20" height="2" fill="white" />
          <rect x="110" y="129" width="20" height="2" fill="white" />
          <rect x="150" y="129" width="20" height="2" fill="white" />
          <rect x="190" y="129" width="20" height="2" fill="white" />
          
          {/* Specialized transport truck */}
          <rect x="40" y="100" width="80" height="20" fill="url(#truckGradient)" />
          <rect x="30" y="105" width="20" height="15" fill="url(#truckGradient)" />
          <circle cx="40" cy="120" r="5" fill="#374151" />
          <circle cx="60" cy="120" r="5" fill="#374151" />
          <circle cx="80" cy="120" r="5" fill="#374151" />
          <circle cx="100" cy="120" r="5" fill="#374151" />
          
          {/* Oversized cargo */}
          <rect x="50" y="70" width="100" height="30" fill="url(#odcGradient)" />
          <rect x="55" y="75" width="90" height="20" fill="#F3F4F6" className="dark:fill-gray-600" />
          
          {/* Warning signs */}
          <rect x="30" y="80" width="15" height="15" fill="#EF4444" />
          <text x="37" y="90" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">!</text>
          
          <rect x="155" y="80" width="15" height="15" fill="#EF4444" />
          <text x="162" y="90" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">!</text>
          
          {/* Escort vehicle */}
          <rect x="150" y="105" width="30" height="15" fill="#F59E0B" />
          <rect x="155" y="95" width="20" height="10" fill="#F59E0B" />
          <circle cx="160" cy="120" r="5" fill="#374151" />
          <circle cx="170" cy="120" r="5" fill="#374151" />
          
          {/* Warning lights */}
          <circle cx="165" cy="95" r="3" fill="#EF4444" />
          <circle cx="165" cy="95" r="5" fill="#EF4444" opacity="0.3" />
          
          {/* Measurement indicators */}
          <line x1="50" y1="60" x2="150" y2="60" stroke="#6B7280" strokeWidth="1" />
          <line x1="50" y1="60" x2="50" y2="65" stroke="#6B7280" strokeWidth="1" />
          <line x1="150" y1="60" x2="150" y2="65" stroke="#6B7280" strokeWidth="1" />
          <text x="100" y="55" textAnchor="middle" fill="#6B7280" fontSize="8">OVERSIZED WIDTH</text>
          
          <line x1="180" y1="70" x2="180" y2="100" stroke="#6B7280" strokeWidth="1" />
          <line x1="180" y1="70" x2="175" y2="70" stroke="#6B7280" strokeWidth="1" />
          <line x1="180" y1="100" x2="175" y2="100" stroke="#6B7280" strokeWidth="1" />
          <text x="190" y="85" textAnchor="middle" fill="#6B7280" fontSize="8" transform="rotate(90, 190, 85)">HEIGHT</text>
          
          {/* ODC/OOG label */}
          <rect x="75" y="30" width="100" height="20" rx="3" fill="white" className="dark:fill-gray-200" />
          <text x="125" y="44" textAnchor="middle" fill="#D97706" fontSize="10" fontWeight="bold">ODC/OOG CARGO</text>
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">AWATAC specializes in handling Over Dimensional Cargo (ODC) and Out of Gauge (OOG) shipments that exceed standard container dimensions. Our expertise ensures safe and compliant transport of oversized and heavy cargo.</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>Specialized equipment for oversized cargo</li>
        <li>Route surveys and planning</li>
        <li>Permits and escort arrangements</li>
        <li>Custom loading and securing solutions</li>
        <li>Experienced project cargo team</li>
      </ul>
      <p className="dark:text-gray-300">Contact us for expert handling of your oversized and out-of-gauge shipments.</p>
    </div>
  </div>
);

export default ODCOOGCargo;