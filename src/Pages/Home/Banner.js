import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div class="hero w-[100vw] min-h-[60vh]">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="" class="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="pb-[30px] pt-[14px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button class="btn btn-secondary font-bold text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
