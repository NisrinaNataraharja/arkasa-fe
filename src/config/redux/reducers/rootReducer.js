import { combineReducers } from "redux";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";
import ticketReducer from "./ticketReducer";
import profileReducer from "./profileReducer";
import { bookingReducer } from "./bookingReducer";
import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  ticket: ticketReducer,
  profile: profileReducer,
  booking: bookingReducer,
  products: productsReducer,
});

export default rootReducer;
