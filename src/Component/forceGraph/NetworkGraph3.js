import React from 'react';
import Graph from 'react-graph-vis';
import createGraphData from "../../utils/graph";

const graphData = createGraphData(10,10 );

const NetworkGraph3 = () => {
  const graph = {
    nodes: graphData.nodes.map(node => ( { id: node.id, label: node.name})),
    edges: graphData.links.map(link => ( { from: link.source, to: link.target }))
  };

  const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    interaction:{
      dragNodes:false,
      dragView: false,
      hideEdgesOnDrag: false,
      hideEdgesOnZoom: false,
      hideNodesOnDrag: false,
      hover: false,
      hoverConnectedEdges: true,
      keyboard: {
        enabled: false,
        speed: {x: 10, y: 10, zoom: 0.02},
        bindToWindow: true
      },
      multiselect: false,
      navigationButtons: false,
      selectable: true,
      selectConnectedEdges: true,
      tooltipDelay: 300,
      zoomView: true
    },
    height: "500px"
  };


  return (
    <Graph
      graph={graph}
      options={options}
      d3Force={(...a)=>{console.log(a)}}
    />
  )
}

export default NetworkGraph3;

