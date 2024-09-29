import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto bg-pink shadow-lg rounded-lg overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-pink-500">Register</h1>
        <div className="p-4">
          <form>
            <div className="mb-4">
              <label className="block text-pink-500 font-medium mb-2">Username</label>
              <input
                type="text"
                placeholder="Masukkan username"
                className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-pink-500 font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-pink-500 font-medium mb-2">Konfirmasi Password</label>
              <input
                type="password"
                placeholder="Konfirmasi password"
                className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
                Register
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Sudah punya akun?{' '}
            <Link to="/login" className="text-pink-500 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;