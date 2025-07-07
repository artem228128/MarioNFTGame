import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';

const DemoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ 
          x: Math.sin(scrollY * 0.001) * 100,
          y: scrollY * 0.1,
          opacity: 1
        }}
        exit={{ x: -400, opacity: 0 }}
        transition={{
          type: "spring" as const,
          stiffness: 100,
          damping: 20
        }}
        className="demo-banner"
      >
        <div className="demo-banner-content">
          <div className="demo-icon">
            <AlertTriangle size={24} />
          </div>
          <div className="demo-text">
            <h4 className="pixel-font">DEMO VERSION</h4>
            <p>This is a demonstration. Features are not functional.</p>
          </div>
          <button 
            className="demo-close"
            onClick={() => setIsVisible(false)}
          >
            <X size={20} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DemoBanner; 