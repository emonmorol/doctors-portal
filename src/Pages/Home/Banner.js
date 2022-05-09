import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-doctor-banner bg-opacity-25"
      //   style={{ backgroundImage: "url(../../../../assets/images/chair.png)" }}
    >
      <div className="hero-content max-w-full lg:p-20 flex-col lg:flex-row-reverse bg-white bg-opacity-90 w-full h-screen">
        <img
          src={chair}
          alt=""
          className="lg:max-w-3xl max-w-sm rounded-lg shadow-2xl"
        />
        <div className="p-5">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="pb-[30px] pt-[14px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-secondary font-bold text-white bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
