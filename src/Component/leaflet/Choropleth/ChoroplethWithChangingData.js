import React, { useState } from 'react';
import ChoroplethMap from './ChoroplethMap';
import './styles.css';
import {getStatePopulation} from "./stateData";
import 'leaflet/dist/leaflet.css';

export default function ChoroplethWithChangingData() {
  const [stateData, setStatData] = useState(getStatePopulation());
  const [sliderValue, setSliderValue] = useState(0);

  function sliderOnChange(e) {
    setStatData(getStatePopulation());
    setSliderValue(e.target.value);
  }

  return (
    <>
      <div className="sliderWrapper">
        <input type="range" min="1" max="100" value={sliderValue} id="myRange" onChange={sliderOnChange} className="slider" />
      </div>
      <ChoroplethMap stateData={stateData} />
    </>
  );
}
