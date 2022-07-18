import axios from 'axios'
import swal from 'sweetalert';

export const getTicket = (
  transit,
  facilities,
  departure,
  arrive,
  airline,
  minPrice,
  maxPrice
  ) => async (dispatch) => {
    try {
        dispatch({ type: 'GET_TICKET_PENDING' })
        const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/ticket?transit=${transit}&facilities=${facilities}&departure=${departure}&arrive=${arrive}&airline=${airline}&min_price=${minPrice}&max_price=${maxPrice}`)
        console.log(result.data)
        const ticket = result.data

        dispatch({ type: 'GET_TICKET_SUCCESS', payload: ticket })
        dispatch({ type: 'GET_TICKET_ID', payload: ticket })

    } catch (error) {
      console.log(error);
      dispatch({ type: 'GET_TICKET_ERROR' })
      swal({
          title: "Oops!",
          text: `${error.response.data.message}`,
          icon: "error",
      });
    }
  };

