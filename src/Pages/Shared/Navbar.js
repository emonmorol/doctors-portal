import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            {/* <li tabindex="0">
              <Link to="#" className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to="#">Submenu 1</Link>
                </li>
                <li>
                  <Link to="#">Submenu 2</Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="/appointment">Appointment</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          {/* <li tabindex="0">
            <Link to="#">
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2">
              <li>
                <Link to="#">Submenu 1</Link>
              </li>
              <li>
                <Link to="#">Submenu 2</Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/appointment">Appointment</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
