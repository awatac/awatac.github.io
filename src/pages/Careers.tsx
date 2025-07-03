import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const Careers: React.FC = () => (
  <ServiceLayout 
    title="Careers" 
    subtitle="Join our team at AWATAC"
  >
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <div className="w-full max-w-2xl bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-8 flex flex-col gap-6 mb-8">
        <h2 className="text-2xl font-bold mb-2 dark:text-white">Current Openings</h2>
        <p className="text-gray-700 dark:text-gray-300">We are always looking for talented individuals to join our growing team. If you are interested in a career with AWATAC, please fill out the form below or send your resume to <a href="mailto:info@awatacgroup.com" className="text-blue-700 dark:text-blue-400 underline">info@awatacgroup.com</a>.</p>
      </div>
      <form className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow p-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold dark:text-white">Name</label>
            <input type="text" id="name" name="name" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-700 dark:text-white" placeholder="Your Name" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold dark:text-white">Email</label>
            <input type="email" id="email" name="email" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-700 dark:text-white" placeholder="Your Email" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold dark:text-white">Phone</label>
            <input type="tel" id="phone" name="phone" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-700 dark:text-white" placeholder="Your Phone" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="position" className="font-semibold dark:text-white">Position</label>
            <input type="text" id="position" name="position" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-700 dark:text-white" placeholder="Position Applied For" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="resume" className="font-semibold dark:text-white">Resume</label>
          <input type="file" id="resume" name="resume" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-700 dark:text-white" />
        </div>
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">Submit Application</button>
      </form>
    </div>
  </ServiceLayout>
);

export default Careers;