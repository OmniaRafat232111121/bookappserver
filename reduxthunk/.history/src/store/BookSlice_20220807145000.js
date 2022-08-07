import { createSlice } from "@reduxjs/toolkit"
const getBooks=createAsyncThunk('book/getB')


const bookSlice=createSlice({
    name:'book',
    initialState:{books:null},
    reducers:{
        
    },
})

export default bookSlice.reducer