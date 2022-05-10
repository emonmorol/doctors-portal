import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen bg-doctor-banner bg-opacity-25">
      <div className="hero-content gap-16 px-5 lg:px-20 max-w-7xl flex-col lg:flex-row-reverse w-full h-screen">
        <img
          src={chair}
          alt=""
          className="lg:max-w-xl max-w-sx rounded-lg shadow-2xl"
        />
        <div className="p-1 lg:p-5 shadow-lg rounded-3xl bg-white ">
          <p className="text-center">
            You Have Selected{" "}
            <span className="font-bold text-primary">{format(date, "PP")}</span>
          </p>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
