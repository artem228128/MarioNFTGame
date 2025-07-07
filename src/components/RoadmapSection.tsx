import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Coins, Gamepad2, ShoppingCart, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const RoadmapSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView && characterRef.current && pathRef.current && sectionRef.current) {
      // Character moving along the roadmap path
      const path = pathRef.current;
      
      gsap.set(characterRef.current, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
      });

      gsap.to(characterRef.current, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        duration: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, [isInView]);

  const roadmapData = [
    {
      level: 1,
      title: 'Launch',
      status: 'completed',
      description: 'Website launch and community building',
      icon: <Rocket size={32} />,
      features: [
        'Website launch',
        'Social media presence',
        'Community Discord',
        'Whitepaper release'
      ],
      color: 'var(--mario-green)',
      position: { x: 10, y: 80 },
    },
    {
      level: 2,
      title: 'Mint',
      status: 'completed',
      description: 'NFT collection launch and minting',
      icon: <Coins size={32} />,
      features: [
        'NFT collection reveal',
        'Public minting',
        'Staking mechanism',
        'Marketplace listing'
      ],
      color: 'var(--mario-yellow)',
      position: { x: 30, y: 40 },
    },
    {
      level: 3,
      title: 'Game Alpha',
      status: 'in-progress',
      description: 'First playable version release',
      icon: <Gamepad2 size={32} />,
      features: [
        'Alpha game release',
        'Basic gameplay',
        'Character integration',
        'Leaderboards'
      ],
      color: 'var(--mario-blue)',
      position: { x: 60, y: 60 },
    },
    {
      level: 4,
      title: 'Marketplace',
      status: 'upcoming',
      description: 'Full trading and marketplace features',
      icon: <ShoppingCart size={32} />,
      features: [
        'P2P trading',
        'Auction system',
        'Rental mechanics',
        'Cross-chain support'
      ],
      color: 'var(--mario-red)',
      position: { x: 90, y: 20 },
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'var(--mario-green)';
      case 'in-progress': return 'var(--mario-yellow)';
      case 'upcoming': return 'var(--mario-blue)';
      default: return 'var(--mario-red)';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle size={20} />;
      case 'in-progress': return <div className="spinner"></div>;
      case 'upcoming': return <div className="clock">⏰</div>;
      default: return null;
    }
  };

  return (
    <section id="roadmap" ref={sectionRef} className="roadmap-section">
      <div className="roadmap-bg">
        <div className="level-elements">
          <div className="platform-element platform-1"></div>
          <div className="platform-element platform-2"></div>
          <div className="platform-element platform-3"></div>
          <div className="cloud-element cloud-1"></div>
          <div className="cloud-element cloud-2"></div>
          <div className="flag-element"></div>
        </div>
      </div>

      <div className="roadmap-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="roadmap-header"
        >
          <h2 className="roadmap-title pixel-font">
            <span className="web3-gradient">Level Up!</span> Roadmap
          </h2>
          <p className="roadmap-subtitle">
            Follow our journey through the different levels of development
          </p>
        </motion.div>

        <div className="roadmap-map">
          <svg className="roadmap-path" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              ref={pathRef}
              d="M 10,80 Q 20,60 30,40 Q 40,20 60,60 Q 80,80 90,20"
              fill="none"
              stroke="var(--mario-yellow)"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
          </svg>

          <div ref={characterRef} className="roadmap-character">
            <div className="character-sprite">
              <div className="sprite-body"></div>
              <div className="sprite-hat"></div>
            </div>
          </div>

          {roadmapData.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="roadmap-level"
              style={{
                left: `${level.position.x}%`,
                top: `${level.position.y}%`,
              }}
            >
              <div className="level-marker" style={{ backgroundColor: level.color }}>
                <div className="level-number pixel-font">{level.level}</div>
              </div>

              <div className="level-card">
                <div className="level-header">
                  <div className="level-icon" style={{ color: level.color }}>
                    {level.icon}
                  </div>
                  <div className="level-info">
                    <h3 className="level-title pixel-font">{level.title}</h3>
                    <div className="level-status" style={{ color: getStatusColor(level.status) }}>
                      {getStatusIcon(level.status)}
                      <span>{level.status.replace('-', ' ')}</span>
                    </div>
                  </div>
                </div>
                
                <p className="level-description">{level.description}</p>
                
                <div className="level-features">
                  {level.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="feature-dot" style={{ backgroundColor: level.color }}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="roadmap-progress"
        >
          <div className="progress-header">
            <h3 className="progress-title pixel-font">Overall Progress</h3>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '65%' }}></div>
            <div className="progress-text">65% Complete</div>
          </div>
          <div className="progress-stats">
            <div className="progress-stat">
              <div className="stat-value crypto-gradient">2/4</div>
              <div className="stat-label">Levels Complete</div>
            </div>
            <div className="progress-stat">
              <div className="stat-value nft-gradient">Q2 2024</div>
              <div className="stat-label">Next Milestone</div>
            </div>
            <div className="progress-stat">
              <div className="stat-value gold-gradient">100%</div>
              <div className="stat-label">Community Backed</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .roadmap-section {
          min-height: 100vh;
          padding: 100px 20px;
          position: relative;
          background: linear-gradient(135deg, #0f3460 0%, #1a1a2e 50%, #16213e 100%);
          overflow: hidden;
        }

        .roadmap-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .level-elements {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .platform-element {
          position: absolute;
          height: 15px;
          background: var(--mario-green);
          border: 2px solid #000;
          border-radius: 8px;
        }

        .platform-1 {
          width: 100px;
          top: 75%;
          left: 5%;
        }

        .platform-2 {
          width: 80px;
          top: 35%;
          left: 25%;
        }

        .platform-3 {
          width: 120px;
          top: 55%;
          right: 15%;
        }

        .cloud-element {
          position: absolute;
          width: 60px;
          height: 30px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 30px;
          animation: float 6s ease-in-out infinite;
        }

        .cloud-element::before,
        .cloud-element::after {
          content: '';
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
        }

        .cloud-element::before {
          width: 40px;
          height: 40px;
          top: -20px;
          left: 8px;
        }

        .cloud-element::after {
          width: 50px;
          height: 50px;
          top: -25px;
          right: 8px;
        }

        .cloud-1 {
          top: 15%;
          left: 20%;
          animation-delay: 0s;
        }

        .cloud-2 {
          top: 25%;
          right: 25%;
          animation-delay: 3s;
        }

        .flag-element {
          position: absolute;
          top: 15%;
          right: 10%;
          width: 8px;
          height: 60px;
          background: #000;
        }

        .flag-element::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 30px;
          height: 20px;
          background: var(--mario-red);
          border: 2px solid #000;
        }

        .roadmap-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .roadmap-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .roadmap-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 4px 4px 0 #000;
        }

        .roadmap-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .roadmap-map {
          position: relative;
          height: 600px;
          margin-bottom: 4rem;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: visible;
        }

        .roadmap-path {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .roadmap-character {
          position: absolute;
          width: 40px;
          height: 50px;
          z-index: 3;
        }

        .character-sprite {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .sprite-body {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 35px;
          background: var(--mario-red);
          border: 2px solid #000;
          border-radius: 4px;
        }

        .sprite-hat {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 25px;
          height: 20px;
          background: var(--mario-red);
          border: 2px solid #000;
          border-radius: 12px 12px 0 0;
        }

        .roadmap-level {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .level-marker {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 4px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          position: relative;
          z-index: 15;
          cursor: pointer;
        }

        .level-number {
          font-size: 1.5rem;
          color: #000;
          font-weight: bold;
        }

        .level-card {
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(15px);
          min-width: 320px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
          position: absolute;
          top: 80px;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          z-index: 20;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          color: #1a1a2e;
        }

        .roadmap-level:hover .level-card {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .level-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .level-icon {
          flex-shrink: 0;
        }

        .level-info {
          flex: 1;
        }

        .level-title {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: #1a1a2e;
        }

        .level-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          text-transform: capitalize;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid var(--mario-yellow);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .clock {
          font-size: 16px;
        }

        .level-description {
          margin-bottom: 1rem;
          opacity: 0.7;
          line-height: 1.5;
          color: #1a1a2e;
        }

        .level-features {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #1a1a2e;
        }

        .feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .roadmap-progress {
          text-align: center;
        }

        .progress-header {
          margin-bottom: 2rem;
        }

        .progress-title {
          font-size: 2rem;
          color: var(--text-accent);
        }

        .progress-bar {
          position: relative;
          width: 100%;
          height: 30px;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--mario-green) 0%, var(--mario-yellow) 100%);
          transition: width 2s ease;
          position: relative;
        }

        .progress-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Press Start 2P', cursive;
          font-size: 12px;
          color: white;
          text-shadow: 1px 1px 0 #000;
        }

        .progress-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .progress-stat {
          text-align: center;
        }

        .stat-value {
          font-family: 'Press Start 2P', cursive;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          display: block;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .roadmap-section {
            padding: 80px 15px;
          }

          .roadmap-title {
            font-size: 2.5rem;
          }

          .roadmap-subtitle {
            font-size: 1rem;
          }

          .roadmap-map {
            height: 400px;
          }

          .level-card {
            min-width: 240px;
            padding: 1rem;
          }

          .level-marker {
            width: 50px;
            height: 50px;
          }

          .level-number {
            font-size: 1.2rem;
          }

          .progress-stats {
            gap: 1.5rem;
          }

          .roadmap-character {
            width: 30px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default RoadmapSection; 