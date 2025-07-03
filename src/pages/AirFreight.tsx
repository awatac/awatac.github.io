import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const AirFreight: React.FC = () => (
  <ServiceLayout 
    title="Air Freight" 
    subtitle="Fast and reliable air freight solutions"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4 dark:text-gray-300">AWATAC delivers fast and reliable air freight solutions for urgent and high-value shipments. Our global partnerships and expertise ensure your cargo reaches its destination on time, every time.</p>
          <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
            <li>Express and standard air freight services</li>
            <li>Global network of airline partners</li>
            <li>Customs clearance and documentation</li>
            <li>Door-to-door and airport-to-airport options</li>
            <li>Real-time shipment tracking</li>
          </ul>
          <p className="dark:text-gray-300">Contact us for tailored air freight solutions for your business.</p>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center transition-colors">
          <svg className="w-48 h-48 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default AirFreight;