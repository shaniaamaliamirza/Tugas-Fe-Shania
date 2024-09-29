import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaFileAlt, FaWrench, FaArrowLeft } from "react-icons/fa"; // Import ikon panah kiri

const Nav1 = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-[#ffc0cb] h-screen p-4 flex flex-col justify-between"> {/* Updated layout to make Back to Web at the bottom */}
      <div>
        <h1 className="text-2xl font-bold mb-6 text-left text-white">Dashboard</h1>
        <ul className="menu p-0 text-left">
          <li className="mb-4">
            <Link
              to="/Dashboard/Rumah"
              className={`flex items-center font-semibold text-white ${
                location.pathname === "/Dashboard/Rumah" ? "text-bg-[#ecd9cb]" : ""
              }`}
            >
              <FaHome className="mr-3" /> {/* Icon Home */}
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/Dashboard/Ringkasan"
              className={`flex items-center font-semibold text-white ${
                location.pathname === "/Dashboard/Ringkasan" ? "text-bg-[#ecd9cb]" : ""
              }`}
            >
              <FaFileAlt className="mr-2" />
              Overview
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/Dashboard/Tentangsaya"
              className={`flex items-center font-semibold text-white ${
                location.pathname === "/Dashboard/FAQ" ? "text-bg-[#ecd9cb]" : ""
              }`}
            >
              <FaUser className="mr-3" /> {/* Icon Orang untuk About Me */}
              Aboutme
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/Dashboard/Keahlian"
              className={`flex items-center font-semibold text-white ${
                location.pathname === "/Dashboard/Keahlian" ? "text-bg-[#ecd9cb]" : ""
              }`}
            >
              <FaWrench className="mr-3" />
              Skill & pengalaman
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Bagian Back to Web di bawah */}
      <ul className="menu p-0 text-left mt-auto">
        <li>
          <Link
            to="/"
            className="flex items-center font-semibold text-white"
          >
            <FaArrowLeft className="mr-3" /> {/* Icon panah kiri */}
            Back to Web
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav1;
