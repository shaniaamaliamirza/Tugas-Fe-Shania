import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialOverviewData = {
  title: "OVERVIEW",
  description:
    "Hai, nama saya Shania Amalia Mirza. Saya adalah siswi kelas 12 di SMK Muhammadiyah 04 Sukorejo, jurusan Pengembangan Perangkat Lunak dan Gim (PPLG). Saya memiliki minat mendalam dalam pemrograman dan teknologi. Hobi saya menonton film, dan saya senang mempelajari hal baru, terutama coding. Saya ingin memahami lebih dalam dunia pemrograman dan bagaimana teknologi dapat digunakan untuk memecahkan masalah sehari-hari.Dalam perjalanan saya sekarang, saya terus mengasah keterampilan di bidang pengembangan web, khususnya dalam front-end development. Saya telah mendalami HTML, CSS, JavaScript, dan beberapa framework seperti React. Saya percaya bahwa teknologi adalah alat yang sangat kuat untuk menciptakan perubahan positif di dunia, dan saya ingin menjadi bagian dari perubahan tersebut.Selain kemampuan di bidang pemrograman, saya juga tertarik untuk belajar tentang bagaimana teknologi bisa dikombinasikan dengan desain untuk membuat tampilan aplikasi yang lebih menarik dan mudah digunakan.Dalam beberapa tahun ke depan, saya bercita-cita untuk menjadi pengembang perangkat lunak yang dapat berkontribusi pada proyek-proyek yang berdampak besar, baik di industri maupun untuk kepentingan masyarakat. Saya ingin membangun aplikasi yang tidak hanya fungsional tetapi juga memberikan pengalaman yang menyenangkan dan bermanfaat bagi pengguna.Di luar dunia teknologi, saya juga aktif dalam berbagai kegiatan sekolah dan organisasi. Saya percaya bahwa memiliki keseimbangan antara akademik dan aktivitas sosial adalah kunci untuk menjadi individu yang lengkap, dan saya senang terlibat dalam komunitas yang memberikan dampak positif bagi orang lain.Saya selalu terbuka untuk tantangan dan peluang baru yang dapat membantu saya tumbuh dan berkembang lebih jauh, baik sebagai seorang profesional maupun pribadi. Dengan semangat dan dedikasi, saya yakin perjalanan ini akan membawa saya menuju karier yang sukses di bidang teknologi.",
  imageUrl: "/foto/fotoshaniaa.jpg", // Gambar placeholder awal
};

const Ringkasan = () => {
  const [overviewData, setOverviewData] = useState(initialOverviewData);
  const [editMode, setEditMode] = useState(false);
  const [editableOverviewData, setEditableOverviewData] = useState(overviewData);
  const [previewImage, setPreviewImage] = useState(overviewData.imageUrl);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setEditMode(!editMode);
    if (editMode) {
      setOverviewData(editableOverviewData);
    }
  };

  const handleChange = (e, key) => {
    setEditableOverviewData({
      ...editableOverviewData,
      [key]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); 
        setEditableOverviewData({
          ...editableOverviewData,
          imageUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setOverviewData(editableOverviewData);
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
      <h1 className="text-4xl font-bold mb-6 text-white text-left w-full">Halaman Overview</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Konten Halaman Overview</h2>

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">Judul:</label>
          {editMode ? (
            <input
              type="text"
              value={editableOverviewData.title}
              onChange={(e) => handleChange(e, "title")}
              className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          ) : (
            <h2 className="text-xl font-bold text-gray-800">{overviewData.title}</h2>
          )}
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">Deskripsi:</label>
          {editMode ? (
            <textarea
              value={editableOverviewData.description}
              onChange={(e) => handleChange(e, "description")}
              className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="5"
            />
          ) : (
            <p className="text-gray-700">{overviewData.description}</p>
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
              src={overviewData.imageUrl}
              alt="Overview"
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

export default Ringkasan;
