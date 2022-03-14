import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: null,
    bloczAddress:null,
    completed: [],
    minerDone : false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        walletLogin : (state,action) =>{
     
        },
        updateBalance : (state,action) => {
            
        },
        setLoading : (state) => {
            
        },
        unsetLoading : (state) => {
            
        },
        loadNFTs : (state,action) => {
            
        },
        addDistribution : (state,action) => {
            
        },
        authError: (state) => {
            state.isAuthenticated = false;
            state.loading = true;
        },
        updateUser : (state,action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.user = action.payload;
            
        },
        updateAddress : (state,action) => {
            state.bloczAddress = action.payload;
        },
        finishedCard : (state,action) => {
            state.completed.push(action.payload);
        },
        showMiner: (state,action) => {
            state.minerDone = true;
        }
    }
})

export const {walletLogin, updateBalance, setLoading, unsetLoading, loadNFTs, addDistribution, updateUser, authError, updateAddress, finishedCard, showMiner} = userSlice.actions;

export default userSlice.reducer;