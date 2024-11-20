import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties } from "react";
const Penyakit = () => {
  const [penyakit, setPenyakit] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const penyakitRef = ref(db, "penyakit");
    onValue(penyakitRef, (snapshot) => {
      const data = snapshot.val();
      setPenyakit(data);
    });
  }, []);

  return (
    <main>
      <section className="hero-header">
        <div className="hero-content">
          <h1>
            <br />
            {penyakit.title}
          </h1>
          <p>{penyakit.subtitle}</p>
        </div>
      </section>

      <section className="penyakit-list">
        <div className="penyakit-container">
          <div className="penyakit-item">
            <img
              src="img/P5fusarium.PNG"
              alt="Layu Fusarium"
              className="penyakit-image"
            />
            <div className="penyakit-content">
              <h1 className="penyakit-title">{penyakit.title1}</h1>
              <h2 className="penyakit-description">{penyakit.titledes1}</h2>
              <h3 className="penyakit-treatment">{penyakit.treatment}</h3>
              <ul className="penyakit-steps">
                <li>{penyakit.stepdes1}</li>
                <li>{penyakit.stepdes4}</li>
                <li>{penyakit.stepdes2}</li>
                <li>{penyakit.stepdes3}</li>
              </ul>
            </div>
          </div>

          <div className="penyakit-item">
            <img
              src="img/P2bercak.PNG"
              alt="Bercak Daun"
              className="penyakit-image"
            />
            <div className="penyakit-content">
              <h1 className="penyakit-title">{penyakit.title2}</h1>
              <h2 className="penyakit-description">{penyakit.titledes2}</h2>
              <h3 className="penyakit-treatment">{penyakit.bercakdaun}</h3>
              <ul className="penyakit-steps">
                <li>{penyakit.stepbd1}</li>
                <li>{penyakit.stepbd2}</li>
                <li>{penyakit.stepbd3}</li>
              </ul>
            </div>
          </div>

          <div className="penyakit-item">
            <img
              src="img/P1bakteri.PNG"
              alt="Layu Bakteri"
              className="penyakit-image"
            />
            <div className="penyakit-content">
              <h1 className="penyakit-title">{penyakit.title3}</h1>
              <h2 className="penyakit-description">{penyakit.subdes1}</h2>
              <h3 className="penyakit-treatment">{penyakit.layubakteri}</h3>
              <ul className="penyakit-steps">
                <li>{penyakit.treatmentdes1}</li>
                <li>{penyakit.treatmentdes2}</li>
                <li>{penyakit.treatment3}</li>
              </ul>
            </div>
          </div>

          <div className="penyakit-item">
            <img
              src="img/P6mosaik.PNG"
              alt="Mosaik"
              className="penyakit-image"
            />
            <div className="penyakit-content">
              <h1 className="penyakit-title">{penyakit.title4}</h1>
              <h2 className="penyakit-description">{penyakit.subdes2}</h2>
              <h3 className="penyakit-treatment">{penyakit.mosaik}</h3>
              <ul className="penyakit-steps">
                <li>{penyakit.treatmentdes2}</li>
                <li>{penyakit.lanjutandes1}</li>
                <li>{penyakit.lanjutandes2}</li>
              </ul>
            </div>
          </div>

          <div className="penyakit-item">
            <img
              src="img/P4busuktomat.PNG"
              alt="Buah Busuk"
              className="penyakit-image"
            />
            <div className="penyakit-content">
              <h1 className="penyakit-title">{penyakit.title5}</h1>
              <h2 className="penyakit-description">{penyakit.titledes5}</h2>
              <h3 className="penyakit-treatment">{penyakit.buahbusuk}</h3>
              <ul className="penyakit-steps">
                <li>{penyakit.stepbb1}</li>
                <li>{penyakit.stepbb2}</li>
                <li>{penyakit.stepbb3}</li>
              </ul>
            </div>
          </div>

          <div className="penyakit-item">
            <img
              src="img/P3busukdaun.PNG"
              alt="Busuk Daun"
              className="penyakit-image"
            />
            <div className="penyakit-content">
              <h1 className="penyakit-title">{penyakit.title6}</h1>
              <h2 className="penyakit-description">{penyakit.titledes6}</h2>
              <h3 className="penyakit-treatment">{penyakit.busukdaun}</h3>
              <ul className="penyakit-steps">
                <li>{penyakit.stepbd1}</li>
                <li>{penyakit.stepbd2}</li>
                <li>{penyakit.stepbd3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
        }

        /* Hero Section */
        .hero-header {
          height: 100vh;
          background-image: url("./img/P7kebuntomat.JPG");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          padding: 100px 0;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-content h1 {
          font-size: 40px; /* Adjust size based on preference */
          font-weight: 700; /* Bold text for prominence */
          color: #ffffff; /* White text color for contrast */
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); /* Light shadow for readability */
          letter-spacing: 1.5px; /* Slight letter spacing for clarity */
          line-height: 1.4; /* Adjust line height for better text spacing */
          margin: 0; /* Remove margin for precise positioning */
          padding: 0 20px; /* Padding for responsiveness */
          transition: all 0.3s ease; /* Smooth transition for hover effects */
        }

        .hero-content p {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.3s ease;
        }

        /* Penyakit List Section */
        .penyakit-list {
          padding: 40px 0;
        }

        .penyakit-container {
          font-family: "Poppins", sans-serif;
          padding: 40px;
          max-width: 1300px !important;
          margin: 40px auto;
          position: relative;
          overflow: hidden;
          z-index: 1;
          backdrop-filter: blur(
            10px
          ); /* Increased blur for a more subtle effect */
        }

        .penyakit-container::before,
        .penyakit-container::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .penyakit-container::before {
          top: -60px;
          left: -60px;
          width: 220px;
          height: 220px;
          background: rgba(255, 255, 0, 0.5);
        }

        .penyakit-container::after {
          bottom: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 0, 0.2);
        }

        /* Layout for each Penyakit item */
        .penyakit-item {
          display: flex;
          align-items: center;
          margin-bottom: 40px;
          padding: 30px;
          width: 100%;
          max-width: 1200px;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            background-color 0.3s ease;
          backdrop-filter: blur(5px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .penyakit-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          background-color: rgba(255, 255, 255, 1);
        }

        /* Image styling */
        .penyakit-image {
          width: 160px;
          height: 160px;
          object-fit: cover;
          border-radius: 50%;
          margin-right: 20px;
          border: 4px solid #00796b;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .penyakit-item:hover .penyakit-image {
          transform: rotate(15deg);
          border-color: #ff5722;
        }

        /* Content inside each Penyakit item */
        .penyakit-content {
          flex: 1;
        }

        .penyakit-title {
          color: #37474f;
          font-size: 28px;
          margin-bottom: 12px;
          font-weight: 700;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          transition: color 0.3s ease;
        }

        .penyakit-item:hover .penyakit-title {
          color: #ff5722;
        }

        .penyakit-description {
          color: #546e7a;
          font-size: 20px;
          line-height: 1.6;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .penyakit-item:hover .penyakit-description {
          color: #424242;
        }

        /* Floating effect for the background */
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(50px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
};

export default Penyakit;
