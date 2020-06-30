import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import map from '@highcharts/map-collection/custom/world-continents.geo.json';
import { createRandomPoints } from '../../utils/map';

require('highcharts/modules/map')(Highcharts);

var data = createRandomPoints({ latitude: 21.146633, longitude: 79.08886 }, 2, 2);

export default function MapWithMarker() {
  const mapOption = {
    chart: {
      animation: false,
      width: 800,
      style: {
        margin: 'auto',
      },
    },

    plotOptions: {
      series: {
        turboThreshold: 1000,
      },
    },

    title: {
      text: 'Highmaps basic lat/lon demo',
    },

    mapNavigation: {
      enabled: true,
    },

    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}',
    },

    series: [
      {
        type: 'map',
        mapData: map,
        name: 'asd',
        borderColor: '#A0A0A0',
        nullColor: 'rgba(200, 200, 200, 0.3)',
        showInLegend: false,
        index: 10,
      },
      {
        type: 'mappoint',
        name: 'Cities',
        color: '#f40522',
        data: data,
        boostThreshold: 2000,
        index: 11,
      },
    ],
  };
  return (
    <>
      <HighchartsReact options={mapOption} constructorType={'mapChart'} highcharts={Highcharts} />;
    </>
  );
}
