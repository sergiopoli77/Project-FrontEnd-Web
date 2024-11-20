import React from "react";

const HamaComponent = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-header">
        <div className="hero-content">
          <h1>
            <br />
            Hama Pada Tumbuhan Tomat
          </h1>
          <p>
            Temukan informasi lengkap tentang hama yang sering menyerang tanaman
            tomat dan cara mengatasinya.
          </p>
        </div>
      </section>

      {/* hero Section */}
      <section id="hero" className="section-hero">
        <h1>Daftar Hama Utama</h1>
        <p>
          Tanaman tomat sangat rentan terhadap serangan hama. Berikut ini adalah
          daftar beberapa hama yang sering menyerang tanaman tomat.
        </p>
      </section>

      {/* Container Hama Section */}
      <div className="container-hama">
        {/* Individual Hama Sections */}
        <section id="hama-pertama" className="hama-section">
          <img
            src="/img/kututhrips.jpeg"
            alt="Hama Pertama"
            className="hama-image"
          />
          <div className="hama-content">
            <h2 className="hama-title">Kutu Daun Thrips Tomat</h2>
            <p className="hama-description">
              Ciri-ciri kutu daun thrip adalah panjangnya 1 mm dan berwarna
              hitam. Kutu daun thrips ini menye...
            </p>
          </div>
        </section>

        <section id="hama-kedua" className="hama-section">
          <img
            src="/img/lalatbuah.jpeg"
            alt="Hama Kedua"
            className="hama-image"
          />
          <div className="hama-content">
            <h2 className="hama-title">Ulat Buah Tomat</h2>
            <p className="hama-description">
              Umumnya ulat buah tomat ini menyerang daun, bunga, dan buah
              tanaman tomat. Ciri ciri hama ulat...
            </p>
          </div>
        </section>

        <section id="hama-ketiga" className="hama-section">
          <img
            src="/img/kutuaphis.jpeg"
            alt="Hama Ketiga"
            className="hama-image"
          />
          <div className="hama-content">
            <h2 className="hama-title">Kutu Daun Aphis Hijau</h2>
            <p className="hama-description">
              Aphis hijau lebih sering disebut kutu daun hijau. Ciri ciri aphis
              hijau ada...
            </p>
          </div>
        </section>

        <section id="hama-keempat" className="hama-section">
          <img
            src="/img/cacingtanah.jpeg"
            alt="Hama Keempat"
            className="hama-image"
          />
          <div className="hama-content">
            <h2 className="hama-title">Cacing Tanah</h2>
            <p className="hama-description">
              Serangan hama ini pada tanaman tomat ditandai dengan terpotong
              tanaman pada pang..
            </p>
          </div>
        </section>

        <section id="hama-lima" className="hama-section">
          <img
            src="/img/lalatbuah.jpeg"
            alt="Hama Lima"
            className="hama-image"
          />
          <div className="hama-content">
            <h2 className="hama-title">Lalat Buah</h2>
            <p className="hama-description">
              Ukuran hama ini sekitar 8 mm dengan warna tubuh hitam kehijauan
              dan sayap transparan...
            </p>
          </div>
        </section>

        <section id="hama-enam" className="hama-section">
          <img
            src="/img/kutukebul.jpeg"
            alt="Hama Enam"
            className="hama-image"
          />
          <div className="hama-content">
            <h2 className="hama-title">Kutu kebul</h2>
            <p className="hama-description">
              Hama kutu daun bersayap putih ini merupakan salah hama paling
              berbahaya dalam budidaya tanam...
            </p>
          </div>
        </section>
      </div>

      {/* Styles */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Roboto", sans-serif;
          background-color: #f7f7f7;
          color: #333;
          line-height: 1.6;
          font-size: 16px;
          overflow-x: hidden;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        main {
          width: 100%;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-header {
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
            url("/img/bg3.jpg") no-repeat center center/cover;
          color: #fff;
          text-align: center;
          padding: 120px 20px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: background 0.3s ease-in-out;
          position: relative;
        }

        .hero-header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .hero-content {
          z-index: 2;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .hero-content p {
          font-size: 1.25rem;
          font-weight: 300;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }
        
        .section-hero {
          text-align: center;
          padding: 60px 20px;
          background-color: #fff;
        }

        .section-hero h1 {
          font-size: 2.5rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
        }

        .section-hero p {
          font-size: 1.1rem;
          color: #666;
        }

        /* Container Hama Section */
        .container-hama {
          padding: 60px 20px;
          background-color: #f1f1f1;
        }

        .hama-section {
          display: flex;
          align-items: center;
          margin-bottom: 50px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: #fff;
        }

        .hama-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .hama-image {
          width: 100%;
          height: 320px;
          object-fit: cover;
          max-width: 450px;
          transition: transform 0.3s ease-in-out;
        }

        .hama-image:hover {
          transform: scale(1.05);
        }

        .hama-content {
          padding: 30px;
          max-width: 650px;
          text-align: left;
          position: relative;
        }

        .hama-title {
          font-size: 2.2rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
          text-transform: capitalize;
          position: relative;
        }

        .hama-title::before {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50px;
          height: 3px;
          background-color: #f2a900;
        }

        .hama-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
          font-weight: 400;
        }
      `}</style>
    </main>
  );
};

export default HamaComponent;
