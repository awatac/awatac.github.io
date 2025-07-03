import React from 'react';

const ReeferCargo: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Reefer Cargo</h1>
      <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg mb-8 flex items-center justify-center transition-colors">
        <svg width="200" height="150" viewBox="0 0 200 150">
          <defs>
            <linearGradient id="reeferGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          
          {/* Reefer container */}
          <rect x="50" y="40" width="100" height="70" fill="url(#reeferGradient)" />
          <rect x="55" y="45" width="90" height="60" fill="#F3F4F6" className="dark:fill-gray-600" />
          
          {/* Refrigeration unit */}
          <rect x="145" y="45" width="15" height="60" fill="#6B7280" />
          <rect x="150" y="50" width="5" height="10" fill="#F3F4F6" className="dark:fill-gray-200" />
          <rect x="150" y="65" width="5" height="10" fill="#F3F4F6" className="dark:fill-gray-200" />
          <rect x="150" y="80" width="5" height="10" fill="#F3F4F6" className="dark:fill-gray-200" />
          
          {/* Cooling elements */}
          <path d="M150 50 Q155 55 150 60" stroke="#60A5FA" strokeWidth="1" fill="none" />
          <path d="M150 65 Q155 70 150 75" stroke="#60A5FA" strokeWidth="1" fill="none" />
          <path d="M150 80 Q155 85 150 90" stroke="#60A5FA" strokeWidth="1" fill="none" />
          
          {/* Temperature display */}
          <rect x="60" y="55" width="20" height="10" fill="#374151" />
          <text x="70" y="63" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold">-18°C</text>
          
          {/* Reefer cargo */}
          <rect x="65" y="70" width="15" height="15" fill="#10B981" />
          <rect x="85" y="70" width="15" height="15" fill="#F59E0B" />
          <rect x="105" y="70" width="15" height="15" fill="#3B82F6" />
          <rect x="125" y="70" width="15" height="15" fill="#8B5CF6" />
          
          <rect x="65" y="90" width="15" height="10" fill="#EC4899" />
          <rect x="85" y="90" width="15" height="10" fill="#06B6D4" />
          <rect x="105" y="90" width="15" height="10" fill="#84CC16" />
          <rect x="125" y="90" width="15" height="10" fill="#F97316" />
          
          {/* Cold chain indicators */}
          <circle cx="40" cy="60" r="5" fill="#60A5FA" />
          <circle cx="40" cy="60" r="8" fill="#60A5FA" opacity="0.3" />
          <circle cx="40" cy="75" r="5" fill="#60A5FA" />
          <circle cx="40" cy="75" r="8" fill="#60A5FA" opacity="0.3" />
          <circle cx="40" cy="90" r="5" fill="#60A5FA" />
          <circle cx="40" cy="90" r="8" fill="#60A5FA" opacity="0.3" />
          
          {/* Snowflake symbol */}
          <path d="M100 30 L100 40 M95 32 L105 38 M95 38 L105 32" stroke="#60A5FA" strokeWidth="2" />
          <path d="M100 25 L100 35 M95 27 L105 33 M95 33 L105 27" stroke="#60A5FA" strokeWidth="2" />
          
          {/* Reefer label */}
          <rect x="75" y="115" width="50" height="15" rx="3" fill="white" className="dark:fill-gray-200" />
          <text x="100" y="125" textAnchor="middle" fill="#0284C7" fontSize="8" fontWeight="bold">REEFER CARGO</text>
        </svg>
      </div>
      <p className="mb-4 dark:text-gray-300">AWATAC offers specialized reefer cargo services for temperature-sensitive goods. Our modern refrigerated containers and monitoring systems ensure your perishable cargo arrives in perfect condition.</p>
      <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
        <li>Temperature-controlled shipping</li>
        <li>24/7 monitoring and support</li>
        <li>Customs clearance for perishables</li>
        <li>Flexible pickup and delivery options</li>
        <li>Compliance with food safety standards</li>
      </ul>
      <p className="dark:text-gray-300">Contact us for reliable reefer cargo logistics solutions.</p>
    </div>
  </div>
);

export default ReeferCargo;