import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    // Proses form data...
    alert('Pesan sudah masuk!'); // Tampilkan notifikasi pop-up
  };

  return (
    <main>
      <div className="container mx-auto p-20">
        <div className="card overview-background shadow-lg p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-pink-900">Contact Me</h1>

          <div className="mb-8 text-center text-lg text-black">
            <p className="mb-4">Jika Anda ingin bekerja sama atau memiliki pertanyaan, jangan ragu untuk menghubungi saya melalui form di bawah ini atau via email.</p>
            <p>Email: <a href="mailto:shaniamaliamirza21@gmail.com" className="text-pink-700 underline hover:text-pink-500">shaniamaliamirza21@gmail.com</a></p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-pink-900 font-semibold">Nama</label>
              <input type="text" name="name" className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:border-pink-500" placeholder="Nama Anda" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-pink-900 font-semibold">Email</label>
              <input type="email" name="email" className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:border-pink-500" placeholder="Email Anda" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-pink-900 font-semibold">Pesan</label>
              <textarea name="message" className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:border-pink-500" rows="5" placeholder="Pesan Anda" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 transform hover:scale-105">Kirim Pesan</button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="mb-4 text-lg text-pink-900 font-semibold">Atau hubungi saya melalui media sosial:</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transform transition duration-300 hover:scale-110">
                <FaInstagram size={36} style={{ color: '#ff69b4' }} />
              </a>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="transform transition duration-300 hover:scale-110">
                <FaWhatsapp size={36} style={{ color: '#ff69b4' }} />
              </a>
              <a href="https://www.twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transform transition duration-300 hover:scale-110">
                <FaTwitter size={36} style={{ color: '#ff69b4' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactMe;
