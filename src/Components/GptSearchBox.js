import React from 'react'
import languages from '../Utilities/languages'
import { useSelector } from 'react-redux'

const GptSearchBox = () => {
    const preferedLanguage =  useSelector((store)=>{return store.preferences.lang})
  return (
    <div className='absolute bg-black left-1/2  -translate-x-1/2 mt-[12%] pl-4 pt-4 pb-4 rounded-lg w-1/2'>
      <form className=''>
        <input placeholder={languages[preferedLanguage].searchPlaceholder} className='py-2 px-2 rounded-lg w-3/4'/>
        <button className='bg-red-700 text-white p-2 rounded-lg ml-2 w-32'>{languages[preferedLanguage].searchBtn}</button>
      </form>
      
    </div>
  )
}

export default GptSearchBox
