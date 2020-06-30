import * as topojson from "topojson-client";
import india from "../assets/india.json";
import L from 'leaflet';

export function convertTopoJsonToHCGeoJson(topoJson, key){
  const geoJSON = topojson.feature(topoJson, topoJson.objects[key])
  geoJSON.features.map(function addKeyToFeature(feature){return feature.properties['hc-key']=feature.id});
  return geoJSON;
}

export var geoJsonIndia = convertTopoJsonToHCGeoJson(india, 'india-states');

function randomGeoPointInCircle(center, radius) {
  var y0 = center.latitude;
  var x0 = center.longitude;
  var rd = radius / 111300; //about 111300 meters in one degree

  var u = Math.random();
  var v = Math.random();

  var w = rd * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  //Adjust the x-coordinate for the shrinking of the east-west distances
  var newlat = y + y0;
  var newlon = x + x0;

  return {lat:Number(newlat.toFixed(5)), lon:Number(newlon.toFixed(5))};
}

export const createRandomPoints = ({ latitude, longitude }, number, radius) => {
  var array = [];
  for (let i = 0; i < number; i++) {
    array.push(randomGeoPointInCircle({ latitude, longitude }, radius));
  }
  return array;
};


export const createProjectedRandomPoints = ({ latitude, longitude }, number, radius) => {
  var array = [];
  for (let i = 0; i < number; i++) {
    let point = randomGeoPointInCircle({ latitude, longitude }, radius);
    let [lat,lon] = window.proj4('WGS84',[point.lat,point.lon]);
    array.push({lat,lon});
  }
  return array;
};

export function getColor(d) {
  return d > 25
    ? '#800026'
    : d > 20
      ? '#E31A1C'
      : d > 15
        ? '#FD8D3C'
        : d > 10
          ? '#FEB24C'
          : d > 5
            ? '#FED976'
            : '#FFEDA0';
}

export function layersUtils(geoJson, map) {
  function highlightOnClick(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 2,
      color: '#f90303',
      dashArray: '',
      fillOpacity: 0.7,
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  function resetHighlight(e) {
    geoJson.current.leafletElement.resetStyle(e.target);
  }

  function zoomToFeature(e) {
    map.current.leafletElement.fitBounds(e.target.getBounds());
  }

  return { highlightOnClick, resetHighlight, zoomToFeature };
}
