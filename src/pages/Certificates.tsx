import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import certificateImg from '../assets/documents/a4ec101297f1e22295b6dd9a04b165e4.png';

const Certificates: React.FC = () => (
  <ServiceLayout 
    title="Certificates" 
    subtitle="Our Certifications"
  >
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Our Certifications</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">AWATAC Group is committed to quality and compliance. Below is a sample of our certifications:</p>
      <div className="mb-8 shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800 p-6">
        <img src={certificateImg} alt="AWATAC Certificate" className="max-w-md w-full rounded" />
      </div>
      <a href={certificateImg} download className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">Download Certificate</a>
    </div>
  </ServiceLayout>
);

export default Certificates;