import * as api from '../api';

export const login = (loginData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(loginData);
        dispatch({ type: "LOGIN", data})

        navigate('/')
    } catch (error) {
        console.log(error)
        
    }
} 

export const registered = (loginData, navigate) => async (dispatch) => {
    try {

        const { data } = await api.registered(loginData);
                
        console.log("hello1")
        dispatch({ type: "LOGIN", data})

        navigate('/')
    } catch (error) {
        console.log(error)
        
    }
} 