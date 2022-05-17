import { format } from "date-fns";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const [appointment, setAppointment] = useState([]);
  const [date, setDate] = useState(new Date());
  const formattedDate = format(date, "PP");
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/booking?patient=${user?.email}&date=${formattedDate}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          navigate("/home");
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => {
        setAppointment(data);
      });
  }, [user, formattedDate, navigate]);
  return (
    <div>
      <div className="flex justify-between items-center my-4">
        <h2 className="text-base lg:text-2xl font-semibold my-3">
          My Appointment
        </h2>
        <div class="dropdown dropdown-end">
          <label
            tabindex="0"
            class="cursor-pointer bg-gray-50 rounded-lg text-base lg:text-lg border-4 border-gray-400 py-3 px-7  lg:px-12 font-bold m-1 shadow-lg"
          >
            {formattedDate}
          </label>
          <div
            tabindex="0"
            class="dropdown-content card card-compact mt-2 shadow-3xl"
          >
            <div className="p-1 lg:p-5 rounded-3xl bg-white border-2 border-gray-20 ">
              <DayPicker
                required
                mode="single"
                selected={date}
                onSelect={setDate}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto">
        {appointment !== [] && (
          <table class="table w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Treatment</th>
                <th>Time</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {appointment?.map((booking, index) => (
                <tr class="hover" key={booking._id}>
                  <th>{index + 1}</th>
                  <td>{booking.patientName}</td>
                  <td>{booking.treatmentName}</td>
                  <td>{booking.slot}</td>
                  <td>{booking.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {appointment === [] && (
          <p className="text-3xl text-center uppercase text-primary">
            You Dont Have Any Appointment That Day{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
