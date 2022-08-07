import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import book from "./bookSlice";
export default configureStore({
    reducers:{
        book

    }
})