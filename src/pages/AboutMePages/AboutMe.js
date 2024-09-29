import React from "react";
import "./AboutMe.css";
import "../../App.css";

const AboutMe = () => {
  return (
    <main>
      <div className="container mx-auto p-6">
        <div className="card overview-background shadow-lg p-8 rounded-lg">
          <div className="card-body text-center">
            <h1 className="text-4xl font-bold mb-4 text-center">Biodata Saya</h1>
          </div>
          <div className="card-body">
            <table className="table-auto mx-auto bg-white shadow-md w-full lg:w-3/4 mb-12" style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-left">Nama:</td>
                  <td className="px-6 py-4 text-left">Shania Amalia Mirza</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-left">Tanggal Lahir:</td>
                  <td className="px-6 py-4 text-left">Kendal, 21 Desember 2006</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-left">Alamat:</td>
                  <td className="px-6 py-4 text-left">Tlangu, Sukorejo</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-left">Email:</td>
                  <td className="px-6 py-4 text-left">shaniaamaliamirza21@gmail.com</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-left">No HP/WA:</td>
                  <td className="px-6 py-4 text-left">[Masukkan No. HP/WA Anda]</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-3xl font-bold mb-6 text-center">Riwayat Pendidikan</h2>

            <table className="table-auto mx-auto bg-white shadow-md w-full lg:w-3/4 mb-10" style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-left">TK:</td>
                  <td className="px-6 py-4 text-left">TK ABA X Sukorejo</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-left">SD:</td>
                  <td className="px-6 py-4 text-left">SD Muhammadiyah Sukorejo</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-left">SMP:</td>
                  <td className="px-6 py-4 text-left">SMP IT Ulul Albaab Weleri</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-left">SMK:</td>
                  <td className="px-6 py-4 text-left">SMK Muhammadiyah 04 Sukorejo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
