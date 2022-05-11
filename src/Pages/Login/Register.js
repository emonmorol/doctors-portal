import React from "react";
import { Link } from "react-router-dom";
import register from "../../assets/images/register.png";

const Register = () => {
  return (
    <div className="pt-14">
      <section class="h-screen">
        <div class="container px-6 py-12 rounded-2xl shadow-lg border mx-auto">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="md:w-8/12 lg:w-6/12 pl-20 mb-12 md:mb-0">
              <img src={register} class="w-4/5" alt="" />
            </div>
            <div class="w-11/12 md:w-8/12 lg:w-5/12 lg:ml-20 border p-5 lg:p-14 bg-gray-50 shadow rounded-3xl">
              <h2 className="font-bold text-3xl text-center uppercase mb-6 text-primary">
                Please Register
              </h2>
              <form>
                <div class="mb-6">
                  <label htmlFor="email">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div class="mb-6">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>

                <div class="mb-6">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                <div class="flex justify-between items-center mb-6">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      checked
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="exampleCheck2"
                    >
                      Agree to the terms and policy
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full mb-6"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Register
                </button>

                <div className="text-center">
                  <Link
                    to="/login"
                    class="font-semibold text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    <i class="fa-solid fa-user-plus mr-2"></i> Already Have An
                    Account ?
                  </Link>
                </div>

                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p class="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <Link
                  class="btn border-0 px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                  style={{ backgroundColor: "#3b5998" }}
                  to="#!"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <i class="fa-brands fa-google mr-2"></i>
                  Continue with Google
                </Link>
                <Link
                  class="btn border-0 px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                  style={{ backgroundColor: "#55acee" }}
                  to="#!"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <i class="fa-brands fa-facebook-f mr-2"></i>
                  Continue with Facebook
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
