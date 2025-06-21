import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip);

export default function TrayChart() {
  const labels = [
  "2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07",
  "2020-08", "2020-09", "2020-10", "2020-11", "2020-12", "2021-01", "2021-02",
  "2021-03", "2021-04", "2021-05", "2021-06", "2021-07", "2021-08", "2021-09",
  "2021-10", "2021-11", "2021-12", "2022-01"
];

const averageSentiments = [
  -0.119148936, 0.043478261, -0.042424242, -0.074468085, 0.042328042, -0.03343465,
  0.134328358, 0.029850746, 0.134831461, 0.058823529, 0.011764706, 0.375,
  0.135135135, 0.011904762, 0, -0.101190476, -0.222222222, -0.184782609,
  -0.090909091, 0.142857143, 0.285714286, -0.150442478, -0.181102362, 0.368421053,
  0.41
];

const stockPrices = [
  35.24393636, 53.16312228, 37.27342467, 44.23990504, 53.29503307, 64.23615161,
  97.34272766, 120.0199047, 137.8317453, 142.4031809, 155.2041656, 212.9395447,
  276.2589473, 264.7564906, 218.9342021, 236.5393648, 205.5843353, 208.9731834,
  219.7115878, 235.0810616, 251.3174627, 292.7830171, 373.5541251, 339.6299993,
  336.7228302
];


  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price ($)",
        data: stockPrices,
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.1)",
        yAxisID: "y",
        tension: 0.3,
      },
      {
        label: "Sentiment Score",
        data: averageSentiments,
        borderColor: "green",
        backgroundColor: "rgba(0,255,0,0.1)",
        yAxisID: "y1",
        tension: 0.3,
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
      y: {
        type: "linear",
        position: "left",
        title: { display: true, text: "Price ($)" },
      },
      y1: {
        type: "linear",
        position: "right",
        title: { display: true, text: "Sentiment Score" },
        grid: { drawOnChartArea: false },
        min: -1,
        max: 1,
      },
    },
  };

  return <Line data={data} options={options} />;
}
