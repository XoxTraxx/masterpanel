import { SET_CLIENT } from "../Types/types";
const intitialState = {
  client: "",
};
const getClient = (state = intitialState, action) => {
  switch (action.type) {
    case SET_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    default:
      return state;
  }
};

export default getClient;
