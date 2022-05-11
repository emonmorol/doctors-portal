import React from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login.png";
import { useForm } from "react-hook-form";
import Social from "./Social";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  let errorMessage;
  if (error) {
    errorMessage = (
      <p className="text-center text-red-600 mb-6">Error: {error?.message}</p>
    );
  }
  if (loading) {
    return <Loading />;
  }
  if (user) {
    console.log(user);
  }

  return (
    <div className="pt-14">
      <section className="h-screen">
        <div className="w-full lg:px-6 lg:py-12 rounded-3xl shadow-lg border mx-auto">
          <div className="flex justify-center items-center flex-wrap w-full h-full text-gray-800">
            <div className="hidden lg:block md:w-8/12 lg:w-6/12 mb-12 pl-20 md:mb-0">
              <img src={login} className=" w-3/5" alt="" />
            </div>
            <div className="w-full md:w-8/12 lg:w-5/12 lg:ml-20 border p-5 lg:p-14 bg-gray-50 shadow rounded-3xl">
              <h2 className="font-bold text-3xl text-center uppercase mb-6 text-primary">
                Please Login
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full mb-6">
                  <label class="label">
                    <span class="label-text">Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email Is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide A Valid Email",
                      },
                    })}
                    class="input input-bordered w-full"
                  />
                  <label class="text-center">
                    {errors.email?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                <div class="form-control w-full mb-6">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password Is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be 6 character of longer",
                      },
                    })}
                    class="input input-bordered w-full"
                  />
                  <label class="text-center">
                    {errors.password?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <Link
                    to="/register"
                    className="font-semibold text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Forgot password?
                  </Link>
                  <Link
                    to="/register"
                    className="lg:block hidden font-semibold text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    <i className="fa-solid fa-user-plus mr-2"></i> New To
                    Doctors Portal ?
                  </Link>
                </div>

                {errorMessage}

                <input
                  type="submit"
                  value="Login"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full mb-6"
                />
                {/* <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full mb-6"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Log in
                </button> */}

                <div className="block lg:hidden text-center">
                  <Link
                    to="/register"
                    className="font-semibold text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    <i className="fa-solid fa-user-plus mr-2"></i> New To
                    Doctors Portal ?
                  </Link>
                </div>
              </form>
              <Social />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
