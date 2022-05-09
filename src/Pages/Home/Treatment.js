import React from "react";
import treatment from "../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          alt=""
          className="lg:max-w-xl max-w-xs rounded-lg shadow-2xl lg:mr-12"
        />
        <div className="lg:pl-12">
          <h1 className="text-5xl text-accent font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6 text-accent">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-secondary font-bold text-white bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
