import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0gEKK0fW8edCbt7kDLXbv8KWlGZciN9TnJpYpZhYFoNsDPH1xDnBZ0nnu7dBaYTEA0dg57jSrnXA8kZBMoIahj00YRVMq95j"
);

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  //   console.log(appointment);

  return (
    <div className="">
      <div class="card w-1/2 max-w-md bg-base-100 shadow-xl my-10">
        <div class="card-body">
          <p className="text-primary font-bold">
            Hello {appointment.patientName}
          </p>
          <h2 class="card-title">Pay For {appointment.treatmentName}</h2>
          <p>
            Your Appointment Is On{" "}
            <span className="font-bold text-secondary">{appointment.date}</span>{" "}
            at{" "}
            <span className="font-bold text-secondary">{appointment.slot}</span>
          </p>
          <p>Please pay ${appointment.price}</p>
        </div>
      </div>
      <div class="card  w-1/2 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
