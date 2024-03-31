import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSclice"
import movieReducer from "./moviesSlice"
const appStore=configureStore({

    reducer:{
        user:userReducer,
        movies:movieReducer,
    }
})

export default appStore;