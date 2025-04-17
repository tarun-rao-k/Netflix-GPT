import { useEffect } from "react"
import { options } from "../Utilities/constants.js";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../Utilities/movieSlice.js";

const useUpcomingMovie = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(res => res.json())
  .then((res) => {console.log(res);
            dispatch(addUpcomingMovie(res.results));    
  })
  .catch(err => console.error(err));
    },[])
}

export default useUpcomingMovie;