import React from 'react';
import { Link } from 'react-router-dom';
import ServiceLayout from '../components/ServiceLayout';

const Services: React.FC = () => (
  <ServiceLayout 
    title="Our Services" 
    subtitle="AWATAC provides a complete logistics portfolio"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Our Services</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
            <li>Express Air-to-Air freight services</li>
            <li>Cost-effective Port-to-Port freight services</li>
            <li>Time bounded Customs clearance services</li>
            <li>Safe and Secure Warehousing services</li>
            <li>Highly organized Transportation & Distribution services</li>
            <li>Careful handling of heavy-lift Project cargo</li>
          </ul>
          <p className="mb-4 text-gray-700 dark:text-gray-300">We ensure hassle-free flow of consignments between the point of origin and the point of consumption with zero in-transit breakages within the stipulated time frame.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-4 flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 mb-3">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Air Freight</h3>
            <Link to="/services/air-freight" className="text-blue-600 dark:text-blue-400 hover:underline mt-2">Learn more</Link>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-4 flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 mb-3">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Warehousing</h3>
            <Link to="/services/warehousing" className="text-blue-600 dark:text-blue-400 hover:underline mt-2">Learn more</Link>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-4 flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 mb-3">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Customs Clearance</h3>
            <Link to="/services/customs-clearance" className="text-blue-600 dark:text-blue-400 hover:underline mt-2">Learn more</Link>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-4 flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 mb-3">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Project Cargo</h3>
            <Link to="/services/project-cargo" className="text-blue-600 dark:text-blue-400 hover:underline mt-2">Learn more</Link>
          </div>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default Services;