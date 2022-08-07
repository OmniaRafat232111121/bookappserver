import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import bookSli from "./bookSlice";
export default configureStore({
    reducers:{
        bookSlice

    }
})