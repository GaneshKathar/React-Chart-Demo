import React from 'react';
import './proj4.module';
import 'leaflet/dist/leaflet.css';
import Layout from './Component/layout/Layout';
import LineChart from './Component/highchart/lineChartHG/LineChart';
import ChoroplethMap from './Component/highchart/choroplethMapHG/ChoroplethMap';
import MapWithMarker from './Component/highchart/MapWithMarker';
import LineChartWithChartJs from './Component/chartjs/lineChartWithChartJs/LineChartWithChartJs';
import NetworkGraph from './Component/forceGraph/NetworkGraph';
import NetworkGraphHG from './Component/forceGraph/NetworkGraphHG';
import LineGraphWithWidget from './Component/dashboardWidget/chartjsLayout/ChartJsLayout';
import BasicLayoutWithHighChart from './Component/dashboardWidget/highchartLayout/HighChartLayout';
import AddRemoveLayout from './Component/dashboardWidget/AddRemoveLayout/AddRemoveLayout';
import TimeseriesUsingChartjs from './Component/chartjs/TimeseriesUsingChartjs';
import TimeSeriesWithHG from './Component/highchart/TimeSeriesWithHG';
import BasicLineChart from './Component/chartjs/lineChartWithChartJs/BasicLineChart';
import ChoroplethWithChangingData from './Component/leaflet/Choropleth/ChoroplethWithChangingData';
import ChoroplethMapLeaflet from './Component/leaflet/Choropleth/ChoroplethMap';
import MapWithMarkersLeaflet from './Component/leaflet/mapWithMarker/MapWithMarkers';

export const renderLeafLetMap = (MapComponent) => {
  return (
    <div style={{ height: '500px', width: '80%', margin: 'auto', marginTop: '20px' }}>
      <MapComponent />
    </div>
  );
};

function App() {
  return (
    <div>
      <Layout>
        {/*<LineChart />*/}
        {/*<ChoroplethMap />*/}
        {/*<MapWithMarker />*/}
        {/*<LineChartWithChartJs />*/}
        {/*<NetworkGraph />*/}
        {/*<NetworkGraphHG />*/}
        {/*<LineGraphWithWidget />*/}
        {/*<BasicLayoutWithHighChart />*/}
        {/*<AddRemoveLayout />*/}
        {/*<TimeseriesUsingChartjs />*/}
        {/*<TimeSeriesWithHG />*/}
        {/*<BasicLineChart />*/}
        {/*{renderLeafLetMap(ChoroplethWithChangingData)}*/}
        {/*{renderLeafLetMap(ChoroplethMapLeaflet)}*/}
        {renderLeafLetMap(MapWithMarkersLeaflet)}
      </Layout>
    </div>
  );
}

export default App;
