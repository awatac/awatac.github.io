import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const TermsConditions: React.FC = () => (
  <ServiceLayout 
    title="Terms & Conditions" 
    subtitle=""
  >
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Terms & Conditions</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">This page contains the Terms & Conditions for AWATAC Group. [Insert your terms and conditions here.]</p>
    </div>
  </ServiceLayout>
);

export default TermsConditions;