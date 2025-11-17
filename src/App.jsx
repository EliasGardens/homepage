import React from 'react'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import SobreNos from './components/SobreNos';
import ContactsSection from './components/ContactsSection';
import Footer from './components/Footer';

const App = () => {
  return (
      <>
        <Navbar />
        <HeroSection />
        <SobreNos />
        <FeatureSection />
        <ContactsSection />
        <Footer />
      </>
  );
};

export default App;
