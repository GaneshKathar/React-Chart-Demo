import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-zoom';
import moment from 'moment';
import timeseriesData from '../../assets/timeseriesData.json';

function newDate(days) {
  return moment().add(days, 'd').toDate();
}

function newDateString(days) {
  return moment().add(days, 'd').format();
}

console.log(newDateString(1));

const data = {
  datasets: [
    {
      label: 'exam',
      borderColor: 'green',
      data: timeseriesData.map((data) => ({ x: data[0], y: data[1] })),
    },
  ],
};

const options = {
  width: 200,
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      {
        type: 'time',
        position: 'bottom',
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      },
    ],
  },
  plugins: {
    streaming: false, //most important thing
    zoom: {
      zoom: {
        enabled: true,
        drag: {
          animation: 1000,
        },
        mode: 'x',
        speed: 0.05,
        onZoom: function({chart}) { console.log(`I'm zooming!!!`, chart); },
        // Function called once zooming is completed
        onZoomComplete: function({chart}) { console.log(`I was zoomed!!!`, chart); }
      },

    },
  },
};

const TimeSeriesGraph = () => {
  return <Line data={data} options={options} height={500} />;
};

export default TimeSeriesGraph;
