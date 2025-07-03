import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const PrivacyPolicy: React.FC = () => (
  <ServiceLayout 
    title="Privacy Policy" 
    subtitle=""
  >
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Privacy Policy</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">This page contains the Privacy Policy for AWATAC Group. [Insert your privacy policy here.]</p>
    </div>
  </ServiceLayout>
);

export default PrivacyPolicy;