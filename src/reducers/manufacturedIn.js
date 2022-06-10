import {SET_MANUFACTUREDIN} from '../Types/types'
const intitialState = {
  manufactureIn: "",
};
const manufactureIn = (state = intitialState, action) => {
  switch (action.type) {
    case SET_MANUFACTUREDIN:
      return {
          ...state,
          manufactureIn:action.payload
      }
    default:
      return state;
  }
};

export default manufactureIn;
