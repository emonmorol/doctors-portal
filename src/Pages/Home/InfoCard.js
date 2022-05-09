import React from "react";

const InfoCard = ({ info }) => {
  const { title, context, image, infoBg } = info;
  return (
    <div
      class={`card items-center lg:card-side shadow-xl ${infoBg} text-white p-10`}
    >
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{context}</p>
      </div>
    </div>
  );
};

export default InfoCard;
