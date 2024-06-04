import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {
    const dispatch=useDispatch();
    const getMovieVideo = async () => {
  
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId +"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
  
      
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      
     
      const trailer = filterData[0];
  
      dispatch(addTrailerVideo(trailer));
      // console.log(trailer);
    };
  
    useEffect(() => {
      getMovieVideo();
    }, []);
}

export default useMovieTrailer