import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import useNowPlayngMovies from '../hooks/useNowPlayngMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const 

Browse = () => {

 useNowPlayngMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>



     </div>
  )
}

export default 

Browse