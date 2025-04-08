import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTopratedMovies, addUpcomingMovies } from '../Utils/MovieSlice';
import { API_OPTIONS } from '../Utils/Constants';


const useUpcoming = () => {

    const dispatch = useDispatch();

 // fetching movies from the api and updating the store

    const getUpcomingMovies = async() => {
     const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
     const json = await data.json();
     
     dispatch(addUpcomingMovies(json.results));
  
    } ;
  
    useEffect(()=>{
      getUpcomingMovies();
    } , [])
}

export default useUpcoming;
