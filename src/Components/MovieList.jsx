import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className='px-4 md:px-6 lg:px-12'>
      <h1 className='text-xl md:text-2xl lg:text-3xl text-white py-3 font-semibold'>{title}</h1>

      <div
        className='flex overflow-x-auto scrollbar-hide scrollbar-custom'
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory'
        }}
      >
        <div className='flex gap-4 my-1'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
