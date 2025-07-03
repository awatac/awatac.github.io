import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const Distribution: React.FC = () => (
  <ServiceLayout 
    title="Distribution" 
    subtitle="Efficient product distribution solutions"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4 dark:text-gray-300">AWATAC offers efficient distribution solutions, ensuring your products reach customers and partners on time. Our network and technology enable fast, accurate, and cost-effective distribution across regions.</p>
          <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
            <li>Regional and national distribution</li>
            <li>Order fulfillment and last-mile delivery</li>
            <li>Inventory and warehouse integration</li>
            <li>Real-time tracking and reporting</li>
            <li>Custom distribution strategies</li>
          </ul>
          <p className="dark:text-gray-300">Contact us for reliable and scalable distribution services.</p>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center transition-colors">
          <svg className="w-48 h-48 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default Distribution;