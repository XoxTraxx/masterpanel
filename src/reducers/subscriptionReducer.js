import {GET_SUBSCRIPTION} from '../Types/types'
const intitialState = {
  subscription: "",
};
const phase = (state = intitialState, action) => {  switch (action.type) {
    case GET_SUBSCRIPTION:
      return {
          ...state,
          subscription:action.payload
      }
    default:
      return state;
  }
};

export default phase;
