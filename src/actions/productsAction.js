import {SET_PRODUCTS} from '../Types/types'
const setProducts= (phaseobj) => {
  return {
    type: SET_PRODUCTS,
    payload: phaseobj,
  };
};
export default { setProducts };
