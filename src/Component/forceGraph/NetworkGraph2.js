import React from 'react';
import {ForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';
import createGraphData from "../../utils/graph";

const graph = createGraphData(10,10);

const NetworkGraph2 = () => {
  return (
    <ForceGraph simulationOptions={{ height: 300, width: 300 }}>
      {graph.nodes.map((node)=><ForceGraphNode node={{ id: node.id }} fill="red" />)}
      {graph.links.slice(1,100).map((link)=> <ForceGraphLink link={{ source: link.source, target: link.target }} />)}
    </ForceGraph>
  )
}

export default NetworkGraph2;

