import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
       <div className="absolute -z-10">
        <img className="h-screen object-cover fixed md:h-auto" src={BG_URL} alt="logo"></img>
      </div>
    <div className='pt-[20%] md:pt-0'>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch