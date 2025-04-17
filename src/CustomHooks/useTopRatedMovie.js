import { useEffect } from "react"
import { options } from "../Utilities/constants.js";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../Utilities/movieSlice.js";

const useTopRatedMovie = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(res => res.json())
  .then((res) => {console.log(res);
            dispatch(addTopRatedMovie(res.results));    
  })
  .catch(err => console.error(err));
    },[])
}

export default useTopRatedMovie;