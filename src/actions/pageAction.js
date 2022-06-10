import {SET_PAGES,SET_FORMS} from '../Types/types'
const setPages = (payload) => {
  return {
    type: SET_PAGES,
    payload: payload,
  };
};
const setFroms = (payload) => {
    return {
      type: SET_FORMS,
      payload: payload,
    };
  };
export default { setPages,setFroms };
