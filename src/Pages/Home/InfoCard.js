import React from "react";

const InfoCard = ({ info }) => {
  const { title, context, image, infoBg } = info;
  return (
    <div
      className={` relative card rounded-none rounded-tl-2xl rounded-br-2xl items-center overflow-visible lg:card-side shadow-xl ${infoBg} text-white py-10`}
    >
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-orange-300">
        {" "}
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-orange-300">
        {" "}
      </div>
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
