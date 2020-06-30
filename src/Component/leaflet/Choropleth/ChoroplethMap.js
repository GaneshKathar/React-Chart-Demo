import React, { useRef } from 'react';
import { GeoJSON, Map } from 'react-leaflet';
import india from '../../../assets/india-1.json';
import * as topojson from 'topojson-client';
import { getColor, layersUtils } from '../../../utils/map';
import { getStatePopulation } from './stateData';
import 'leaflet/dist/leaflet.css';
import Layout from '../../layout/Layout';

export default function ChoroplethMap({ stateData }) {
  var mapRef = useRef(null),
    geoJsonRef = useRef(null);

  var geoJson = topojson.feature(india, india.objects['india-states']);
  var centerPosition = [21.145, 79.09];
  var zoom = 4;

  return (
    <div style={{ height: '500px', width: '80%', margin: 'auto', marginTop: '20px' }}>
      <Map className="map" center={centerPosition} zoom={zoom} ref={mapRef} maxZoom={4} minZoom={4}>
        <GeoJSON data={geoJson} style={geoJSONStyle} onEachFeature={onEachFeature} ref={geoJsonRef} />
      </Map>
    </div>
  );

  function onEachFeature(feature, layer) {
    const popupContent =
      `<Popup><p>Customizable Popups <br />with feature information.` +
      `</p><pre>Borough: <br />${feature.properties.name}</pre></Popup>`;
    layer.bindPopup(popupContent);
    let layerUtils = layersUtils(geoJsonRef, mapRef);
    layer.on({
      mouseover: layerUtils.highlightOnClick,
      mouseout: layerUtils.resetHighlight,
      click: layerUtils.zoomToFeature,
    });
  }

  function geoJSONStyle(feature) {
    return {
      color: '#1f2021',
      weight: 1,
      fillOpacity: 0.5,
      fillColor: getColor(stateData[feature.id]),
    };
  }
}

ChoroplethMap.defaultProps = {
  stateData: getStatePopulation(),
};
