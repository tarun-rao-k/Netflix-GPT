import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import movieReducer from "./movieSlice.js";
import gptReducer from "./gptSlice.js" ;
import preferencesReducer from "./userPreferances.js"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        gpt: gptReducer,
        preferences : preferencesReducer,
        }
})

export default appStore;