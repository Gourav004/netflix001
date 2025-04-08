import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from "../Utils/Validate"
import {createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/UserSlice';
import { BCG_URL } from '../Utils/Constants';


const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errMsg , setErrMsg] = useState(null);
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

   

    function handleButtonClick(){
     const msg=   checkValidData(email.current.value , password.current.value );
     setErrMsg(msg);

     if(msg) return;

    //  sign in/sign up logic
    if(!isSignInForm){
     //sign up logic
     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;
       updateProfile(auth.currentUser, {
        displayName: name.current.value , 
        photoURL: "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww"
      }).then(() => {
        // Profile updated!
       const {uid , email ,displayName , photoURL} = auth.currentUser;
             dispatch(
               addUser({
                 uid: uid ,
                 email:email , 
                 displayName:displayName , 
                 photoURL:photoURL
               }));
        // navigate("/browse");
        // ...
      }).catch((error) => {
        // An error occurred
        setErrMsg(error.message);
        // ...
      });
       
      
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrMsg(errorCode + "-" + errorMessage);
       // ..
     });
   

    }
    else{
     //sign in logic
     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMsg(errorCode + "-" + errMsg);
  });
    }
    }

    //sign in / sign up
    function ToggleSignIn(){
        setIsSignInForm(!isSignInForm);
    }
    
    return (
        <div>
            <Header/>
            <div className='absolute inset-0 backdrop-brightness-50 -z-10'>
                <img 
                    className='w-full h-full object-cover'
                    src= {BCG_URL}
                    alt="Background" 
                />
            </div>

            <form 
                onClick={(e)=> e.preventDefault()}
                className='z-10 mt-30 absolute text-white p-10 flex-col m-10 rounded-xl mx-auto right-0 left-0 
                w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]'
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            >
                <h1 className='font-bold text-3xl py-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (
                    <input 
                        name='name'  
                        type="text"  
                        required
                        ref={name}
                        placeholder='Full Name' 
                        className='p-4 mb-7 rounded-[5px] w-full text-white placeholder-gray-300 border border-gray-500 
                        focus:outline-none focus:border-white' 
                        style={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
                    />
                )}

                <input   
                    type="text"  
                    required
                    name='email'
                    ref={email}
                    placeholder='Email Address' 
                    className='p-4 mb-7 rounded-[5px] w-full text-white placeholder-gray-300 border border-gray-500 
                    focus:outline-none focus:border-white' 
                    style={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
                />

                <input 
                    type="password"  
                    required
                    name='password'
                    ref={password}
                    placeholder='Password' 
                    className='p-4 mb-7 rounded-[5px] w-full text-white placeholder-gray-300 border border-gray-500 
                    focus:outline-none focus:border-white' 
                    style={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
                />

                <p className='text-red-500 mb-1.5 font-lighter'>{errMsg}</p>
                
                <button 
                    className='p-2 mb-6 rounded-md text-white w-full transition-all hover:bg-red-600 cursor-pointer'
                    onClick={handleButtonClick} 
                    style={{ backgroundColor: 'rgba(247, 0, 0, 0.8)' }}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p 
                    className='py-4 font-light cursor-pointer hover:underline' 
                    onClick={ToggleSignIn}
                >
                    {isSignInForm ? "New to Netflix? Sign Up now" : "Already registered? Sign In now"}
                </p>
            </form>
        </div>
    )
}

export default Login
