import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';
import VideoTitle from './VideoTitle'; // Optional: Uncomment if needed

const VideoBcg = ({ movieID, title, overview }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieTrailer(movieID);

  if (!trailerVideo?.key) return null;

  return (
    <div className="relative w-full h-auto">
      {/* Trailer Video */}
      <div className="relative w-full aspect-video overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailerVideo?.key}&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3`}
          title="YouTube trailer"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-black to-transparent"></div>

        {/* Title Text Overlay */}
        {/* Uncomment below if needed */}
        {/* <VideoTitle title={title} overview={overview} /> */}
      </div>
    </div>
  );
};

export default VideoBcg;
