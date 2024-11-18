import React, { useState, useEffect, useRef } from "react";

const Manfaat = () => {
  const [inView, setInView] = useState(false);
  const aboutSectionRef = useRef(null);

  const benefitData = [
    {
      title: "Kaya Akan Nutrisi",
      description:
        "Tomat mengandung banyak vitamin dan mineral penting seperti vitamin C, vitamin K, kalium, dan folat.",
      image: "/img/gambar1.jpg",
    },
    {
      title: "Antioksidan Tinggi",
      description:
        "Tomat kaya akan antioksidan seperti likopen, yang dapat membantu melindungi sel-sel tubuh dari kerusakan akibat radikal bebas.",
      image: "/img/gambar2.jpg",
    },
    {
      title: "Menjaga Kesehatan Jantung",
      description:
        "Konsumsi tomat secara teratur dapat membantu menurunkan kadar kolesterol dan tekanan darah.",
      image: "/img/gambar3.jpg",
    },
    {
      title: "Meningkatkan Kesehatan Kulit",
      description:
        "Kandungan vitamin C dan antioksidan dalam tomat dapat membantu menjaga kulit tetap sehat, mencegah penuaan dini, dan melindungi kulit dari kerusakan akibat sinar matahari.",
      image: "/img/gambar4.jpg",
    },
    {
      title: "Meningkatkan Penglihatan",
      description:
        "Tomat kaya akan vitamin A, yang penting untuk menjaga kesehatan mata dan penglihatan yang baik.",
      image: "/img/gambar5.jpg",
    },
    {
      title: "Membantu Pencernaan",
      description:
        "Tomat tinggi serat, yang dapat membantu mempromosikan pencernaan yang sehat dan mencegah sembelit.",
      image: "/img/gambar6.jpg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.5 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-header">
        <div className="hero-content">
          <h1>
            Panduan Lengkap
            <br />
            Manfaat Tomat
          </h1>
          <p>
            Mulai dari kandungan antioksidan hingga vitamin, tomat memiliki
            segudang manfaat untuk kesehatan Anda.
          </p>
        </div>
        <a href="#about" className="btn btn-primary">
          Pelajari Lebih Lanjut
        </a>
      </section>

      {/* About Section */}
      <section className="about py-5" id="about" ref={aboutSectionRef}>
        <div className="container">
          <h1 className="about-section-title">Manfaat Tomat</h1>
          <div className="list">
            {benefitData.map((benefit, index) => (
              <div
                className={`card-horizontal ${inView ? "fadeIn" : ""}`}
                key={index}
              >
                <div className="card-visual">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="card-image"
                  />
                </div>
                <div className="card-content">
                  <h2>{benefit.title}</h2>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery py-5" id="gallery">
        <div className="container">
          <h2 className="text-center mb-4">Kaya Akan Nutrisi</h2>
          <h3 className="text-center mb-4">
            Informasi penting tentang kandungan nutrisi tomat
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-center mt-2">Vitamin C</h5>
              <p className="text-center">
                Berfungsi sebagai antioksidan kuat untuk melawan radikal bebas,
                meningkatkan sistem kekebalan tubuh, dan membantu penyerapan zat
                besi dalam tubuh.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">Vitamin K</h5>
              <p className="text-center">
                Penting untuk pembekuan darah dan mendukung kesehatan tulang
                dengan membantu tubuh menyerap kalsium.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">Kalium</h5>
              <p className="text-center">
                Berperan dalam menjaga tekanan darah tetap stabil, membantu
                fungsi saraf, dan kontraksi otot.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery py-5" id="gallery">
        <div className="container">
          <h2 className="text-center mb-4">Antioksidan Tinggi</h2>
          <h3 className="text-center mb-4">
            Manfaat Antioksidan Tinggi dari Tomat
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-center mt-2">Kaya akan Likopen</h5>
              <p className="text-center">
                Tomat merupakan sumber utama likopen, antioksidan yang
                memberikan warna merah pada tomat dan dapat melindungi sel tubuh
                dari kerusakan oksidatif.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">
                Manfaat untuk Kesehatan Jantung
              </h5>
              <p className="text-center">
                Likopen dalam tomat dapat membantu mengurangi risiko penyakit
                jantung dengan melawan peradangan dan mencegah kerusakan
                pembuluh darah.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">Mencegah Kanker</h5>
              <p className="text-center">
                Likopen juga dikaitkan dengan penurunan risiko beberapa jenis
                kanker, termasuk kanker prostat, dengan melawan radikal bebas
                yang berpotensi merusak DNA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery py-5" id="gallery">
        <div className="container">
          <h2 className="text-center mb-4">Menjaga Kesehatan Jantung</h2>
          <h3 className="text-center mb-4">
            Manfaat Tomat untuk Kesehatan Jantung
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-center mt-2">Menurunkan Kadar Kolesterol</h5>
              <p className="text-center">
                Tomat mengandung lycopene, antioksidan yang dapat membantu
                menurunkan kadar kolesterol LDL (kolesterol jahat). Dengan
                konsumsi rutin, lycopene membantu mengurangi pembentukan plak di
                arteri, yang berpotensi mengurangi risiko penyakit jantung.
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="text-center mt-2">Mengatur Tekanan Darah</h5>
              <p className="text-center">
                Kandungan kalium dalam tomat berfungsi untuk menyeimbangkan
                tekanan darah. Kalium membantu melebarkan pembuluh darah, yang
                dapat membantu mengurangi tekanan darah tinggi dan mengurangi
                beban pada jantung.
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="text-center mt-2">
                Anti-Inflamasi untuk Kesehatan Jantung
              </h5>
              <p className="text-center">
                Tomat memiliki sifat anti-inflamasi yang membantu mengurangi
                peradangan dalam pembuluh darah. Peradangan kronis pada pembuluh
                darah dapat memperburuk kondisi jantung, dan dengan konsumsi
                tomat, peradangan ini dapat diminimalisir, mendukung kesehatan
                jantung secara keseluruhan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skin-health py-5" id="skin-health">
        <div className="container">
          <h2 className="text-center mb-4">Meningkatkan Kesehatan Kulit</h2>
          <h3 className="text-center mb-4">
            Manfaat Tomat untuk Kesehatan Kulit
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-center mt-2">Mencegah Penuaan Dini</h5>
              <p className="text-center">
                Vitamin C dalam tomat berperan penting dalam produksi kolagen,
                yang menjaga kekuatan dan elastisitas kulit. Dengan kolagen yang
                cukup, keriput dan tanda-tanda penuaan dini dapat dicegah.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">
                Melindungi Kulit dari Sinar Matahari
              </h5>
              <p className="text-center">
                Tomat mengandung likopen, antioksidan yang efektif melindungi
                kulit dari kerusakan akibat paparan sinar UV. Konsumsi tomat
                secara teratur dapat membantu mengurangi dampak buruk sinar
                matahari.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">Meningkatkan Kesehatan Kulit</h5>
              <p className="text-center">
                Vitamin C membantu memperbaiki kerusakan kulit yang disebabkan
                oleh polusi dan faktor eksternal. Selain itu, sifat
                antiinflamasi vitamin C dapat menenangkan kulit yang teriritasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-health py-5" id="vision-health">
        <div className="container">
          <h2 className="text-center mb-4">Meningkatkan Penglihatan</h2>
          <h3 className="text-center mb-4">
            Manfaat Tomat untuk Kesehatan Mata
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-center mt-2">Kaya akan Vitamin A</h5>
              <p className="text-center">
                Tomat mengandung vitamin A dalam bentuk provitamin A
                (karotenoid), yang penting untuk menjaga kesehatan mata dan
                mendukung fungsi penglihatan.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">Menjaga Fungsi Retina</h5>
              <p className="text-center">
                Vitamin A berperan dalam pembentukan rhodopsin, pigmen yang
                diperlukan retina untuk mendeteksi cahaya, sehingga membantu
                penglihatan dalam kondisi cahaya rendah.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">Mencegah Degenerasi Makula</h5>
              <p className="text-center">
                Asupan vitamin A yang cukup dapat membantu melindungi mata dari
                degenerasi makula terkait usia, yang merupakan salah satu
                penyebab utama kebutaan pada orang tua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="digestion-health py-5" id="digestion-health">
        <div className="container">
          <h2 className="text-center mb-4">Membantu Pencernaan</h2>
          <h3 className="text-center mb-4">
            Manfaat Tomat untuk Kesehatan Pencernaan
          </h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-center mt-2">Meningkatkan Gerakan Usus</h5>
              <p className="text-center">
                Tomat kaya akan serat, yang membantu memperlancar proses
                pencernaan dengan meningkatkan gerakan usus dan mengurangi
                risiko sembelit.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">Detoksifikasi Tubuh</h5>
              <p className="text-center">
                Kandungan air dalam tomat membantu menjaga hidrasi tubuh dan
                mendukung proses detoksifikasi dengan memfasilitasi pengeluaran
                racun melalui urin.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">
                Menjaga Keseimbangan Bakteri Usus
              </h5>
              <p className="text-center">
                Tomat mengandung prebiotik alami yang dapat mendukung
                pertumbuhan bakteri baik dalam saluran pencernaan, membantu
                menjaga keseimbangan mikrobiota usus yang sehat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .hero-header {
          background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.3)
            ),
            url("/img/gbmanfaat1.jpg") no-repeat center center/cover;
          color: #fff;
          text-align: center;
          padding: 150px 20px;
          position: relative;
        }
        .hero-content {
          animation: fadeIn 1.5s ease-in-out;
        }
        .btn-primary {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #ff6347;
          color: white;
          text-transform: uppercase;
          font-weight: bold;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s ease-in-out;
        }
        .btn-primary:hover {
          background-color: #ffa07a;
        }

        .about-section-title {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 40px;
          color: #ff4500;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        }

        .list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .card-horizontal {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .card-horizontal:hover {
          transform: scale(1.08);
          animation: floating 2s infinite;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card-content {
          padding: 20px;
          text-align: center;
        }
        .card-content h2 {
          color: #ff4500;
          font-size: 1.8rem;
          margin-bottom: 10px;
        }
        .card-content p {
          color: #555;
          font-size: 1.2rem;
        }

        /* Reset styling */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Arial", sans-serif;
          background-color: #f9f9f9;
        }

        /* Section styling */
        section {
          padding: 60px 0;
          background-color: #fff;
        }

        /* Title styling */
        h2 {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 300;
          color: #7f8c8d;
          margin-bottom: 40px;
        }

        /* Container styling */
        .container {
          width: 85%;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Row styling */
        .row {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }

        /* Column styling */
        .col-md-4 {
          flex: 1 1 30%;
          padding: 15px;
          background-color: #ecf0f1;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .col-md-4:hover {
          transform: translateY(-10px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        /* Text styling */
        .text-center {
          text-align: center;
        }

        .mt-2 {
          margin-top: 20px;
        }

        .mb-4 {
          margin-bottom: 40px;
        }

        /* Card headers */
        h5 {
          font-size: 1.2rem;
          font-weight: bold;
          color: #34495e;
          margin-bottom: 15px;
        }

        /* Paragraph styling */
        p {
          font-size: 1rem;
          color: #7f8c8d;
          line-height: 1.6;
        }

        /* Gallery section specific styling */
        .gallery {
          background-color: #f7f7f7;
        }

        .gallery h2 {
          color: #e74c3c;
        }

        .gallery h3 {
          color: #16a085;
        }

        /* Skin health section specific styling */
        .skin-health {
          background-color: #f0f3f4;
        }

        .skin-health h2 {
          color: #8e44ad;
        }

        .skin-health h3 {
          color: #2980b9;
        }

        /* Vision health section specific styling */
        .vision-health {
          background-color: #fff3e6;
        }

        .vision-health h2 {
          color: #f39c12;
        }

        .vision-health h3 {
          color: #c0392b;
        }

        /* Digestion health section specific styling */
        .digestion-health {
          background-color: #d5f0e7;
        }

        .digestion-health h2 {
          color: #27ae60;
        }

        .digestion-health h3 {
          color: #2ecc71;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .col-md-4 {
            flex: 1 1 100%;
          }

          .container {
            width: 90%;
          }

          h2 {
            font-size: 2rem;
          }

          h3 {
            font-size: 1.1rem;
          }

          p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </main>
  );
};

export default Manfaat;
