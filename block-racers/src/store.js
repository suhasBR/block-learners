import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import walletReducer from './reducers/wallet';


export const store = configureStore({
    reducer: {
       user : userReducer,
       wallet : walletReducer
    },
})