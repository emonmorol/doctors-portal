import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import ServiceCard from "./ServiceCard";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState({});
  const formattedDate = format(date, "PP");

  const {
    isLoading,
    data: services,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://powerful-forest-45249.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-xl text-center mt-10">
        <span className="font-bold text-primary">Available Appointment On</span>
        <span className="font-bold text-secondary"> {format(date, "PP")}</span>
      </h2>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
