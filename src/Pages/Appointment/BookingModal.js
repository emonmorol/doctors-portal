import axios from "axios";
import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import swal from "sweetalert";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { name, slots, _id } = treatment;
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  const handleBooking = (e) => {
    e.preventDefault();
    const formattedDate = format(date, "PP");
    const slot = e.target.slot.value;
    const phone = e.target.phone.value;

    const newBooking = {
      treatmentId: _id,
      treatmentName: name,
      date: formattedDate,
      slot,
      patientName: user.displayName,
      patientEmail: user.email,
      phone,
    };

    const url = `https://powerful-forest-45249.herokuapp.com/bookings`;
    (async () => {
      const { data } = await axios.post(url, newBooking);
      if (data.success) {
        swal(
          "Appointed",
          `Appointment is set ${formattedDate} at ${slot}`,
          "success"
        );
      }
      if (!data.success) {
        swal("Sorry!", "You've Already Appointed For This Treatment", "error");
      }
      refetch();
      setTreatment(null);
    })();
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-12">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              required
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots &&
                slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
            </select>
            <input
              required
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full"
            />
            <input
              required
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full"
            />
            <input
              required
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <button
              type="submit"
              className="w-full btn btn-accent font-bold text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
