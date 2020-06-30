import React from 'react';
import ChoroplethMap from '../Component/leaflet/Choropleth/ChoroplethMap';
import ChoroplethWithChangingData from '../Component/leaflet/Choropleth/ChoroplethWithChangingData';
import MapWithMarkers from '../Component/leaflet/mapWithMarker/MapWithMarkers';

export default {
  title: 'Leaflet example',
};

export const Choropleth_Map = () => <ChoroplethMap />;
export const Choropleth_map_with_slider = () => <ChoroplethWithChangingData />;
export const Map_With_Marker = () => (
  <div style={{ height: '500px', width: '80%', margin: 'auto', marginTop: '20px' }}>
    <MapWithMarkers />
  </div>
);
