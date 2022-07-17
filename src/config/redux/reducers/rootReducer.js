import {combineReducers} from 'redux'
import userReducer from './userReducer'
import adminReducer from './adminReducer'
import { productsReducer, detailProdReducer } from './productsReducer'
import { ticketDetailReducer } from './ticketDetailReducer'
import { addBookingReducer } from './addBookingReducer'

const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
    products: productsReducer,
    productDetail: detailProdReducer,
    ticketDetail: ticketDetailReducer,
    latestBooking : addBookingReducer
})

export default rootReducer