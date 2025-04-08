import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBcg from './VideoBcg'

const MainComponents = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  
  // console.log("Movies Data:", movies);  // Check your data
  
  if (!movies || !Array.isArray(movies) || movies.length === 0) return null;
  
  const mainMovie = movies[0];
  if (!mainMovie) return null;
  
  const { original_title, overview, id } = mainMovie;

  return (
    <div className='w-screen h-screen aspect-video bg-gradient-to-r from-black/80 to-black'>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBcg movieID={id}/>
    </div>
  )
}

export default MainComponents;
