import React from "react";

const InfoCard = ({ info }) => {
  const { title, context, image, infoBg } = info;
  return (
    <div
      className={`card items-center lg:card-side shadow-xl ${infoBg} text-white py-10`}
    >
      <figure className="lg:pl-10">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{context}</p>
      </div>
    </div>
  );
};

export default InfoCard;
