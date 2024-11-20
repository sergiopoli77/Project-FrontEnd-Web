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
            <br />
            {manfaat.title}
          </h1>
          <p>{manfaat.subtitle}</p>
        </div>
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

      {/* Styles */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Poppins", sans-serif; /* Gunakan font modern */
          background-color: #f8f9fa; /* Warna latar belakang netral */
          color: #333; /* Warna teks default */
          line-height: 1.6;
          font-size: 16px;
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
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
            url("/img/bg3.jpg") no-repeat center center/cover;
          color: #fff;
          text-align: center;
          padding: 150px 20px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .hero-content p {
          font-size: 1.2rem;
          font-weight: 300;
        }

        /* About Section */
        .about {
          padding: 60px 0;
          background-color: #fff;
        }

        .about-section-title {
          font-size: 2rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 40px;
          color: #444;
        }

        .list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .card-horizontal {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-horizontal:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .card-visual img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card-content {
          padding: 20px;
        }

        .card-content h2 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 10px;
        }

        .card-content p {
          font-size: 1rem;
          color: #666;
        }

        /* Gallery Section */
        .gallery {
          padding: 60px 0;
          background-color: #f9f9f9;
        }

        .gallery h3 {
          font-size: 1.8rem;
          font-weight: 500;
          text-align: center;
          color: #333;
          margin-bottom: 40px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .col-md-4 {
          flex: 1 1 30%;
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .col-md-4:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .col-md-4 h5 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #444;
          margin-bottom: 10px;
        }

        .col-md-4 p {
          font-size: 1rem;
          color: #777;
        }
      `}</style>
    </main>
  );
};

export default Manfaat;
