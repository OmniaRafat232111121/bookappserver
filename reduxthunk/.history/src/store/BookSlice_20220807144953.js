import { createSlice } from "@reduxjs/toolkit"
const getBooks=createAsyncThunk('b')


const bookSlice=createSlice({
    name:'book',
    initialState:{books:null},
    reducers:{
        
    },
})

export default bookSlice.reducer