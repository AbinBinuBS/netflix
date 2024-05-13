import react,{useRef, useState} from 'react'
import Header from './header.js'
import { checkValidData } from '../utils/validate.js'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {  updateProfile } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, createContext } from "react";
import {LOGO} from '../utils/constants.js'
import {auth} from '../utils/firebase.js'

const DataContext = createContext(null);

function Login() {
  const [userData, setUserData] = useState(null);
  const [isSignInForm,setSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
  const toggleSignInForm = () =>{
    setSignInForm(!isSignInForm)
  }
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const handleButtonClick = () =>{
    const msg = checkValidData(name.current?.value, email.current?.value, password.current?.value);    
    setErrorMessage(msg)   
    if(!msg){
      if(!isSignInForm){
        
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
              const userData = { uid, email, name: displayName }; 
              setUserData(userData);
      
          }).catch((error) => {
            setErrorMessage(error.code + " " + error.message);
          });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(error.code+" "+error.message)
        });
      }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
      }
    }


    
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src={LOGO} alt="main-img" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='p-12 w-3/12 my-36 right-0 left-0 mx-auto text-white  bg-black absolute rounded-lg bg opacity-80' >
        <h1 className='font-bold test-3xl py-4'>{ isSignInForm ? 'Sign in' : 'Sign up'}</h1>
        {isSignInForm ?  '' : <input ref={name} type="text" placeholder='Full Name' className='p-4 bg-gray-700 my-4 w-full' /> }
        <input ref={email} type="text" placeholder='Email Address' className='p-4 bg-gray-700 my-4 w-full' />
        <input ref={password} type="password" placeholder=' password' className='p-4 my-4 bg-gray-700 w-full' />
        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
        <button className='p-4 my-4 bg-red-700   w-full' onClick={handleButtonClick}>{ isSignInForm ? 'Sign in' : 'Sign up'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{ isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registerd? Sign in'}</p>
      </form>
    </div>
  );
}

export default Login;