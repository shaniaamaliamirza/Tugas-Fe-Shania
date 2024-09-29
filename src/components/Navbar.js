import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-4 shadow-md">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="/"
                className="font-bold hover:bg-pink-200 active:bg-pink-300"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/Overview"
                className="font-bold hover:bg-pink-200 active:bg-pink-300"
              >
                OVERVIEW
              </Link>
            </li>
            <li>
              <Link
                to="/AboutMe"
                className="font-bold hover:bg-pink-200 active:bg-pink-300"
              >
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link
                to="/SkillPengalaman"
                className="font-bold hover:bg-pink-200 active:bg-pink-300"
              >
                SKILL & PENGALAMAN
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className="font-bold hover:bg-pink-200 active:bg-pink-300"
              >
                JOIN
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo and Title in a Row */}
        <div className="flex items-center ml-4">
          <img
            src="../logo/logoshaniaa.jpg"
            alt="logo"
            style={{
              width: "120px", // Ukuran logo diperkecil
              height: "100px",
            }}
          />
          <div className="ml-4">
            <h1 className="text-3xl font-bold">Curiculum Vitae</h1>
            <p className="text-sm text-gray-600">Posted by Shania</p>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mr-6">
            {" "}
            {/* Jarak antar item */}
            <Link
              to="/"
              className="font-bold hover:bg-pink-200 active:bg-pink-300 px-2 py-1"
            >
              HOME
            </Link>
          </li>
          <li className="mr-6">
            {" "}
            {/* Jarak antar item */}
            <Link
              to="/Overview"
              className="font-bold hover:bg-pink-200 active:bg-pink-300 px-2 py-1"
            >
              OVERVIEW
            </Link>
          </li>
          <li className="mr-6">
            {" "}
            {/* Jarak antar item */}
            <Link
              to="/AboutMe"
              className="font-bold hover:bg-pink-200 active:bg-pink-300 px-2 py-1"
            >
              ABOUT ME
            </Link>
          </li>
          <li className="mr-6">
            {" "}
            {/* Jarak antar item */}
            <Link
              to="/SkillPengalaman"
              className="font-bold hover:bg-pink-200 active:bg-pink-300 px-2 py-1"
            >
              SKILL & PENGALAMAN
            </Link>
          </li>
          <li className="mr-6">
            {" "}
            {/* Jarak antar item */}
            <Link
              to="/Login"
              className="font-bold hover:bg-pink-200 active:bg-pink-300 px-2 py-1"
            >
              JOIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
