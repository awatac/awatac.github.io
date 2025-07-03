import React from 'react';
import { Link } from 'react-router-dom';
import { useCelebration } from '../context/CelebrationContext';

// Import images using Vite's asset handling
import bannerImg from '../assets/images/banner1.jpg';

const HeroBanner: React.FC = () => {
  const { isCelebrationMode } = useCelebration();
  
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-gray-200 overflow-hidden">
      <img
        src={bannerImg}
        alt="AWATAC Banner"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className={`relative z-10 flex flex-col items-center justify-center w-full h-full ${isCelebrationMode ? 'bg-blue-900 bg-opacity-50' : 'bg-black bg-opacity-40'} text-white text-center px-4`}>
        <h1 className={`text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg ${isCelebrationMode ? 'celebration-float' : ''}`}>
          {isCelebrationMode && <span className="text-yellow-300">🎉 Celebrating Excellence in Global Logistics Every Day 🎉</span>}
          <br />
          We provide <br className="hidden md:block" />Freight Forwarding<br className="hidden md:block" />Solutions Worldwide
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto drop-shadow">
          AWATAC have the solutions for all of your freight forwarding and consolidation needs that suit your specific requirements.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/online-quote" className={`btn btn-primary ${isCelebrationMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-700 hover:bg-blue-800'} text-white px-6 py-3 rounded shadow font-semibold ${isCelebrationMode ? 'animate-pulse' : ''}`}>Online Quote</Link>
          <Link to="/track-trace" className={`btn btn-primary ${isCelebrationMode ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600' : 'bg-white text-blue-700 hover:bg-blue-700 hover:text-white'} px-6 py-3 rounded shadow font-semibold`}>Track & Trace</Link>
        </div>
      </div>
    </section>
  );
};

