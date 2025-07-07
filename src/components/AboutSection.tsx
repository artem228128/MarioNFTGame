import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Trophy, Users, Zap, Coins, Star, Gamepad2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const tokensRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView && characterRef.current && tokensRef.current) {
      // Character collecting tokens animation
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      
      tl.to(characterRef.current, {
        x: 200,
        duration: 3,
        ease: 'power2.inOut',
      })
      .to(tokensRef.current.children, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      }, '-=2')
      .to(tokensRef.current.children, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
      }, '+=1');
    }
  }, [isInView]);

  const features = [
    {
      icon: <Users size={32} />,
      title: 'NFT Characters',
      description: 'Unique pixel-art heroes with special abilities and traits',
      color: 'var(--mario-red)',
    },
    {
      icon: <Zap size={32} />,
      title: 'Run & Jump',
      description: 'Classic platformer mechanics with modern Web3 integration',
      color: 'var(--mario-blue)',
    },
    {
      icon: <Trophy size={32} />,
      title: 'Competitions',
      description: 'Weekly tournaments with crypto rewards for top players',
      color: 'var(--mario-yellow)',
    },
    {
      icon: <Coins size={32} />,
      title: 'Upgrades',
      description: 'Enhance your characters with blockchain-verified items',
      color: 'var(--mario-green)',
    },
    {
      icon: <Star size={32} />,
      title: 'Collectibles',
      description: 'Discover rare items and power-ups scattered across levels',
      color: 'var(--mario-purple)',
    },
    {
      icon: <Gamepad2 size={32} />,
      title: 'Multiplayer',
      description: 'Play with friends in co-op adventures and PvP battles',
      color: 'var(--mario-orange)',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="about-bg">
        <div className="platform-world" ref={platformRef}>
          <div className="platform platform-1"></div>
          <div className="platform platform-2"></div>
          <div className="platform platform-3"></div>
          <div className="platform platform-4"></div>
        </div>
        
        <div className="game-elements">
          <div ref={characterRef} className="running-character">
            <div className="char-body"></div>
            <div className="char-hat"></div>
          </div>
          
          <div ref={tokensRef} className="collectible-tokens">
            <div className="token token-1"></div>
            <div className="token token-2"></div>
            <div className="token token-3"></div>
            <div className="token token-4"></div>
          </div>
        </div>
      </div>

      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h2 className="about-title pixel-font">
            What is <span className="crypto-gradient">SuperChain Adventures</span>?
          </h2>
          <p className="about-subtitle">
            The ultimate retro-gaming experience where every jump, coin, and victory is recorded on the blockchain!
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="feature-card"
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title pixel-font">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="game-preview"
        >
          <div className="preview-screen">
            <div className="screen-header">
              <div className="screen-title pixel-font">Game Preview</div>
              <div className="screen-controls">
                <div className="control-dot red"></div>
                <div className="control-dot yellow"></div>
                <div className="control-dot green"></div>
              </div>
            </div>
            <div className="screen-content">
              <div className="game-world">
                <div className="game-character animate-bounce"></div>
                <div className="game-coins">
                  <div className="game-coin animate-spin"></div>
                  <div className="game-coin animate-spin"></div>
                  <div className="game-coin animate-spin"></div>
                </div>
                <div className="game-platforms">
                  <div className="game-platform"></div>
                  <div className="game-platform"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about-section {
          min-height: 100vh;
          padding: 100px 20px;
          position: relative;
          background: linear-gradient(135deg, #0f3460 0%, #1a1a2e 50%, #16213e 100%);
          overflow: hidden;
        }

        .about-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .platform-world {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .platform {
          position: absolute;
          height: 20px;
          background: var(--mario-green);
          border: 3px solid #000;
          border-radius: 10px;
        }

        .platform-1 {
          width: 200px;
          top: 20%;
          left: 10%;
        }

        .platform-2 {
          width: 150px;
          top: 40%;
          right: 20%;
        }

        .platform-3 {
          width: 180px;
          top: 60%;
          left: 30%;
        }

        .platform-4 {
          width: 120px;
          top: 80%;
          right: 15%;
        }

        .game-elements {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .running-character {
          position: absolute;
          top: 50%;
          left: 5%;
          width: 40px;
          height: 50px;
          transform: translateY(-50%);
        }

        .char-body {
          position: absolute;
          bottom: 0;
          width: 32px;
          height: 35px;
          background: var(--mario-red);
          border: 2px solid #000;
          border-radius: 4px;
        }

        .char-hat {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 20px;
          background: var(--mario-red);
          border: 2px solid #000;
          border-radius: 12px 12px 0 0;
        }

        .collectible-tokens {
          position: absolute;
          top: 45%;
          left: 15%;
          width: 300px;
          height: 50px;
        }

        .token {
          position: absolute;
          width: 20px;
          height: 20px;
          background: var(--mario-yellow);
          border: 2px solid #000;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
        }

        .token::before {
          content: '$';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Press Start 2P', cursive;
          font-size: 8px;
          color: #000;
        }

        .token-1 { left: 0; }
        .token-2 { left: 60px; }
        .token-3 { left: 120px; }
        .token-4 { left: 180px; }

        .about-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .about-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 3px 3px 0 #000;
        }

        .about-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: var(--mario-blue);
          box-shadow: 0 10px 30px rgba(78, 205, 196, 0.3);
        }

        .feature-icon {
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .feature-title {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--text-accent);
        }

        .feature-description {
          opacity: 0.8;
          line-height: 1.6;
        }

        .game-preview {
          display: flex;
          justify-content: center;
        }

        .preview-screen {
          width: 100%;
          max-width: 600px;
          background: #000;
          border: 4px solid var(--mario-blue);
          border-radius: 12px;
          overflow: hidden;
        }

        .screen-header {
          background: var(--mario-blue);
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .screen-title {
          color: #000;
          font-size: 12px;
        }

        .screen-controls {
          display: flex;
          gap: 8px;
        }

        .control-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .control-dot.red { background: var(--mario-red); }
        .control-dot.yellow { background: var(--mario-yellow); }
        .control-dot.green { background: var(--mario-green); }

        .screen-content {
          padding: 20px;
          height: 200px;
          position: relative;
        }

        .game-world {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(to bottom, #87CEEB 0%, #87CEEB 60%, #228B22 60%, #228B22 100%);
        }

        .game-character {
          position: absolute;
          bottom: 60px;
          left: 50px;
          width: 30px;
          height: 30px;
          background: var(--mario-red);
          border: 2px solid #000;
          border-radius: 4px;
        }

        .game-coins {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 30px;
        }

        .game-coin {
          width: 20px;
          height: 20px;
          background: var(--mario-yellow);
          border: 2px solid #000;
          border-radius: 50%;
        }

        .game-platforms {
          position: absolute;
          bottom: 60px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
        }

        .game-platform {
          width: 80px;
          height: 15px;
          background: var(--mario-green);
          border: 2px solid #000;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 80px 15px;
          }

          .about-title {
            font-size: 2rem;
          }

          .about-subtitle {
            font-size: 1rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .feature-card {
            padding: 1.5rem;
          }

          .preview-screen {
            max-width: 100%;
          }

          .screen-content {
            height: 150px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection; 