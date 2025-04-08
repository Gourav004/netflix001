import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./UserSlice";
import moviesReducer from "./MovieSlice"
import gptReducer from "./GPTSlice"
// import configReducer from "./ConfigSlice"
// import configReducer form "./ConfigSlice"
import configReducer from "./ConfigSlice"



const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: gptReducer,
            config: configReducer,
        }
    }
);

export default appStore;


















