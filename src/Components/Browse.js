import React from 'react';
import LoginHeader from './LoginHeader.js';
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';
import { useSelector } from 'react-redux';
import GptPage from './GptPage.js';

const Browse = () => {

  const selector = useSelector((store)=>{return store.gpt?.showGptSearchPage});
  return (
    <div className=''>
      <LoginHeader/>
      {selector?<GptPage/>:
      <>  
         <MainContainer/>
         <SecondaryContainer/> 
      </>}

    </div>
  )
}

export default Browse;
