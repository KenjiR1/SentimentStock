// src/components/tray/TraySummary.jsx
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import "./TraySummary.css";
import "./TrayTitle.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TraySummary() {
  // Example platform data including current and previous positive percentages
  const platforms = [
    { name: "Reddit", prevPercentPositive: 55, percentPositive: 65, color: "#FF4500" },
    { name: "Twitter", prevPercentPositive: 55, percentPositive: 58, color: "#1DA1F2" },
    { name: "YouTube", prevPercentPositive: 58, percentPositive: 62, color: "#FF0000" },
  ];

  // Overall summary text (optional)
  const summaryText = "Sentiment trends this month by platform.";

  // Doughnut chart data function
  const makeDoughnutData = (percent, color) => ({
    labels: ["Positive", "Negative"],
    datasets: [
      {
        data: [percent, Math.max(0, 100 - percent)],
        backgroundColor: [color, "#444"],
        borderWidth: 0,
      },
    ],
  });

  // Doughnut options
  const doughnutOptions = {
    cutout: "70%",
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  // Framer Motion variants for staggered appearance
  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  };
  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } },
  };

  // Helper to render change badge for a given change value
  const ChangeBadge = ({ change }) => {
    const isPositive = change >= 0;
    const Icon = isPositive ? TrendingUp : TrendingDown;
    const text = `${isPositive ? "+" : ""}${change.toFixed(1)}%`;
    return (
      <div className={`platform-change-badge ${isPositive ? "up" : "down"}`}>
        <Icon size={12} />
        <span className="badge-text">{text}</span>
      </div>
    );
  };

  return (
    <div className="tray-summary-root">
      <h3 className="TrayTitle">SentiSummary</h3>

      {/* Summary line, optional */}
      <p className="summary-text">{summaryText}</p>

      {/* Doughnut charts row with change badges */}
      <motion.div
        className="doughnut-row"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {platforms.map((plat) => {
          const change = plat.percentPositive - plat.prevPercentPositive;
          return (
            <motion.div
              className="doughnut-card"
              key={plat.name}
              variants={itemVariant}
            >
              <div className="doughnut-chart-wrapper">
                <Doughnut
                  data={makeDoughnutData(plat.percentPositive, plat.color)}
                  options={doughnutOptions}
                />
                {/* Overlay badge in top-right corner of chart (optional) */}
                <div className="doughnut-overlay-badge">
                  <ChangeBadge change={change} />
                </div>
              </div>
              <div className="doughnut-label">
                <span className="platform-name">{plat.name}</span>
                <span className="platform-percent">
                  {plat.percentPositive}% Positive
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
