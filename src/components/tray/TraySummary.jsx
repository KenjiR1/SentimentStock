// TraySummary.jsx

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import "./TraySummary.css";
import "./TrayTitle.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TraySummary() {
  const platforms = [
    { name: "Reddit", percentPositive: 68, color: "#FF4500" },
    { name: "Twitter", percentPositive: 50, color: "#1DA1F2" },
    { name: "YouTube", percentPositive: 40, color: "#FF0000" },
  ];

  const makeDoughnutData = (percent, color) => ({
    labels: ["Positive", "Negative"],
    datasets: [
      {
        data: [percent, 100 - percent],
        backgroundColor: [color, "#444"],
        borderWidth: 0,
      },
    ],
  });

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

  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  };
  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div className="tray-summary-root">
      <h3 className="TrayTitle">SentiSummary</h3>

      <motion.div
        className="doughnut-row"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {platforms.map((plat) => (
          <motion.div className="doughnut-card small" key={plat.name} variants={itemVariant}>
            <Doughnut
              data={makeDoughnutData(plat.percentPositive, plat.color)}
              options={doughnutOptions}
            />
            <div className="doughnut-label">
              <span className="platform-name">{plat.name}</span>
              <span className="platform-percent">{plat.percentPositive}% Positive</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
