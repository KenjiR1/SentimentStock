


import TraySummary from "../components/tray/TraySummary";
import TrayChart from "../components/tray/TrayChart";
import TrayMetrics from "../components/tray/TrayMetrics";
import TrayNews from "../components/tray/TrayNews";
import TrayModel from "../components/tray/TrayModel";
import TrayPrediction from "../components/tray/TrayPrediction";
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
          <div className="tray-module"><TrayChart stock={stock}/></div>
          <div className="tray-module"><TraySummary stock={stock}/></div>
          <div className="tray-module"><TrayNews stock={stock}/></div>
          <div className="tray-module"><TrayMetrics stock={stock}/></div>
          <div className="tray-module"><TrayModel stock={stock}/></div>
          <div className="tray-module"><TrayPrediction stock={stock}/></div>
        </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
