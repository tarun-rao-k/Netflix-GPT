import { useEffect } from "react"
import { options } from "../Utilities/constants.js";
import { useDispatch } from "react-redux";
import { addMainContainerVideo } from "../Utilities/movieSlice.js";

const useMainContainerVideo = (movie_id)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/videos?language=en-US', options)
  .then(res => res.json())
  .then((res) => {console.log(res);
    const trailer = res.results.filter((videoList)=>{
      return videoList?.type==="Trailer";
    
    },)
    dispatch(addMainContainerVideo(trailer[0]));
  })
  .catch(err => console.error(err));
    },[])
}

export default useMainContainerVideo;