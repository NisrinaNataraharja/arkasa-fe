const initialState = {
    ticket: {}
}

export const ticketDetailReducer = (state = initialState, action) => {
  if (action.type === 'GET_TICKET_DETAIL'){
    console.log("action payload is "+action.payload)
    return {
      ticket : action.payload
    }
  }else {
    return state
  }
}