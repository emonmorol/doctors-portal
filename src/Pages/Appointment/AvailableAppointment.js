import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ date }) => {
  return (
    <div>
      <h2 className="text-xl text-center">
        <span className="font-bold text-primary">Available Appointment On</span>
        <span className="font-bold text-secondary"> {format(date, "PP")}</span>
      </h2>
    </div>
  );
};

export default AvailableAppointment;
