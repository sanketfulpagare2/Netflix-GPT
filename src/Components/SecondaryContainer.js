import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies=useSelector(store=> store.movies);
  // console.log(movies)

  
  return (
      <div className="bg-black">
        <div className='-mt-44 relative z-20 px-10 '>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.trendingMovies}/>
      <MovieList title={"Populer"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      
    </div>
    </div>
  )
}

export default SecondaryContainer