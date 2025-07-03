import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const DoorToDoorDelivery: React.FC = () => (
  <ServiceLayout 
    title="Door-to-Door Delivery" 
    subtitle="Complete logistics from origin to destination"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4 dark:text-gray-300">AWATAC offers seamless door-to-door delivery services, ensuring your cargo is picked up and delivered directly to your specified locations. Our integrated logistics network guarantees timely and secure delivery every time.</p>
          <ul className="list-disc pl-6 mb-4 dark:text-gray-300">
            <li>Pickup and delivery at your doorstep</li>
            <li>End-to-end shipment tracking</li>
            <li>Customs clearance and documentation</li>
            <li>Flexible scheduling and routing</li>
            <li>Dedicated customer support</li>
          </ul>
          <p className="dark:text-gray-300">Contact us for hassle-free door-to-door logistics solutions.</p>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center transition-colors">
          <svg className="w-48 h-48 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default DoorToDoorDelivery;