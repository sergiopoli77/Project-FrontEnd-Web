import React from "react";

const HamaComponent = () => {
  return (
    <main className="hama-container">
      {/* Hero Header Section */}
      <section className="hero-header">
        <div className="hero-content">
          <h1>Hama Pada Tumbuhan Tomat</h1>
          <p>
            Temukan informasi lengkap tentang hama yang sering menyerang tanaman
            tomat dan cara mengatasinya.
          </p>
        </div>
      </section>

      {/* Header Section */}
      <section id="header" className="section-header">
        <h1>Daftar Hama Utama</h1>
        <p>
          Tanaman tomat sangat rentan terhadap serangan hama. Berikut ini adalah
          daftar beberapa hama yang sering menyerang tanaman tomat.
        </p>
      </section>

      {/* Container Hama Section */}
      <div className="container-hama">
        {/* Individual Hama Sections */}
        <section id="kutu-daun-thrips" className="hama-section">
          <img
            src="/img/kutudaunthrips.jpeg"
            alt="Gambar Kutu Daun Thrips Tomat"
            className="hama-image"
          />
          <div className="hama-content">
            <h2 className="hama-title">Kutu Daun Thrips Tomat</h2>
            <p className="hama-description">
              Ciri-ciri kutu daun thrips adalah panjangnya 1 mm dan berwarna
              hitam. Kutu daun thrips ini menyerang bagian daun dan bunga,
              menyebabkan daun keriput dan bunga gugur.
            </p>
          </div>
        </section>

        <section id="ulat-buah" className="hama-section">
          <img
            src="/img/ulat.jpeg"
            alt="Gambar Ulat Buah Tomat"
            className="hama-image"
          />
          <div className="hama-content">
            <h2 className="hama-title">Ulat Buah Tomat</h2>
            <p className="hama-description">
              Umumnya ulat buah tomat ini menyerang daun, bunga, dan buah
              tanaman tomat. Ulat ini menyebabkan kerusakan dengan memakan
              bagian tanaman dan dapat meninggalkan lubang di buah tomat.
            </p>
          </div>
        </section>

        {/* Tambahkan hama lainnya dengan struktur yang sama */}
      </div>

      {/* Tambahan CSS */}
      <style jsx>{`
        main.hama-container {
          background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.3)
            ),
            url("/img/gbmanfaat1.jpg") no-repeat center center/cover;
        }

        /* Hero Header Section */
        .hero-header {
          background-color: #000000;
          padding: 100px 40px;
          color: #fff;
          text-align: center;
          position: relative;
          
        }

        .hero-content h1 {
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .hero-content p {
          font-size: 18px;
          line-height: 1.6;
          margin-top: 10px;
        }

        /* Header Section */
        .section-header {
          color: #fff;
          text-align: center;
          padding: 50px 20px;
        }

        .section-header h1 {
          font-size: 36px;
          font-weight: 700;
        }

        .section-header p {
          font-size: 18px;
          line-height: 1.6;
          margin-top: 10px;
        }

        /* Container Hama */
        .container-hama {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        /* Hama Section */
        .hama-section {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          padding: 30px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hama-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .hama-image {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 16px;
          border: 4px solid #ff6347;
        }

        .hama-content {
          flex: 1;
        }

        .hama-title {
          font-size: 22px;
          font-weight: 600;
          color: #ff6347;
          margin-bottom: 10px;
        }

        .hama-description {
          font-size: 16px;
          line-height: 1.6;
          color: #333;
        }

        /* Responsiveness */
        @media (max-width: 768px) {
          .hama-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .hama-image {
            width: 120px;
            height: 120px;
          }

          .hama-title {
            font-size: 20px;
          }

          .hama-description {
            font-size: 14px;
          }
        }
      `}</style>
    </main>
  );
};

export default HamaComponent;
