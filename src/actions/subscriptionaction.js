import {GET_SUBSCRIPTION} from '../Types/types'
const getSubscription = (payload) => {
  return {
    type: GET_SUBSCRIPTION,
    payload: payload,
  };
};
export default { getSubscription };
