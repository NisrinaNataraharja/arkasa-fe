import axios from 'axios'
import swal from 'sweetalert';

export const loginUser = (loginData, navigate) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_LOGIN_PENDING' })
        const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}/auth/login`, loginData)
        const user = result.data.data

        const dataLocal = {
            name: result.data.data.name,
            id: result.data.data.id,
            email: result.data.data.email,
            role: result.data.data.role,
            token: result.data.data.token,
            refreshToken: result.data.data.refreshToken,
        }

        console.log(dataLocal)
        localStorage.setItem('Arkasa', JSON.stringify(dataLocal))

        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: user })

        swal({
            title: "Good job!",
            text: `${result.data.message}`,
            icon: "success"
        });
        navigate('/')

    } catch (error) {
        console.log(error);
        dispatch({ type: 'USER_LOGIN_ERROR' })
        swal({
            title: "Oops!",
            text: `${error.response.data.message}`,
            icon: "error",
        });
    }
}

export const registerUser = (dataForm, navigate)=> async(dispatch)=>{
    try {
        dispatch({type: 'USER_REGISTER_PENDING'})
        const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}/auth/register`, dataForm)
        const user = result.data
        console.log(result.data);
        dispatch({type: 'USER_REGISTER_SUCCESS', payload: user})
        navigate('/login')

    } catch (error) {
        console.log(error);
        dispatch({ type: 'USER_REGISTER_ERROR' })
        swal({
            title: "Oops!",
            text: `${error.response.data.message}`,
            icon: "error",
        });
    }
}