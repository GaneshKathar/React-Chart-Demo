import React from 'react';
import BasicChartWithIncrement from '../Component/chartjs/lineChartWithChartJs/BasicChartWithIncrement';
import BasicLineChart from '../Component/chartjs/lineChartWithChartJs/BasicLineChart';
import LineChartWithChartJs from '../Component/chartjs/lineChartWithChartJs/LineChartWithChartJs';
import TimeSeriesGraph from '../Component/chartjs/TimeseriesUsingChartjs';

export default {
  title: 'Chart js example',
};

export const Basic_Line_Chart = () => (
  <div style={{ height: '500px', width: '80%', margin: 'auto', marginTop: '20px' }}>
    <BasicLineChart />
  </div>
);
export const Line_Chart_with_increment = () => (
  <div style={{ height: '500px', width: '80%', margin: 'auto', marginTop: '20px' }}>
    <BasicChartWithIncrement />
  </div>
);
export const Stream_With_Chartjs = () => (
  <div style={{ height: '500px', width: '80%', margin: 'auto', marginTop: '20px' }}>
    <LineChartWithChartJs />
  </div>
);

export const timeseriescchart = () => (
  <div style={{ height: '500px', width: '80%', margin: 'auto', marginTop: '20px' }}>
    <TimeSeriesGraph />
  </div>
);
