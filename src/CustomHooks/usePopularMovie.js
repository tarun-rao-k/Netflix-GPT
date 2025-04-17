import { useEffect } from "react"
import { options } from "../Utilities/constants.js";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../Utilities/movieSlice.js";

const usePopularMovie = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(res => res.json())
  .then((res) => {console.log(res);
            dispatch(addPopularMovie(res.results));    
  })
  .catch(err => console.error(err));
    },[])
}

export default usePopularMovie;