import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ThemeToggle from './components/ThemeToggle';
import LoadingScreen from './components/LoadingScreen';
import CelebrationToggle from './components/CelebrationToggle';
import Confetti from './components/Confetti';
import CelebrationBanner from './components/CelebrationBanner';
import { CelebrationProvider, useCelebration } from './context/CelebrationContext';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TrackTrace from './pages/TrackTrace';
import OnlineQuote from './pages/OnlineQuote';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import Achievements from './pages/Achievements';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Newsletter from './pages/Newsletter';
import CustomerLogin from './pages/CustomerLogin';
import SailingSchedule from './pages/SailingSchedule';
import NVOCC from './pages/NVOCC';
import CustomsClearance from './pages/CustomsClearance';
import ThreePL from './pages/ThreePL';
import Warehousing from './pages/Warehousing';
import Transportation from './pages/Transportation';
import FreightForwarding from './pages/FreightForwarding';
import ProjectCargo from './pages/ProjectCargo';
import LCLConsolidation from './pages/LCLConsolidation';
import FCLForwarding from './pages/FCLForwarding';
import AirFreight from './pages/AirFreight';
import SeaFreight from './pages/SeaFreight';
import DoorToDoorDelivery from './pages/DoorToDoorDelivery';
import BreakBulk from './pages/BreakBulk';
import HazardousCargo from './pages/HazardousCargo';
import ReeferCargo from './pages/ReeferCargo';
import ODCOOGCargo from './pages/ODCOOGCargo';
import ValueAddedServices from './pages/ValueAddedServices';
import SupplyChainManagement from './pages/SupplyChainManagement';
import InventoryManagement from './pages/InventoryManagement';
import Distribution from './pages/Distribution';
import Packaging from './pages/Packaging';
import ReverseLogistics from './pages/ReverseLogistics';
import LinerAgency from './pages/LinerAgency';
import PortAgency from './pages/PortAgency';
import HusbandryServices from './pages/HusbandryServices';
import Insurance from './pages/Insurance';
import Documentation from './pages/Documentation';
import Consulting from './pages/Consulting';
import TradeAdvisory from './pages/TradeAdvisory';

// Import images using Vite's asset handling
import logoImg from './assets/images/logo.png';

