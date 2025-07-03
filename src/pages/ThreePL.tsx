import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const ThreePL: React.FC = () => (
  <ServiceLayout 
    title="3PL (Third-Party Logistics)" 
    subtitle="Comprehensive logistics solutions for your business"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4 dark:text-gray-300">AWATAC delivers integrated 3PL solutions, managing your supply chain from end to end. Our services include warehousing, transportation, distribution, and value-added logistics, tailored to your business needs.</p>
          <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
            <li>Comprehensive supply chain management</li>
            <li>Flexible warehousing and inventory solutions</li>
            <li>Efficient transportation and distribution</li>
            <li>Order fulfillment and last-mile delivery</li>
            <li>Customizable value-added services</li>
          </ul>
          <p className="dark:text-gray-300">Partner with us for scalable and cost-effective 3PL services.</p>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center transition-colors">
          <svg className="w-48 h-48 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default ThreePL;