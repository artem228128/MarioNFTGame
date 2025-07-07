import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wallet, Zap, Star, Timer } from 'lucide-react';

const NFTSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredNFT, setHoveredNFT] = useState<number | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const nftCollection = [
    {
      id: 1,
      name: 'Fire Mario',
      rarity: 'Legendary',
      power: 'Fire Blast',
      price: '0.5 ETH',
      image: '🔥',
      color: 'var(--mario-red)',
      bgColor: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
    },
    {
      id: 2,
      name: 'Ice Mario',
      rarity: 'Epic',
      power: 'Ice Freeze',
      price: '0.3 ETH',
      image: '❄️',
      color: 'var(--mario-blue)',
      bgColor: 'linear-gradient(135deg, #4ECDC4 0%, #7FDBDA 100%)',
    },
    {
      id: 3,
      name: 'Thunder Mario',
      rarity: 'Rare',
      power: 'Lightning Strike',
      price: '0.2 ETH',
      image: '⚡',
      color: 'var(--mario-yellow)',
      bgColor: 'linear-gradient(135deg, #FFE66D 0%, #FFF089 100%)',
    },
    {
      id: 4,
      name: 'Nature Mario',
      rarity: 'Epic',
      power: 'Vine Swing',
      price: '0.35 ETH',
      image: '🌿',
      color: 'var(--mario-green)',
      bgColor: 'linear-gradient(135deg, #95E1D3 0%, #B8E6D9 100%)',
    },
    {
      id: 5,
      name: 'Shadow Mario',
      rarity: 'Legendary',
      power: 'Shadow Clone',
      price: '0.8 ETH',
      image: '🌙',
      color: 'var(--mario-purple)',
      bgColor: 'linear-gradient(135deg, #A8E6CF 0%, #C7E9D0 100%)',
    },
    {
      id: 6,
      name: 'Golden Mario',
      rarity: 'Mythic',
      power: 'Coin Rush',
      price: '1.2 ETH',
      image: '👑',
      color: 'var(--mario-orange)',
      bgColor: 'linear-gradient(135deg, #FFB347 0%, #FFCC70 100%)',
    },
    {
      id: 7,
      name: 'Cyber Mario',
      rarity: 'Epic',
      power: 'Digital Dash',
      price: '0.4 ETH',
      image: '🤖',
      color: '#00f2fe',
      bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      id: 8,
      name: 'Cosmic Mario',
      rarity: 'Legendary',
      power: 'Star Power',
      price: '0.7 ETH',
      image: '🌟',
      color: '#f093fb',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 9,
      name: 'Crystal Mario',
      rarity: 'Mythic',
      power: 'Diamond Shield',
      price: '1.5 ETH',
      image: '💎',
      color: '#667eea',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 10,
      name: 'Phoenix Mario',
      rarity: 'Legendary',
      power: 'Fire Rebirth',
      price: '0.9 ETH',
      image: '🔥',
      color: '#ff4757',
      bgColor: 'linear-gradient(135deg, #ff4757 0%, #ff3838 100%)',
    },
    {
      id: 11,
      name: 'Ocean Mario',
      rarity: 'Epic',
      power: 'Tidal Wave',
      price: '0.45 ETH',
      image: '🌊',
      color: '#3742fa',
      bgColor: 'linear-gradient(135deg, #3742fa 0%, #2f3542 100%)',
    },
    {
      id: 12,
      name: 'Galaxy Mario',
      rarity: 'Mythic',
      power: 'Cosmic Jump',
      price: '2.0 ETH',
      image: '🌌',
      color: '#5f27cd',
      bgColor: 'linear-gradient(135deg, #5f27cd 0%, #341f97 100%)',
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Mythic': return '#ff6b6b';
      case 'Legendary': return '#ffd700';
      case 'Epic': return '#9b59b6';
      case 'Rare': return '#3498db';
      default: return '#95a5a6';
    }
  };

  return (
    <section id="nft" ref={sectionRef} className="nft-section">
      <div className="nft-bg">
        <div className="floating-elements">
          <div className="floating-coin animate-float"></div>
          <div className="floating-coin animate-float"></div>
          <div className="floating-coin animate-float"></div>
          <div className="floating-star animate-pulse"></div>
          <div className="floating-star animate-pulse"></div>
        </div>
      </div>

      <div className="nft-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="nft-header"
        >
          <h2 className="nft-title pixel-font">
            <span className="nft-gradient">Mint your Hero</span>
          </h2>
          <p className="nft-subtitle">
            Collect unique pixel-art characters with special abilities and powers!
          </p>
        </motion.div>

        <div className="nft-gallery">
          {nftCollection.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="nft-card"
              onMouseEnter={() => setHoveredNFT(nft.id)}
              onMouseLeave={() => setHoveredNFT(null)}
            >
              <div className="nft-card-inner">
                <div className="nft-image-container" style={{ background: nft.bgColor }}>
                  <div className="nft-image">
                    <span className="nft-emoji">{nft.image}</span>
                  </div>
                  <div className="nft-rarity-badge" style={{ backgroundColor: getRarityColor(nft.rarity) }}>
                    {nft.rarity}
                  </div>
                  {hoveredNFT === nft.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="nft-hover-effect"
                    >
                      <div className="power-animation">
                        <Zap size={24} />
                        <span>{nft.power}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
                
                <div className="nft-info">
                  <h3 className="nft-name pixel-font">{nft.name}</h3>
                  <div className="nft-stats">
                    <div className="nft-stat">
                      <Star size={16} />
                      <span>{nft.power}</span>
                    </div>
                    <div className="nft-price">
                      <span className="price-label">Price:</span>
                      <span className="price-value gold-gradient">{nft.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="nft-actions"
        >
          <div className="mint-info">
            <div className="mint-stat">
              <div className="mint-stat-value crypto-gradient">2,847</div>
              <div className="mint-stat-label">Minted</div>
            </div>
            <div className="mint-stat">
              <div className="mint-stat-value nft-gradient">7,153</div>
              <div className="mint-stat-label">Remaining</div>
            </div>
            <div className="mint-stat">
              <div className="mint-stat-value gold-gradient">0.25 ETH</div>
              <div className="mint-stat-label">Floor Price</div>
            </div>
          </div>

          <div className="mint-buttons">
            <button className="pixel-button primary">
              <Wallet size={16} style={{ marginRight: '8px' }} />
              Connect Wallet
            </button>
            <button className="pixel-button accent">
              <Zap size={16} style={{ marginRight: '8px' }} />
              Mint Now
            </button>
          </div>

          <div className="limited-offer">
            <div className="offer-badge">
              <Timer size={16} />
              <span>Limited Time: 20% OFF</span>
            </div>
            <div className="offer-countdown">
              <div className="countdown-item">
                <span className="countdown-value">23</span>
                <span className="countdown-label">H</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">45</span>
                <span className="countdown-label">M</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">12</span>
                <span className="countdown-label">S</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .nft-section {
          min-height: 100vh;
          padding: 100px 20px;
          position: relative;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 50%, #0f3460 100%);
          overflow: hidden;
        }

        .nft-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .floating-coin {
          position: absolute;
          width: 30px;
          height: 30px;
          background: var(--mario-yellow);
          border: 3px solid #000;
          border-radius: 50%;
        }

        .floating-coin::before {
          content: '$';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Press Start 2P', cursive;
          font-size: 12px;
          color: #000;
        }

        .floating-coin:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
        .floating-coin:nth-child(2) { top: 20%; right: 15%; animation-delay: 2s; }
        .floating-coin:nth-child(3) { bottom: 20%; left: 20%; animation-delay: 4s; }

        .floating-star {
          position: absolute;
          width: 25px;
          height: 25px;
          background: var(--mario-yellow);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }

        .floating-star:nth-child(4) { top: 30%; right: 25%; animation-delay: 1s; }
        .floating-star:nth-child(5) { bottom: 30%; right: 10%; animation-delay: 3s; }

        .nft-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
        }

        .nft-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .nft-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 4px 4px 0 #000;
        }

        .nft-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .nft-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .nft-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .nft-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--mario-blue);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .nft-card-inner {
          position: relative;
        }

        .nft-image-container {
          position: relative;
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .nft-image {
          position: relative;
          z-index: 2;
        }

        .nft-emoji {
          font-size: 4rem;
          filter: drop-shadow(4px 4px 0 #000);
        }

        .nft-rarity-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 8px 16px;
          border-radius: 20px;
          font-family: 'Press Start 2P', cursive;
          font-size: 10px;
          color: white;
          text-shadow: 1px 1px 0 #000;
          z-index: 3;
        }

        .nft-hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
        }

        .power-animation {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: var(--mario-yellow);
          font-family: 'Press Start 2P', cursive;
          font-size: 12px;
          text-align: center;
        }

        .nft-info {
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.3);
        }

        .nft-name {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--text-accent);
        }

        .nft-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nft-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .nft-price {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .price-label {
          font-size: 0.8rem;
          opacity: 0.6;
          margin-bottom: 4px;
        }

        .price-value {
          font-family: 'Press Start 2P', cursive;
          font-size: 1rem;
        }

        .nft-actions {
          text-align: center;
        }

        .mint-info {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .mint-stat {
          text-align: center;
        }

        .mint-stat-value {
          font-family: 'Press Start 2P', cursive;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          display: block;
        }

        .mint-stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .mint-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .limited-offer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .offer-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--mario-red);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-family: 'Press Start 2P', cursive;
          font-size: 12px;
          animation: pulse 2s infinite;
        }

        .offer-countdown {
          display: flex;
          gap: 1rem;
        }

        .countdown-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 1rem;
          border-radius: 10px;
          min-width: 60px;
        }

        .countdown-value {
          font-family: 'Press Start 2P', cursive;
          font-size: 1.5rem;
          color: var(--mario-yellow);
          margin-bottom: 0.5rem;
        }

        .countdown-label {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .nft-section {
            padding: 80px 15px;
          }

          .nft-title {
            font-size: 2.5rem;
          }

          .nft-subtitle {
            font-size: 1rem;
          }

          .nft-gallery {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }

          .nft-image-container {
            height: 200px;
          }

          .nft-emoji {
            font-size: 3rem;
          }

          .mint-info {
            gap: 1.5rem;
          }

          .mint-buttons {
            flex-direction: column;
            align-items: center;
          }

          .offer-countdown {
            gap: 0.5rem;
          }

          .countdown-item {
            min-width: 50px;
            padding: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default NFTSection; 