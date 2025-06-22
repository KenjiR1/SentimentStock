import React from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  BarChart2,
  TrendingUp,
  // other icons as desired
} from "lucide-react";
import "./TrayMetrics.css";
import "./TrayTitle.css";

export default function TrayMetrics() {
  // Four metrics as before
  const metrics = [
    {
      key: "marketCap",
      label: "Market Cap",
      value: "1.04T",
      icon: <DollarSign size={24} />,
    },
    {
      key: "peRatio",
      label: "P/E Ratio",
      value: "184.03",
      icon: <BarChart2 size={24} />,
    },
    {
      key: "quarterlyRevenue",
      label: "Quarterly Rev",
      value: "95.72B",
      icon: <TrendingUp size={24} />,
    },
    {
      key: "revenuePerShare",
      label: "Rev/Share",
      value: "29.87",
      icon: <DollarSign size={24} />,
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
      <h3 className="TrayTitle">SentiMetrics</h3>

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
