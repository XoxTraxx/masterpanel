import {SET_INDUSTRY} from '../Types/types'
const setIndustry = (payload) => {
    console.log('callled and',payload)
  return {
    type: SET_INDUSTRY,
    payload: payload,
  };
};
export default { setIndustry };
