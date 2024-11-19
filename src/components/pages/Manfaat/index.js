import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties, useRef } from "react";

const Manfaat = () => {
  const [manfaat, setManfaat] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const manfaatRef = ref(db, "manfaat");
    onValue(manfaatRef, (snapshot) => {
      const data = snapshot.val();
      setManfaat(data);
    });
  }, []);
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
            {manfaat.title}
            <br />
            {manfaat.title2}
          </h1>
          <p>{manfaat.subtitle}</p>
        </div>
        <a href="#about" className="btn btn-primary">
          {manfaat.pelajari}
        </a>
      </section>

      {/* About Section */}
      <section className="about py-5" id="about" ref={aboutSectionRef}>
        <div className="container">
          <h1 className="about-section-title">{manfaat.abouttitle}</h1>
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
          <h2 className="text-center mb-4">{manfaat.galerytitle1}</h2>
          <h3 className="text-center mb-4">{manfaat.galerysub}</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g1title}</h5>
              <p className="text-center">{manfaat.g1sub}</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g2title}</h5>
              <p className="text-center">{manfaat.g2sub}</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g3title}</h5>
              <p className="text-center">{manfaat.g3sub}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery py-5" id="gallery">
        <div className="container">
          <h2 className="text-center mb-4">{manfaat.galerytitle2}</h2>
          <h3 className="text-center mb-4">{manfaat.galerysub2}</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g4title}</h5>
              <p className="text-center">{manfaat.g4sub}</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g5title}</h5>
              <p className="text-center">{manfaat.g5sub}</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g6title}</h5>
              <p className="text-center">{manfaat.g6sub}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery py-5" id="gallery">
        <div className="container">
          <h2 className="text-center mb-4">{manfaat.galerytitle3}</h2>
          <h3 className="text-center mb-4">{manfaat.galerysub3}</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g7title}</h5>
              <p className="text-center">{manfaat.g7sub}</p>
            </div>

            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g8title}</h5>
              <p className="text-center">{manfaat.g8sub}</p>
            </div>

            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g9title}</h5>
              <p className="text-center">{manfaat.g9sub}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="skin-health py-5" id="skin-health">
        <div className="container">
          <h2 className="text-center mb-4">{manfaat.galerytitle4}</h2>
          <h3 className="text-center mb-4">{manfaat.galerysub4}</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g10title}</h5>
              <p className="text-center">{manfaat.g10sub}</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g11title}</h5>
              <p className="text-center">{manfaat.g11sub}</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g12title}</h5>
              <p className="text-center">{manfaat.g12sub}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-health py-5" id="vision-health">
        <div className="container">
          <h2 className="text-center mb-4">{manfaat.galerytitle5}</h2>
          <h3 className="text-center mb-4">{manfaat.galerysib5}</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g13title}</h5>
              <p className="text-center">{manfaat.g13sub}</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g14title}</h5>
              <p className="text-center">{manfaat.g14sub}</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g15title}</h5>
              <p className="text-center">{manfaat.g15sub}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="digestion-health py-5" id="digestion-health">
        <div className="container">
          <h2 className="text-center mb-4">{manfaat.galerytitle6}</h2>
          <h3 className="text-center mb-4">{manfaat.galerysub6}</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g16title}</h5>
              <p className="text-center">{manfaat.g16sub}</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g17title}</h5>
              <p className="text-center">{manfaat.g17sub}</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-center mt-2">{manfaat.g18title}</h5>
              <p className="text-center">{manfaat.g18sub}</p>
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
