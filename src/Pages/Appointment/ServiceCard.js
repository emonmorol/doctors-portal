import React from "react";

const ServiceCard = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title justify-center">{name}</h2>
        <p className="text-center">
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slots Available on This day</span>
          )}
        </p>
        <p className="text-center text-xs">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div class="card-actions  justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            for="booking-modal"
            class="w-full btn btn-secondary font-bold text-white bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
