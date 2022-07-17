const initialState = {
  profile: [],
  isloading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_ID":
      return {
        ...state,
        profile: action.payload,
      };
    case "EDIT_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
