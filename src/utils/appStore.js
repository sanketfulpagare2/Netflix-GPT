import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSclice"
import movieReducer from "./moviesSlice"
import gptReducer from "./gptSlice";
import configReducer from "./configSlice"
const appStore=configureStore({

    reducer:{
        user:userReducer,
        movies:movieReducer,
        gptSearch:gptReducer,
        config:configReducer,
    }
})

export default appStore;