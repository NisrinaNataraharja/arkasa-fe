import {combineReducers} from 'redux'
import userReducer from './userReducer'
import adminReducer from './adminReducer'
import { productsReducer, detailProdReducer } from './productsReducer'
import { ticketDetailReducer } from './ticketDetailReducer'
import { addBookingReducer } from './addBookingReducer'
import ticketReducer from './ticketReducer'

const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
    products: productsReducer,
    productDetail: detailProdReducer,
    ticketDetail: ticketDetailReducer,
    latestBooking : addBookingReducer
    ticket: ticketReducer,
})

export default rootReducer