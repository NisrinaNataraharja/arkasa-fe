import axios from "axios";
import swal from "sweetalert";

export const detailProfile = (token) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      baseURL: process.env.REACT_APP_API_BACKEND,
      url: `/auth/profile/users-detail`,
      //   data: id,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_PROFILE_ID", payload: res.data.data });
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const editProfile = (id, formData, token) => async (dispatch) => {
  try {
    const result = await axios.put(`${process.env.REACT_APP_API_BACKEND}/auth/profile/${id}`, formData, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const profile = result.data;
    dispatch({ type: "EDIT_PROFILE", payload: profile });
    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
    });
  } catch (error) {
    console.log(error);
    swal({
      title: "Oops!",
      text: `${error.response.data.message}`,
      icon: "error",
    });
  }
};

// export const updateUser = async (id, body, setErrors) => {
//   try {
//     const token = localStorage.getItem("Arkasa");
//     // const id = localStorage.getItem("id");
//     // console.log(id);

//     await axios.put(`${process.env.REACT_APP_API_BACKEND}/auth/profile/${id}`, body, {
//       headers: {
//         token: token,
//       },
//     });

//     return true;
//   } catch (error) {
//     if (error.response) {
//       if (Array.isArray(error.response.data.error)) {
//         setErrors(error.response.data.error);
//       } else {
//         setErrors([{ msg: error.response.data.error }]);
//       }
//     } else {
//       setErrors([{ msg: error.message }]);
//     }

//     return false;
//   }
// };

// export const updatePhoto = async (id, body, setErrors) => {
//   try {
//     const token = localStorage.getItem("Arkasa");
//     const id = localStorage.getItem("id");

//     await axios.put(`${process.env.REACT_APP_API_BACKEND}auth/profile/${id}`, body, {
//       headers: {
//         token: token,
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     return true;
//   } catch (error) {
//     if (error.response) {
//       if (Array.isArray(error.response.data.error)) {
//         setErrors(error.response.data.error);
//       } else {
//         setErrors([{ msg: error.response.data.error }]);
//       }
//     } else {
//       setErrors([{ msg: error.message }]);
//     }

//     return false;
//   }
// };
