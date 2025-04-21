import React, { useRef } from 'react'
import languages from '../Utilities/languages'
import { useDispatch, useSelector } from 'react-redux'
import ai from '../Utilities/googleAi.js';
import { addGptSearchResult, addTmdbResult } from '../Utilities/gptSlice.js';
import { options } from '../Utilities/constants.js';

const GptSearchBox = () => {
    const preferedLanguage =  useSelector((store)=>{return store.preferences.lang});
    const searchValue = useRef(null);
    console.log(searchValue);
    const dispatch = useDispatch();

    const retrieveMovie = async(movie)=>{
                const result = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&page=1', options);
                const json =await result.json();
                return json.results
        }

    const handleGptSearch = async()=>{
        const query = "Act as a movie recommendation system and give me the result for "+searchValue.current.value+"give me only 5 result which are comma separated like the example given ahead.Example: movie1,movie2,movie3,movie4,movie5. no other text other than his nothing else this give me what i have asked as result";
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: query,
        });
        console.log(response.text);
        const responseResult = response.text.split(",");
        dispatch(addGptSearchResult(responseResult));

        const tmdbResult = responseResult.map((movie)=>{
            return retrieveMovie(movie);
       })
         const data = await Promise.all(tmdbResult);
         console.log(data);
         dispatch(addTmdbResult(data));
      
    }

  return (
    <div className='absolute z-10 bg-black left-1/2  -translate-x-1/2 mt-[12%] pl-4 pt-4 pb-4 rounded-lg w-1/2 border-red-700 border-b-2'>
      <form className='' onSubmit={(e)=>e.preventDefault()}>
        <input placeholder={languages[preferedLanguage].searchPlaceholder} className='py-2 px-2 rounded-lg w-3/4' ref={searchValue}/>
        <button className='bg-red-700 text-white p-2 rounded-lg ml-2 w-32 font-bold' onClick={handleGptSearch}>{languages[preferedLanguage].searchBtn}</button>
      </form>
      
    </div>
  )
}

export default GptSearchBox
