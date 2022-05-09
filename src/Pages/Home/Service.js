import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Fluoride Treatment",
      context:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: fluoride,
    },
    {
      id: 2,
      title: "Cavity Filling",
      context:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: cavity,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      context:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: whitening,
    },
  ];
  return (
    <div className="mb-20">
      <div className="my-16">
        <h2 className="uppercase font-semibold text-secondary text-center text-2xl">
          our services
        </h2>
        <h2 className="uppercase font-semibold text-accent text-center text-3xl">
          Services We Provide
        </h2>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
