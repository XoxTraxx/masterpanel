import {SET_MERCHANTS, SET_SINGLEMERCHANT} from '../Types/types'
const setMerchants = (phaseobj) => {
  return {
    type: SET_MERCHANTS,
    payload: phaseobj,
  };
};
const setSingleMerchant = (phaseobj) => {
  return {
    type: SET_SINGLEMERCHANT,
    payload: phaseobj,
  };
};
export default { setMerchants, setSingleMerchant };
