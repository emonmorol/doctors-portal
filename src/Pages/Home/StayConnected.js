import React from "react";
import MainButton from "../Shared/MainButton";

const StayConnected = () => {
  return (
    <div className="bg-doctor-appointment mx-auto p-5 lg:p-20  flex  justify-center">
      <div>
        <div className="mb-10">
          <h2 className="text-secondary font-bold text-xl text-center">
            Contact Us
          </h2>
          <h3 className="text-white font-semibold text-4xl my-3 text-center">
            Stay connected with us
          </h3>
        </div>
        <form className="w-full flex flex-col justify-center">
          <div className="mb-5">
            <div>
              <input
                type="text"
                placeholder="Email here"
                className="input w-full"
              />
            </div>
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Subject here"
              className="input w-full"
            />
          </div>
          <div className="mb-5">
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="mx-auto">
            <MainButton>Submit</MainButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StayConnected;
