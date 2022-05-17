import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content p-10">
        <h2 className="text-5xl font-extrabold text-center uppercase text-gray-600">
          dashboard
        </h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu overflow-y-auto pt-10 w-52 bg-base-100 text-base-content">
          <li className="text-center">
            <Link to="/dashboard">My Appointment</Link>
          </li>
          <li className="text-center">
            <Link to="/dashboard/review">My Review</Link>
          </li>
          <li className="text-center">
            <Link to="/dashboard/review">My History</Link>
          </li>
          {admin && (
            <>
              <li className="text-center">
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li className="text-center">
                <Link to="/dashboard/addDoctor">Add A Doctor</Link>
              </li>
              <li className="text-center">
                <Link to="/dashboard/manageDoctors">Manage Doctors</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
