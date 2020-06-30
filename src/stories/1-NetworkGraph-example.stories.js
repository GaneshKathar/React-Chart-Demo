import React from 'react';
import NetworkGraphHG from "../Component/forceGraph/NetworkGraphHG";
import NetworkGraph from "../Component/forceGraph/NetworkGraph";
import NetworkGraph2 from "../Component/forceGraph/NetworkGraph2";
import NetworkGraph3 from "../Component/forceGraph/NetworkGraph3";

export default {
  title: 'Network graph or force graph Example',
};

export const Highchart = () => <NetworkGraphHG />
export const ReactForceGraph = () => <NetworkGraph />
export const ReactVisGraph = () => <NetworkGraph2 />
export const ReactGraphVis = () => <NetworkGraph3 />

