import {SET_PAGES,SET_FORMS} from '../Types/types'
const intitialState = {
  pages: [],
  forms:[]
};
const pages = (state = intitialState, action) => {
  switch (action.type) {
    case SET_PAGES:
      return {
          ...state,
          pages:action.payload
      }
      case SET_FORMS:
      return {
          ...state,
          forms:action.payload
      }
    default:
      return state;
  }
};

export default pages;
