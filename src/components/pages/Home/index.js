import React from "react";

const Home = () => {
  return (
    <main>
      <section className="hero-header">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            Panduan Lengkap
            <br />
            Manfaat dan Perawatan Tomat
          </h1>
          <p>
            Mulai dari kandungan antioksidan hingga vitamin, tomat memiliki
            segudang manfaat. Ketahui juga cara merawatnya agar tanaman tomat
            Anda tumbuh subur.
          </p>
          <a href="#about" className="btn btn-primary">
            Pelajari Lebih Lanjut
          </a>
        </div>
      </section>

      <section className="about py-5" id="about">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100"
                    src="img/tomat1.jpg"
                    alt="Tomat 1"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75"
                    src="img/tomat2.jpg"
                    alt="Tomat 2"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75"
                    src="img/tomat3.jpeg"
                    alt="Tomat 3"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100"
                    src="img/tomat4.jpg"
                    alt="Tomat 4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="about-section-title ff-secondary text-start text-primary fw-normal">
                About Us
              </h5>
              <h1 className="mb-4">Welcome to Tomatik</h1>
              <p className="mb-4">
                Tomatik hadir untuk memberikan Anda informasi lengkap tentang
                manfaat kesehatan dari tomat. Dari meningkatkan daya tahan tubuh
                hingga mendukung kesehatan kulit, tomat adalah buah yang kaya
                akan manfaat yang baik untuk kesehatan Anda.
              </p>
              <p className="mb-4">
                Menyediakan panduan perawatan tomat yang
                praktis dan mudah. Baik Anda seorang pemula ataupun penghobi
                tanaman, panduan kami akan membantu Anda menumbuhkan tomat yang
                sehat dan subur di rumah.
              </p>
              <a className="btn-readmore py-3 px-5 mt-2" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* =========================== HERO SECTION ============================= */
        /* Hero section dengan gambar latar belakang */
        .hero-header {
          position: relative;
          height: 100vh; /* Tinggi penuh viewport */
          background: linear-gradient(
              rgba(174, 185, 212, 0),
              rgba(195, 65, 65, 0.443)
            ),
            url(./img/bg1.jpg) no-repeat center center/cover; /* Gambar latar belakang */
          display: flex;
          align-items: center; /* Vertikal tengah */
          justify-content: center; /* Horizontal tengah */
          color: #ffffff; /* Warna teks putih */
          text-align: center;
        }

        /* Overlay gelap untuk meningkatkan kontras teks */
        .hero-header .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ;
        }

        /* Konten Hero di atas overlay */
        .hero-header .hero-content {
          position: relative;
          z-index: 2; /* Menempatkan konten di atas overlay */
          max-width: 800px;
          padding: 20px;
        }

        .hero-header h1 {
          font-size: 3em;
          font-weight: bold;
          margin-bottom: 15px;
          color: #b22222;
          text-shadow: 2px 2px 4px black;
        }

        
        .hero-header p {
          font-size: 1.2em;
          margin-bottom: 20px;
          color: #000000;
          padding: 5px;
          text-shadow: 1px 1px 1px white;
        }

        .hero-header .btn {
          background-color: #ff2222;
          color: #ffffff;
          padding: 12px 30px;
          font-size: 1em;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .hero-header .btn:hover {
          background-color: #1a9728;
        }

        /* =========================== About Section ============================ */

        /* Gaya untuk judul bagian "About Us" */
        .about-section-title {
          font-size: 1.8em; /* Ukuran font untuk judul */
          font-weight: bold; /* Memberikan ketebalan pada font */
          color: #ff0000 !important; /* Warna teks (merah) */
          text-transform: uppercase; /* Mengubah teks menjadi huruf kapital */
          letter-spacing: 2px; /* Jarak antar huruf */
          text-align: left; /* Penyelarasan teks ke kiri */
          margin-bottom: 20px; /* Menambahkan jarak di bawah judul */
        }

        /* Menambahkan gaya untuk elemen "text-primary" */
        .about-section-title.text-primary {
          color: #3b7a57; /* Warna hijau yang lebih lembut untuk kelas text-primary */
        }

        .about {
          padding: 50px 0;
          background-color: #f4f4f4;
        }

        .about h1 {
          font-size: 2.5em;
          color: #45a049;
        }

        .about p {
          font-size: 1.1em;
          line-height: 1.6;
          color: #666666;
          margin-top: 20px;
        }

        /* Gaya untuk tombol Read More */
        .btn-readmore {
          background-color: #ff2600; /* Warna latar belakang tombol */
          color: white; /* Warna teks tombol */
          border: none; /* Menghapus border */
          padding: 10px 20px; /* Padding untuk ukuran tombol */
          font-size: 1rem; /* Ukuran font tombol */
          border-radius: 5px; /* Membuat sudut tombol melengkung */
          text-align: center; /* Menyelaraskan teks tombol */
          transition: background-color 0.3s ease; /* Efek transisi saat hover */
        }

        .btn-readmore:hover {
          background-color: #45a049; /* Warna latar belakang tombol saat hover */
          color: white; /* Warna teks saat hover */
          text-decoration: none; /* Menghilangkan garis bawah saat hover */
        }

        .btn-readmore:focus {
          outline: none; /* Menghapus outline saat tombol difokuskan */
        }
      `}</style>
    </main>
  );
};

export default Home;
