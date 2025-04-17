import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        mainContainerVideo:null,
        nowPlayingForPoster:null,
        popularMovies:null,
        topRatedMovie:null,
        upcomingMovie:null,
    },
    reducers:{
        addNowPlayingMovies(state,action){
            state.nowPlayingMovies = action.payload;
        },
        addMainContainerVideo(state,action){
            state.mainContainerVideo = action.payload
        },
        addNowPlayingForPoster(state,action){
            state.nowPlayingForPoster = action.payload
        },
        addPopularMovie(state,action){
            state.popularMovies = action.payload
        },
        addTopRatedMovie(state,action){
            state.topRatedMovie = action.payload
        },
        addUpcomingMovie(state,action){
            state.upcomingMovie = action.payload
        },
    
        
    }

})
export default  movieSlice.reducer;
export const{addNowPlayingMovies,addMainContainerVideo,addNowPlayingForPoster,addPopularMovie,addTopRatedMovie,addUpcomingMovie} = movieSlice.actions;
