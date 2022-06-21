import {SET_PAGES,SET_FORMS,SET_ALLPAGES} from '../Types/types'
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
  const setAllPages = (payload) => {
    return {
      type: SET_ALLPAGES,
      payload: payload,
    };
  };
export default { setPages,setFroms,setAllPages };
