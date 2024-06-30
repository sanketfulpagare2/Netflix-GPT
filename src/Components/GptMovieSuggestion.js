import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {

  const {movieResults,movieNames}=useSelector(store=>store.gptSearch);
  if(!movieNames) return null;
  return (
    <div className='p-6 m-8 backdrop-blur-sm backdrop-brightness-50 rounded-md  text-white'>
      {
        movieNames.map((movieNames,index)=>(<MovieList title={movieNames} movies={movieResults[index]}/>))
      }
      
      
      
      </div>
  )
}

export default GptMovieSuggestion