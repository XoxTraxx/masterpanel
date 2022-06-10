import phase from "./phasereducer";
import client from "./clientReducer";
import pageReducer from "./pageReducer"
import { combineReducers } from "redux";
import industry from "./industryReducer";
import packedIn from "./packedInReducer";
import productReducer from "./productReducer";
import manufacturedIn from "./manufacturedIn";
import merchantReducer from "./merchantReducer";
import subscription from "./subscriptionReducer";
import notifictaionReducer from "./notifictaionReducer";


const rootReducer = combineReducers({
  phase,
  client,
  industry,
  packedIn,
  pageReducer,
  subscription,
  productReducer,
  manufacturedIn,
  merchantReducer,
  notifictaionReducer

});
export default rootReducer;
