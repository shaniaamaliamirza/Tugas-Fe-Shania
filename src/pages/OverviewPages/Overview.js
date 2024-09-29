import React from "react";
import { Link } from "react-router-dom";
import "./Overview.css";
import "../../App.css";

const Overview = () => {
  return (
    <main>
      <div className="container mx-auto p-6">
        <div className="card overview-background shadow-lg p-6">
          <div className="card-body text-center">
            <h1 className="text-4xl font-bold mb-2">OVERVIEW</h1>
          </div>
          <div className="card-body">
            <h2 className="text-2xl mb-1">
              Hai, nama saya Shania Amalia Mirza
            </h2>
            <p className="text-lg mb-6">
              Saya adalah siswi kelas 12 di SMK Muhammadiyah 04 Sukorejo,
              mengambil jurusan Pengembangan Perangkat Lunak dan Gim (PPLG).
            </p>
            <p className="text-lg mb-6">
              Saya memiliki minat yang mendalam dalam dunia pemrograman dan
              teknologi. Hobi saya adalah menonton film, dan saya senang
              mempelajari hal-hal baru, terutama yang berkaitan dengan coding
              dan pengembangan aplikasi. Memilih jurusan PPLG adalah keputusan
              yang saya ambil karena saya ingin memahami lebih dalam tentang
              dunia pemrograman dan bagaimana teknologi dapat digunakan untuk
              memecahkan masalah sehari-hari.
            </p>
            <p className="text-lg mb-6">
              Dalam perjalanan saya sekarang, saya terus mengasah keterampilan
              di bidang pengembangan web, khususnya dalam front-end development.
              Saya telah mendalami HTML, CSS, JavaScript, dan beberapa framework
              seperti React. Saya percaya bahwa teknologi adalah alat yang
              sangat kuat untuk menciptakan perubahan positif di dunia, dan saya
              ingin menjadi bagian dari perubahan tersebut.
            </p>
            <p className="text-lg mb-6">
              Selain kemampuan di bidang pemrograman, saya juga tertarik untuk
              belajar tentang bagaimana teknologi bisa dikombinasikan dengan
              desain untuk membuat tampilan aplikasi yang lebih menarik dan
              mudah digunakan.
            </p>
            <p className="text-lg mb-6">
              Dalam beberapa tahun ke depan, saya bercita-cita untuk menjadi
              pengembang perangkat lunak yang dapat berkontribusi pada
              proyek-proyek yang berdampak besar, baik di industri maupun untuk
              kepentingan masyarakat. Saya ingin membangun aplikasi yang tidak
              hanya fungsional tetapi juga memberikan pengalaman yang
              menyenangkan dan bermanfaat bagi pengguna.
            </p>
            <p className="text-lg mb-6">
              Di luar dunia teknologi, saya juga aktif dalam berbagai kegiatan
              sekolah dan organisasi. Saya percaya bahwa memiliki keseimbangan
              antara akademik dan aktivitas sosial adalah kunci untuk menjadi
              individu yang lengkap, dan saya senang terlibat dalam komunitas
              yang memberikan dampak positif bagi orang lain.
            </p>
            <p className="text-lg mb-6">
              Saya selalu terbuka untuk tantangan dan peluang baru yang dapat
              membantu saya tumbuh dan berkembang lebih jauh, baik sebagai
              seorang profesional maupun pribadi. Dengan semangat dan dedikasi,
              saya yakin perjalanan ini akan membawa saya menuju karier yang
              sukses di bidang teknologi.
            </p>
            <p className="text-lg font-semibold text-black"> {/* Ubah kelas CSS */}
              Terima kasih telah mengunjungi portofolio saya.
            </p>
            <Link to="/ContactMe">
              <button
                aria-label="Hubungi Saya"
                className="bg-pink-500 text-white px-6 py-2 mt-8 rounded-full shadow-lg hover:bg-pink-700"
              >
                Hubungi Saya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Overview;
