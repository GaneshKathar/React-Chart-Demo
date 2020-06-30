import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-streaming';

export default function LineChart() {
  const [stopStream, setStopStream] = useState(false);

  return (
    <>
      <div>Line Chart with real time data using chart js</div>
      <button onClick={() => setStopStream((prevState) => (prevState ? false : true))}>
        {stopStream ? 'Start' : 'Stop'}
      </button>
      <Line
        data={{
          datasets: [
            {
              label: 'Dataset 1',
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              lineTension: 0,
              borderDash: [8, 4],
              data: [],
            },
          ],
        }}
        options={{
          scales: {
            xAxes: [
              {
                type: 'realtime',
                realtime: {
                  onRefresh: function (chart) {
                    chart.data.datasets.forEach(function (dataset) {
                      dataset.data.push({
                        x: Date.now(),
                        y: Math.random(),
                      });
                    });
                  },
                  delay: 1000,
                  refresh: 1000,
                  duration: 20000,
                  pause: stopStream,
                },
              },
            ],
          },
        }}
      />
    </>
  );
}

LineChart.displayName = 'Line chart using Chart js';
