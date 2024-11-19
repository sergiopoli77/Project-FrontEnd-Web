import React, { useState, useEffect } from "react";

const Hama = [
  {
    id: 1,
    title: "Kutu Daun Thrips Tomat",
    description:
      "Ciri-ciri kutu daun thrips adalah panjangnya 1 mm dan berwarna hitam. Kutu daun thrips ini menyerang...",
    image: "https://via.placeholder.com/300x200?text=Kutu+Daun",
  },
  {
    id: 2,
    title: "Ulat Buah Tomat",
    description:
      "Umumnya ulat buah tomat ini menyerang daun, bunga dan buah tanaman tomat. Ciri-ciri hama ulat...",
    image: "https://via.placeholder.com/300x200?text=Ulat+Buah",
  },
  {
    id: 3,
    title: "Kutu Daun Aphis Hijau Pada Tomat",
    description:
      "Aphis hijau lebih sering disebut kutu daun hijau. Ciri-ciri aphis hijau adalah...",
    image: "https://via.placeholder.com/300x200?text=Kutu+Aphis",
  },
  {
    id: 4,
    title: "Cacing Tanah",
    description:
      "Serangan hama ini pada tanaman tomat ditandai dengan terpotongnya tanaman pada pangkal...",
    image: "https://via.placeholder.com/300x200?text=Cacing+Tanah",
  },
  {
    id: 5,
    title: "Lalat Buah",
    description:
      "Ukuran hama ini sekitar 8 mm dengan warna tubuh hitam kehijauan dan sayap transparan...",
    image: "https://via.placeholder.com/300x200?text=Lalat+Buah",
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
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollToTopVisible(true);
      } else {
        setScrollToTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      {/* Header Section */}
      <section className="hero-header">
        <div className="hero-content">
          <h1>HAMA PADA TUMBUHAN TOMAT</h1>
          <p>
            Tanaman tomat sangat rentan terhadap serangan hama. Berikut ini
            adalah daftar beberapa hama yang sering menyerang tanaman tomat.
            Mengetahui ciri-ciri dan cara penanganannya dapat membantu petani
            untuk melindungi tanaman tomat dari kerusakan yang parah.
          </p>
        </div>
      </section>

      {/* Card Grid Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="text-center mb-5">Hama yang Sering Menyerang Tomat</h2>
          <div className="row g-4">
            {Hama.map((pest) => (
              <div className="col-md-6" key={pest.id}>
                <div className="card-horizontal">
                  <img
                    src={pest.image}
                    alt={pest.title}
                    className="card-image img-fluid rounded"
                    loading="lazy"
                  />
                  <div className="card-content">
                    <h3>{pest.title}</h3>
                    <p>{pest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {scrollToTopVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          ↑
        </button>
      )}

      <style jsx>{`
        .hero-header {
          position: relative;
          height: 100vh;
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
            url(https://via.placeholder.com/1920x300) no-repeat center
              center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .hero-content {
          max-width: 800px;
        }

        .hero-header h1 {
          font-size: 3em;
          font-weight: bold;
        }

        .hero-header p {
          font-size: 1.2em;
          margin-top: 20px;
        }

        .benefits-section {
          background-color: #f4f4f4;
          padding: 40px 0;
        }

        .benefits-section h2 {
          font-size: 2.5em;
          font-weight: bold;
          color: #b22222;
        }

        .card-horizontal {
          display: flex;
          gap: 15px;
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-horizontal:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .card-image {
          width: 150px;
          height: auto;
          border-radius: 10px;
        }

        .card-content h3 {
          font-size: 1.2em;
          margin-bottom: 10px;
          color: #333;
        }

        .card-content p {
          font-size: 1em;
          color: #555;
        }

        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #ff4500;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 50%;
          cursor: pointer;
        }

        .scroll-to-top:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default HamaComponent;
