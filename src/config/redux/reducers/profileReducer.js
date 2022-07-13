const initialState = {
  profileedit: [],
  profileId: {
    id: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    postalcode: "",
    photo: "",
    role: "",
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_ID":
      return {
        ...state,
        profileId: action.payload,
      };
    case "EDIT_PROFILE":
      return {
        ...state,
        profileId: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
