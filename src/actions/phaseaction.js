import {SET_PHASES} from '../Types/types'
const setPhases = (phaseobj) => {
  return {
    type: SET_PHASES,
    payload: phaseobj,
  };
};
export default { setPhases };
