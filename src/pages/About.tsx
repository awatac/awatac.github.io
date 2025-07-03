import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const About: React.FC = () => (
  <ServiceLayout 
    title="About Us" 
    subtitle="Our Team is What Sets Us Apart from the Rest"
  >
    <div className="max-w-5xl mx-auto">
      <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow p-6 mb-6">
        <header className="text-xl font-bold mb-2 dark:text-white">MORE<br/>ABOUT US</header>
        <div className="text-gray-700 dark:text-gray-200">
          <h2 className="text-2xl font-bold mb-4">Being a distinguished logistic firm, Awatac engaged in providing integrated logistic services designed in compliance with custom norms and esteemed patron's specifications.</h2>
          <p className="mb-4">Since our inception, we have been receiving huge acclamations for rendering reliable logistic services effectively and efficiently. With a perfect fusion of dexterous team and cutting edge facilities, we are delivering complete logistic portfolio that includes</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Express Air-to-Air freight services</li>
            <li>Cost-effective Port-to-Port freight services</li>
            <li>Time bounded Customs clearance services</li>
            <li>Safe and Secure Warehousing services</li>
            <li>Highly organized Transportation & Distribution services</li>
            <li>Careful handling of heavy-lift Project cargo</li>
          </ul>
          <p>We ensure hassle-free flow of consignments between the point of origin and the point of consumption with zero in-transit breakages within the stipulated time frame. </p>
        </div>
      </div>
    </div>
  </ServiceLayout>
);

export default About;