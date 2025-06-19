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

    </section>
  );
}


export default Hero;