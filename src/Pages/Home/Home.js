import React from "react";
import MakeAppointment from "./MakeAppointment";
import Banner from "./Banner";
import Info from "./Info";
import Service from "./Service";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div className=" relative px-2 lg:px-12">
      <Banner />
      <Info />
      <Service />
      <Treatment />
      <MakeAppointment />
    </div>
  );
};

export default Home;
