import india from '../../../assets/india.json'
import {randomInteger} from "../../../utils/math";

export function getStatePopulation(){
  const statePopulation = {};
  const states = india.objects["india-states"].geometries;
  const stateIds = states.map(state => state.id);
  stateIds.map(stateId => statePopulation[stateId]=randomInteger(0,25))
  return statePopulation;
}
