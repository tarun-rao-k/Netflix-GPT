import React from 'react'
import useMainContainerVideo from '../CustomHooks/useMainContainerVideo.js';
import { useSelector } from 'react-redux';

const Video = ({movie_id}) => {
  const selector = useSelector((store)=>{ return store.movie?.mainContainerVideo;});
  console.log(selector);
  useMainContainerVideo(movie_id);
  return (
    <div className='' >
      <iframe className='w-full h-screen' src={"https://www.youtube.com/embed/"+selector?.key+"?autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      
    </div>
  )
}




export default Video;
