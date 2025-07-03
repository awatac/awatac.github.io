import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const Consulting: React.FC = () => (
  <ServiceLayout 
    title="Consulting" 
    subtitle="Expert logistics and supply chain consulting"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4 dark:text-gray-300">AWATAC offers expert consulting services to optimize your logistics, trade, and supply chain operations. Our team provides strategic advice, process improvements, and compliance guidance tailored to your business.</p>
          <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
            <li>Logistics and supply chain consulting</li>
            <li>Trade compliance and regulations</li>
            <li>Process optimization and cost reduction</li>
            <li>Customs and documentation advisory</li>
            <li>Training and capacity building</li>
          </ul>
          <p className="dark:text-gray-300">Contact us for professional consulting solutions for your business.</p>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center transition-colors">
          <svg className="w-48 h-48 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default Consulting;