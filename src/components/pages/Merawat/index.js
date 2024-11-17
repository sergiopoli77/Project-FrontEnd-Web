import React from "react";

const Merawat = () => {
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
      title: "3. Pemilihan bibit",
      description:
        "Pilih bibit tomat yang sehat dan tanam pada kedalaman yang sesuai.",
      image: "/img/biji.jfif",
    },
    {
      title: "4. Penyiraman",
      description: "Siram tanaman secara teratur, terutama pada musim panas.",
      image: "/img/siram.jfif",
    },
    {
      title: "5. Pemupukan",
      description:
        "Berikan pupuk dasar saat penanaman dan pupuk tambahan saat berbunga.",
      image: "/img/pemupukan.jfif",
    },
    {
      title: "6. Penyangga Tanaman",
      description:
        "Gunakan tiang atau ajir untuk menopang tanaman agar tidak roboh.",
      image: "/img/penyangga.jfif",
    },
    {
      title: "7. Pengendalian Hama dan Penyakit",
      description:
        "Periksa tanaman secara rutin dan gunakan insektisida alami untuk mengatasi hama.",
      image: "/img/obat.jfif",
    },
    {
      title: "8. Panen",
      description: "Panen saat tomat berwarna cerah dan terasa kenyal.",
      image: "/img/panen.jfif",
    },
  ];

  return (
    <div className="merawat-container">
      <div className="header">
        <h1 className="subjudul">Merawat Tomat</h1>
        <p className="tagline">Cara merawat Tomat anda agar subur!</p>
      </div>
      <div className="list">
        {benefitData.map((benefit, index) => (
          <div
            className={`card-horizontal ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
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
        .merawat-container {
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
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
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
          gap: 40px;
        }

        .card-horizontal {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
        }

        .card-horizontal:hover {
          transform: scale(1.05);
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
        }

        .card-horizontal.left {
          flex-direction: row; /* Gambar di kiri, teks di kanan */
        }

        .card-horizontal.right {
          flex-direction: row-reverse; /* Gambar di kanan, teks di kiri */
        }

        .card-image {
          width: 180px;
          height: 180px;
          object-fit: cover;
          margin-right: 20px;
          border-radius: 15px;
          transition: transform 0.3s ease;
        }

        /* Hapus margin-left pada .card-horizontal.right .card-image */
        .card-horizontal.right .card-image {
          margin-right: 0;
        }

        .card-horizontal:hover .card-image {
          transform: scale(1.1);
        }

        .card-content {
          padding: 10px;
          text-align: left; /* Teks selalu rata kiri */
        }

        .card-content h2 {
          font-size: 1.8rem;
          color: #ff6347;
          margin-bottom: 10px;
        }

        .card-content p {
          color: #666666;
          font-size: 1.2rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .subjudul {
            font-size: 2.5rem;
          }

          .tagline {
            font-size: 1.2rem;
          }

          .card-content {
            text-align: center !important; /* Selalu di tengah pada layar kecil */
          }

          .card-content h2 {
            font-size: 1.5rem;
          }

          .card-content p {
            font-size: 1rem;
          }

          .card-horizontal {
            flex-direction: column;
            align-items: center;
          }

          .card-image {
            width: 100%;
            height: auto;
            margin-bottom: 15px;
            margin-left: 0 !important; /* Atasi margin untuk mode mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default Merawat;
