import { SET_MERCHANTS, SET_SINGLEMERCHANT } from "../Types/types";
const intitialState = {
  merchants: [],
  merchant: "",
};
const setMerchants = (state = intitialState, action) => {
  switch (action.type) {
    case SET_MERCHANTS:
      return {
        ...state,
        merchants: action.payload,
      };
    case SET_SINGLEMERCHANT:
      return {
        ...state,
        merchant: action.payload,
      };

    default:
      return state;
  }
};

export default setMerchants;
