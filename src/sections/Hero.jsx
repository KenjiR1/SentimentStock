// landing page

import './Hero.css';
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id ="hero-section">
      <h1>SentiStock</h1>
      <p>Free sentiment based investment analytics by predictive AI</p>

      <motion.a // Button Animation
        href="#stock-section"
        className="get-started-btn"
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 6px 20px rgba(46, 212, 212, 0.6",
        }}
        whileTap={{ scale: 0.95}}
        transition={{ type: "spring", stiffness: 160}}
        // The button text
        > Explore Stocks
          </motion.a>

        
        <svg className="hero-divider" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
        fill="rgba(5, 40, 68, 0.8)"
        d="M0,200 C360,100 720,300 1080,120 L1440,40 L1440,320 L0,320 Z"
        />
        </svg>

    </section>
  );
}


export default Hero;