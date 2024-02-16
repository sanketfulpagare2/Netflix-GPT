import { useState } from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img className="brightness-50" src={BG_URL} alt="logo"></img>
      </div>
      <div className="">
        <form className="absolute w-3/12 my-36 mx-auto right-0 left-0 bg-black rounded-sm p-12 text-white bg-opacity-75 ">
          <h1 className="font-medium text-3xl mb-2">
            {isSignInForm?"Sign In":"Sign Up"}
            
            </h1>

               
          {!isSignInForm &&<input
            type="text"
            placeholder="Full Name"
            className="outline-none bg-[#333333] focus:bg-[#454545] rounded-sm py-2 px-4 p m-2 my-4 w-full"
          />}
          <input
            type="text"
            placeholder="Email or phone number"
            className="outline-none bg-[#333333] focus:bg-[#454545] rounded-sm py-2 px-4 p m-2 my-4 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-none bg-[#333333] focus:bg-[#454545] rounded-sm py-2 px-4 m-2 my-4 w-full"
          />
          <button className=" bg-red-600 py-2 w-full m-2 my-4 rounded-sm">
          {isSignInForm?"Sign In":"Sign Up"}
          </button>
          <p className="m-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm?"New to Netflix? Sign up now.":"Already a user? Sign in."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
