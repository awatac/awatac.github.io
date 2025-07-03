import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const CustomerLogin: React.FC = () => (
  <ServiceLayout 
    title="Customer Login" 
    subtitle="Access your AWATAC account"
  >
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <form className="w-full max-w-md bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-8 flex flex-col gap-6">
        <label htmlFor="username" className="text-lg font-semibold dark:text-white">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:bg-gray-800 dark:text-white"
          placeholder="Username"
        />
        <label htmlFor="password" className="text-lg font-semibold dark:text-white">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:bg-gray-800 dark:text-white"
          placeholder="Password"
        />
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">Login</button>
      </form>
    </div>
  </ServiceLayout>
);

export default CustomerLogin;