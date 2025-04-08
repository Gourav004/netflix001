import React from 'react';
import { IMG_CDN_URL } from '../Utils/Constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className= ' movieCard w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 2xl:w-60 flex-shrink-0'>
      <img 
        className='rounded-md w-full h-auto object-cover transition-transform duration-300 hover:scale-105' 
        src={IMG_CDN_URL + posterPath} 
        alt="Movie Poster" 
      />
    </div>
  );
};

export default MovieCard;
