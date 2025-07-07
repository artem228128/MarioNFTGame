import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import NFTSection from './components/NFTSection';
import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';
import JoinSection from './components/JoinSection';
import DemoBanner from './components/DemoBanner';
import './App.css';

function App() {
  return (
    <div className="App">
      <DemoBanner />
      <HeroSection />
      <AboutSection />
      <NFTSection />
      <TokenomicsSection />
      <RoadmapSection />
      <JoinSection />
    </div>
  );
}

export default App;
