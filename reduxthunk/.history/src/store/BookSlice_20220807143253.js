import { createSlice } from "@reduxjs/toolkit"
const bookSlice=createSlice({
    name:'book',
    initialState:{books:null},
    reducers:{
        getBooks
    },
})

export default bookSlice.reducer