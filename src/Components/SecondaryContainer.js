import React from 'react'
import MovieCategory from './MovieCategory';
import { useSelector } from 'react-redux';
import usePopularMovie from '../CustomHooks/usePopularMovie.js';
import useTopRatedMovie from '../CustomHooks/useTopRatedMovie.js';
import useUpcomingMovie from '../CustomHooks/useUpcomingMovie.js';


const SecondaryContainer = () => {
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  
  const nowWatching = useSelector((store)=>{return store.movie?.nowPlayingMovies});
  const popularMovies = useSelector((store)=>{return store.movie?.popularMovies});
  const topRatedMovie = useSelector((store)=>{return store.movie?.topRatedMovie});
  const upcomingMovie = useSelector((store)=>{return store.movie?.upcomingMovie});
  
  console.log(nowWatching);

   
  return (
    <div className='bg-black '>
    <MovieCategory title="Now Playing" movieList={nowWatching}/>
    <MovieCategory title="Popular" movieList={popularMovies}/>
    <MovieCategory title="Top Rated" movieList={topRatedMovie}/>
    <MovieCategory title="Upcoming" movieList={upcomingMovie}/>
    </div>
  )
}


export default SecondaryContainer;