import React from 'react';
import { Play, Info } from 'lucide-react';  // Ensure you have installed lucide-react

const VideoTitle = ({ title, overview }) => {
  return (
    <div 
      id='videoTitle' 
      className="absolute top-0 left-0 px-4 md:pl-20 w-full h-full z-20 flex items-center"
    >
      {/* Gradient Overlay covering the entire screen */}
      <div className="absolute inset-0 bg-gradient-to-r from-black opacity-30"></div>

      {/* Content aligned to the left */}
      <div className="relative space-y-4 max-w-sm md:max-w-xl text-white pointer-events-auto">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <h2 className="text-base md:text-lg text-gray-300 line-clamp-3">{overview}</h2>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <button 
            className="flex items-center cursor-pointer space-x-2 bg-white text-black py-2 px-4 md:px-6 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            <Play className="w-4 h-4 md:w-5 md:h-5" />
            <span>Play</span>
          </button>

          <button 
            className="bg-gray-700 cursor-pointer flex items-center text-white py-2 px-4 md:px-6 rounded-lg font-semibold hover:bg-gray-600 transition"
          >
            <div className="flex items-center space-x-2 md:space-x-3.5">
              <Info className="w-4 h-4 md:w-5 md:h-5" />
              <span>More Info</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle;
