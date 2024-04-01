
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const {trailerVideo} =useSelector((state) => state.movies);

  useMovieTrailer(movieId);
 

  return (
    <div className=" w-auto  aspect-video ">
      <iframe className="w-full aspect-video "
        
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?&autoplay=1&mute=1&loop=1&controls=0"}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ;loop"

        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
