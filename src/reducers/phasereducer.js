import {SET_PHASES} from '../Types/types'
const intitialState = {
  phases: "",
};
const phase = (state = intitialState, action) => {
  switch (action.type) {
    case SET_PHASES:
      return {
          ...state,
          phase:action.payload
      }
    default:
      return state;
  }
};

export default phase;
