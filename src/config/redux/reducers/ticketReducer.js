const initialState = {
    ticket: [],
    isLoading: false
};

export default function ticketReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TICKET_PENDING':
            return {
                ...state,
                isLoading: true,
            };
        case 'GET_TICKET_SUCCESS':
            return {
                ...state,
                isLoading: false,
                ticket: action.payload
            };
        case 'GET_TICKET_ERROR':
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}
