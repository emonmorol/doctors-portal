import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteModal from "./DeleteModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  // console.log(deletingDoctor);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <h2>This is manage doctors Page {doctors.length}</h2>

        <div class="overflow-x-auto shadow-lg">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <DoctorRow
                  key={doctor._id}
                  doctor={doctor}
                  index={index}
                  setDeletingDoctor={setDeletingDoctor}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingDoctor && (
        <DeleteModal
          setDeletingDoctor={setDeletingDoctor}
          refetch={refetch}
          deletingDoctor={deletingDoctor}
        />
      )}
    </>
  );
};

export default ManageDoctors;