const QuickLinks: React.FC = () => {
  const { isCelebrationMode } = useCelebration();
  
  return (
    <section className={`py-12 ${isCelebrationMode ? 'bg-blue-50 dark:bg-blue-900' : 'bg-white dark:bg-gray-900'} transition-colors`}>
      <div className="container mx-auto px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <li className={`wow fadeInLeft ${isCelebrationMode ? 'celebration-float' : ''}`}>
            <div className={`text ${isCelebrationMode ? 'bg-blue-100 dark:bg-blue-800' : 'bg-gray-50 dark:bg-gray-800'} rounded-lg shadow p-4 flex flex-col items-center transition-colors`}>
              <div className="w-32 h-32 flex items-center justify-center rounded-full mb-4">
                <svg width="80" height="80" viewBox="0 0 100 100" className={`${isCelebrationMode ? 'text-blue-500' : 'text-blue-600'}`}>
                  <defs>
                    <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                  <path d="M20 60 L80 60 L75 70 L25 70 Z" fill="url(#shipGradient)" />
                  <path d="M30 40 L70 40 L65 60 L35 60 Z" fill="url(#shipGradient)" opacity="0.8" />
                  <path d="M40 20 L60 20 L55 40 L45 40 Z" fill="url(#shipGradient)" opacity="0.6" />
                  <circle cx="50" cy="15" r="3" fill="#FCD34D" />
                  <path d="M10 70 Q50 80 90 70" stroke="#60A5FA" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Liner Agency</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 text-center">Comprehensive liner agency services for global shipping lines.</p>
            </div>
            <Link to="/services" className={`block ${isCelebrationMode ? 'text-blue-700 dark:text-blue-400' : 'text-blue-700 dark:text-blue-400'} hover:underline text-center mt-2`}>Learn more <i className="fa fa-angle-right"></i></Link>
          </li>
          <li className={`wow fadeInLeft ${isCelebrationMode ? 'celebration-float delay-100' : ''}`}>
            <div className={`text ${isCelebrationMode ? 'bg-blue-100 dark:bg-blue-800' : 'bg-gray-50 dark:bg-gray-800'} rounded-lg shadow p-4 flex flex-col items-center transition-colors`}>
              <div className="w-32 h-32 flex items-center justify-center rounded-full mb-4">
                <svg width="80" height="80" viewBox="0 0 100 100" className={`${isCelebrationMode ? 'text-blue-500' : 'text-blue-600'}`}>
                  <defs>
                    <linearGradient id="vesselGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="50" cy="75" rx="40" ry="8" fill="#60A5FA" opacity="0.3" />
                  <path d="M15 65 L85 65 L80 75 L20 75 Z" fill="url(#vesselGradient)" />
                  <rect x="25" y="45" width="50" height="20" fill="url(#vesselGradient)" opacity="0.8" />
                  <rect x="35" y="25" width="30" height="20" fill="url(#vesselGradient)" opacity="0.6" />
                  <circle cx="30" cy="55" r="4" fill="#FCD34D" />
                  <circle cx="70" cy="55" r="4" fill="#FCD34D" />
                  <path d="M45 15 L55 15 L50 25 Z" fill="#EF4444" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Vessel Handling</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 text-center">Efficient vessel handling and port operations for smooth logistics.</p>
            </div>
            <Link to="/services" className={`block ${isCelebrationMode ? 'text-blue-700 dark:text-blue-400' : 'text-blue-700 dark:text-blue-400'} hover:underline text-center mt-2`}>Learn more <i className="fa fa-angle-right"></i></Link>
          </li>
          <li className={`wow fadeInLeft ${isCelebrationMode ? 'celebration-float delay-200' : ''}`}>
            <div className={`text ${isCelebrationMode ? 'bg-blue-100 dark:bg-blue-800' : 'bg-gray-50 dark:bg-gray-800'} rounded-lg shadow p-4 flex flex-col items-center transition-colors`}>
              <div className="w-32 h-32 flex items-center justify-center rounded-full mb-4">
                <svg width="80" height="80" viewBox="0 0 100 100" className={`${isCelebrationMode ? 'text-blue-500' : 'text-blue-600'}`}>
                  <defs>
                    <linearGradient id="customsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#5B21B6" />
                    </linearGradient>
                  </defs>
                  <rect x="20" y="30" width="60" height="40" rx="5" fill="url(#customsGradient)" />
                  <rect x="25" y="35" width="50" height="30" fill="white" opacity="0.9" />
                  <path d="M30 45 L70 45" stroke="#7C3AED" strokeWidth="2" />
                  <path d="M30 50 L60 50" stroke="#7C3AED" strokeWidth="2" />
                  <path d="M30 55 L65 55" stroke="#7C3AED" strokeWidth="2" />
                  <circle cx="75" cy="25" r="8" fill="#EF4444" />
                  <path d="M71 25 L79 25 M75 21 L75 29" stroke="white" strokeWidth="2" />
                  <path d="M40 15 L60 15 L65 25 L35 25 Z" fill="#FCD34D" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Customs Clearance</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 text-center">Expert customs clearance and compliance for international trade.</p>
            </div>
            <Link to="/services" className={`block ${isCelebrationMode ? 'text-blue-700 dark:text-blue-400' : 'text-blue-700 dark:text-blue-400'} hover:underline text-center mt-2`}>Learn more <i className="fa fa-angle-right"></i></Link>
          </li>
          <li className={`wow fadeInLeft ${isCelebrationMode ? 'celebration-float delay-300' : ''}`}>
            <div className={`text ${isCelebrationMode ? 'bg-blue-100 dark:bg-blue-800' : 'bg-gray-50 dark:bg-gray-800'} rounded-lg shadow p-4 flex flex-col items-center transition-colors`}>
              <div className="w-32 h-32 flex items-center justify-center rounded-full mb-4">
                <svg width="80" height="80" viewBox="0 0 100 100" className={`${isCelebrationMode ? 'text-blue-500' : 'text-blue-600'}`}>
                  <defs>
                    <linearGradient id="warehouseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#B91C1C" />
                    </linearGradient>
                  </defs>
                  <path d="M15 45 L50 20 L85 45 L85 75 L15 75 Z" fill="url(#warehouseGradient)" />
                  <rect x="20" y="50" width="60" height="25" fill="url(#warehouseGradient)" opacity="0.8" />
                  <rect x="25" y="55" width="15" height="15" fill="white" opacity="0.9" />
                  <rect x="45" y="55" width="15" height="15" fill="white" opacity="0.9" />
                  <rect x="65" y="55" width="15" height="15" fill="white" opacity="0.9" />
                  <path d="M30 40 L70 40 L65 50 L35 50 Z" fill="#FCD34D" />
                  <circle cx="50" cy="30" r="3" fill="white" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Warehousing</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 text-center">Secure, efficient warehousing and distribution solutions tailored to your needs.</p>
            </div>
            <Link to="/services" className={`block ${isCelebrationMode ? 'text-blue-700 dark:text-blue-400' : 'text-blue-700 dark:text-blue-400'} hover:underline text-center mt-2`}>Learn more <i className="fa fa-angle-right"></i></Link>
          </li>
          <li className={`wow fadeInLeft ${isCelebrationMode ? 'celebration-float delay-400' : ''}`}>
            <div className={`text ${isCelebrationMode ? 'bg-blue-100 dark:bg-blue-800' : 'bg-gray-50 dark:bg-gray-800'} rounded-lg shadow p-4 flex flex-col items-center transition-colors`}>
              <div className="w-32 h-32 flex items-center justify-center rounded-full mb-4">
                <svg width="80" height="80" viewBox="0 0 100 100" className={`${isCelebrationMode ? 'text-blue-500' : 'text-blue-600'}`}>
                  <defs>
                    <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                  </defs>
                  <rect x="15" y="60" width="70" height="15" fill="url(#projectGradient)" />
                  <path d="M20 60 L25 45 L75 45 L80 60" fill="url(#projectGradient)" opacity="0.8" />
                  <rect x="30" y="30" width="40" height="15" fill="url(#projectGradient)" opacity="0.6" />
                  <circle cx="25" cy="25" r="8" fill="#EF4444" />
                  <path d="M21 21 L29 29 M21 29 L29 21" stroke="white" strokeWidth="2" />
                  <rect x="40" y="15" width="20" height="15" fill="#10B981" />
                  <path d="M45 20 L50 25 L55 18" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="75" cy="25" r="8" fill="#3B82F6" />
                  <circle cx="75" cy="25" r="3" fill="white" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Project Cargo</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 text-center">Specialized handling for heavy-lift and project cargo shipments.</p>
            </div>
            <Link to="/services" className={`block ${isCelebrationMode ? 'text-blue-700 dark:text-blue-400' : 'text-blue-700 dark:text-blue-400'} hover:underline text-center mt-2`}>Learn more <i className="fa fa-angle-right"></i></Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

const StatsCounters: React.FC = () => {
  const { isCelebrationMode } = useCelebration();
  
  return (
    <section className={`py-12 ${isCelebrationMode ? 'bg-blue-100 dark:bg-blue-800' : 'bg-blue-50 dark:bg-gray-800'} transition-colors`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className={`text-5xl font-bold ${isCelebrationMode ? 'text-blue-600 dark:text-blue-300 celebration-pulse' : 'text-blue-700 dark:text-blue-400'} mb-2`}>10</h2>
          <p className="text-lg mb-6 dark:text-gray-300">Years in the Logistics Industry</p>
          <h2 className={`text-5xl font-bold ${isCelebrationMode ? 'text-blue-600 dark:text-blue-300' : 'text-blue-700 dark:text-blue-400'} mb-2`}>5</h2>
          <p className="text-lg mb-6 dark:text-gray-300">Countries</p>
          <h2 className={`text-5xl font-bold ${isCelebrationMode ? 'text-blue-600 dark:text-blue-300' : 'text-blue-700 dark:text-blue-400'} mb-2`}>12</h2>
          <p className="text-lg dark:text-gray-300">Offices</p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className={`relative w-80 h-64 rounded-lg overflow-hidden shadow-lg flex items-center justify-center ${isCelebrationMode ? 'celebration-shimmer' : ''}`}>
            <svg width="200" height="200" viewBox="0 0 200 200" className={`${isCelebrationMode ? 'text-blue-500 celebration-float' : 'text-blue-600'}`}>
              <defs>
                <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#1E40AF" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>
                <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#60A5FA" opacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" opacity="0.2" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="url(#globeGradient)" />
              <circle cx="100" cy="100" r="85" fill="url(#glowGradient)" />
              <path d="M40 100 Q100 60 160 100 Q100 140 40 100" fill="#10B981" opacity="0.7" />
              <path d="M60 80 Q100 50 140 80" fill="#10B981" opacity="0.5" />
              <path d="M60 120 Q100 150 140 120" fill="#10B981" opacity="0.5" />
              <circle cx="70" cy="90" r="3" fill="#FCD34D" />
              <circle cx="130" cy="110" r="3" fill="#FCD34D" />
              <circle cx="100" cy="70" r="2" fill="#EF4444" />
              <circle cx="100" cy="130" r="2" fill="#EF4444" />
              <path d="M20 100 L180 100" stroke="white" strokeWidth="1" opacity="0.3" />
              <path d="M100 20 L100 180" stroke="white" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

const GlobeSection: React.FC = () => {
  const { isCelebrationMode } = useCelebration();
  
  return (
    <section className={`py-12 ${isCelebrationMode ? 'bg-blue-50 dark:bg-blue-900' : 'bg-white dark:bg-gray-900'} transition-colors`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex flex-col gap-8">
          <div className="text-center md:text-left">
            <h2 className={`text-2xl font-bold mb-2 ${isCelebrationMode ? 'text-blue-600' : ''} dark:text-white`}>Our People – Our Commitment</h2>
            <p className="text-gray-700 dark:text-gray-300">When integrity counts you can count on AWATAC Logistics</p>
          </div>
          <div className="text-center md:text-left">
            <h2 className={`text-2xl font-bold mb-2 ${isCelebrationMode ? 'text-blue-600' : ''} dark:text-white`}>Global Network</h2>
            <p className="text-gray-700 dark:text-gray-300">Extensive network of partners and agents worldwide.</p>
          </div>
          <div className="text-center md:text-left">
            <h2 className={`text-2xl font-bold mb-2 ${isCelebrationMode ? 'text-blue-600' : ''} dark:text-white`}>Customer Focus</h2>
            <p className="text-gray-700 dark:text-gray-300">Personalized service and support for every shipment.</p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative w-72 h-72 flex items-center justify-center">
            <svg width="250" height="250" viewBox="0 0 250 250" className={`animate-spin ${isCelebrationMode ? 'celebration-pulse' : ''}`} style={{animationDuration: '20s'}}>
              <defs>
                <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={isCelebrationMode ? '#3B82F6' : '#8B5CF6'} />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor={isCelebrationMode ? '#8B5CF6' : '#06B6D4'} />
                </linearGradient>
              </defs>
              <circle cx="125" cy="125" r="100" fill="none" stroke="url(#networkGradient)" strokeWidth="2" opacity="0.3" />
              <circle cx="125" cy="125" r="80" fill="none" stroke="url(#networkGradient)" strokeWidth="1" opacity="0.5" />
              <circle cx="125" cy="125" r="60" fill="none" stroke="url(#networkGradient)" strokeWidth="1" opacity="0.7" />
              <circle cx="125" cy="25" r="5" fill="#EF4444" />
              <circle cx="225" cy="125" r="5" fill="#10B981" />
              <circle cx="125" cy="225" r="5" fill="#F59E0B" />
              <circle cx="25" cy="125" r="5" fill="#8B5CF6" />
              <circle cx="180" cy="70" r="4" fill="#06B6D4" />
              <circle cx="180" cy="180" r="4" fill="#EC4899" />
              <circle cx="70" cy="180" r="4" fill="#84CC16" />
              <circle cx="70" cy="70" r="4" fill="#F97316" />
              <path d="M125 25 L225 125 L125 225 L25 125 Z" fill="none" stroke="url(#networkGradient)" strokeWidth="1" opacity="0.4" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="25" fill={isCelebrationMode ? '#3B82F6' : '#3B82F6'} />
                <circle cx="30" cy="30" r="20" fill="white" />
                <circle cx="30" cy="30" r="15" fill={isCelebrationMode ? '#1E40AF' : '#1E40AF'} />
                <text x="30" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">A</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CelebrationSection: React.FC = () => {
  const { isCelebrationMode } = useCelebration();
  
  if (!isCelebrationMode) return null;
  
  return (
    <section className="py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 celebration-pulse">Celebrating Excellence in Global Logistics Every Day</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          AWATAC has been delivering exceptional logistics solutions worldwide. 
          We thank our clients, partners, and team members for their trust and support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-lg">Satisfied Clients</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">50,000+</div>
            <div className="text-lg">Shipments Delivered</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">12</div>
            <div className="text-lg">Global Offices</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <main className="pt-0">
      <HeroBanner />
      <QuickLinks />
      <CelebrationSection />
      <StatsCounters />
      <GlobeSection />
    </main>
  );
};

export default Home;