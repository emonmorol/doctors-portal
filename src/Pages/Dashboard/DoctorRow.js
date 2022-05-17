import React from "react";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { name, image, specialty } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded-full">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label
          for="delete-modal"
          onClick={() => setDeletingDoctor(doctor)}
          className="btn btn-xs btn-error text-white"
        >
          <span>Delete</span>
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
