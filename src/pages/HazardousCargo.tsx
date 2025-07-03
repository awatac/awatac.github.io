import React from 'react';

const HazardousCargo: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Hazardous Cargo</h1>
      <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="200" height="150" viewBox="0 0 200 150">
          <defs>
            <linearGradient id="hazardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#B91C1C" />
            </linearGradient>
          </defs>
          
          {/* Hazardous cargo container */}
          <rect x="50" y="50" width="100" height="70" fill="url(#hazardGradient)" />
          <rect x="55" y="55" width="90" height="60" fill="#F3F4F6" className="dark:fill-gray-600" />
          
          {/* Hazard symbols */}
          <polygon points="80,65 90,80 70,80" fill="#EF4444" />
          <text x="80" y="77" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">!</text>
          
          <circle cx="120" cy="72" r="10" fill="#F59E0B" />
          <text x="120" y="76" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">!</text>
          
          {/* Hazard labels */}
          <rect x="70" y="90" width="20" height="20" fill="#EF4444" />
          <text x="80" y="103" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">3</text>
          
          <rect x="100" y="90" width="20" height="20" fill="#F59E0B" />
          <text x="110" y="103" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">5.1</text>
          
          <rect x="130" y="90" width="20" height="20" fill="#10B981" />
          <text x="140" y="103" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">8</text>
          
          {/* Safety equipment */}
          <rect x="30" y="60" width="15" height="20" fill="#3B82F6" />
          <circle cx="37" cy="65" r="3" fill="#60A5FA" />
          
          <rect x="30" y="90" width="15" height="20" fill="#8B5CF6" />
          <circle cx="37" cy="95" r="3" fill="#A78BFA" />
          
          {/* Handling instructions */}
          <rect x="155" y="55" width="25" height="60" fill="white" className="dark:fill-gray-200" />
          <line x1="160" y1="65" x2="175" y2="65" stroke="#374151" strokeWidth="1" />
          <line x1="160" y1="70" x2="170" y2="70" stroke="#374151" strokeWidth="1" />
          <line x1="160" y1="75" x2="175" y2="75" stroke="#374151" strokeWidth="1" />
          <line x1="160" y1="80" x2="170" y2="80" stroke="#374151" strokeWidth="1" />
          <line x1="160" y1="85" x2="175" y2="85" stroke="#374151" strokeWidth="1" />
          <line x1="160" y1="90" x2="170" y2="90" stroke="#374151" strokeWidth="1" />
          <line x1="160" y1="95" x2="175" y2="95" stroke="#374151" strokeWidth="1" />
          <line x1="160" y1="100" x2="170" y2="100" stroke="#374151" strokeWidth="1" />
          
          {/* Certification seal */}
          <circle cx="100" cy="30" r="12" fill="#10B981" />
          <text x="100" y="34" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">CERT</text>
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">AWATAC is experienced in handling hazardous and dangerous goods, ensuring compliance with international safety standards. We provide specialized packaging, documentation, and transport for all classes of hazardous cargo.</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>Certified hazardous cargo handling</li>
        <li>Compliance with IMDG, IATA, and ADR regulations</li>
        <li>Specialized packaging and labeling</li>
        <li>Documentation and permits</li>
        <li>Trained personnel and safety protocols</li>
      </ul>
      <p className="dark:text-gray-300">Contact us for safe and compliant hazardous cargo logistics.</p>
    </div>
  </div>
);

export default HazardousCargo;