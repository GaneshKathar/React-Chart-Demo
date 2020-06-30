import React, {useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import india from '../../../assets/india.json';
import './style.css'
import {mapOptions} from "./mapOption";
import {randomInteger} from "../../../utils/math";

// Load Highcharts modules
require('highcharts/modules/map')(Highcharts);

function generateRandomStatePopulationData() {
  const states = india.objects['india-states'].geometries;
  const stateIds = states.map((state) => state.id);
  return stateIds.map((stateId) => [stateId, randomInteger(1, 100)]);
}

export default React.forwardRef(function ChoroplethMap(props,ref) {
  const [stateData, setStatData] = useState(generateRandomStatePopulationData());
  const [sliderValue, setSliderValue] = useState(0);

  function sliderOnChange(e) {
    setStatData(generateRandomStatePopulationData());
    setSliderValue(e.target.value);
  }

  return (
      <HighchartsReact ref={ref} options={mapOptions(stateData)} constructorType={'mapChart'} highcharts={Highcharts} />
  );
})
