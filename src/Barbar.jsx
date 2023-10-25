// BarChart.js

// import React from 'react';
// import {Bar} from 'react-chartjs-2';

// const BarChart = () => {
//   // Define your data here
//   const data = {
//     labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
//     datasets: [
//       {
//         label: 'Data',
//         data: [10, 20, 15, 30, 25],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.6)',
//           'rgba(54, 162, 235, 0.6)',
//           'rgba(255, 206, 86, 0.6)',
//           'rgba(75, 192, 192, 0.6)',
//           'rgba(153, 102, 255, 0.6)',
//         ],
//       },
//     ],
//   };

//   // Define chart options
//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="chart">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;







// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// const BarChart = () => {
//   const state = {
//     series: [
//       {
//         data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
//       },
//     ],
//     options: {
//       chart: {
//         type: 'bar',
//         height: 380,
//       },
//       plotOptions: {
//         bar: {
//           barHeight: '100%',
//           distributed: true,
//           horizontal: true,
//           dataLabels: {
//             position: 'bottom',
//           },
//         },
//       },
//       colors: [
//         '#33b2df',
//         '#546E7A',
//         '#d4526e',
//         '#13d8aa',
//         '#A5978B',
//         '#2b908f',
//         '#f9a3a4',
//         '#90ee7e',
//         '#f48024',
//         '#69d2e7',
//       ],
//       dataLabels: {
//         enabled: true,
//         textAnchor: 'start',
//         style: {
//           colors: ['#fff'],
//         },
//         formatter: function (val, opt) {
//           return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
//         },
//         offsetX: 0,
//         dropShadow: {
//           enabled: true,
//         },
//       },
//       stroke: {
//         width: 1,
//         colors: ['#fff'],
//       },
//       xaxis: {
//         categories: [
//           'South Korea',
//           'Canada',
//           'United Kingdom',
//           'Netherlands',
//           'Italy',
//           'France',
//           'Japan',
//           'United States',
//           'China',
//           'India',
//         ],
//       },
//       yaxis: {
//         labels: {
//           show: false,
//         },
//       },
//       title: {
//         text: 'Custom DataLabels',
//         align: 'center',
//         floating: true,
//       },
//       subtitle: {
//         text: 'Category Names as DataLabels inside bars',
//         align: 'center',
//       },
//       tooltip: {
//         theme: 'dark',
//         x: {
//           show: false,
//         },
//         y: {
//           title: {
//             formatter: function () {
//               return '';
//             },
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div id="chart">
//       <ReactApexChart options={state.options} series={state.series} type="bar" height={380} />
//     </div>
//   );
// };

// export default BarChart;














import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#F86624', '#FFBB3B', '#FF8442'];

const BarChart = () => {
  const [options] = useState({
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: '25%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['John','Joe','Jake','Amber','Mary','David', 'Lily'],
      labels: {
        style: {
          colors: colors,
          fontSize: '12px',
        },
      },
    },
  });

  const [series] = useState([
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ]);

  return (
    <div>
      <ReactApexChart options={options} series={series} type="bar" height={350} width={400}/>
    </div>
  );
};

export default BarChart;


