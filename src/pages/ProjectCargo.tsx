import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const ProjectCargo: React.FC = () => (
  <ServiceLayout 
    title="Project Cargo & Vessel Handling" 
    subtitle="Specialized solutions for complex logistics challenges"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Vessel Handling</h2>
          <p className="mb-4 dark:text-gray-300">With an extensive network of suppliers, AWATAC provides a comprehensive menu of customized vessel handling services that includes:</p>
          <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
            <li>Pre-arrival notification to local port authorities</li>
            <li>Hassle-free customs clearance of vessel</li>
            <li>Statutory surveys of cargo Quality and Quantity</li>
            <li>Hull and engine repairs</li>
            <li>Stevedoring</li>
            <li>Immigration formalities and others</li>
          </ul>
          <p className="mb-4 dark:text-gray-300">From heavy shipment to chastening shipment handling, the dedicated team of expedited ship agents hired by us work in close coordination with the clients to ensure reliable client centric services within the time constraints.</p>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center transition-colors">
          <svg className="w-48 h-48 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default ProjectCargo;