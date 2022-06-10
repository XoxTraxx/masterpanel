import { SET_MERCHANTS, SET_NOTIFICATION } from "../Types/types";
const intitialState = {
  notification: [],
};
const setMerchants = (state = intitialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      };
    
    default:
      return state;
  }
};

export default setMerchants;
