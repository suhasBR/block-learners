import { store } from "../store";
import axios from 'axios';
import { updateUser, authError } from "../reducers/user";
import setAuthToken from "../utils/setAuthToken";



export const loadUser = async () => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    if(!localStorage.token){
        store.dispatch(authError());
    }

    try {
        const res = await axios.get('https://blocz.herokuapp.com/api/v1/user/');
        store.dispatch(updateUser(res.data));
    } catch (error) {
        console.log(error);
    }
}

