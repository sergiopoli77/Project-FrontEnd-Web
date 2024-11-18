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
      `}</style>
    </main>
  );
};

export default Manfaat;
