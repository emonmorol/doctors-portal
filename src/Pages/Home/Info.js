import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  const infos = [
    {
      id: 1,
      title: "Opening Hours",
      context: "Lorem Ipsum is simply dummy text of the pri",
      infoBg: "bg-gradient-to-r from-secondary to-primary",
      image: clock,
    },
    {
      id: 2,
      title: "Visit our location",
      context: "Brooklyn, NY 10036, United States",
      infoBg: "bg-accent",
      image: marker,
    },
    {
      id: 3,
      title: "Contact us now",
      context: "+000 123 456789",
      infoBg: "bg-gradient-to-r from-secondary to-primary",
      image: phone,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {infos.map((info) => (
        <InfoCard key={info.id} info={info} />
      ))}
      {/* <InfoCard image={clock} />
      <InfoCard image={clock} />
      <InfoCard image={clock} /> */}
    </div>
  );
};

export default Info;
