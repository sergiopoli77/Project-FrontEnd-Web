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
      {/* Hero Section */}
      <section className="hero-header">
        <div className="hero-content">
          <h1>
            <br />
            {penyakit.title}
          </h1>
          <p>{penyakit.subtitle}</p>
        </div>
      </section>

      {/* Penyakit List Section */}
      <section className="penyakit-list">
        <div className="penyakit-container">
          <div className="penyakit-item">
            <img
              src="img/P5fusarium.PNG"
              alt="Layu Fusarium"
              className="penyakit-image"
            />
            <div className="penyakit-content">
              <h1 className="penyakit-title">LAYU FUSARIUM</h1>
              <h2 className="penyakit-description">
                Layu Fusarium disebabkan oleh jamur Fusarium oxysporum, yang
                menyebabkan tanaman layu dan kerdil.
              </h2>
            </div>
          </div>

          <div className="penyakit-item">
            <img
              src="img/P2bercak.PNG"
              alt="Bercak Daun"
              className="penyakit-image"
            />
            <div className="penyakit-content">
              <h1 className="penyakit-title">BERCAK DAUN</h1>
              <h2 className="penyakit-description">
                Bercak Daun disebabkan oleh jamur atau bakteri yang menyebabkan
                bercak hitam atau coklat pada daun tanaman.
              </h2>
            </div>
          </div>

          <div className="penyakit-item">
            <img
              src="img/P1bakteri.PNG"
              alt="Layu Bakteri"
              className="penyakit-image"
            />
            <div className="penyakit-content">
              <h1 className="penyakit-title">LAYU BAKTERI</h1>
              <h2 className="penyakit-description">
                Layu Bakteri disebabkan oleh infeksi bakteri yang menyebabkan
                tanaman layu mendadak dan daunnya menguning.
              </h2>
            </div>
          </div>

          <div className="penyakit-item">
            <img
              src="img/P6mosaik.PNG"
              alt="Mosaik"
              className="penyakit-image"
            />
            <div className="penyakit-content">
              <h1 className="penyakit-title">MOSAIK</h1>
              <h2 className="penyakit-description">
                Mosaik adalah penyakit tanaman yang disebabkan oleh virus,
                menyebabkan daun berubah bentuk dan warna.
              </h2>
            </div>
          </div>

          <div className="penyakit-item">
            <img
              src="img/P4busuktomat.PNG"
              alt="Buah Busuk"
              className="penyakit-image"
            />
            <div className="penyakit-content">
              <h1 className="penyakit-title">BUAH BUSUK</h1>
              <h2 className="penyakit-description">
                Buah Busuk disebabkan oleh infeksi jamur atau bakteri yang
                menyebabkan buah membusuk sebelum matang.
              </h2>
            </div>
          </div>

          <div className="penyakit-item">
            <img
              src="img/P3busukdaun.PNG"
              alt="Busuk Daun"
              className="penyakit-image"
            />
            <div className="penyakit-content">
              <h1 className="penyakit-title">BUSUK DAUN</h1>
              <h2 className="penyakit-description">
                Busuk Daun disebabkan oleh jamur yang menyebabkan daun membusuk,
                menguning, dan rontok.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
        }

        .penyakit-container {
          font-family: "Poppins", sans-serif;
          padding: 30px;
          border-radius: 15px;
          max-width: 1500px;
          margin: 40px auto;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          background: rgba(255, 99, 71, 0.8);
          position: relative;
          overflow: hidden;
        }

        .penyakit-container::before,
        .penyakit-container::after {
          content: "";
          position: absolute;
          border-radius: 70%;
          animation: float 6s ease-in-out infinite;
        }

        .penyakit-container::before {
          top: -50px;
          left: -50px;
          width: 250px;
          height: 200px;
          background: rgba(255, 255, 255, 0.6);
        }

        .penyakit-container::after {
          bottom: -80px;
          right: -80px;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.3);
        }

        .penyakit-item {
          display: flex;
          align-items: left;
          margin-bottom: 40px;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .penyakit-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .penyakit-image {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
          margin-right: 20px;
          border: 4px solid #00796b;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .penyakit-item:hover .penyakit-image {
          transform: rotate(20deg);
          border-color: #ff5722;
        }

        .penyakit-content {
          flex: 1;
        }

        .penyakit-title {
          color: #37474f;
          font-size: 26px;
          margin-bottom: 10px;
          font-weight: 700;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        }

        .penyakit-description {
          color: #546e7a;
          font-size: 18px;
          line-height: 1.6;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(80px);
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
