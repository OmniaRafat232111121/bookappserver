import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initalState:{loggedIn:false,name:"omnia"},
    reduers:{
        authhandler:(state)=>{
            state.loggedIn=!state.logg
        }
    }
})