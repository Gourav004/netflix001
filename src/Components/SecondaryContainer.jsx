import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black pt-4 px-4 md:px-8">
        <div className='relative z-20 -mt-28 md:-mt-44'>
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Top Rated" movies={movies.topRatedMovies} />
          <MovieList title="Upcoming" movies={movies.upcomingMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Newly Added" movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer
