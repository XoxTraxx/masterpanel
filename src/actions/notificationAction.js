import {SET_NOTIFICATION} from '../Types/types'
const setNotification = (payload) => {
  return {
    type: SET_NOTIFICATION,
    payload: payload,
  };
};
export default { setNotification };
