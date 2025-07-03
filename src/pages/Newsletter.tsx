import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const Newsletter: React.FC = () => (
  <ServiceLayout 
    title="Newsletter" 
    subtitle="Subscribe to our newsletter for updates"
  >
    <div className="container mx-auto px-4 flex flex-col items-center">
      <form className="w-full max-w-lg bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-8 flex flex-col gap-6">
        <label htmlFor="email" className="text-lg font-semibold dark:text-white">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:bg-gray-800 dark:text-white"
          placeholder="Your Email"
        />
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">Subscribe</button>
      </form>
    </div>
  </ServiceLayout>
);

export default Newsletter;