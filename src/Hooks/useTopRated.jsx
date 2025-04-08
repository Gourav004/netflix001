import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTopratedMovies } from '../Utils/MovieSlice';
import { API_OPTIONS } from '../Utils/Constants';


const useTopRated = () => {

    const dispatch = useDispatch();

 // fetching movies from the api and updating the store

    const getTopRatedMovies = async() => {
     const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
     const json = await data.json();
     
     dispatch(addTopratedMovies(json.results));
  
    } ;
  
    useEffect(()=>{
      getTopRatedMovies();
    } , [])
}

export default useTopRated;
