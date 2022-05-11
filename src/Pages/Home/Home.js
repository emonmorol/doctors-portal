import React from "react";
import MakeAppointment from "./MakeAppointment";
import Banner from "./Banner";
import Info from "./Info";
import Service from "./Service";
import Treatment from "./Treatment";
import PatientReview from "./PatientReview";
import StayConnected from "./StayConnected";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div className="relative">
      <Banner />
      <Info />
      <Service />
      <Treatment />
      <MakeAppointment />
      <PatientReview />
      <StayConnected />
      <Footer />
    </div>
  );
};

export default Home;
