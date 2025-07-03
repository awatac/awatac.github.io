import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const CustomsClearance: React.FC = () => (
  <ServiceLayout 
    title="Customs Clearance" 
    subtitle="Seamless, expert customs clearance for global trade"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Customs Clearance</h2>
          <p className="mb-4 dark:text-gray-300">Customs clearance involves various legal challenges during physical and value assessment of the shipment, failing to overcome costs much in terms storage costs and penalties.</p>
          <p className="mb-4 dark:text-gray-300">To help you in this regard, Awatec provides comprehensive customs clearance logistic services that include:</p>
          <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
            <li>Smoothly handling customs formalities</li>
            <li>Flawlessly executing documentations associated with cargo clearance</li>
            <li>Customs regulatory bonded warehouse facility services</li>
            <li>Hassle-free and time bound customs clearance of consignments</li>
          </ul>
          <p className="mb-4 dark:text-gray-300">Our adroit team of experienced professionals who are well versed with updated custom rules, regulations and procedures, escort the cargo from the moment it arrives the customs warehouse till the delivery at the customer's desired location to reduce unnecessary delays.</p>
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

export default CustomsClearance;