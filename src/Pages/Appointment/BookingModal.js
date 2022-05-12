import axios from "axios";
import { format } from "date-fns";
import React from "react";
import swal from "sweetalert";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  // console.log(treatment, slots);

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const patientName = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    const newBooking = {
      bookingName: name,
      slot,
      patientName,
      email,
      phone,
    };

    const url = `http://localhost:5000/bookings`;
    (async () => {
      const { data } = await axios.post(url, newBooking);
      if (data) {
        swal("Great!", "You Booking is Complete!", "success");
      }
    })();

    setTreatment(null);
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
                slots.map((slot) => <option value={slot}>{slot}</option>)}
            </select>
            <input
              required
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email Address"
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
