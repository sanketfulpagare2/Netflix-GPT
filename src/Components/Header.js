import React, { useEffect } from "react";
import { auth } from "../utils/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSclice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {

  const navigate = useNavigate();
  const dispatch=useDispatch();

  const onSignoutHandle = () =>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      navigate("/error");
    });
  }

  const user = useSelector(store => store.user);
  const showGptSearch=useSelector(store=> store.gptSearch .showGptSearch)


  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user
          dispatch(addUser({uid:uid,email:email,displayName:displayName ,photoURL:photoURL}));
          
          navigate("/browse");

          
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
          // ...
        }
      });


},[])

const handleGptSearchClick = ()=>{
  dispatch(toggleGptSearchView());

}

const handleLanguageChange=(e)=>{
  const {value} = e.target;
  dispatch(changeLanguage(value))
}
  
  return (
    //Netflix logo
    <div  className="px-2 absolute z-10 w-full flex flex-col md:flex-row justify-between bg-gradient-to-b from-gray-950 to-transparent">
      <div>
      <img className="w-48 brightness-110 mx-auto  "
        src={LOGO}
        alt="Logo"
      />
    
       </div>
      {user &&  <div className="flex items-center justify-center">

          {showGptSearch &&
            <select className="  p-2  bg-gray-900 text-white " onChange={handleLanguageChange}>
           { SUPPORTED_LANGUAGE.map(lang=> <option key={lang.identifire} value={lang.identifire} >{lang.name}</option>)}
            </select>
          }

       

     <button className="font-bold text-white bg-teal-700 px-4 py-2 m-2 rounded-full mr-10" onClick={handleGptSearchClick}>{!showGptSearch?<>GPT Search </>:<>Homepage</>}</button>
      <img src={user?.photoURL}  className= ""></img>
      
     <button className="font-bold text-white bg-red-700 px-4 py-2 m-2 rounded" onClick={onSignoutHandle}>Sign out</button>
      </div>}
    </div>

    
  );
};

export default Header;

