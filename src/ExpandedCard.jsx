import { motion, AnimatePresence } from "framer-motion";
import "./ExpandedCard.css";

export default function ExpandedCard({ stock, onClose }) {
  if (!stock) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="expanded-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="expanded-content"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <button className="close-btn" onClick={onClose}>✖</button>
          <h2>{stock.name} ({stock.ticker})</h2>

          <div className="tray-grid">
            <div className="tray-module">SentiChart</div>
            <div className="tray-module">SentiSummary</div>
            <div className="tray-module">SentiNews</div>
            <div className="tray-module">SentiMetrics</div>
            <div className="tray-module">Senti Model Metrics</div>
            <div className="tray-module">Something else</div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
