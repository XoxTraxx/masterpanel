import { SET_INDUSTRY } from "../Types/types";
const intitialState = {
  industries: "",
};
const getIndustries = (state = intitialState, action) => {
  switch (action.type) {
    case SET_INDUSTRY:
      return {
        ...state,
        industries: action.payload,
      };
    default:
      return state;
  }
};

export default getIndustries;