const Header: React.FC = () => {
  const { isCelebrationMode } = useCelebration();
  
  return (
    <header className={`w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50 transition-colors ${isCelebrationMode ? 'celebration-header' : ''}`}>
      <CelebrationBanner />
      
      {/* Top Header Bar */}
      <div className={`${isCelebrationMode ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-100 dark:bg-gray-800'} border-b border-gray-200 dark:border-gray-700 transition-colors`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                <svg className={`w-4 h-4 ${isCelebrationMode ? 'text-blue-600' : 'text-red-600'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>info@awatacgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <CelebrationToggle />
              <div className="hidden md:flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <Link to="/customer-login" className={`hover:${isCelebrationMode ? 'text-blue-600' : 'text-red-600'} transition-colors`}>Customer Login</Link>
                <Link to="/track-trace" className={`hover:${isCelebrationMode ? 'text-blue-600' : 'text-red-600'} transition-colors`}>Track & Trace</Link>
                <Link to="/online-quote" className={`hover:${isCelebrationMode ? 'text-blue-600' : 'text-red-600'} transition-colors`}>Online Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logoImg} alt="AWATAC Logo" className={`h-16 w-auto ${isCelebrationMode ? 'animate-pulse' : ''}`} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-gray-700 dark:text-gray-200 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} font-medium transition-colors border-b-2 border-transparent hover:${isCelebrationMode ? 'border-blue-600' : 'border-red-600'} pb-1`}
              >
                Home
              </Link>
              
              <div className="relative group">
                <button className={`text-gray-700 dark:text-gray-200 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} font-medium transition-colors border-b-2 border-transparent group-hover:${isCelebrationMode ? 'border-blue-600' : 'border-red-600'} pb-1 flex items-center`}>
                  About
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/about" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} transition-colors`}>About Us</Link>
                    <Link to="/achievements" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} transition-colors`}>Achievements</Link>
                    <Link to="/careers" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} transition-colors`}>Careers</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className={`text-gray-700 dark:text-gray-200 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} font-medium transition-colors border-b-2 border-transparent group-hover:${isCelebrationMode ? 'border-blue-600' : 'border-red-600'} pb-1 flex items-center`}>
                  Services
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-96 overflow-y-auto">
                  <div className="py-2">
                    <Link to="/services" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} transition-colors font-semibold border-b border-gray-100 dark:border-gray-700`}>All Services</Link>
                    <div className="px-4 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Core Services</div>
                    <Link to="/services/nvocc" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} transition-colors`}>NVOCC</Link>
                    <Link to="/services/customs-clearance" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} transition-colors`}>Customs Clearance</Link>
                    <Link to="/services/warehousing" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} transition-colors`}>Warehousing</Link>
                    <Link to="/services/transportation" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} transition-colors`}>Transportation</Link>
                    <div className="px-4 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-t border-gray-100 dark:border-gray-700 mt-2 pt-2">Freight Services</div>
                    <Link to="/services/air-freight" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} transition-colors`}>Air Freight</Link>
                    <Link to="/services/sea-freight" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} transition-colors`}>Sea Freight</Link>
                    <Link to="/services/project-cargo" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} transition-colors`}>Project Cargo</Link>
                  </div>
                </div>
              </div>

              <Link 
                to="/contact" 
                className={`text-gray-700 dark:text-gray-200 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} font-medium transition-colors border-b-2 border-transparent hover:${isCelebrationMode ? 'border-blue-600' : 'border-red-600'} pb-1`}
              >
                Contact
              </Link>

              <Link 
                to="/certificates" 
                className={`text-gray-700 dark:text-gray-200 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} font-medium transition-colors border-b-2 border-transparent hover:${isCelebrationMode ? 'border-blue-600' : 'border-red-600'} pb-1`}
              >
                Certificates
              </Link>

              <Link 
                to="/sailing-schedule" 
                className={`text-gray-700 dark:text-gray-200 hover:${isCelebrationMode ? 'text-blue-600 dark:hover:text-blue-400' : 'text-red-600 dark:hover:text-red-400'} font-medium transition-colors border-b-2 border-transparent hover:${isCelebrationMode ? 'border-blue-600' : 'border-red-600'} pb-1`}
              >
                Sailing Schedule
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-700 dark:text-gray-200 border-gray-400 dark:border-gray-600 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600 dark:hover:border-red-400 transition-colors">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  const { isCelebrationMode } = useCelebration();
  
  return (
    <footer className={`${isCelebrationMode ? 'bg-blue-900 dark:bg-blue-950' : 'bg-gray-900 dark:bg-gray-950'} text-white py-8 mt-12 transition-colors`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <div className="font-bold text-lg mb-1">
            {isCelebrationMode && <span className="mr-2">🎉</span>}
            AWATAC GROUP © 2021
            {isCelebrationMode && <span className="ml-2">🎉</span>}
          </div>
          <div className="text-sm mb-1">Locations: USA, Singapore, Malaysia, Dubai, Chennai, Hyderabad, Bangalore, Mumbai, Tuticorin, Guntur, Mundra, Visakhapatnam</div>
          <div className="text-sm">info@awatacgroup.com</div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-4 md:mt-0">
          <Link to="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
          <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { isCelebrationMode } = useCelebration();

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onLoadingComplete={() => setLoading(false)} />}
      
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main className={`pt-32 ${isCelebrationMode ? 'bg-blue-50 dark:bg-blue-950' : 'bg-white dark:bg-gray-900'} text-gray-900 dark:text-gray-100 transition-colors min-h-screen`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/track-trace" element={<TrackTrace />} />
            <Route path="/online-quote" element={<OnlineQuote />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/customer-login" element={<CustomerLogin />} />
            <Route path="/sailing-schedule" element={<SailingSchedule />} />
            <Route path="/services/nvocc" element={<NVOCC />} />
            <Route path="/services/customs-clearance" element={<CustomsClearance />} />
            <Route path="/services/3pl" element={<ThreePL />} />
            <Route path="/services/warehousing" element={<Warehousing />} />
            <Route path="/services/transportation" element={<Transportation />} />
            <Route path="/services/freight-forwarding" element={<FreightForwarding />} />
            <Route path="/services/project-cargo" element={<ProjectCargo />} />
            <Route path="/services/lcl-consolidation" element={<LCLConsolidation />} />
            <Route path="/services/fcl-forwarding" element={<FCLForwarding />} />
            <Route path="/services/air-freight" element={<AirFreight />} />
            <Route path="/services/sea-freight" element={<SeaFreight />} />
            <Route path="/services/door-to-door-delivery" element={<DoorToDoorDelivery />} />
            <Route path="/services/break-bulk" element={<BreakBulk />} />
            <Route path="/services/hazardous-cargo" element={<HazardousCargo />} />
            <Route path="/services/reefer-cargo" element={<ReeferCargo />} />
            <Route path="/services/odc-oog-cargo" element={<ODCOOGCargo />} />
            <Route path="/services/value-added-services" element={<ValueAddedServices />} />
            <Route path="/logistics/supply-chain-management" element={<SupplyChainManagement />} />
            <Route path="/logistics/inventory-management" element={<InventoryManagement />} />
            <Route path="/logistics/distribution" element={<Distribution />} />
            <Route path="/logistics/packaging" element={<Packaging />} />
            <Route path="/logistics/reverse-logistics" element={<ReverseLogistics />} />
            <Route path="/agency/liner-agency" element={<LinerAgency />} />
            <Route path="/agency/port-agency" element={<PortAgency />} />
            <Route path="/agency/husbandry-services" element={<HusbandryServices />} />
            <Route path="/add-on/insurance" element={<Insurance />} />
            <Route path="/add-on/documentation" element={<Documentation />} />
            <Route path="/add-on/consulting" element={<Consulting />} />
            <Route path="/add-on/trade-advisory" element={<TradeAdvisory />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
      <Confetti />
    </>
  );
};

const App: React.FC = () => {
  return (
    <CelebrationProvider>
      <AppContent />
    </CelebrationProvider>
  );
};

export default App;