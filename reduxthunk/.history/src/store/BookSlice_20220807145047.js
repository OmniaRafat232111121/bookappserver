import { createSlice } from "@reduxjs/toolkit"
const getBooks=createAsyncThunk('book/getBooks',async(_.thunkApi)=>({
    try{

    }
    catch

}))


const bookSlice=createSlice({
    name:'book',
    initialState:{books:null},
    reducers:{
        
    },
})

export default bookSlice.reducer