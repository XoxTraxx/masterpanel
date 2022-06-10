import {SET_MANUFACTUREDIN} from '../Types/types'
const setManufacturedIn = (payload) => {
  return {
    type: SET_MANUFACTUREDIN,
    payload: payload,
  };
};
export default { setManufacturedIn };
