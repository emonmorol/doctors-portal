import React from "react";

const ServiceCard = ({ service }) => {
  const { title, context, image } = service;
  return (
    <div className="card bg-base-100 shadow-md">
      <figure className="pt-10 w-full">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="lg:px-10 text-base">{context}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
