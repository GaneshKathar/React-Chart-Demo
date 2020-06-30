import React, {useRef} from 'react';
import GridLayout from 'react-grid-layout';
import 'react-resizable/css/styles.css';
import 'react-grid-layout/css/styles.css';
import BasicLineChart from "../../chartjs/lineChartWithChartJs/BasicLineChart";
import './index.css'
import MapWithMarkers from "../../leaflet/mapWithMarker/MapWithMarkers";

export default function BasicLayout() {
  const chartRef = useRef();
  const rglRef = useRef();
  let layout = [
    { i: 'a', x: 0, y: 0, w: 4, h: 2 },
    { i: 'b', x: 4, y: 0, w: 4, h: 2 },
    { i: 'c', x: 8, y: 0, w: 4, h: 2 },
  ];

  return (
    <div style={{ background: '#828080' }}>
      <GridLayout layout={layout} cols={12} width={1200} verticalCompact={false}>
        <div key="a" ref={rglRef} className="chart-container">
            <BasicLineChart ref={chartRef}/>
        </div>
        <div key="b" ref={rglRef} className="chart-container">
          <BasicLineChart ref={chartRef}/>
        </div>
        <div key="c" ref={rglRef} className="chart-container">
          <MapWithMarkers />
        </div>
      </GridLayout>
    </div>
  );
}

BasicLayout.defaultProps = {
  className: 'layout',
  items: 20,
  rowHeight: 30,
  cols: 12,
};
