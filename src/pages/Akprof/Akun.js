import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UserDetail = ({ label, value }) => (
  <div className="flex items-center mb-4">
    <span className="font-medium text-[#FF69B4] w-32">{label}:</span>
    <span>{value}</span>
  </div>
);

const Akun = () => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogout = () => {
    // Tutup konfirmasi logout
    setShowLogoutConfirmation(false);

    // Set notifikasi
    setShowNotification(true);

    // Tunda selama 1 detik sebelum navigasi
    setTimeout(() => {
      navigate('/Home.js');
    }, 1000); // 1 detik
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-[#F8D7DA] p-8">
      {/* Header Section */}
      <div className="bg-[#FF69B4] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-center">Akun Saya</h1>
      </div>

      {/* User Details Section */}
      <div className="bg-white p-8 mt-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-[#FF69B4] mb-6">Informasi Profil</h2>
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#FF69B4]">
            <img src="/foto/fotoshaniaa.jpg" alt="foto" className="w-full h-full object-cover" />
          </div>
          <div>
            <UserDetail label="Nama" value="Shania Amalia Mirza" />
            <UserDetail label="Alamat" value="Tlangu Sukorejo" />
            <UserDetail label="Email" value="Shaniaamaliamirza21@gmail.com" />
            <UserDetail label="No HP/WA" value="08212210326" />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Link to="/profil">
            <button className="bg-[#FF69B4] text-white py-2 px-4 rounded hover:bg-[#FF1493]">
              Update Profil
            </button>
          </Link>
        </div>
      </div>

      {/* Account Settings Section */}
      <div className="bg-white p-8 mt-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-[#FF69B4] mb-6">Pengaturan Akun</h2>
        <div className="space-y-4">
          <Link to="/change-password" className="text-[#FF69B4] font-semibold hover:underline">Ganti Password</Link>
          <Link to="/privacy-settings" className="text-[#FF69B4] font-semibold hover:underline">Pengaturan Privasi</Link>
          <Link to="/notification-settings" className="text-[#FF69B4] font-semibold hover:underline">Pengaturan Notifikasi</Link>
          <Link to="/security-settings" className="text-[#FF69B4] font-semibold hover:underline">Opsi Keamanan</Link>
        </div>
      </div>

      {/* Logout Section */}
      <div className="bg-white p-8 mt-8 rounded-lg shadow-md">
        <div className="flex justify-center">
          <button
            onClick={handleLogoutClick}
            className="bg-[#FF69B4] text-white py-2 px-4 rounded hover:bg-[#FF1493]"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirmation && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-48">
            <h2 className="text-lg font-semibold mb-4">Konfirmasi Logout</h2>
            <p className="mb-4 text-sm">Apakah Anda yakin ingin keluar dari akun Anda?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleLogout}
                className="bg-[#FF69B4] text-white py-1 px-3 rounded hover:bg-[#FF1493]"
              >
                Iya
              </button>
              <button
                onClick={handleCancelLogout}
                className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600"
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
          Anda telah keluar dari akun.
        </div>
      )}
    </div>
  );
};

export default Akun;
