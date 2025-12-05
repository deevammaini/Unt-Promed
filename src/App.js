import React, { useEffect } from 'react';
import './App.css';
import './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import OurVision from './components/OurVision';
import ProductExpertise from './components/ProductExpertise';
import WhyChooseUs from './components/WhyChooseUs';
import IndustriesWeServe from './components/IndustriesWeServe';
import PeopleBehindExcellence from './components/PeopleBehindExcellence';
import ContactUs from './components/ContactUs';
import MapSection from './components/MapSection'; // Import MapSection
import Footer from './components/Footer';
import { observeElements } from './utils/scrollAnimation';

function App() {
  const appStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/backgroung-combine.png)`
  };

  useEffect(() => {
    observeElements();
  }, []);

  return (
    <div className="App" style={appStyle}>
      <Header />
      <Hero />
      <WhoWeAre />
      <OurVision />
      <ProductExpertise />
      <WhyChooseUs />
      <IndustriesWeServe />
      <PeopleBehindExcellence />
      <ContactUs />
      <MapSection /> {/* Map appears here */}
      <Footer />
    </div>
  );
}

export default App;