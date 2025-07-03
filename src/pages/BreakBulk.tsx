import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const BreakBulk: React.FC = () => (
  <ServiceLayout 
    title="Break Bulk Cargo" 
    subtitle="Specialized handling for non-containerized freight"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4 dark:text-gray-300">AWATAC specializes in handling break bulk cargo that doesn't fit standard containers. Our expertise includes:</p>
          <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
            <li>Specialized equipment for oversized cargo</li>
            <li>Expert handling of non-containerized freight</li>
            <li>Custom loading and securing solutions</li>
            <li>Project cargo management</li>
            <li>Comprehensive documentation and compliance</li>
          </ul>
          <p className="mb-4 dark:text-gray-300">We ensure safe and efficient transport of your break bulk shipments, with careful attention to securing, handling, and delivery requirements.</p>
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

export default BreakBulk;