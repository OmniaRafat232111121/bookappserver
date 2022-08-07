import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initalState:{loggedIn:false,name:"omnia"},
    reduers:{
        authhandler:(state)=>{
            state.loggedIn=!state.loggedIn;
        },
    },
});
export const { authHandler } = authSlice.actions;

export default authSlice.reducer;