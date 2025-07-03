import React from 'react';
import bannerImg from '../assets/images/075b38f4667cf28879aff8365981d6da.jpg';
import sectionImg from '../assets/images/44ffd92ff3df43d6587d5a09d0eed6c4.jpg';

const TurnKeySolutions: React.FC = () => (
  <div className="min-h-screen bg-white text-gray-800">
    {/* Banner Image */}
    <div className="w-full h-64 md:h-96 relative">
      <img
        src={bannerImg}
        alt="Turn Key Solutions Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Turn Key Solutions</h1>
        <p className="text-white mt-2">Seamless, reliable turnkey project delivery</p>
      </div>
    </div>

    {/* Main Section */}
    <div className="max-w-5xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-bold mb-4">Turn Key Solutions</h2>
        <p className="mb-4">AWATAC holds expertise in providing authentic and trusted turnkey solutions that satisfy the assorted demands and requirements of the cherished clients in compliance with the industry norms and principles.</p>
        <p className="mb-4">Our team of engineers implements various steps in the development of turnkey projects that include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Consulting the client for provisions</li>
          <li>Designing a blueprint</li>
          <li>Procuring the design</li>
          <li>Examining for flaws</li>
          <li>Delivering the project</li>
        </ul>
        <p className="mb-4">We ensure most reliable turnkey solutions to our esteemed clients within stipulated time frame.</p>
      </div>
      <div>
        <img
          src={sectionImg}
          alt="Turn Key Solutions Section"
          className="w-full h-64 object-cover rounded shadow"
        />
      </div>
    </div>
  </div>
);

export default TurnKeySolutions;