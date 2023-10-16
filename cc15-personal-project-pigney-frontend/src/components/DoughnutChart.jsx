import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({width, type}) {

const data = {
  labels: ["", "Sin", "Joe", "Jane", "Pun", "Film"],
  datasets: [
    {
      label: "",
      data: [30, 70, 60, 25, 40, 50],
      backgroundColor: [
        'rgba(166, 108, 255, 0.4)',
        'rgba(207, 245, 0, 0.8)',
        'rgba(166, 108, 255, 0.8)',
        "rgba(94, 234, 212, 0.8)",
        "rgba(244, 63, 94, 0.8)",
        "rgba(253, 224, 71, 0.8)",
        "rgba(103, 232, 249, 0.8)",
        "rgba(217, 70, 239, 0.8)",
        "rgba(14, 165, 233, 0.8)",
        "rgba(132, 204, 22, 0.8)",
        "rgba(245, 158, 11, 0.8)",
      ],
      borderColor: [
        'rgba(166, 108, 255, 0.8)',
        'rgba(207, 245, 0, 1)',
        'rgba(166, 108, 255, 1)',
        "rgba(94, 234, 212, 1)",
        "rgba(244, 63, 94, 1)",
        "rgba(253, 224, 71, 1)",
        "rgba(103, 232, 249, 1)",
        "rgba(217, 70, 239, 1)",
        "rgba(14, 165, 233, 1)",
        "rgba(132, 204, 22, 1)",
        "rgba(245, 158, 11, 1)",
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


const data2 = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [30, 70, 60, 25, 40, 50],
      backgroundColor: [
        'rgba(166, 108, 255, 0.4)',
        'rgba(207, 245, 0, 0.8)',
        'rgba(166, 108, 255, 0.8)',
        "rgba(94, 234, 212, 0.8)",
        "rgba(244, 63, 94, 0.8)",
        "rgba(253, 224, 71, 0.8)",
        "rgba(103, 232, 249, 0.8)",
        "rgba(217, 70, 239, 0.8)",
        "rgba(14, 165, 233, 0.8)",
        "rgba(132, 204, 22, 0.8)",
        "rgba(245, 158, 11, 0.8)",
      ],
      borderColor: [
        'rgba(166, 108, 255, 0.8)',
        'rgba(207, 245, 0, 1)',
        'rgba(166, 108, 255, 1)',
        "rgba(94, 234, 212, 1)",
        "rgba(244, 63, 94, 1)",
        "rgba(253, 224, 71, 1)",
        "rgba(103, 232, 249, 1)",
        "rgba(217, 70, 239, 1)",
        "rgba(14, 165, 233, 1)",
        "rgba(132, 204, 22, 1)",
        "rgba(245, 158, 11, 1)",
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


  return (
    <>
      {type === "2" ? (
        <div className={`relative bottom-6 right-7 w-${width}`}>
        <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
        </div>
      ) : (
        <Doughnut data={data2} options={options2} />
      )}
    </>
  )
}

export default DoughnutChart