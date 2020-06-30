import React, {useEffect, useRef} from 'react';
import {ForceGraph2D} from 'react-force-graph';
import createGraphData from '../../utils/graph';

const NetworkGraph = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.d3Force('charge').strength(-100);
  });
  return (
    <ForceGraph2D
      ref={ref}
      graphData={createGraphData(10, 100)}
      height={500}
      d3Force={(...a) => {
        console.log(a);
      }}
    />
  );
};

export default NetworkGraph;
