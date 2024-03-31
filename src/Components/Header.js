import React, { useEffect } from "react";
import { auth } from "../utils/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSclice";


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
  
  return (
    //Netflix logo
    <div  className="px-2 absolute z-10 w-full flex justify-between bg-gradient-to-b from-gray-950 to-transparent">
      <div>
      <img className="w-48 brightness-110  "
        src={LOGO}
        alt="Logo"
      />
    
       </div>
      {user && <div className="flex items-center">
      <img src={user?.photoURL}  className= ""></img>
      
     <button className="font-bold text-white bg-red-700 px-4 py-2 m-2 rounded" onClick={onSignoutHandle}>Sign out</button>
      </div>}
    </div>

    
  );
};

export default Header;

