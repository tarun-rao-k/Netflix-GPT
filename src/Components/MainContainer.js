import React from 'react'
import VideoTitle from './VideoTitle.js'
import useNowPlayingMovies from '../CustomHooks/useNowPlayingMovies.js'
import Video from './Video.js';
import { useSelector } from 'react-redux';

const MainContainer = () => {

  useNowPlayingMovies();
  const selector = useSelector((store)=>{return store?.movie?.nowPlayingMovies});
  

if(selector!=null){
  const movie_id = selector[0]?.id;
  return (
    <div>
      <VideoTitle/>
      <Video movie_id ={movie_id}/>
    </div>
  )
}
}


export default MainContainer
