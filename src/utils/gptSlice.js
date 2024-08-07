import { createSlice } from "@reduxjs/toolkit";

const gptsSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieNames:null,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch = !state.showGptSearch;

        },
        addGptMovieResults:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieResults=movieResults;
            state.movieNames=movieNames;
        }
    }
});

export const {toggleGptSearchView,addGptMovieResults} =  gptsSlice.actions;

export default gptsSlice.reducer;
