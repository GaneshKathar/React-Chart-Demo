import React from "react";
import { CircleMarker, GeoJSON, LayerGroup, Map } from "react-leaflet";
import { createRandomPoints } from "../../../utils/map";
import * as topojson from "topojson-client";
import "leaflet/dist/leaflet.css";
import india from "../../../assets/india-1.json";
import "./index.css";

var geoJson = topojson.feature(india, india.objects['india-states']);

export default function MapWithMarkers() {
  const markers = {
    redMarkers: createRandomPoints({ latitude: 19.076, longitude: 72.878 }, 1, 1),
    greenMarkers: createRandomPoints({ latitude: 21.146, longitude: 79.088 }, 50, 100000),
  };

  function geoJSONStyle(feature) {
    return {
      color: '#1f2021',
      weight: 1,
      fillOpacity: 0.5,
      fillColor: '#eecd19',
    };
  }

  return (
      <Map className="map" center={[21.146, 79.088]} zoom={4} preferCanvas={true}>
        <GeoJSON data={geoJson} style={geoJSONStyle} />
        <LayerGroup>
          {markers.redMarkers.map((markerPosition) => (
            <CircleMarker center={markerPosition} color="red" radius={0.1} />
          ))}
          {markers.greenMarkers.map((markerPosition) => (
            <CircleMarker center={markerPosition} color="green" radius={0.1} />
          ))}
        </LayerGroup>
      </Map>
  );
}
