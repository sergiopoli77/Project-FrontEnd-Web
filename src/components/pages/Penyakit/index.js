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
              <h3 className="penyakit-treatment">Cara Mengobati:</h3>
              <ul className="penyakit-steps">
                <li>Gunakan varietas tahan fusarium.</li>
                <li>
                  Rotasi tanaman dengan tanaman non-solanaceae (bukan keluarga
                  terong-terongan).
                </li>
                <li>Sterilisasi media tanam sebelum digunakan.</li>
                <li>
                  Gunakan fungisida berbahan aktif seperti mancozeb atau
                  trifloxystrobin.
                </li>
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
              <h1 className="penyakit-title">BERCAK DAUN</h1>
              <h2 className="penyakit-description">
                Bercak Daun disebabkan oleh jamur atau bakteri yang menyebabkan
                bercak hitam atau coklat pada daun tanaman.
              </h2>
              <h3 className="penyakit-treatment">Cara Mengobati:</h3>
              <ul className="penyakit-steps">
                <li>Hindari penyiraman dari atas agar daun tidak basah.</li>
                <li>Buang daun yang terinfeksi.</li>
                <li>
                  Semprotkan fungisida berbahan aktif seperti chlorothalonil
                  atau copper hydroxide.
                </li>
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
              <h1 className="penyakit-title">LAYU BAKTERI</h1>
              <h2 className="penyakit-description">
                Layu Bakteri disebabkan oleh infeksi bakteri yang menyebabkan
                tanaman layu mendadak dan daunnya menguning.
              </h2>
              <h3 className="penyakit-treatment">Cara Mengobati:</h3>
              <ul className="penyakit-steps">
                <li>
                  Lakukan rotasi tanaman selama 2-3 tahun dengan tanaman bukan
                  keluarga solanaceae.
                </li>
                <li>
                  Gunakan pupuk organik yang matang untuk meningkatkan
                  mikroorganisme baik.
                </li>
                <li>
                  Aplikasi bakterisida berbahan aktif seperti streptomycin
                  sulfate.
                </li>
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
              <h1 className="penyakit-title">MOSAIK</h1>
              <h2 className="penyakit-description">
                Mosaik adalah penyakit tanaman yang disebabkan oleh virus,
                menyebabkan daun berubah bentuk dan warna.
              </h2>
              <h3 className="penyakit-treatment">Cara Mengobati:</h3>
              <ul className="penyakit-steps">
                <li>
                  Hancurkan tanaman yang terinfeksi berat untuk mencegah
                  penyebaran.
                </li>
                <li>Gunakan benih bersertifikat yang bebas virus.</li>
                <li>
                  Semprotkan pestisida nabati atau kimia untuk mengendalikan
                  vektor seperti kutu daun.
                </li>
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
              <h1 className="penyakit-title">BUAH BUSUK</h1>
              <h2 className="penyakit-description">
                Buah Busuk disebabkan oleh infeksi jamur atau bakteri yang
                menyebabkan buah membusuk sebelum matang.
              </h2>
              <h3 className="penyakit-treatment">Cara Mengobati:</h3>
              <ul className="penyakit-steps">
                <li>Jaga kebersihan area sekitar tanaman.</li>
                <li>Buang buah yang terinfeksi untuk mencegah penyebaran.</li>
                <li>
                  Gunakan fungisida seperti chlorothalonil atau propiconazole
                  untuk mencegah infeksi.
                </li>
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
              <h1 className="penyakit-title">BUSUK DAUN</h1>
              <h2 className="penyakit-description">
                Busuk Daun disebabkan oleh jamur yang menyebabkan daun membusuk,
                menguning, dan rontok.
              </h2>
              <h3 className="penyakit-treatment">Cara Mengobati:</h3>
              <ul className="penyakit-steps">
                <li>Jaga sirkulasi udara yang baik di sekitar tanaman.</li>
                <li>Hindari kelembapan berlebih pada tanaman.</li>
                <li>Gunakan fungisida seperti metalaxyl atau propamocarb.</li>
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
