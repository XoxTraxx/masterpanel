import {
  SET_PAGES,
  SET_FORMS,
  SET_ALLPAGES,
  SET_UNPUBLISHPAGES,
  SET_PUBLISHPAGES,
  DELETE_PAGE,
} from "../Types/types";

const intitialState = {
  pages: [],
  allPages: [],
  forms: [],
  publish: [],
  unpublish: [],
};

const pages = (state = intitialState, action) => {
  switch (action.type) {
    case SET_PAGES:
      return {
        ...state,
        pages: action.payload,
      };
    case SET_ALLPAGES:
      return {
        ...state,
        allPages: action.payload,
      };
  
    case SET_FORMS:
      return {
        ...state,
        forms: action.payload,
      };
    default:
      return state;
  }
};

export default pages;
