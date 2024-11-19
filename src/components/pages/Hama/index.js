import React from "react";

const Hama = [
  {
    id: 1,
    title: "Kutu Daun Thrips Tomat",
    description:
      "Ciri-ciri kutu daun thrips adalah panjangnya 1 mm dan berwarna hitam. Kutu daun thrips ini menyerang...",
    image: "/img/kutudaunthrips.jpeg",
  },
  {
    id: 2,
    title: "Ulat Buah Tomat",
    description:
      "Umumnya ulat buah tomat ini menyerang daun, bunga dan buah tanaman tomat. Ciri-ciri hama ulat...",
    image: "img/ulat.jpeg",
  },
  {
    id: 3,
    title: "Kutu Daun Aphis Hijau Pada Tomat",
    description:
      "Aphis hijau lebih sering disebut kutu daun hijau. Ciri-ciri aphis hijau adalah...",
    image: "img/kutudaunapis.jpeg",
  },
  {
    id: 4,
    title: "Cacing Tanah",
    description:
      "Serangan hama ini pada tanaman tomat ditandai dengan terpotongnya tanaman pada pangkal...",
    image: "img/cacing.jpeg",
  },
  {
    id: 5,
    title: "Lalat Buah",
    description:
      "Ukuran hama ini sekitar 8 mm dengan warna tubuh hitam kehijauan dan sayap transparan...",
    image: "img/lalat.jpeg",
  },
  {
    id: 6,
    title: "Kutu Kebul",
    description:
      "Hama kutu daun bersayap putih ini menjadi salah satu hama paling berbahaya dalam budidaya tanaman...",
    image: "https://via.placeholder.com/300x200?text=Kutu+Kebul",
  },
];

const HamaComponent = () => {
  return (
    <div className="container">
      <div className="main-header">
        <h1 className="title">HAMA PADA TUMBUHAN TOMAT</h1>
       
      </div>

      {/* Introduction Section */}
      <section className="introduction">
        <p className="intro-text">
          Tanaman tomat sangat rentan terhadap serangan hama. Berikut ini adalah
          daftar beberapa hama yang sering menyerang tanaman tomat. Mengetahui
          ciri-ciri dan cara penanganannya dapat membantu petani untuk
          melindungi tanaman tomat dari kerusakan yang parah.
        </p>
      </section>

      <div className="card-grid">
        {Hama.map((pest) => (
          <div key={pest.id} className="card">
            <img
              src={pest.image}
              alt={`Gambar ${pest.title}`}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{pest.title}</h2>
              <p className="card-description">{pest.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Global Styles */
        body,
        html {
          margin: 0;
          padding: 0;
          font-family: "Montserrat", sans-serif;
          background-color: #f9f9f9;
          color: #333;
        }

        /* Main Header */
        .main-header {
          height: 500px;
          background-image: image("img/gambarhama.jpg"); /* Ganti dengan gambar Anda */
          background-size: 100% 100%; /* Mengisi lebar dan tinggi dengan gambar */
          background-position: center center; /* Gambar tetap terpusat */
          background-repeat: no-repeat; /* Gambar tidak terulang */
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        /* Main Header */
        .main-header {
          height: 500px;
          background-image: linear-gradient(
              120deg,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.3)
            ),
            url("https://via.placeholder.com/1920x300"); /* Gradient + Gambar */
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative; /* Agar teks berada di atas overlay */
        }

        .title {
          font-size: 48px; /* Ukuran teks lebih besar */
          font-weight: 700;
          font-family: "Poppins", sans-serif; /* Font lebih modern */
          background-color: rgba(0, 0, 0, 0.6); /* Transparansi untuk teks */
          padding: 15px 25px;
          border-radius: 12px;
          letter-spacing: 1.5px;
          animation: fadeIn 1s ease-out; /* Animasi Fade-in */
        }

        /* Animasi Teks */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title {
          font-size: 42px;
          font-weight: bold;
          background-color: rgba(0, 0, 0, 0.5); /* Transparansi untuk teks */
          padding: 10px 20px;
          border-radius: 8px;
        }

        /* Introduction Section */
        .introduction {
          text-align: center;
          padding: 20px 40px;
          max-width: 900px;
          margin: 20px auto;
        }

        .intro-text {
          font-size: 18px;
          color: #555;
          line-height: 1.8;
        }

        /* Card Grid */
        .container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* Dua kolom */
          gap: 30px; /* Jarak antar kartu */
        }

        /* Card */
        .card {
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card-content {
          padding: 20px;
        }

        .card-title {
          font-size: 20px;
          font-weight: bold;
          color: #ff6347;
          margin-bottom: 10px;
        }

        .card-description {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .card-grid {
            grid-template-columns: 1fr; /* Satu kolom di layar kecil */
          }

          .card-title {
            font-size: 18px;
          }

          .card-description {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default HamaComponent;
