import React, {useRef} from 'react';
import GridLayout from 'react-grid-layout';
import 'react-resizable/css/styles.css';
import 'react-grid-layout/css/styles.css';
import LineChart from '../../highchart/lineChartHG/LineChart';
import ChoroplethMap from "../../highchart/choroplethMapHG/ChoroplethMap";
import './index.css';

export default function BasicLayoutWithHighChart() {
  let ref = {
    a: useRef(),
    b: useRef(),
    c: useRef(),
  };
  let layout = [
    { i: 'a', x: 0, y: 0, w: 4, h: 2 },
    { i: 'b', x: 4, y: 0, w: 4, h: 2 },
    { i: 'c', x: 8, y: 0, w: 4, h: 2 },
  ];

  let onResizeStop = (_, changedWidget) => {
    const { i: changedWidgetID } = changedWidget;
    if(ref[changedWidgetID].current){
      setTimeout(() => {
        ref[changedWidgetID].current.chart.reflow();
      }, 500);
    }
  };
  return (
    <div style={{ background: '#828080' }}>
      <GridLayout
        style={{ background: '#828080' }}
        layout={layout}
        cols={12}
        width={1200}
        verticalCompact={false}
        onResizeStop={onResizeStop}
      >
        <div key="a">
          <div className="hg-chart-container">
            <LineChart ref={ref.a} />
          </div>
        </div>
        <div key="b">
          <div className="hg-chart-container">
            <ChoroplethMap ref={ref.b} />
          </div>
        </div>
        <div key="c" style={{ background: 'yellow' }}>
          Text Box
        </div>
      </GridLayout>
    </div>
  );
}

BasicLayoutWithHighChart.defaultProps = {
  className: 'layout',
  items: 20,
  rowHeight: 30,
  cols: 12,
};
