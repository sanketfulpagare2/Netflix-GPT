import React from 'react'
import { useSelector } from 'react-redux'
import lang from "../utils/languageConstants"

const GptSearchBar = () => {


  const langKey= useSelector(store=>store.config.lang)
  return (
    <div className="pt-[10%] ">

     

    <form className='p-6 flex justify-center '> 
        <input type='text' className='px-4 py-2 border-2 rounded-full w-2/4 ' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='mx-5 px-4 py-2 bg-teal-700 rounded-full text-white'> {lang[langKey].search} </button>
    </form>
    </div>
  )
}

export default GptSearchBar 