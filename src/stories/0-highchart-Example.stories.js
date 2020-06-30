import React from 'react';
import Choropleth from "../Component/highchart/choroplethMapHG/ChoroplethMap";
import Line from "../Component/highchart/lineChartHG/LineChart";
import Network from "../Component/forceGraph/NetworkGraphHG"
import TimeSeriesWithHG from "../Component/highchart/TimeSeriesWithHG";
import MarkerMap from "../Component/highchart/MapWithMarker";
import StreamLineChart from "../Component/highchart/lineChartHG/StreamLineChart";

export default {
  title: 'HighChart Example',
};

export const ChoroplethMap = () => <Choropleth />;

export const LineChart = () => <Line />;

export const NetworkGraph = () => <Network />;

export const TimeSeriesGraph = () => <TimeSeriesWithHG />;

export const MapWithMarker = () => <MarkerMap />

export const Stream_LineChart = () => <StreamLineChart />