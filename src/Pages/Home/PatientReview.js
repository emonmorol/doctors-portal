import React from "react";
import quote from "../../assets/icons/quote.svg";
import PatientReviewCard from "./PatientReviewCard";
import patient1 from "../../assets/images/people1.png";
import patient2 from "../../assets/images/people2.png";
import patient3 from "../../assets/images/people3.png";

const PatientReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Wilson Harry",
      country: "California",
      reviewContext:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: patient1,
    },
    {
      id: 2,
      name: "David Milton",
      country: "London",
      reviewContext:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: patient2,
    },
    {
      id: 3,
      name: "Emma Watson",
      country: "Germany",
      reviewContext:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: patient3,
    },
  ];

  return (
    <section className="flex flex-col my-20">
      <div className="flex justify-between items-center my-20">
        <div className=" lg:flex-1">
          <h2 className="text-secondary font-bold text-xl">Testimonial</h2>
          <h3 className="text-accent font-semibold text-4xl my-6">
            What Our Patients Says
          </h3>
        </div>
        <div className="w-[100px] h-[80px] lg:w-[200px] lg:h-[160px] lg:flex-1 flex justify-end">
          <img src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 mx-3 lg:gap-14 md:grid-cols-2 lg:grid-cols-3 lg:mx-6">
        {reviews.map((review) => (
          <PatientReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default PatientReview;
