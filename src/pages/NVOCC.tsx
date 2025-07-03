import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const NVOCC: React.FC = () => (
  <ServiceLayout 
    title="NVOCC" 
    subtitle="Non Vessel Operating Common Carrier"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">NVOCC - Non Vessel Operating Common Carrier</h2>
          <p className="mb-4 dark:text-gray-300">A decade of professional, diligent <i>SOC container services</i> across Asia, Gulf and Upper Gulf sectors.</p>
          <p className="mb-4 dark:text-gray-300"><i>SOC container services</i> is the first core activity of AWATAC. It grew geometrically over a period of time, providing necessary impulse to the Group's Liner agency services as well. Gradually NVOCC business expanded to cover most of Asia and Gulf sectors. This necessitated AWATAC to open offices across India and overseas.</p>
          <p className="mb-4 dark:text-gray-300">As AWATAC's NVOCC business grew, new equipment got added to the group's inventory strength, which started as 20' dry containers and eventually expanded to other equipment like 40's, Flat racks, Open Tops, and Reefers later on.</p>
          <p className="mb-4 dark:text-gray-300">All the equipment and the Bills of Lading used are adequately covered by leading insurance companies.</p>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center transition-colors">
          <svg className="w-48 h-48 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default NVOCC;