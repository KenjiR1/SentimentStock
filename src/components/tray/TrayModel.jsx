import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,           // or Brain / Chip if available
  ShieldCheck,   // for confidence
  Target,        // for precision
  Eye,           // for recall (seeing/retrieving)
  CheckCircle,    // for accuracy
  ArrowUpNarrowWideIcon
} from "lucide-react";
import "./TrayModel.css";
import "./TrayTitle.css";

export default function TrayMetrics() {
  // Four metrics as before
  const metrics = [
    {
      key: "marketCap",
      label: "Prediction",
      value: "Up",
      icon: <ArrowUpNarrowWideIcon size={24} />,
    },
    {
      key: "peRatio",
      label: "Confidence",
      value: "91%",
      icon: <ShieldCheck size={24} />,
    },
    {
      key: "quarterlyRevenue",
      label: "Recall",
      value: "0.89",
      icon: <Eye size={24} />,
    },
    {
      key: "revenuePerShare",
      label: "Accuracy",
      value: "0.93",
      icon: <CheckCircle size={24} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <div className="tray-metrics-root">
      <h3 className="TrayTitle">SentiModel</h3>

      <motion.div
        className="metrics-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {metrics.map((m) => (
          <motion.div className="metric-card" key={m.key} variants={itemVariants}>
            <div className="metric-icon">{m.icon}</div>
            <div className="metric-info">
              <span className="metric-label">{m.label}</span>
              <span className="metric-value">{m.value}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
