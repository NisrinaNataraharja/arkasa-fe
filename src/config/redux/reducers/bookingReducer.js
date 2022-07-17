const initialState = {
  booking: [],
  isLoading: false,
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOKING_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_BOOKING_SUCCESS":
      return {
        ...state,
        booking: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
