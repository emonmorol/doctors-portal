import React from "react";
import { useQuery } from "react-query";

const MyAppointments = () => {
  const { data: bookings, isLoading, error } = useQuery();

  return (
    <div>
      <h2>My Appointment</h2>
    </div>
  );
};

export default MyAppointments;
