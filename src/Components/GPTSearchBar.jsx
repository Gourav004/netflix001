import React, { useState } from 'react'
import { lang } from '../Utils/LangConst'; 
import {SUPPORTED_LANGUAGES} from '../Utils/Constants'
import { useSelector } from 'react-redux';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import Shimmer from "./Shimmer"

const GPTSearchBar = () => {

    const [searchText, setSearchText] = useState("");
    const [movieArray, setMovieArray] = useState([]);
    const [hasSearched, setHasSearched] = useState(false); 
    const [loading, setLoading] = useState(false);

    const langKey = useSelector(store => store.config.lang);
    
    async function fetchMovies (e){
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=b968b14e`)
            const data = await response.json();
            console.log(data.Search);
            setHasSearched(true);
            
            if (data.Search) {
                setMovieArray(data.Search);
                setSearchText("");
            }
            else {
                setMovieArray([]);
            }
           
        }
        catch {
            console.log("Error in fetching", error);
        }
         finally {
                setLoading(false)
        }
    }

  return (
    <div className=' z-1001 pt-20 overflow-x-hidden'>
      
<form className="max-w-md mx-auto">
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>

                  <input type="search" id="default-search" className="block z-1001 outline-none w-full p-4 px-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500
                  md:
        
        " 
                      autoComplete="off"
                      placeholder={lang[langKey].gptSearch}
                      value={searchText}
        onChange={(e)=> setSearchText(e.target.value)}              
        required />
                  <button onClick={e=>fetchMovies(e)}
                      type="submit" className="text-white absolute end-2.5 cursor-pointer bottom-2.5 bg-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-800">


                      {lang[langKey].search}
        
            </button>
    </div>
          </form>     
          {
              loading ? <Shimmer/> : 
              hasSearched &&
              (<div className='movie-cards'>
                  {
                      movieArray.map((movie, item) => (
                          <GPTMovieSuggestions
                              key={movie.imdbID}
                              poster={movie.Poster}
                              name={movie.Title}
                              year={movie.Year}
                          />
                      ))
                  }
              </div>)
              
            }         
          

    </div>
  )
}

export default GPTSearchBar
