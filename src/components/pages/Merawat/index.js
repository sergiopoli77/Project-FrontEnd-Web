import React, { useState, useEffect } from "react";

const Merawat = () => {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  useEffect(() => {
    // Scroll to top visibility
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

  // Handle smooth scroll
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      });
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      title: "3. Pemilihan Bibit",
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
    <main>
      <section className="hero-header">
        <div className="hero-content">
          <h1>Proses Merawat Tomat</h1>
          <p>
            Dapatkan panduan langkah demi langkah untuk merawat tanaman tomat
            hingga panen yang sempurna.
          </p>
          <a href="#benefits" className="btn btn-primary">
            Pelajari Lebih Lanjut
          </a>
        </div>
      </section>

      <section className="benefits-section py-5" id="benefits">
        <div className="container">
          <h2 className="text-center mb-5">Langkah-Langkah Merawat Tomat</h2>
          <div className="row g-5">
            {benefitData.map((benefit, index) => (
              <div className="col-md-6" key={index}>
                <div className="card-horizontal">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="card-image img-fluid rounded"
                    loading="lazy"
                  />
                  <div className="card-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            url(./img/bg2.jpg) no-repeat center center/cover;
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
          color: #ffdf00;
        }
        .hero-header p {
          font-size: 1.2em;
          margin-top: 20px;
        }
        .btn {
          margin-top: 20px;
          background-color: #ff4500;
          color: white;
          padding: 10px 25px;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: #45a049;
        }
        .benefits-section {
          background-color: #f4f4f4;
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
        }
        .card-image {
          width: 100px;
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
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .scroll-to-top:hover {
          background-color: #45a049;
        }
      `}</style>
    </main>
  );
};

export default Merawat;
