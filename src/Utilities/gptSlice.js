import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearchPage: false,
        gptSearchResult : null,
        tmdbSearchForGpt: null,
    },
    reducers:{
        setShowGptSearchPage(state,action){
            state.showGptSearchPage = (!state.showGptSearchPage);
           
        },
        addGptSearchResult(state,action){
            state.gptSearchResult = action.payload
        },
        addTmdbResult(state,action){
            state.tmdbSearchForGpt = action.payload
        },
        removeTmdbResult(state,action){
            state.tmdbSearchForGpt = null
        },
    }

})

export default gptSlice.reducer;
export const {setShowGptSearchPage,addGptSearchResult,addTmdbResult,removeTmdbResult} = gptSlice.actions;