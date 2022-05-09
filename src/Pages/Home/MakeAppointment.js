import React from "react";
import doctor from "../../assets/images/doctor.png";
import MainButton from "../Shared/MainButton";

const MakeAppointment = () => {
  return (
    <section className="flex justify-center items-center bg-doctor-appointment my-24">
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-225px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-6 lg:p-0">
        <h2 className="text-secondary font-bold text-xl">Appointment</h2>
        <h3 className="text-white font-semibold text-4xl my-6">
          Make An Appointment Today
        </h3>
        <p className="text-base lg:w-[65ch] text-gray-200 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          exercitationem veniam quo quaerat repellat inventore similique!
          Exercitationem perferendis consequuntur deleniti perspiciatis vitae
          laboriosam expedita sunt dolore, suscipit obcaecati voluptate eum
          repellat quibusdam, reprehenderit nisi excepturi omnis eaque
          consequatur molestias eveniet?
        </p>
        <MainButton>Get Started</MainButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
