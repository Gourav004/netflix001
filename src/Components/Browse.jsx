import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../Utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../Utils/MovieSlice'
// import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainComponents from './MainComponents'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies copy'
import useTopRated from '../Hooks/useTopRated'
// import { addUpcomingMovies } from '../Utils/MovieSlice'
import useUpcoming from '../Hooks/useUpcoming'
import GPTSearch from './GPTSearch'



const Browse = () => {

  const showGPTSearch = useSelector(store=>store.gpt.showGPTSearch);

useNowPlayingMovies(); 
usePopularMovies();  //custom hook -> fetching the movie data and upating store
useTopRated();
useUpcoming();

  return (
    <div className='overflow-x-hidden bg-black'>
      <Header/>
      {
        showGPTSearch ? (
        <GPTSearch/> ) : 
        (
        <>
        <MainComponents/>
        <SecondaryContainer/>
        </> 
        )
      }

    
    

    </div>
  )
}

export default Browse
