import {SET_PRODUCTS} from '../Types/types'
const intitialState = {
  products: "",
};
const phase = (state = intitialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
          ...state,
          products:action.payload
      }
    default:
      return state;
  }
};

export default phase;
