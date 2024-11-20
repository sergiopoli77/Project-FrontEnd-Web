import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, useRef } from "react";

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
      <section className="hero-header">
        <div className="hero-content">
          <h1>
            <br />
            {manfaat.title}
          </h1>
          <p>{manfaat.subtitle}</p>
        </div>
      </section>

      <section className="about py-5" id="about" ref={aboutSectionRef}>
        <div className="container">
          <h1 className="about-section-title">{manfaat.abouttitle}</h1>
        </div>
      </section>

      <div className="container-manfaat">
        <section id="kaya-akan-nutrisi" className="manfaat-section">
          <img
            src={`data:image/jpeg;base64, ${manfaat.gambar1}`}
            alt="Kaya Akan Nutrisi"
            className="manfaat-image"
          />
          <div className="manfaat-content">
            <h2 className="manfaat-title">{manfaat.galerytitle}</h2>
            <p className="manfaat-description">{manfaat.des1}</p>
          </div>
        </section>

        <section id="antioksidan-tinggi" className="manfaat-section">
          <img
            src={`data:image/jpeg;base64, ${manfaat.gambar2}`}
            alt="Antioksidan Tinggi"
            className="manfaat-image"
          />
          <div className="manfaat-content">
            <h2 className="manfaat-title">{manfaat.j1}</h2>
            <p className="manfaat-description">{manfaat.des}</p>
          </div>
        </section>

        <section id="kesehatan-jantung" className="manfaat-section">
          <img
            src={`data:image/jpeg;base64, ${manfaat.gambar3}`}
            alt="Menjaga Kesehatan Jantung"
            className="manfaat-image"
          />
          <div className="manfaat-content">
            <h2 className="manfaat-title">{manfaat.j2}</h2>
            <p className="manfaat-description">{manfaat.des2}</p>
          </div>
        </section>

        <section id="kesehatan-kulit" className="manfaat-section">
          <img
            src={`data:image/jpeg;base64, ${manfaat.gambar4}`}
            alt="Meningkatkan Kesehatan Kulit"
            className="manfaat-image"
          />
          <div className="manfaat-content">
            <h2 className="manfaat-title">{manfaat.j3}</h2>
            <p className="manfaat-description">{manfaat.des3}</p>
          </div>
        </section>

        <section id="penglihatan" className="manfaat-section">
          <img
            src={`data:image/jpeg;base64, ${manfaat.gambar5}`}
            alt="Meningkatkan Penglihatan"
            className="manfaat-image"
          />
          <div className="manfaat-content">
            <h2 className="manfaat-title">{manfaat.j4}</h2>
            <p className="manfaat-description">{manfaat.des4}</p>
          </div>
        </section>

        <section id="pencernaan" className="manfaat-section">
          <img
            src={`data:image/jpeg;base64, ${manfaat.gambar6}`}
            alt="Membantu Pencernaan"
            className="manfaat-image"
          />
          <div className="manfaat-content">
            <h2 className="manfaat-title">{manfaat.j5}</h2>
            <p className="manfaat-description">{manfaat.des5}</p>
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
      </div>

      {/* Styles */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Roboto", sans-serif;
          background-color: #f7f7f7;
          color: #333;
          line-height: 1.6;
          font-size: 16px;
          overflow-x: hidden;
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
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
            url("/img/bg3.jpg") no-repeat center center/cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          color: #fff;
          text-align: center;
          padding: 120px 20px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: background 0.3s ease-in-out;
          position: relative;
        }

        .hero-header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .hero-content {
          z-index: 2;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .hero-content p {
          font-size: 1.25rem;
          font-weight: 300;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }

        /* About Section */
        .about {
          padding: 80px 20px;
          background-color: #fff;
          position: relative;
        }

        .about-section-title {
          font-size: 2.5rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 40px;
          color: #444;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .about::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 20px;
          width: 80px;
          height: 5px;
          background-color: #f2a900;
          transform: translateX(-50%);
        }

        /* Container Manfaat Section */
        .container-manfaat {
          padding: 60px 20px;
          background-color: #f1f1f1;
        }

        .manfaat-section {
          display: flex;
          align-items: center;
          margin-bottom: 50px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: #fff;
        }

        .manfaat-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .manfaat-image {
          width: 100%;
          height: 320px;
          object-fit: cover;
          max-width: 450px;
          transition: transform 0.3s ease-in-out;
        }

        .manfaat-image:hover {
          transform: scale(1.05);
        }

        .manfaat-content {
          padding: 30px;
          max-width: 650px;
          text-align: left;
          position: relative;
        }

        .manfaat-title {
          font-size: 2.2rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
          text-transform: capitalize;
          position: relative;
        }

        .manfaat-title::before {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50px;
          height: 3px;
          background-color: #f2a900;
        }

        .manfaat-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
          font-weight: 400;
        }

        /* Gallery Section */
        .gallery {
          padding: 80px 20px;
          background-color: #f9f9f9;
          position: relative;
        }

        .gallery h3 {
          font-size: 2rem;
          font-weight: 500;
          text-align: center;
          color: #333;
          margin-bottom: 50px;
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
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .col-md-4:hover {
          transform: translateY(-7px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .col-md-4 h5 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #444;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .col-md-4 p {
          font-size: 1rem;
          color: #777;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }

        .col-md-4 p:hover {
          color: #f2a900;
        }

        /* Hover & Animation Effects */
        .manfaat-section,
        .col-md-4 {
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            background-color 0.3s ease;
        }

        .manfaat-section:hover,
        .col-md-4:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .manfaat-title,
        .col-md-4 h5 {
          color: #333;
          transition: color 0.3s ease-in-out;
        }

        .manfaat-title:hover,
        .col-md-4 h5:hover {
          color: #f2a900;
        }

        .manfaat-description {
          transition: color 0.3s ease-in-out;
        }

        .manfaat-description:hover {
          color: #f2a900;
        }

        /* Global Buttons */
        button,
        .btn {
          font-family: "Roboto", sans-serif;
          font-size: 1rem;
          padding: 12px 25px;
          background-color: #f2a900;
          border: none;
          color: white;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }

        button:hover,
        .btn:hover {
          background-color: #e49b00;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        button:focus,
        .btn:focus {
          outline: none;
        }

        /* Footer Section */
        footer {
          background-color: #333;
          color: #fff;
          padding: 40px 20px;
          text-align: center;
          position: relative;
        }

        footer a {
          color: #fff;
          font-size: 1.2rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        footer a:hover {
          color: #f2a900;
        }

        footer .social-links {
          margin: 20px 0;
        }

        footer .social-links a {
          margin: 0 10px;
          font-size: 2rem;
          transition: transform 0.3s ease;
        }

        footer .social-links a:hover {
          transform: translateY(-5px);
          color: #f2a900;
        }

        /* Scroll Animations */
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }

        .manfaat-section,
        .col-md-4 {
          opacity: 0;
          animation: fadeIn 1.5s ease-in-out forwards;
        }

        .manfaat-section:nth-child(odd),
        .col-md-4:nth-child(odd) {
          animation-delay: 0.3s;
        }

        .manfaat-section:nth-child(even),
        .col-md-4:nth-child(even) {
          animation-delay: 0.5s;
        }
      `}</style>
    </main>
  );
};

export default Manfaat;
