import { createSlice } from "@reduxjs/toolkit"
const bookSlice=createSlice({
    name:'book',
    initialState:{books:null},
    reducers:{
        get
    },
})

export default bookSlice.reducer