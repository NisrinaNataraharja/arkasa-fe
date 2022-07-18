import {combineReducers} from 'redux'
import userReducer from './userReducer'
import adminReducer from './adminReducer'
import ticketReducer from "./ticketReducer";
import profileReducer from "./profileReducer";
import { bookingReducer } from "./bookingReducer";
import { productsReducer, detailProdReducer } from './productsReducer'
import { ticketDetailReducer } from './ticketDetailReducer'
import { addBookingReducer } from './addBookingReducer'
// import ticketReducer from './ticketReducer'

const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
    ticket: ticketReducer,
    profile: profileReducer,
    booking: bookingReducer,
    products: productsReducer,
    productDetail: detailProdReducer,
    ticketDetail: ticketDetailReducer,
    latestBooking : addBookingReducer
    // ticket: ticketReducer,
})

export default rootReducer;
