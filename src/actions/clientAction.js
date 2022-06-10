import {SET_CLIENT} from '../Types/types'
const getClient = (payload) => {
  return {
    type: SET_CLIENT,
    payload: payload,
  };
};
export default { getClient };
