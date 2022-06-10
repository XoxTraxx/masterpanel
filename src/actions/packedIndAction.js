import {SET_PAKCEDIND} from '../Types/types'
const setPackedIn = (payload) => {
  return {
    type: SET_PAKCEDIND,
    payload: payload,
  };
};
export default { setPackedIn };
