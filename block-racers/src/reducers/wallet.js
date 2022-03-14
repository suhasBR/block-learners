import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bloczAddress: null,
    bloczbal : 0.0,
    btcbal : 0.0,
    ethbal : 0.0,
    bnbbal : 0.0,
    solbal : 0.0,
    adabal : 0.0,
    collectibles : [],
    transactions: [],
    snackopen : false,
    snacktext: '',
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers:{
        updateWalletAddress : (state,action) => {
            state.bloczAddress = action.payload;
        },
        openSnackbar : (state,action) => {
            state.snackopen = true;
            state.snacktext = action.payload;
        },
        closeSnackbar : (state,action) => {
            state.snackopen = false;
        },
        addblocz : (state,action) => {
            state.bloczbal += action.payload;
        },
        addCollectible : (state,action) => {
            state.collectibles.push(action.payload);
        }
    
    }
})

export const {updateWalletAddress, openSnackbar, closeSnackbar, addblocz, addCollectible} = walletSlice.actions;

export default walletSlice.reducer;