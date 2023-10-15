import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["", "John", "Joe", "Jane", "Pun", "Film"],
  datasets: [
    {
      label: "",
      data: [30, 70, 30, 25],
      backgroundColor: [
        'rgba(166, 108, 255, 0.4)',
        'rgba(207, 245, 0, 0.8)',
        'rgba(166, 108, 255, 0.8)',
        "rgb(217, 70, 239, 0.8)",
        "rgb(244, 63, 94, 0.8)",
        "rgb(14, 165, 233, 0.8)",
        "rgb(132, 204, 22, 0.8)",
        "rgb(245, 158, 11, 0.8)",
      ],
      borderColor: [
        'rgba(166, 108, 255, 0.8)',
        'rgba(207, 245, 0, 1)',
        'rgba(166, 108, 255, 1)',
        "rgb(217, 70, 239, 1)",
        "rgb(244, 63, 94, 1)",
        "rgb(14, 165, 233, 1)",
        "rgb(132, 204, 22, 1)",
        "rgb(245, 158, 11, 1)",
      ],
      borderWidth: 1,
      cutout: "75%",
      borderRadius: 15,
    },
  ],
};


const options = {
  layout: {
    padding: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50
    }
  },
  animation: {
    duration: 3800,
    easing: "easeOutCubic",
  },
  plugins: {
    legend: {
      display: false
    },
    datalabels: {
      align: 'end',
      anchor: 'center',
      color: (context) => {
        return context.dataset.borderColor;
      },
      display: true,
      // backgroundColor: "rgba(255, 255, 255, .8)",
      borderRadius: 20,
      padding: 6,
      font: {
          size: 14,
          family: "Poppins",
      },
      formatter: function(value, context) {
        return context.chart.data.labels[context.dataIndex];
      }
    }
  },
};


export const data2 = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [30, 70, 30, 25],
      backgroundColor: [
        'rgba(166, 108, 255, 0.4)',
        'rgba(207, 245, 0, 0.8)',
        'rgba(166, 108, 255, 0.8)',
        "rgb(217, 70, 239, 0.8)",
        "rgb(244, 63, 94, 0.8)",
        "rgb(14, 165, 233, 0.8)",
        "rgb(132, 204, 22, 0.8)",
        "rgb(245, 158, 11, 0.8)",
      ],
      borderColor: [
        'rgba(166, 108, 255, 0.8)',
        'rgba(207, 245, 0, 1)',
        'rgba(166, 108, 255, 1)',
        "rgb(217, 70, 239, 1)",
        "rgb(244, 63, 94, 1)",
        "rgb(14, 165, 233, 1)",
        "rgb(132, 204, 22, 1)",
        "rgb(245, 158, 11, 1)",
      ],
      borderWidth: 1,
      cutout: "75%",
      borderRadius: 15,
    },
  ],
};

const options2 = {
  animation: {
    duration: 3800,
    easing: "easeOutCubic",
  },
  plugins: {
    legend: {
      display: false
    },
  },
  datalabels: {
    display: false,
  }
};

function DoughnutChart({width, type}) {
  return (
    <>
      {type === "2" ? (
        <div className={`w-${width}`}>
        <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
        </div>
      ) : (
        <Doughnut data={data2} options={options2} />
      )}
    </>
  )
}

export default DoughnutChart