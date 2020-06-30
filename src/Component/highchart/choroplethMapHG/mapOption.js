import {convertTopoJsonToHCGeoJson} from "../../../utils/map";
import india from "../../../assets/india.json";

var geoJson = convertTopoJsonToHCGeoJson(india, 'india-states');

export function mapOptions(data){
  return {
    title: {
      text: 'Choropleth Map',
    },
    chart: {
      animation: false,
      style: {
        margin: 'auto',
      },
    },
    colorAxis: {
      min: 0,
      stops: [
        [0.4, '#44a54c'],
        [0.65, '#cfb831'],
        [1, '#e30e31'],
      ],
    },
    plotOptions:{
      series: {
        animation:{
          duration: 0,
        },
      }
    },
    series: [
      {
        mapData: geoJson,
        name: 'India',
        data: data,
        states: {
          hover: {
            borderWidth: 2,
            borderColor: '#f5043a'
          }
        },
        events: {
          click: function (e) {
            e.point.zoomTo();
          }
        },
      },
    ],
    mapNavigation:{
      enabled: true,
    },
    tooltip: {
      formatter: function () {
        return `<div>${this.point.properties.st_nm}</div>`;
      }
    },
    xAxis:{
      zoomEnabled: true
    }
  };
}