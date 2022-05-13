import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    console.log(user?.email);
    const url = `http://localhost:5000/booking?patient=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [user]);
  console.log(appointment);

  //   const { isLoading, data, error } = useQuery(
  //     ["userBookings", user?.email],
  //     () =>
  //       fetch(`http://localhost:5000/bookings?email=${user?.email}`).then((res) =>
  //         res.json()
  //       )
  //   );

  //   if (isLoading) {
  //     return <Loading />;
  //   }

  //   if (error) {
  //     return <p>An Error Accured</p>;
  //   }

  //   console.log(error);
  return (
    <div>
      <h2>My Appointment {appointment.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Time</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((booking) => (
              <tr class="hover" key={booking._id}>
                <th>1</th>
                <td>{booking.patientName}</td>
                <td>{booking.treatmentName}</td>
                <td>{booking.slot}</td>
                <td>{booking.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
