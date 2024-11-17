import React from "react";

const Manfaat = () => {
  const benefitData = [
    {
      title: "1. Pemilihan Lokasi",
      description:
        "Tanaman tomat membutuhkan sinar matahari penuh, minimal 6-8 jam per hari. Pastikan tanah memiliki drainase yang baik dan kaya akan bahan organik.",
      image: "/img/tanah.jfif",
    },
    {
      title: "2. Persiapan Tanah",
      description:
        "Gemburkan tanah dan campurkan pupuk kompos untuk meningkatkan kesuburan tanah.",
      image: "/img/persiapan.jfif",
    },
    {
      title: "3. Penanaman",
      description:
        "Pilih bibit tomat yang sehat dan tanam pada kedalaman yang sesuai.",
      image: "/img/biji.jfif", // Ganti dengan gambar yang sesuai
    },
    {
      title: "4. Penyiraman",
      description: "Siram tanaman secara teratur, terutama pada musim panas.",
      image: "/img/siram.jfif", // Ganti dengan gambar yang sesuai
    },
    {
      title: "5. Pemupukan",
      description:
        "Berikan pupuk dasar saat penanaman dan pupuk tambahan saat berbunga.",
      image: "/img/pemupukan.jfif", // Ganti dengan gambar yang sesuai
    },
    {
      title: "6. Penyangga Tanaman",
      description:
        "Gunakan tiang atau ajir untuk menopang tanaman agar tidak roboh.",
      image: "/img/gambar6.jpg", // Ganti dengan gambar yang sesuai
    },
    {
      title: "7. Pengendalian Hama dan Penyakit",
      description:
        "Periksa tanaman secara rutin dan gunakan insektisida alami untuk mengatasi hama.",
      image: "/img/gambar7.jpg", // Ganti dengan gambar yang sesuai
    },
    {
      title: "8. Panen",
      description: "Panen saat tomat berwarna cerah dan terasa kenyal.",
      image: "/img/gambar8.jpg", // Ganti dengan gambar yang sesuai
    },
    {
      title: "9. Pasca Panen",
      description: "Simpan tomat di tempat yang sejuk dan kering.",
      image: "/img/gambar9.jpg", // Ganti dengan gambar yang sesuai
    },
  ];

  return (
    <div className="manfaat-container">
      <div className="header">
        <h1 className="subjudul">Merawat Tomat</h1>
        <p className="tagline">Cara merawat Tomat anda agar subur!</p>
      </div>
      <div className="list">
        {benefitData.map((benefit, index) => (
          <div className="card-horizontal" key={index}>
            <img
              src={benefit.image}
              alt={benefit.title}
              className="card-image"
            />
            <div className="card-content">
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .manfaat-container {
          background: linear-gradient(
              to bottom,
              rgba(255, 105, 135, 0.8),
              rgba(255, 247, 247, 0.9)
            ),
            url("/img/bgmanfaat1.jpg");
          background-size: cover;
          background-attachment: fixed;
          background-position: center;
          color: #ffffff;
          font-family: "Roboto", sans-serif;
          padding: 40px 10%;
          animation: fadeIn 1.5s ease-out;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
          animation: fadeIn 2s ease-out;
        }

        .subjudul {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: #ffffff;
          text-shadow: 4px 6px 10px rgba(0, 0, 0, 0.6);
        }

        .tagline {
          font-size: 1.8rem;
          color: #ffddcc;
          font-weight: 400;
          margin-bottom: 20px;
        }

        .list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          animation: slideUp 1.5s ease-in;
        }

        .card-horizontal {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 100px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            rotate 0.3s ease;
        }
        x .card-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.4s ease, filter 0.4s ease;
          filter: brightness(0.9);
        }

        .card-horizontal:hover .card-image {
          transform: scale(1.1);
          filter: brightness(1.1);
        }

        .card-content {
          padding: 20px;
          text-align: center;
        }

        .card-content h2 {
          font-size: 2rem;
          color: #ff6347;
          margin-bottom: 10px;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
        }

        .card-content p {
          color: #666666;
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .subjudul {
            font-size: 2.5rem;
          }

          .tagline {
            font-size: 1.2rem;
          }

          .card-content h2 {
            font-size: 1.5rem;
          }

          .card-content p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Manfaat;
