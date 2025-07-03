import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const Warehousing: React.FC = () => (
  <ServiceLayout 
    title="Warehousing" 
    subtitle="Efficient, secure, and modern warehousing solutions"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Warehousing</h2>
          <p className="mb-4 dark:text-gray-300">AWATAC is affianced in rendering a wide spectrum of third party logistic warehousing services by inculcating:</p>
          <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
            <li>Dedicated and shared warehouse facilities</li>
            <li>Professional on-site security round the clock</li>
            <li>Ultra-modern technology and hi-tech tools</li>
            <li>Latest methodology in sync with industry norms</li>
            <li>Timely security audits and inspection of dangerous good to ensure safety</li>
          </ul>
          <p className="mb-4 dark:text-gray-300">We swiftly and effectively segregate the cargo and help our valued patrons in handling the imported and exported consignments with ease.</p>
          <p className="mb-4 dark:text-gray-300">Our customer-focused approach ensures the customers' will get better than the best superior quality services in accordance with their diverse demands of security, safety and compliance.</p>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center transition-colors">
          <svg className="w-48 h-48 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default Warehousing;