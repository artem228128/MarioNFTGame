import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Twitter, Mail, Send, Users, Star } from 'lucide-react';

const JoinSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  const socialLinks = [
    {
      name: 'Discord',
      icon: <MessageCircle size={24} />,
      url: '#',
      color: 'var(--mario-purple)',
      bgColor: 'linear-gradient(135deg, #7289da 0%, #99aab5 100%)',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: '#',
      color: 'var(--mario-blue)',
      bgColor: 'linear-gradient(135deg, #1da1f2 0%, #0d95e8 100%)',
    },
  ];

  return (
    <section id="join" ref={sectionRef} className="join-section">
      <div className="join-bg">
        <div className="pipe-container">
          <div className="main-pipe">
            <div className="pipe-body"></div>
            <div className="pipe-top"></div>
            <div className="pipe-entrance">
              <div className="jumping-hero">
                <div className="hero-sprite">
                  <div className="hero-body"></div>
                  <div className="hero-hat"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="castle-elements">
          <div className="castle">
            <div className="castle-base"></div>
            <div className="castle-tower castle-tower-1"></div>
            <div className="castle-tower castle-tower-2"></div>
            <div className="castle-tower castle-tower-3"></div>
            <div className="castle-flag"></div>
          </div>
        </div>
        
        <div className="floating-elements">
          <div className="star-element star-1"></div>
          <div className="star-element star-2"></div>
          <div className="star-element star-3"></div>
          <div className="coin-element coin-1"></div>
          <div className="coin-element coin-2"></div>
        </div>
      </div>

      <div className="join-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="join-header"
        >
          <h2 className="join-title pixel-font">
            <span className="nft-gradient">Join</span> the <span className="crypto-gradient">Adventure!</span>
          </h2>
          <p className="join-subtitle">
            Ready to jump into the ultimate Web3 gaming experience? Connect with our community!
          </p>
        </motion.div>

        <div className="join-actions">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="social-buttons"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                style={{ background: social.bgColor }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="social-icon" style={{ color: 'white' }}>
                  {social.icon}
                </div>
                <div className="social-info">
                  <div className="social-name pixel-font">{social.name}</div>
                  <div className="social-description">
                    {social.name === 'Discord' ? 'Join our community' : 'Follow us'}
                  </div>
                </div>
                <div className="social-stats">
                  <div className="stat-number">
                    {social.name === 'Discord' ? '15K+' : '8K+'}
                  </div>
                  <div className="stat-label">
                    {social.name === 'Discord' ? 'Members' : 'Followers'}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="email-signup"
          >
            <div className="signup-header">
              <h3 className="signup-title pixel-font">Get Early Access</h3>
              <p className="signup-description">
                Be the first to know about new features, exclusive drops, and special events!
              </p>
            </div>
            
            <form onSubmit={handleEmailSubmit} className="email-form">
              <div className="input-group">
                <Mail size={20} className="input-icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="email-input"
                  required
                />
                <button type="submit" className="submit-button">
                  <Send size={20} />
                </button>
              </div>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="success-message"
                >
                  🎉 Welcome to the adventure! Check your email for confirmation.
                </motion.div>
              )}
            </form>
            
            <div className="signup-benefits">
              <div className="benefit-item">
                <Star size={16} />
                <span>Exclusive NFT drops</span>
              </div>
              <div className="benefit-item">
                <Users size={16} />
                <span>Community events</span>
              </div>
              <div className="benefit-item">
                <Mail size={16} />
                <span>Development updates</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="community-stats"
        >
          <div className="stat-card">
            <div className="stat-value gold-gradient">15,000+</div>
            <div className="stat-label">Discord Members</div>
          </div>
          <div className="stat-card">
            <div className="stat-value crypto-gradient">8,000+</div>
            <div className="stat-label">Twitter Followers</div>
          </div>
          <div className="stat-card">
            <div className="stat-value nft-gradient">5,000+</div>
            <div className="stat-label">NFT Holders</div>
          </div>
          <div className="stat-card">
            <div className="stat-value web3-gradient">25+</div>
            <div className="stat-label">Countries</div>
          </div>
        </motion.div>
      </div>

      <footer className="mario-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title pixel-font">SuperChain Adventures</h4>
            <p className="footer-description">
              The ultimate retro-gaming NFT experience powered by blockchain technology.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title pixel-font">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#nft">NFT Collection</a></li>
              <li><a href="#tokenomics">Tokenomics</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title pixel-font">Community</h4>
            <ul className="footer-links">
              <li><a href="#">Discord</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">Medium</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title pixel-font">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 SuperChain Adventures. All rights reserved.</p>
          </div>
          <div className="footer-flag">
            <div className="flag-pole"></div>
            <div className="flag"></div>
          </div>
        </div>
      </footer>

      <style>{`
        .join-section {
          min-height: 100vh;
          padding: 100px 20px 0;
          position: relative;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 50%, #0f3460 100%);
          overflow: hidden;
        }

        .join-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .pipe-container {
          position: absolute;
          left: 10%;
          top: 20%;
          width: 120px;
          height: 200px;
        }

        .main-pipe {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .pipe-body {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 150px;
          background: var(--mario-green);
          border: 4px solid #000;
          border-radius: 8px 8px 0 0;
        }

        .pipe-top {
          position: absolute;
          bottom: 130px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 30px;
          background: var(--mario-green);
          border: 4px solid #000;
          border-radius: 15px;
        }

        .pipe-entrance {
          position: absolute;
          bottom: 140px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 40px;
          background: #000;
          border-radius: 30px 30px 0 0;
          overflow: hidden;
        }

        .jumping-hero {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 40px;
          animation: jump 2s ease-in-out infinite;
        }

        .hero-sprite {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hero-body {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 25px;
          background: var(--mario-red);
          border: 2px solid #000;
          border-radius: 3px;
        }

        .hero-hat {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 15px;
          background: var(--mario-red);
          border: 2px solid #000;
          border-radius: 9px 9px 0 0;
        }

        @keyframes jump {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-30px); }
        }

        .castle-elements {
          position: absolute;
          right: 5%;
          top: 30%;
          width: 200px;
          height: 150px;
        }

        .castle {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .castle-base {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 160px;
          height: 60px;
          background: var(--mario-red);
          border: 4px solid #000;
        }

        .castle-tower {
          position: absolute;
          bottom: 60px;
          width: 40px;
          height: 80px;
          background: var(--mario-red);
          border: 4px solid #000;
        }

        .castle-tower-1 {
          left: 20px;
        }

        .castle-tower-2 {
          left: 50%;
          transform: translateX(-50%);
          height: 100px;
          bottom: 60px;
        }

        .castle-tower-3 {
          right: 20px;
        }

        .castle-flag {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 40px;
          background: #000;
        }

        .castle-flag::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 15px;
          background: var(--mario-yellow);
          border: 2px solid #000;
        }

        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .star-element {
          position: absolute;
          width: 20px;
          height: 20px;
          background: var(--mario-yellow);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          animation: pulse 3s ease-in-out infinite;
        }

        .star-1 {
          top: 15%;
          left: 30%;
          animation-delay: 0s;
        }

        .star-2 {
          top: 25%;
          right: 30%;
          animation-delay: 1s;
        }

        .star-3 {
          top: 45%;
          left: 70%;
          animation-delay: 2s;
        }

        .coin-element {
          position: absolute;
          width: 25px;
          height: 25px;
          background: var(--mario-yellow);
          border: 2px solid #000;
          border-radius: 50%;
          animation: spin 4s linear infinite;
        }

        .coin-element::before {
          content: '$';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Press Start 2P', cursive;
          font-size: 10px;
          color: #000;
        }

        .coin-1 {
          top: 35%;
          left: 15%;
          animation-delay: 0s;
        }

        .coin-2 {
          top: 55%;
          right: 40%;
          animation-delay: 2s;
        }

        .join-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .join-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .join-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 4px 4px 0 #000;
        }

        .join-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .join-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .social-buttons {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .social-button {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border-radius: 16px;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .social-button:hover {
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .social-icon {
          flex-shrink: 0;
        }

        .social-info {
          flex: 1;
        }

        .social-name {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .social-description {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .social-stats {
          text-align: center;
          flex-shrink: 0;
        }

        .stat-number {
          font-family: 'Press Start 2P', cursive;
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .email-signup {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .signup-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .signup-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-accent);
        }

        .signup-description {
          opacity: 0.8;
          line-height: 1.5;
        }

        .email-form {
          margin-bottom: 1.5rem;
        }

        .input-group {
          position: relative;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .input-group:focus-within {
          border-color: var(--mario-blue);
          box-shadow: 0 0 0 4px rgba(78, 205, 196, 0.2);
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: rgba(255, 255, 255, 0.5);
          pointer-events: none;
        }

        .email-input {
          flex: 1;
          padding: 1rem 1rem 1rem 3rem;
          background: transparent;
          border: none;
          outline: none;
          color: white;
          font-size: 1rem;
        }

        .email-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .submit-button {
          padding: 1rem 1.5rem;
          background: var(--mario-blue);
          border: none;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .submit-button:hover {
          background: var(--mario-red);
        }

        .success-message {
          background: var(--mario-green);
          color: white;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
          text-align: center;
          font-size: 0.9rem;
        }

        .signup-benefits {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .community-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--mario-blue);
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

        .mario-footer {
          background: linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%);
          border-top: 4px solid var(--mario-yellow);
          padding: 3rem 0 1rem;
          margin-top: 4rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-title {
          font-size: 1.2rem;
          color: var(--text-accent);
          margin-bottom: 0.5rem;
        }

        .footer-description {
          opacity: 0.8;
          line-height: 1.5;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--mario-blue);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 2rem auto 0;
          padding: 2rem 20px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-copyright {
          opacity: 0.6;
          font-size: 0.9rem;
        }

        .footer-flag {
          position: relative;
          width: 40px;
          height: 40px;
        }

        .flag-pole {
          position: absolute;
          right: 0;
          top: 0;
          width: 4px;
          height: 40px;
          background: #000;
        }

        .flag {
          position: absolute;
          top: 0;
          right: 4px;
          width: 25px;
          height: 15px;
          background: var(--mario-red);
          border: 2px solid #000;
        }

        @media (max-width: 768px) {
          .join-section {
            padding: 80px 15px 0;
          }

          .join-title {
            font-size: 2.5rem;
          }

          .join-subtitle {
            font-size: 1rem;
          }

          .join-actions {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .social-button {
            padding: 1rem;
          }

          .email-signup {
            padding: 1.5rem;
          }

          .community-stats {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .pipe-container {
            left: 5%;
            width: 80px;
            height: 140px;
          }

          .castle-elements {
            right: 5%;
            width: 120px;
            height: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default JoinSection; 