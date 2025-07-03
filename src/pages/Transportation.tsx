import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const Transportation: React.FC = () => (
  <ServiceLayout 
    title="Transportation & Distribution" 
    subtitle="Efficient, integrated logistics for every shipment"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Transportation & Distribution</h2>
          <p className="mb-4 dark:text-gray-300">Be it a high-priority container delivery or competitively priced consolidated shipment, AWATAC provides highly integrated and customized transportation & distribution logistic services via:</p>
          <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
            <li>Multi-modal delivery options</li>
            <li>Highly organized transportation of shipments</li>
            <li>Tailored industry-specific transport for additional complex logistical assignments</li>
            <li>Advanced access systems to ensure fast distribution services</li>
            <li>Real time access to the shipment position with tracking system</li>
          </ul>
          <p className="mb-4 dark:text-gray-300">Our expedited team of well qualified and trained professionals works in close coordination with the clients to help them in overcoming trade, technical and process barriers of logistics with consistent focus on safe transport, careful handling and courteous service.</p>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center transition-colors">
          <svg className="w-48 h-48 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default Transportation;