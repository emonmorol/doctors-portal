import React from "react";
import doctor from "../../assets/images/doctor.png";

const Appointment = () => {
  return (
    <div className="h-[70vh] bg-doctor-appointment">
      <img src={doctor} alt="" />
    </div>
  );
};

export default Appointment;
