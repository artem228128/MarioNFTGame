import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Coins, Trophy, Users, Vote, Zap, ShoppingBag } from 'lucide-react';

const TokenomicsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const coinsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView && characterRef.current && coinsRef.current) {
      // Character jumping and collecting coins animation
      const tl = gsap.timeline({ repeat: -1 });
      
      tl.to(characterRef.current, {
        y: -50,
        duration: 0.5,
        ease: 'power2.out',
      })
      .to(characterRef.current, {
        y: 0,
        duration: 0.5,
        ease: 'power2.in',
      })
      .to(coinsRef.current.children, {
        y: -30,
        scale: 1.2,
        duration: 0.3,
        stagger: 0.1,
      }, '-=0.5')
      .to(coinsRef.current.children, {
        y: 0,
        scale: 1,
        duration: 0.3,
        stagger: 0.1,
      });
    }
  }, [isInView]);

  const tokenomicsData = [
    {
      icon: <Zap size={48} />,
      title: 'Run & Jump',
      description: 'Classic platformer mechanics with modern Web3 integration',
      features: [
        'Physics-based gameplay',
        'Skill-based challenges',
        'Blockchain rewards',
        'Cross-platform play'
      ],
      color: 'var(--mario-blue)',
      gradient: 'crypto-gradient',
    },
    {
      icon: <Users size={48} />,
      title: 'Character Upgrades',
      description: 'Enhance your characters with blockchain-verified items',
      features: [
        'Ability upgrades',
        'Cosmetic items',
        'Rare equipment',
        'Exclusive skins'
      ],
      color: 'var(--mario-red)',
      gradient: 'nft-gradient',
    },
    {
      icon: <Coins size={48} />,
      title: '$SUPER Token',
      description: 'Our native utility token powering the entire ecosystem',
      features: [
        'In-game currency',
        'Staking rewards',
        'Governance rights',
        'Premium features'
      ],
      color: 'var(--mario-yellow)',
      gradient: 'gold-gradient',
    },
    {
      icon: <Vote size={48} />,
      title: 'DAO Voting',
      description: 'Participate in governance and shape the future of the game',
      features: [
        'Game updates',
        'New features',
        'Economic changes',
        'Community events'
      ],
      color: 'var(--mario-green)',
      gradient: 'web3-gradient',
    },
    {
      icon: <Trophy size={48} />,
      title: 'Staking Rewards',
      description: 'Stake your tokens and NFTs to earn passive income',
      features: [
        'Token staking pools',
        'NFT staking rewards',
        'Compound interest',
        'Flexible terms'
      ],
      color: 'var(--mario-purple)',
      gradient: 'nft-gradient',
    },
    {
      icon: <ShoppingBag size={48} />,
      title: 'Marketplace',
      description: 'Trade NFTs and items in our decentralized marketplace',
      features: [
        'P2P trading',
        'Auction system',
        'Price discovery',
        'Low fees'
      ],
      color: 'var(--mario-orange)',
      gradient: 'gold-gradient',
    },
  ];

  return (
    <section id="tokenomics" ref={sectionRef} className="tokenomics-section">
      <div className="tokenomics-bg">
        <div className="coin-rain">
          <div className="falling-coin"></div>
          <div className="falling-coin"></div>
          <div className="falling-coin"></div>
          <div className="falling-coin"></div>
          <div className="falling-coin"></div>
          <div className="falling-coin"></div>
        </div>
        
        <div className="game-elements">
          <div ref={characterRef} className="jumping-character">
            <div className="char-sprite">
              <div className="char-body"></div>
              <div className="char-head"></div>
              <div className="char-hat"></div>
            </div>
          </div>
          
          <div ref={coinsRef} className="collectible-coins">
            <div className="collect-coin"></div>
            <div className="collect-coin"></div>
            <div className="collect-coin"></div>
            <div className="collect-coin"></div>
          </div>
        </div>
      </div>

      <div className="tokenomics-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="tokenomics-header"
        >
          <h2 className="tokenomics-title pixel-font">
            <span className="gold-gradient">Tokenomics</span> & <span className="crypto-gradient">Utilities</span>
          </h2>
          <p className="tokenomics-subtitle">
            Power up your gaming experience with our comprehensive token ecosystem
          </p>
        </motion.div>

        <div className="tokenomics-grid">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="tokenomics-card"
            >
              <div className="card-header">
                <div className="card-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3 className={`card-title pixel-font ${item.gradient}`}>
                  {item.title}
                </h3>
              </div>
              
              <p className="card-description">{item.description}</p>
              
              <div className="card-features">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-bullet" style={{ backgroundColor: item.color }}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="token-stats"
        >
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-icon">
                <Coins size={32} />
              </div>
              <div className="stat-info">
                <div className="stat-value gold-gradient">1B</div>
                <div className="stat-label">Total Supply</div>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <Trophy size={32} />
              </div>
              <div className="stat-info">
                <div className="stat-value nft-gradient">25%</div>
                <div className="stat-label">Rewards Pool</div>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <Users size={32} />
              </div>
              <div className="stat-info">
                <div className="stat-value crypto-gradient">40%</div>
                <div className="stat-label">Community</div>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <Vote size={32} />
              </div>
              <div className="stat-info">
                <div className="stat-value web3-gradient">15%</div>
                <div className="stat-label">Development</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .tokenomics-section {
          min-height: 100vh;
          padding: 100px 20px;
          position: relative;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          overflow: hidden;
        }

        .tokenomics-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .coin-rain {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .falling-coin {
          position: absolute;
          width: 25px;
          height: 25px;
          background: var(--mario-yellow);
          border: 2px solid #000;
          border-radius: 50%;
          animation: fall 4s linear infinite;
        }

        .falling-coin::before {
          content: '$';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Press Start 2P', cursive;
          font-size: 10px;
          color: #000;
        }

        .falling-coin:nth-child(1) { left: 10%; animation-delay: 0s; }
        .falling-coin:nth-child(2) { left: 25%; animation-delay: 1s; }
        .falling-coin:nth-child(3) { left: 40%; animation-delay: 2s; }
        .falling-coin:nth-child(4) { left: 60%; animation-delay: 0.5s; }
        .falling-coin:nth-child(5) { left: 75%; animation-delay: 1.5s; }
        .falling-coin:nth-child(6) { left: 90%; animation-delay: 2.5s; }

        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }

        .game-elements {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .jumping-character {
          position: absolute;
          bottom: 20%;
          left: 10%;
          width: 60px;
          height: 80px;
        }

        .char-sprite {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .char-body {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 50px;
          background: var(--mario-red);
          border: 3px solid #000;
          border-radius: 6px;
        }

        .char-head {
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 35px;
          height: 35px;
          background: #ffdbac;
          border: 3px solid #000;
          border-radius: 50%;
        }

        .char-hat {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 25px;
          background: var(--mario-red);
          border: 3px solid #000;
          border-radius: 15px 15px 0 0;
        }

        .collectible-coins {
          position: absolute;
          bottom: 35%;
          left: 20%;
          width: 300px;
          height: 50px;
        }

        .collect-coin {
          position: absolute;
          width: 30px;
          height: 30px;
          background: var(--mario-yellow);
          border: 3px solid #000;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
        }

        .collect-coin::before {
          content: '$';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Press Start 2P', cursive;
          font-size: 12px;
          color: #000;
        }

        .collect-coin:nth-child(1) { left: 0; }
        .collect-coin:nth-child(2) { left: 80px; }
        .collect-coin:nth-child(3) { left: 160px; }
        .collect-coin:nth-child(4) { left: 240px; }

        .tokenomics-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .tokenomics-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .tokenomics-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 4px 4px 0 #000;
        }

        .tokenomics-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .tokenomics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          justify-items: center;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .tokenomics-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 350px;
          text-align: center;
        }

        .tokenomics-card:hover {
          transform: translateY(-5px);
          border-color: var(--mario-blue);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .card-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .card-icon {
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 1.3rem;
          text-align: center;
          margin-bottom: 0.5rem;
        }

        .card-description {
          text-align: center;
          opacity: 0.8;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .card-features {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
        }

        .feature-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .token-stats {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.1);
        }

        .stat-icon {
          color: var(--mario-yellow);
          flex-shrink: 0;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-family: 'Press Start 2P', cursive;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .tokenomics-section {
            padding: 80px 15px;
          }

          .tokenomics-title {
            font-size: 2.5rem;
          }

          .tokenomics-subtitle {
            font-size: 1rem;
          }

          .tokenomics-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .tokenomics-card {
            padding: 1.5rem;
          }

          .stats-container {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .stat-item {
            flex-direction: column;
            text-align: center;
          }

          .jumping-character {
            left: 5%;
            width: 50px;
            height: 70px;
          }

          .collectible-coins {
            left: 15%;
            width: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default TokenomicsSection; 