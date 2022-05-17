import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { isLoading, data: services } = useQuery(["services"], () =>
    fetch(`http://localhost:5000/services`).then((res) => res.json())
  );

  // const imageStorageKey = "6b0a193eef7a2b62bf9db99627da18a3";

  /**
   * 3 ways to store image
   * ---------------------
   * third party images  //
   * my own storage
   * database : mongodb
   *
   * file react hook form validation
   * ------------------
   * YUP
   *
   *
   */

  const onSubmit = async (data) => {
    console.log(data);
    const avatar = data.image[0];
    const formData = new FormData();
    await formData.append("image", avatar);
    const url = `https://api.imgbb.com/1/upload?key=6b0a193eef7a2b62bf9db99627da18a3`;
    fetch(url, {
      method: "POST",
      // headers: {
      //   "content-type": "application/json",
      // },
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: img,
          };

          //send to database
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor Added Successfully");
                reset();
              } else {
                toast.error("Failed Do Add Doctor");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="shadow-lg p-10 rounded-3xl border-2 my-5 max-w-2xl mx-auto">
      <h2 className="text-3xl text-center uppercase text-gray-500 mb-5 font-bold">
        Add A New Doctor
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
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty", {
              required: {
                value: true,
                message: "Specialty Is required",
              },
            })}
            class="select select-primary w-full"
          >
            {services?.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>

          <label className="text-center">
            {errors.specialty?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.specialty.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full mb-6">
          <label className="label">
            <span className="label-text">Doctor Image</span>
          </label>
          <input
            type="file"
            placeholder="Enter Your Name"
            {...register("image", {
              required: {
                value: true,
                message: "Image Is required",
              },
            })}
            className="input input-bordered w-full"
          />
          <label className="text-center">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input
          type="submit"
          value="Add Doctor"
          className="cursor pointer inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full mb-6"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
