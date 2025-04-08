import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/Constants';
import { useDispatch} from 'react-redux';
import { addTrailerVIdeo } from '../Utils/MovieSlice';


const useMovieTrailer = (movieID) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/"+ 
            movieID +
            "/videos?language=en-US", 
          API_OPTIONS);
        const json = await data.json();
        
    
            const filterData = json.results.filter((video) => video.type == "Trailer");
            const trailer = filterData.length ?filterData[0] : json.results[0];
       
            dispatch(addTrailerVIdeo(trailer));
      
    
        
      };
    useEffect(()=>{
      getMovieVideo();
    } , []);
}

export default useMovieTrailer
