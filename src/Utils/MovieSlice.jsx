import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies:[],
        trailerVideo : [],
        popularMovies : [],
        topRatedMovies: [],
        upcomingMovies: [],
    },
    reducers: {
        addNowPlayingMovies : (state , action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state , action) => {
            state.popularMovies = action.payload;
        },
        addTopratedMovies : (state , action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state , action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailerVIdeo: (state , action)=>{
            state.trailerVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies , addTrailerVIdeo , addPopularMovies , addTopratedMovies ,addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;