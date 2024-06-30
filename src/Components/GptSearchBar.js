import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch=useDispatch();

  const searchMovieTMDB=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json=await data.json();
     return json.results;
  }













  const handleGptSearchClick = async () => {
    // const gptQuery =
    //   "Act as a movie recommendation system and suggest some movies for the query :" +
    //   searchText.current.value +
    //   "only give me names of 5 movies,comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(gptResults?.choices[0]?.message?.content);
    // const gptMovies=gptResults?.choices[0]?.message?.content.split(",");


    const dummyMovies=["Raaz","Hera Pheri","Chupke Chupke","Jaane Bhi Do Yaaro","Padosan"]

      const promiesAll = dummyMovies.map(movie=>searchMovieTMDB(movie));
      const tmdbResult=await Promise.all(promiesAll);
      dispatch(addGptMovieResults({movieNames:dummyMovies,movieResults:tmdbResult}));
      
  };

  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] content-center">
      <form
        className="p-6 w-full md:w-1/2flex flex justify-center "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="px-4 py-2 border-2 rounded-full w-2/4 "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="mx-5 px-4 py-2 bg-teal-700 rounded-full text-white"
          onClick={handleGptSearchClick}
        >
          {" "}
          {lang[langKey].search}{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
