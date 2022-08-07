import { createSlice } from "@reduxjs/toolkit"
const getBooks=createAsyncThunk()


const bookSlice=createSlice({
    name:'book',
    initialState:{books:null},
    reducers:{
        
    },
})

export default bookSlice.reducer