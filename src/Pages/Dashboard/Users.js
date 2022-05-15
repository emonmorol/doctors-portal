import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(users);

  return (
    <div>
      <h2 className="text-2xl">All Users {users?.length}</h2>

      <table class="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Email</th>
            <th>Make Admin</th>
            <th>Remove User</th>
            {/* <th>date</th> */}
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <UserRow
              key={user._id}
              user={user}
              index={index}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
