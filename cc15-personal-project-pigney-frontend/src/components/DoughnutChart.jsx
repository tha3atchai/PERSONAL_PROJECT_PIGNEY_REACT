import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: '',
      data: [30, 70],
      backgroundColor: [
        'rgba(166, 108, 255, 0.4)',
        'rgba(207, 245, 0, 0.8)',
      ],
      borderColor: [
        'rgba(166, 108, 255, 1)',
        'rgba(207, 245, 0, 1)',
      ],
      borderWidth: 1,
      cutout: "70%",
      borderRadius: 15,
    },
  ],
};

const options = {
  animation: {
    duration: 3600,
    delay: 1000,
    easing: "easeOutCubic",
  },
};

function DoughnutChart() {
  return <Doughnut data={data} options={options}/>
}

export default DoughnutChart