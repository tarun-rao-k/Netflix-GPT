import React from 'react'
import { useSelector } from 'react-redux';
import MovieCategory from './MovieCategory.js';

const SearchResult = () => {
    const selector = useSelector((store)=>{return store.gpt?.tmdbSearchForGpt});
      const gptMovieName = useSelector((store)=>{return store.gpt?.gptSearchResult});
      console.log(selector);
      console.log(gptMovieName);
  return (
    <div className=' pt-[20%] bg-black overflow-x-scroll scrollbar-hide '>
      {gptMovieName&&selector?.map((movieList,index)=>{
              return <MovieCategory key={index} title={gptMovieName[index]} movieList={movieList}/>
              
            })}

    </div>
  )
}

export default SearchResult
