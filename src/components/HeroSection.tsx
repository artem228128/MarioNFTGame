import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gamepad2, Coins, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  const coinsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && characterRef.current && cloudsRef.current && coinsRef.current) {
      // Parallax effect for clouds
      gsap.to(cloudsRef.current.children, {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Parallax effect for coins
      gsap.to(coinsRef.current.children, {
        y: -200,
        rotation: 360,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Character running animation
      gsap.to(characterRef.current, {
        x: 50,
        y: -20,
        rotation: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="hero-section">
      {/* Background Elements */}
      <div className="hero-bg">
        <div ref={cloudsRef} className="clouds">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </div>
        <div ref={coinsRef} className="floating-coins-hero">
          <div className="coin-hero"></div>
          <div className="coin-hero"></div>
          <div className="coin-hero"></div>
          <div className="coin-hero"></div>
          <div className="coin-hero"></div>
        </div>
        <div className="pipes">
          <div className="pipe pipe-1"></div>
          <div className="pipe pipe-2"></div>
        </div>
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-text"
        >
          <h1 className="hero-title pixel-font">
            <span className="web3-gradient">Let's-a GO</span>
            <br />
            to the
            <br />
            <span className="nft-gradient">NFT World!</span>
          </h1>
          <p className="hero-subtitle">
            Jump into the ultimate <span className="crypto-gradient">Web3 adventure</span> where retro gaming meets blockchain technology!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          ref={characterRef}
          className="hero-character"
        >
          <div className="character-sprite">
            <div className="character-body"></div>
            <div className="character-hat"></div>
            <div className="character-face"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="hero-buttons"
        >
          <button className="pixel-button primary" onClick={scrollToAbout}>
            <Gamepad2 size={16} style={{ marginRight: '8px' }} />
            Start Game
          </button>
          <button className="pixel-button accent">
            <Coins size={16} style={{ marginRight: '8px' }} />
            Mint NFT
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hero-stats"
        >
          <div className="stat">
            <div className="stat-value gold-gradient">10K+</div>
            <div className="stat-label">Players</div>
          </div>
          <div className="stat">
            <div className="stat-value crypto-gradient">5K+</div>
            <div className="stat-label">NFTs Minted</div>
          </div>
          <div className="stat">
            <div className="stat-value nft-gradient">$2M+</div>
            <div className="stat-label">Trading Volume</div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .clouds {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .cloud {
          position: absolute;
          width: 80px;
          height: 40px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 40px;
          animation: float 6s ease-in-out infinite;
        }

        .cloud::before,
        .cloud::after {
          content: '';
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
        }

        .cloud::before {
          width: 50px;
          height: 50px;
          top: -25px;
          left: 10px;
        }

        .cloud::after {
          width: 60px;
          height: 60px;
          top: -35px;
          right: 10px;
        }

        .cloud-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .cloud-2 {
          top: 20%;
          right: 15%;
          animation-delay: 2s;
        }

        .cloud-3 {
          top: 60%;
          left: 20%;
          animation-delay: 4s;
        }

        .floating-coins-hero {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .coin-hero {
          position: absolute;
          width: 40px;
          height: 40px;
          background: var(--mario-yellow);
          border-radius: 50%;
          border: 4px solid #000;
          animation: bounce 2s ease-in-out infinite;
        }

        .coin-hero::before {
          content: '$';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Press Start 2P', cursive;
          font-size: 16px;
          color: #000;
        }

        .coin-hero:nth-child(1) { top: 15%; left: 15%; animation-delay: 0s; }
        .coin-hero:nth-child(2) { top: 25%; right: 20%; animation-delay: 0.5s; }
        .coin-hero:nth-child(3) { top: 70%; left: 10%; animation-delay: 1s; }
        .coin-hero:nth-child(4) { top: 80%; right: 25%; animation-delay: 1.5s; }
        .coin-hero:nth-child(5) { top: 40%; right: 10%; animation-delay: 2s; }

        .pipes {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 200px;
        }

        .pipe {
          position: absolute;
          bottom: 0;
          width: 60px;
          height: 120px;
          background: var(--mario-green);
          border: 4px solid #000;
          border-radius: 8px 8px 0 0;
        }

        .pipe::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -8px;
          width: 76px;
          height: 24px;
          background: var(--mario-green);
          border: 4px solid #000;
          border-radius: 12px;
        }

        .pipe-1 {
          left: 5%;
        }

        .pipe-2 {
          right: 8%;
        }

        .hero-content {
          text-align: center;
          z-index: 2;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 1rem;
          line-height: 1.2;
          text-shadow: 4px 4px 0 #000;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-character {
          position: absolute;
          right: 10%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        .character-sprite {
          position: relative;
          width: 120px;
          height: 160px;
        }

        .character-body {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 100px;
          background: var(--mario-red);
          border: 4px solid #000;
          border-radius: 8px;
        }

        .character-hat {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 40px;
          background: var(--mario-red);
          border: 4px solid #000;
          border-radius: 30px 30px 0 0;
        }

        .character-face {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 50px;
          background: #ffdbac;
          border: 4px solid #000;
          border-radius: 50%;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          font-family: 'Press Start 2P', cursive;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-character {
            position: static;
            transform: none;
            margin: 2rem 0;
          }

          .character-sprite {
            width: 80px;
            height: 120px;
            margin: 0 auto;
          }

          .character-body {
            width: 60px;
            height: 80px;
          }

          .character-hat {
            width: 45px;
            height: 30px;
          }

          .character-face {
            width: 35px;
            height: 35px;
            top: 20px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            gap: 20px;
          }

          .stat-value {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 