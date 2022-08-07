import { createSlice } from "@reduxjs/toolkit"
const getBooks=createAsyncThunk('book/getBooks',async(_.thunkApi)=>({
    try{
     const res=await fetch('http://localhost:3005/books');
     const d
    }
    catch(error){
        console.log(error)
    }

}))


const bookSlice=createSlice({
    name:'book',
    initialState:{books:null},
    reducers:{
        
    },
})

export default bookSlice.reducer