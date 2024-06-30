import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import useNowPlayngMovies from '../hooks/useNowPlayngMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'

const 

Browse = () => {
const {showGptSearch}=useSelector(state=> state.gptSearch)
 useNowPlayngMovies();
 usePopularMovies();
 useTrendingMovies();
 useUpcomingMovies();
  return (
    <div>
      <Header/>
      {showGptSearch ?<GptSearch/>:<>
      <MainContainer/>
      <SecondaryContainer/>
      
  
      </>}



     </div>
  )
}

export default 

Browse