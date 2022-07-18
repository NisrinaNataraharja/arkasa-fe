import axios from 'axios'
import swal from 'sweetalert';

export const addBookingAction = (passenger, navigate) => async (dispatch) => {
  try {
    const result = await axios.post(process.env.REACT_APP_API_BACKEND + '/orderticket', passenger)
    const data = result.data
    if (data.message !== "insert data success") {
      return swal({
        title: "Oops!",
        text: `Failed Add Booking`,
        icon: "error",
      });
    }
    dispatch({ type: 'ADD_BOOKING', payload: data.data })
    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success"
    });
    navigate('/mybooking')
  } catch (error) {
    console.log(error)
    swal({
      title: "Oops!",
      text: `There is Some Mistake`,
      icon: "error",
    });
  }
}