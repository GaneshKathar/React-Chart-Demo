import React, { useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { randomInteger } from '../../../utils/math';
import moment from "moment";

const options = { maintainAspectRatio: false, responsive: true };

export default React.forwardRef(function BasicLineChart() {
  const ref = useRef();
  const [graphData, setGraphData] = useState([65, 59, 80, 81, 56, 55, 40]);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: graphData,
      },
    ],
  };

  const onClick = () => {
    if (ref.current) {
      console.log(ref.current);
      ref.current.chartInstance.data.labels.push(moment.months(randomInteger(0,11)));
      ref.current.chartInstance.data.datasets[0].data.push(randomInteger(0, 100));
      ref.current.chartInstance.update();
    }
  };

  return (
    <>
      <button onClick={onClick}>+</button>
      <Line ref={ref} data={data} options={options} />
    </>
  );
});
