import React, { useState } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { randomInteger } from '../../../utils/math';

function requestData() {}

const LineChart = React.forwardRef((prop, ref) => {
  const [data, setData] = useState([0]);
  const options = {
    title: {
      text: 'My chart',
    },
    chart: {
      events: {
        load: function () {
          // var series = this.series[0];
          // setInterval(function () {
          //   series.addPoint(randomInteger(0,50), true,true);
          // }, 1000);
        },
      },
      className: 'chart',
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
        },
      ],
    },
    series: [
      {
        data: [1, 23, 56, 34, 5],
      },
    ],
  };
  return (
      <HighchartsReact
        ref={ref}
        highcharts={Highcharts}
        options={options}
      />
  );
});

export default LineChart;
LineChart.displayName = 'Line Chart';
