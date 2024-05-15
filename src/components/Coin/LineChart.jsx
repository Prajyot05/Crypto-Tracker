import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Not being used directly, but still needed

// function LineChart({ chartData, multiAxis }) {
//   const options = {
//     plugins: {
//       legend: {
//         display: multiAxis ? true : false,
//       },
//     },
//     responsive: true,
//     interaction: {
//       mode: "index",
//       intersect: false,
//     },
//     scales: {
//       crypto1: {
//         position: "left",
//       },
//       crypto2: multiAxis && {
//         position: "right",
//       },
//     },
//   };

//   return <Line data={chartData} options={options} />;
// }

function LineChart({ chartData, multiAxis }) {
  const scales = {
    crypto1: {
      position: "left",
    },
  };

  if (multiAxis) {
    scales.crypto2 = {
      position: "right",
    };
  }

  const options = {
    plugins: {
      legend: {
        display: multiAxis,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: scales,
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;