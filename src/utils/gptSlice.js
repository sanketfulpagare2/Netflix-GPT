import { createSlice } from "@reduxjs/toolkit";

const gptsSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch = !state.showGptSearch;

        }
    }
});

export const {toggleGptSearchView} =  gptsSlice.actions;

export default gptsSlice.reducer;
