import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const SailingSchedule: React.FC = () => (
  <ServiceLayout 
    title="Sailing Schedule" 
    subtitle="Check our latest sailing schedules"
  >
    <div className="container mx-auto px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-2 dark:text-white">Sailing Schedule</h2>
        <p className="text-gray-700 dark:text-gray-300">Please contact us for the latest sailing schedules and vessel availability.</p>
        <a href="mailto:info@awatacgroup.com" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">Email Us</a>
      </div>
    </div>
  </ServiceLayout>
);

export default SailingSchedule;