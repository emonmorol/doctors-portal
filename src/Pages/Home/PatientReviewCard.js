import React from "react";

const PatientReviewCard = ({ review }) => {
  const { image, country, reviewContext, name } = review;
  return (
    <div className="shadow-lg px-8 py-10 rounded-2xl">
      <p>{reviewContext}</p>
      <div className="flex items-center mt-8">
        <div className="avatar mr-6">
          <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-accent">{name}</h2>
          <p>{country}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientReviewCard;
