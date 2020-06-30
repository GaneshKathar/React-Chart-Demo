import React from "react";

// Import Highcharts
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsNetworkgraph from "highcharts/modules/networkgraph";
import HighchartsExporting from "highcharts/modules/exporting";
import createGraphData from "../../utils/graph";

HighchartsNetworkgraph(Highcharts);
HighchartsExporting(Highcharts);

const graph = createGraphData(100 ,200);



const options = {
  chart: {
    type: 'networkgraph',
  },
  title: {
    text: ''
  },
  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        linkLength: 20,
      },
    }
  },
  series: [{
    data: graph.links.map((link)=>([link.source,link.target])),
  }]
}

const NetworkGraphHG = () => {
  return   <HighchartsReact options={options} constructorType={'mapChart'} highcharts={Highcharts} />;
}

export default NetworkGraphHG;
