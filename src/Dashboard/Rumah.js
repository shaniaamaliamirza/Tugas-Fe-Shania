import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialHomeData = {
  title: "Hai Guys!!! SAYA SHANIA AMALIA MIRZA",
  description:
    "Haiii, Saya adalah siswi kelas 12 SMK MUHAMMADIYAH 04 SUKOREJO saya dari jurusan RPL/PPLG Hobi saya adalah menonton film, dan alasan saya memilih jurusan RPL adalah saya ingin belajar tentang dunia pemrograman",
  imageUrl: "/foto/fotoshaniaa.jpg",
};

const Rumah = () => {
  const [homeData, setHomeData] = useState(initialHomeData);
  const [editMode, setEditMode] = useState(false);
  const [editableHomeData, setEditableHomeData] = useState(homeData);
  const [previewImage, setPreviewImage] = useState(homeData.imageUrl);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setEditMode(!editMode);
    if (editMode) {
      setHomeData(editableHomeData);
    }
  };

  const handleChange = (e, key) => {
    setEditableHomeData({
      ...editableHomeData,
      [key]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setEditableHomeData({
          ...editableHomeData,
          imageUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setHomeData(editableHomeData);
    setEditMode(false);
  };

  const handleBackClick = () => {
    if (editMode && !window.confirm("Perubahan belum disimpan. Yakin ingin kembali?")) {
      return;
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-pink-200 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-white text-left w-full">Halaman Home</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Konten Halaman Home</h2>

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">Judul:</label>
          {editMode ? (
            <input
              type="text"
              value={editableHomeData.title}
              onChange={(e) => handleChange(e, "title")}
              className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          ) : (
            <h2 className="text-xl font-bold text-gray-800">{homeData.title}</h2>
          )}
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">Deskripsi:</label>
          {editMode ? (
            <textarea
              value={editableHomeData.description}
              onChange={(e) => handleChange(e, "description")}
              className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="5"
            />
          ) : (
            <p className="text-gray-700">{homeData.description}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">Gambar:</label>
          {editMode ? (
            <input
              type="file"
              onChange={handleImageChange}
              className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          ) : (
            <img
              src={homeData.imageUrl}
              alt="Home"
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
          )}
          {editMode && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-4 w-64 h-64 object-cover rounded-lg shadow-md"
            />
          )}
        </div>

        <div className="flex justify-between">
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

export default Rumah;

