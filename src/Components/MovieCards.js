import React from 'react'

const MovieCards = ({image_url}) => {
    console.log(image_url);
    const poster_url ="https://image.tmdb.org/t/p/w500//"
  return (
    <div className='w-48 m-2'>
      <img src={poster_url+image_url} className=''/>
    </div>
  )
}

export default MovieCards;
