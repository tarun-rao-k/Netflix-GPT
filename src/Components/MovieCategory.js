import React from 'react';
import MovieCards from './MovieCards.js';

const MovieCategory = ({title,movieList}) => {
  console.log(movieList);
  return (
    <div className='-mt-30 pl-4'>
      <h1 className='ml-2 font-bold text-2xl text-white'>{title}</h1>
    <div className='flex overflow-x-scroll scrollbar-hide'>
    
      <div className='flex'>
      {
        movieList?.map((movie,index)=>{
             return <MovieCards key={index} image_url={movie.
                poster_path}/>
        })
      }
      </div>
      
    </div>
    </div>
  )
}

export default MovieCategory;
