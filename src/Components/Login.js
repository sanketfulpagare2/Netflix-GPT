import { useRef, useState } from "react";
import { BG_URL ,USER_AVATAR} from "../utils/constants";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const name=useRef(null)
  const email = useRef(null);
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleClickButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //sign  in or sign up according to the button clicked

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e",

          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
          


          
          
       







          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Invalid Email or Password");
          // setErrorMessage(errorCode +"-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img className="brightness-50 " src={BG_URL} alt="logo"></img>
      </div>
      <div className="">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-3/12 my-32 mx-auto right-0 left-0 bg-black rounded-sm p-12 text-white bg-opacity-75 "
        >
          <h1 className="font-medium text-3xl mb-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="outline-none bg-[#333333] focus:bg-[#454545] rounded-sm py-2 px-4 p m-2 my-4 w-full"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="outline-none bg-[#333333] focus:bg-[#454545] rounded-sm py-2 px-4 p m-2 my-4 w-full"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="outline-none bg-[#333333] focus:bg-[#454545] rounded-sm py-2 px-4 m-2 my-4 w-full"
          />
          <button
            className=" bg-red-600 py-2 w-full m-2 my-4 rounded-sm"
            onClick={handleClickButton}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="px-2 text-orange-400">{errorMessage}</p>

          <p className="m-2 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? (
              <>
                <span className="font-light text-gray-400">
                  New to Netflix?
                </span>{" "}
                Sign up now.
              </>
            ) : (
              <>
                <span className="font-light text-gray-400">
                  Already a user?
                </span>{" "}
                Sign in now.
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
