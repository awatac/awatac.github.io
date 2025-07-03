import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const TrackTrace: React.FC = () => (
  <ServiceLayout 
    title="Track & Trace" 
    subtitle="Track your shipment in real time"
  >
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <form className="w-full max-w-lg bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-8 flex flex-col gap-6">
        <label htmlFor="trackingNumber" className="text-lg font-semibold dark:text-white">Enter Tracking Number</label>
        <input
          type="text"
          id="trackingNumber"
          name="trackingNumber"
          className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:bg-gray-800 dark:text-white"
          placeholder="Tracking Number"
        />
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">Track</button>
      </form>
    </div>
  </ServiceLayout>
);

export default TrackTrace;