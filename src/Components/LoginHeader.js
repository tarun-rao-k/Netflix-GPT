import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utilities/firebase';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from '../Utilities/userSlice.js';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

const LoginHeader = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = auth.currentUser;

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          // const uid = user.uid;
          // ...
          const {uid,email,displayName}= user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          navigate('/browse');
        } else {
          // User is signed out
          // ...
          
          navigate('/')
        }
      });
      
    },[])

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      dispatch(removeUser());
        // navigate("/");

      }).catch((error) => {
        // An error happened.
      });
    } 


  return (
    <div className='bg-gradient-to-b from-black to-transparent absolute w-full flex items-center justify-between'>
      <div>
      <img src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' className='  h-28 ml-8 '/>
      </div>
      {user&&<div className='flex items-center'>
        <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' alt='User icon' className='h-14'/>
        <button className='bg-red-700 text-white mx-2 h-7 px-2 rounded-md' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
    
  )
}

export default LoginHeader
