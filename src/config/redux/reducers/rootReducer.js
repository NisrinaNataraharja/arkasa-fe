import { combineReducers } from "redux";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";
import { productsReducer, detailProdReducer } from "./productsReducer";
import profileReducer from "./profileReducer";
import { bookingReducer } from "./bookingReducer";

const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  products: productsReducer,
  productDetail: detailProdReducer,
  profile: profileReducer,
  booking: bookingReducer,
});

export default rootReducer;
