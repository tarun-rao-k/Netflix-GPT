import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearchPage: false,
    },
    reducers:{
        setShowGptSearchPage(state,action){
            state.showGptSearchPage = (!state.showGptSearchPage);
            console.log(state.showGptSearchPage);
        },
    }

})

export default gptSlice.reducer;
export const {setShowGptSearchPage} = gptSlice.actions;