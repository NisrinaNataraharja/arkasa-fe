const initialState = {
  latestBooking: {}
}

export const addBookingReducer = (state = initialState, action) => {
if (action.type === 'ADD_BOOKING'){
  console.log("action payload is "+action.payload)
  return {
    latestBooking : action.payload
  }
}else {
  return state
}
}