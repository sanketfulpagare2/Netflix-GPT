import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {

  if(!movies)
    return;
 
  
  return (

    <div className='py-4'>
        <h1 className='text-white text-3xl pb-4'>{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide ">
        <div className='flex gap-5 '>

          {movies.map((movie)=>
          
          <MovieCard key={movie.id} poster_path={movie.poster_path} />  
          
          )}
        
        </div>
        </div>



    </div>
  )
}

export default MovieList;