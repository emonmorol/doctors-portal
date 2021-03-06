import React from "react";
import chair from "../../assets/images/chair.png";
import MainButton from "../Shared/MainButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-doctor-banner bg-opacity-25">
      <div className="hero-content px-5 lg:px-20 max-w-7xl flex-col lg:flex-row-reverse w-full h-screen">
        <img
          src={chair}
          alt=""
          className="lg:max-w-xl max-w-sx rounded-lg shadow-2xl"
        />
        <div className="p-1 lg:p-5">
          <h1 className="text-2xl lg:text-5xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p className="pb-[30px] pt-[14px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <MainButton>Get Started</MainButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
