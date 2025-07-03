import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const Contact: React.FC = () => (
  <ServiceLayout 
    title="Contact Us" 
    subtitle="Get in touch with AWATAC"
  >
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Contact Information</h2>
        <p className="mb-2 dark:text-gray-300">Email: <a href="mailto:info@awatacgroup.com" className="text-blue-700 dark:text-blue-400 underline">info@awatacgroup.com</a></p>
        <p className="mb-2 dark:text-gray-300">Phone: <a href="tel:+1234567890" className="text-blue-700 dark:text-blue-400 underline">+1 234 567 890</a></p>
        <p className="mb-2 dark:text-gray-300">Locations: USA, Singapore, Malaysia, Dubai, Chennai, Hyderabad, Bangalore, Mumbai, Tuticorin, Guntur, Mundra, Visakhapatnam</p>
      </div>
      <form className="flex-1 bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-2 dark:text-white">Send Us a Message</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold dark:text-white">Name</label>
          <input type="text" id="name" name="name" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-800 dark:text-white" placeholder="Your Name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold dark:text-white">Email</label>
          <input type="email" id="email" name="email" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-800 dark:text-white" placeholder="Your Email" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-semibold dark:text-white">Message</label>
          <textarea id="message" name="message" className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 dark:bg-gray-800 dark:text-white" placeholder="Your Message" rows={4}></textarea>
        </div>
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">Send Message</button>
      </form>
    </div>
  </ServiceLayout>
);

export default Contact;