import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaGraduationCap, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const initialData = {
  biodata: {
    Nama: "Shania Amalia Mirza",
    Alamat: "Tlangu Sukorejo",
    Email: "shaniamaliamirza21@gmail.com",
    NoHP: "081548416946",
  },
  pendidikan: {
    SD: "SD Muhammadiyah Sukorejo",
    SMP: "SMP IT Ulul Albaab Weleri",
    SMK: "SMK Muhammadiyah 04 Sukorejo",
  },
};

const Tentangsaya = () => {
  const [data, setData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [editableData, setEditableData] = useState(data);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setEditMode(!editMode);
    if (editMode) {
      setData(editableData);
    }
  };

  const handleChange = (e, section, key) => {
    setEditableData({
      ...editableData,
      [section]: {
        ...editableData[section],
        [key]: e.target.value,
      },
    });
  };

  const handleBackClick = () => {
    if (editMode && !window.confirm("Perubahan belum disimpan. Yakin ingin kembali?")) {
      return;
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-pink-200 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-white text-left w-full">
        Tentang Saya
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          <FaUser className="inline-block mr-2 text-pink-500" /> Biodata
        </h2>

        {/* Biodata Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {Object.keys(data.biodata).map((key) => (
            <div key={key} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <label className="block font-semibold mb-2 text-gray-700">
                {key === "NoHP" ? <FaPhone className="inline-block mr-2" /> : null}
                {key === "Email" ? <FaEnvelope className="inline-block mr-2" /> : null}
                {key === "Alamat" ? <FaMapMarkerAlt className="inline-block mr-2" /> : null}
                {key}:
              </label>
              {editMode ? (
                <input
                  type="text"
                  value={editableData.biodata[key]}
                  onChange={(e) => handleChange(e, "biodata", key)}
                  className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              ) : (
                <p className="text-gray-700">{data.biodata[key]}</p>
              )}
            </div>
          ))}
        </div>

        <hr className="my-8 border-pink-300" />

        {/* Pendidikan Section */}
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          <FaGraduationCap className="inline-block mr-2 text-pink-500" /> Pendidikan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(data.pendidikan).map((key) => (
            <div key={key} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <label className="block font-semibold mb-2 text-gray-700">{key}:</label>
              {editMode ? (
                <input
                  type="text"
                  value={editableData.pendidikan[key]}
                  onChange={(e) => handleChange(e, "pendidikan", key)}
                  className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              ) : (
                <p className="text-gray-700">{data.pendidikan[key]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-10">
          <button
            onClick={handleEditClick}
            className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            {editMode ? "Simpan" : "Edit"}
          </button>
          <button
            onClick={handleBackClick}
            className="bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tentangsaya;
