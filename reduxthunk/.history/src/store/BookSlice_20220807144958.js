import { createSlice } from "@reduxjs/toolkit"
const getBooks=createAsyncThunk('book/get')


const bookSlice=createSlice({
    name:'book',
    initialState:{books:null},
    reducers:{
        
    },
})

export default bookSlice.reducer