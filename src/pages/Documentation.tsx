import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const Documentation: React.FC = () => (
  <ServiceLayout 
    title="Documentation" 
    subtitle="Expert shipping and trade documentation services"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4 dark:text-gray-300">AWATAC provides complete documentation services for all your logistics and trade needs. We ensure accuracy, compliance, and timely processing of all shipping and customs documents.</p>
          <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
            <li>Shipping and export documentation</li>
            <li>Customs clearance paperwork</li>
            <li>Certificates of origin and inspection</li>
            <li>Trade compliance consulting</li>
            <li>Document legalization and attestation</li>
          </ul>
          <p className="dark:text-gray-300">Contact us for expert documentation support for your shipments.</p>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center transition-colors">
          <svg className="w-48 h-48 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default Documentation;