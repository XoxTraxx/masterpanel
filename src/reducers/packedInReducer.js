import {SET_PAKCEDIND} from '../Types/types'
const intitialState = {
  packedIn: "",
};
const phase = (state = intitialState, action) => {
  switch (action.type) {
    case SET_PAKCEDIND:
      return {
          ...state,
          packedIn:action.payload
      }
    default:
      return state;
  }
};

export default phase;
