import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
  const { name, email } = deletingDoctor;
  // console.log("inside");

  const handleDelete = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor , ${name} is Deleted`);
          refetch();
          setDeletingDoctor(null);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box p-10">
          <div>
            <h3 class="font-bold text-lg text-red-500 text-center">
              Are you sure you want to delete {name} ?
            </h3>
            <p class="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </div>
          <div class="modal-action justify-center">
            <label
              onClick={() => handleDelete(email)}
              className="btn w-1/2 btn-error text-white"
            >
              <span>Delete</span>
            </label>
            <label for="delete-modal" class="btn w-1/2 ">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
