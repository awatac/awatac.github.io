import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const OnlineQuote: React.FC = () => (
  <ServiceLayout 
    title="Online Quote" 
    subtitle="Request a quote for your shipment"
  >
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <form className="w-full max-w-2xl bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold dark:text-white">Name</label>
            <input type="text" id="name" name="name" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-800 dark:text-white" placeholder="Your Name" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold dark:text-white">Email</label>
            <input type="email" id="email" name="email" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-800 dark:text-white" placeholder="Your Email" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold dark:text-white">Phone</label>
            <input type="tel" id="phone" name="phone" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-800 dark:text-white" placeholder="Your Phone" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="company" className="font-semibold dark:text-white">Company</label>
            <input type="text" id="company" name="company" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-800 dark:text-white" placeholder="Your Company" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="details" className="font-semibold dark:text-white">Shipment Details</label>
          <textarea id="details" name="details" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-800 dark:text-white" placeholder="Describe your shipment, origin, destination, etc." rows={4}></textarea>
        </div>
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">Request Quote</button>
      </form>
    </div>
  </ServiceLayout>
);

export default OnlineQuote;