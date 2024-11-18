import React, { useState, useEffect, useRef } from "react";

const Manfaat = () => {
  const [inView, setInView] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const aboutSectionRef = useRef(null);

  const benefitData = [
    {
      title: "Kaya Akan Nutrisi",
      description: (
        <>
          <p>
            Tomat mengandung berbagai jenis vitamin dan mineral yang sangat
            penting untuk kesehatan tubuh. Mari kita bahas beberapa nutrisi
            utama yang terkandung dalam tomat:
          </p>
          <ul>
            <li>
              <strong>Vitamin C:</strong> Vitamin C adalah antioksidan kuat yang
              membantu memperkuat sistem imun tubuh, mencegah infeksi, serta
              mempercepat proses penyembuhan luka. Selain itu, vitamin ini juga
              berperan penting dalam produksi kolagen untuk kulit yang sehat dan
              elastis.
            </li>
            <li>
              <strong>Vitamin K:</strong> Vitamin K memiliki peran penting dalam
              proses pembekuan darah dan menjaga kesehatan tulang. Konsumsi
              tomat secara rutin dapat membantu mencegah pengeroposan tulang,
              serta meningkatkan penyerapan kalsium dalam tubuh.
            </li>
            <li>
              <strong>Kalium (Potassium):</strong> Kalium berfungsi untuk
              mengatur tekanan darah dan keseimbangan cairan dalam tubuh. Ini
              juga penting untuk fungsi otot dan saraf. Kalium dapat membantu
              mengurangi risiko hipertensi dan stroke.
            </li>
            <li>
              <strong>Folat (Vitamin B9):</strong> Folat atau Vitamin B9 sangat
              penting untuk pembentukan sel darah merah dan DNA. Mengonsumsi
              folat secara cukup sangat penting, terutama bagi ibu hamil, untuk
              mendukung perkembangan janin dan mencegah cacat lahir.
            </li>
            <li>
              <strong>Lycopene (Antioksidan):</strong> Likopen adalah salah satu
              antioksidan kuat yang ditemukan dalam tomat, yang dikenal dapat
              membantu mengurangi risiko kanker dan penyakit jantung. Lycopene
              juga melindungi kulit dari kerusakan akibat paparan sinar UV.
            </li>
          </ul>
          <p>
            Tomat, dengan berbagai kandungan nutrisinya, dapat mendukung
            kesehatan tubuh secara keseluruhan, mulai dari meningkatkan sistem
            kekebalan tubuh hingga mendukung kesehatan jantung dan kulit.
          </p>
        </>
      ),
      image: "/img/gambar1.jpg",
    },
    {
      title: "Antioksidan Tinggi",
      description:
        "Tomat kaya akan antioksidan seperti likopen, yang dapat membantu melindungi sel-sel tubuh dari kerusakan akibat radikal bebas.",
      image: "/img/gambar2.jpg",
    },
    // Add other benefits as needed...
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

  const handleImageClick = (index) => {
    setActiveImage(index);
    setTimeout(() => setActiveImage(null), 300);
  };

  return (
    <main>
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
                    className={`card-image ${
                      activeImage === index ? "clicked" : ""
                    }`}
                    onClick={() => handleImageClick(index)}
                  />
                </div>
                <div className="card-content">
                  <h2 className="card-title">{benefit.title}</h2>
                  <div className="card-description">{benefit.description}</div>
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

        @keyframes clickEffect {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .about {
          background-color: #f9f9f9;
          padding: 60px 0;
        }

        .about-section-title {
          text-align: center;
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 40px;
          font-family: "Arial", sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          animation: fadeIn 1s ease-in-out;
        }

        .list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          padding: 0 15px;
        }

        .card-horizontal {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transform: translateY(20px);
          opacity: 0;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }

        .card-horizontal:hover {
          transform: translateY(0);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
        }

        .card-horizontal.fadeIn {
          opacity: 1;
          transform: translateY(0);
        }

        .card-visual {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }

        .card-image.clicked {
          animation: clickEffect 0.3s ease-in-out;
        }

        .card-content {
          padding: 20px;
          background-color: #fff;
          flex: 1;
        }

        .card-title {
          font-size: 1.6rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .card-description {
          font-size: 1rem;
          color: #555;
          line-height: 1.5;
          text-align: justify;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        li {
          margin-bottom: 10px;
        }

        li strong {
          color: #007bff;
        }

        /* Hover effect on cards */
        .card-horizontal:hover .card-image {
          transform: scale(1.05);
        }

        /* Add background gradient on hover */
        .card-horizontal:hover {
          background: linear-gradient(
            135deg,
            rgba(255, 192, 203, 0.3),
            rgba(135, 206, 250, 0.3)
          );
        }

        /* Add subtle shadow effect when hovering on cards */
        .card-horizontal:hover {
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </main>
  );
};

export default Manfaat;
