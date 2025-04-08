import React from 'react'
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utils/UserSlice';
import { logo , SUPPORTED_LANGUAGES, userAvatar } from '../Utils/Constants';
import { toggleGPTSearchView } from '../Utils/GPTSlice';
import { changeLanguage } from '../Utils/ConfigSlice';




const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
  function handleGPTSearchClick(){
    //TOggle GPT Search
    dispatch(toggleGPTSearchView());  

  }

  function handleSignOut (){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    }); 
    
  }
    function handleLanguageChange(e) {
      // console.log(e.target.value);
      dispatch(changeLanguage(e.target.value));
  }
  

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        //user sign in/sign up 
      const {uid , email ,displayName , photoURL} = user;
      dispatch(
        addUser({
          uid: uid ,
          email:email , 
          displayName:displayName , 
          photoURL:photoURL
        }));
      
        // ...
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // navigate("/");
        
      }
    });

    return ()=> unsubscribe();
  } , []);

  return (
    <div className='absolute  items-center px-8 py-2 bg-gradient-to-b w-full from-black z-100 flex flex-col md:flex-row justify-center md:justify-between '>
      
      {/* Left Side - Logo */}
      <img 
        src= {logo}
        alt="Logo"  
        className="w-44 ml-4" // Margin to the left
      />

      {/* Right Side - Profile Section */}

{     user && 
      (

        <div className='flex items-center gap-4 mr-4'> {/* flex + gap for spacing */}
          {showGPTSearch &&
            (
              <select
            className="w-auto p-2 rounded-md border outline-none text-white bg-black focus:outline-none focus:ring-2"
            onClick={handleLanguageChange}>
            {
              SUPPORTED_LANGUAGES.map(lang =>
                <option key={lang.identifier} value={lang.identifier}>{lang.identifier}</option>)
            }
              </select>
            )}

       <button className="px-6 py-2 mr-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white cursor-pointer font-semibold rounded-full shadow-lg transition-all linear duration-500 transform  active:scale-95 hover:shadow-2xl"
       onClick={handleGPTSearchClick}
       >
            {showGPTSearch ? "Homepage" : "GPTSearch"}
</button>


        <img 
          src= {userAvatar}
          alt="usericon" 
          className='w-10 h-10 rounded-full'
        />
        <button className='text-white cursor-pointer'
        onClick={handleSignOut}
        >Sign out</button>
      </div>
      )
}
    </div>
  )
}

export default Header
