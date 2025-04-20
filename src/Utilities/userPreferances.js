import { createSlice } from "@reduxjs/toolkit";

const userPreferences = createSlice({
    name:"preferences",
    initialState:{
        lang :"en",
    },
    reducers:{
        changeLanguage(state,action){
            state.lang = action.payload;
        },
    }
})

export default userPreferences.reducer;
export const{changeLanguage} = userPreferences.actions;