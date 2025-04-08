import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BCG_URL } from '../Utils/Constants'

const GPTSearch = () => {

  return (
    
    <div className=' bg-cover min-h-screen bg-center h-auto bg-no-repeat  relative  overflow-hidden overflow-x-hidden
    pt-[10vh]' 
      style={{ backgroundImage: `url(${BCG_URL})` } }
    >
        
      
      <div className='absolute inset-0 bg-black/50 -z-0'></div> {/* Adds a dark overlay */}
      <div className="relative z-10">
        <GPTSearchBar />
        {/* <GPTMovieSuggestions /> */}
      </div>
    </div>
  )
}

export default GPTSearch
