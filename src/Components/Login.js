import React, { useRef, useState } from 'react'
import LoginHeader from './LoginHeader.js'
import { loginValidation } from '../Utilities/loginValidation.js';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../Utilities/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utilities/userSlice.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [validationErrMsg,setValidationErrMsg] = useState(null);
  const [isSignIn,setIsSignIn] = useState(true);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validateInputs = ()=>{
    const validationErrMsg = loginValidation(email.current.value,password.current.value);
    setValidationErrMsg(validationErrMsg);

    if(validationErrMsg===null){
      if(!isSignIn){
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              console.log(user);
              updateProfile(user, {
                displayName: name.current.value, 
              }).then(() => {
                      const{uid,email,displayName}=auth.currentUser;
                      dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                      navigate("/browse");
              }).catch((error) => {
                // An error occurred
                // ...
              });
              
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setValidationErrMsg(errorMessage);
            });

            
      }
      else{
        
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          dispatch(addUser({uid:user.uid,email:user.email,displayName:user.displayName}));
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationErrMsg(errorMessage);
        });
      
      }
    
    }
  }


  return (
    <div className=''>
      <LoginHeader/>

      <div className='absolute bg-black text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5   rounded-md  bg-opacity-70 mt-10'>
       <form className='mx-10 my-12 ' onSubmit={(e)=>e.preventDefault()}>
        <h1 className='text-3xl font-bold'>{isSignIn?"SignIn":"SignUp"}</h1>
        {!isSignIn&&<input type='textbox' placeholder='Name' className='mt-3 w-full h-10 p-2 rounded-md bg-slate-800' ref={name}/>}
        <input type='textbox' placeholder='E-mail id' className='my-3 w-full h-10 p-2 rounded-md bg-slate-800' ref={email}/>
        <input type='password' placeholder='Password' className='w-full h-10 p-2 rounded-md bg-slate-800' ref={password}/>
        <p className='text-red-500 font-bold'>{validationErrMsg}</p>
        <button className='my-3 bg-red-600 w-full h-10 rounded-md'onClick={validateInputs}>{isSignIn?"SignIn":"SignUp"}</button>
        {isSignIn&&<p onClick={()=>setIsSignIn(false)}>New member? SignUp now </p>}
        {!isSignIn&&<p className='mb-10' onClick={()=>setIsSignIn(true)}>Already have an account? click to SignIn</p>}
       </form>
      </div>

      <div>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg' alt='background-image ' />
      </div>
    </div>
  )
}

export default Login
