import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { Route, Routes, BrowserRouter, Link , useNavigate } from "react-router-dom";




const Body = () => {
  
  // const dispatch = useDispatch();
  // const navigate = useNavigate();



  return (
    <div className="bg-black text-white p-4 overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/browse" element={<Browse />} /> 
        </Routes>
        
        
      </BrowserRouter>
    </div>
  )
}

export default Body;