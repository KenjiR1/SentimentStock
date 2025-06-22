// src/components/tray/TrayPrediction.jsx
import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  Title,
} from "chart.js";
import "./TrayPrediction.css";
import "./TrayTitle.css";

// Register Chart.js components and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  Title
);

export default function TrayPrediction() {
  // === 1. Hardcoded historical data (11 months) ===
  const historicalPrices = [
    218.93, 236.54, 205.58, 208.97, 219.71,
    235.08, 251.32, 292.78, 373.55, 339.63,
    336.72
  ];
  const historicalLabels = [
    "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec",
    "Jan"
  ];

  // === 2. Placeholder prediction bounds ===
  const lastPrice = historicalPrices[historicalPrices.length - 1];
  const lower = lastPrice * .97;
  const upper = lastPrice * 1.16;
  const median = lastPrice * 1.07

  // === 3. Build labels & data arrays ===
  const labels = [...historicalLabels, "Next Month"];
  const medianData = [...historicalPrices, median];

  const nHist = historicalPrices.length; // 11
  const upperData = new Array(nHist + 1).fill(null);
  const lowerData = new Array(nHist + 1).fill(null);
  upperData[nHist - 1] = historicalPrices[nHist - 1];
  upperData[nHist] = upper;
  lowerData[nHist - 1] = historicalPrices[nHist - 1];
  lowerData[nHist] = lower;

  // We'll use a ref to detect chart area for gradient
  const chartRef = useRef(null);

  // === 4. Chart.js data & options ===
  const data = {
    labels,
    datasets: [
      // Shade band dataset
      {
        label: "Prediction Range",
        data: upperData,
        borderColor: "rgba(0,0,0,0)",
        backgroundColor: "rgba(0,0,0,0)", // invisible for upper
        pointRadius: 0,
        fill: false,
      },
      {
        label: "Prediction Range",
        data: lowerData,
        borderColor: "rgba(100,180,240,0.3)",
        backgroundColor: "rgba(100,180,240,0.3)",
        pointRadius: 0,
        fill: "-1", // fill area between this and previous (upper)
      },
      // Median/historical line
      {
        label: "Price / Median Forecast",
        data: medianData,
        borderColor: "#94d2bd",
        backgroundColor: (context) => {
          // Create vertical gradient under line
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            // Initial render: return a fallback
            return "rgba(148,210,189,0.1)";
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(148,210,189,0.4)");
          gradient.addColorStop(1, "rgba(148,210,189,0)");
          return gradient;
        },
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true, // fill under the line
        tension: 0.2,
        borderWidth: 2,
        segment: {
          borderDash: (ctx) => {
            // Dashed segment for forecast
            if (
              ctx.p0DataIndex === medianData.length - 2 &&
              ctx.p1DataIndex === medianData.length - 1
            ) {
              return [6, 4];
            }
            return undefined;
          },
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        ticks: { color: "#c9d1d9", font: { size: 12 } },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#c9d1d9", font: { size: 12 } },
        grid: { color: "rgba(200,200,200,0.1)" },
        title: {
          display: true,
          text: "Stock Price ($)",
          color: "#c9d1d9",
          font: { size: 14, weight: "bold" },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(30,30,30,0.9)",
        titleColor: "#94d2bd",
        bodyColor: "#c9d1d9",
        borderColor: "#94d2bd",
        borderWidth: 1,
        padding: 8,
        callbacks: {
          label: (context) => {
            const val = context.raw;
            if (val == null) return "";
            const dsLabel = context.dataset.label;
            // Determine if forecast point or historical
            if (dsLabel === "Prediction Range") {
              // For the shaded band, Chart.js shows two items (upper & lower).
              // Identify which: context.datasetIndex: 0=upper invisible, 1=lower visible
              if (context.datasetIndex === 0) {
                // upper dataset: show "Upper Bound"
                return `Upper Bound: $${val.toFixed(2)}`;
              }
              // lower dataset:
              return `Lower Bound: $${val.toFixed(2)}`;
            }
            if (dsLabel === "Price / Median Forecast") {
              const idx = context.dataIndex;
              if (idx === medianData.length - 1) {
                return `Median Forecast: $${val.toFixed(2)}`;
              }
              return `Price: $${val.toFixed(2)}`;
            }
            return `$${val.toFixed(2)}`;
          },
        },
      },
    },
    animation: {
      // subtle initial animation
      tension: {
        duration: 500,
        easing: "easeOutQuart",
        from: 0.5,
        to: 0.2,
        loop: false,
      },
    },
    // Hook into onResize or onProgress if needed to re-render gradient
    // (react-chartjs-2 handles chart updates automatically)
  };

  return (
    <div className="tray-prediction-root">
      <h3 className="TrayTitle">SentiPrediction</h3>
      <div className="prediction-chart-container">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
}
