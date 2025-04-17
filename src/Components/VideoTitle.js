import React from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = () => {
  const selector = useSelector((store)=>{return store?.movie?.nowPlayingMovies});
  console.log(selector);
  if(selector!=null){
  return (
    <div className='pt-52 absolute bg-gradient-to-r from-black to-transparent opacity-60'>
      <div className=''>
        <h1 className='ml-14 font-bold text-5xl text-white opacity-100'>{selector[0].original_title}</h1>
        <p className='ml-14 w-96 mt-2 mb-2 text-white opacity-100'>{selector[0].overview}</p>
        <button className='ml-14 mr-2 bg-white px-8 pb-1 text-2xl rounded-lg font-bold '>Play</button>
        <button className='bg-slate-400 px-8 pb-1 text-2xl rounded-lg '>Info</button>
      </div>
    </div>
  )
}
}

export default VideoTitle
