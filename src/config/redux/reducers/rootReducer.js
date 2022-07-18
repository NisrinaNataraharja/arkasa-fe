import {combineReducers} from 'redux'
import userReducer from './userReducer'
import adminReducer from './adminReducer'
import ticketReducer from './ticketReducer'

const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
    ticket: ticketReducer,
})

export default rootReducer