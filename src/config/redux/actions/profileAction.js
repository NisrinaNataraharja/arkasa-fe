import axios from "axios";

export const detailProfile = (id, Arkasa) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      baseURL: process.env.REACT_APP_API_BACKEND,
      url: `/users/`,
      data: id,
      headers: {
        Authorization: `Bearer ${Arkasa}`,
      },
    })
      .then((res) => {
        dispatch({ type: "GET_PROFILE_ID", payload: res.data.result });
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const editProfile = (formData) => async (dispatch) => {
  try {
    const Arkasa = localStorage.getItem("Arkasa");
    const result = await axios.put(`${process.env.REACT_APP_API_BACKEND}company/profile`, formData, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${Arkasa}`,
      },
    });
    const profile = result.data;
    dispatch({ type: "EDIT_PROFILE", payload: profile });
  } catch (error) {
    console.log(error);
    alert("Edit failed");
  }
};
