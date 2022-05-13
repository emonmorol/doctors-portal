import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerImage from "../../assets/images/register.png";
import Social from "./Social";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, uError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    // console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    if (user) {
      navigate(from, { replace: true });
    }
  };

  let errorMessage;
  if (error || uError) {
    errorMessage = (
      <p className="text-center text-red-600 mb-6">
        Error: {error?.message || uError?.message}
      </p>
    );
  }
  if (loading || updating) {
    return <Loading />;
  }

  return (
    <div className="pt-14">
      <section className="h-screen">
        <div className="container lg:px-6 lg:py-12 rounded-3xl shadow-lg border mx-auto">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="hidden lg:block md:w-8/12 lg:w-6/12 pl-20 mb-12 md:mb-0">
              <img src={registerImage} className="w-4/5" alt="" />
            </div>
            <div className="w-full md:w-8/12 lg:w-5/12 lg:ml-20 border p-3 lg:p-14 bg-gray-50 shadow rounded-3xl">
              <h2 className="font-bold text-3xl text-center uppercase mb-6 text-primary">
                Please Register
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-6">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name Is required",
                      },
                    })}
                    className="input input-bordered w-full"
                  />
                  <label className="text-center">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full mb-6">
                  <label className="label">
                    <span className="label-text">Email Address</span>
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
                    className="input input-bordered w-full"
                  />
                  <label className="text-center">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full mb-6">
                  <label className="label">
                    <span className="label-text">Password</span>
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
                    className="input input-bordered w-full"
                  />
                  <label className="text-center">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {errorMessage}

                <input
                  type="submit"
                  value="Register"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full mb-6"
                />

                <div className="text-center">
                  <Link
                    to="/login"
                    className="font-semibold text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    <i className="fa-solid fa-user-plus mr-2"></i> Already Have
                    An Account ?
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

export default Register;
