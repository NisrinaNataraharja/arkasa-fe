import axios from 'axios'

export const getTicketDetailAction = (id) => async (dispatch) => {
  try {
      console.log('getting ticket detail from database')
      const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/ticket/${id}`)
      console.log(result.data)
      const data = result.data.data
      dispatch({ type: 'GET_TICKET_DETAIL', payload: data })
      // navigate('/home')
  } catch (error) {
      console.log(error);
  }
}