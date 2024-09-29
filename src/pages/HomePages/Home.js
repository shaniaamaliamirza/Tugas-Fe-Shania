import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../../logo.svg";
import "../../App.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/overview");
  };

  return (
    <main>
      <div>
        <div className="bg-pink min-h-screen flex items-center justify-center">
          <div className="container mx-auto p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 text-center md:text-left">
              <p className="text-lg font-semibold">Haii Guys!!!</p>
              <h1 className="text-4xl font-bold my-4">
                SAYA SHANIA AMALIA MIRZA
              </h1>
              <p className="text-xl mb-4">
                Haiii, Saya adalah siswi kelas 12 SMK MUHAMMADIYAH 04 SUKOREJO
                <br />
                saya dari jurusan PPLG/RPL
              </p>

              {/* Tombol dengan warna pink */}
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={handleNext}
              >
                Selanjutnya
              </button>
            </div>

            {/* Perbesar ukuran foto dengan sudut melengkung */}
            <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
              <img
                src="/foto/fotoshaniaa.jpg"
                alt="Shania Amalia Mirza"
                className="rounded-lg w-80 h-80 object-cover shadow-lg" // Gunakan rounded-lg untuk sudut melengkung
              />
            </div>
          </div>
        </div>
        </div>
    </main>
  );
};

export default Home;
