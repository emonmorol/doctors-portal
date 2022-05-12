import React from "react";
import auth from "../../firebase.init";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
  useAuthState,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let firebaseError;
  if (googleError || githubError) {
    if (googleError) {
      firebaseError = (
        <p className="text-center text-red-600 mb-6">{googleError.message}</p>
      );
    }
    if (githubError) {
      firebaseError = (
        <p className="text-center text-red-600 mb-6">{githubError.message}</p>
      );
    }
  }
  if (googleLoading || githubLoading || loading) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <div className="divider">
        <p className="text-center font-semibold mb-0">OR</p>
      </div>
      {firebaseError}
      <button
        onClick={() => signInWithGoogle()}
        className="btn border-0 px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        style={{ backgroundColor: "#3b5998" }}
      >
        <i className="fa-brands fa-google mr-2"></i>
        Continue with Google
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="btn border-0 px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
        style={{ backgroundColor: "#55acee" }}
      >
        <i className="fa-brands fa-github mr-2"></i>
        Continue with Github
      </button>
    </>
  );
};

export default Social;
