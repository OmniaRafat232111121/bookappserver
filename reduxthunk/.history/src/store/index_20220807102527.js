import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import bookSlice from "./bookSlice";
export default configureStore({
    reducers:{
        books

    }
})