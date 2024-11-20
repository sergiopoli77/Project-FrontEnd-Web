import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties, useRef } from "react";

const Home = () => {
  const [home, setHome] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const homeRef = ref(db, "home");
    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
    });
  }, []);
  const [inView, setInView] = useState(false);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const aboutSectionRef = useRef(null);

  const faqs = [
    {
      question: "Apa manfaat utama dari tomat?",
      answer:
        "Tomat kaya akan vitamin C, likopen, dan antioksidan yang dapat membantu meningkatkan kekebalan tubuh dan menjaga kesehatan kulit.",
    },
    {
      question: "Bagaimana cara merawat tanaman tomat?",
      answer:
        "Tanaman tomat membutuhkan cahaya matahari yang cukup, penyiraman yang teratur, dan pemupukan organik untuk hasil terbaik.",
    },
    {
      question: "Kapan waktu terbaik untuk memanen tomat?",
      answer:
        "Tomat sebaiknya dipanen ketika sudah matang sempurna dengan warna yang merata, tergantung pada varietasnya.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

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
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

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

  const openModal = (content) => {
    setModalContent(content); // Set isi modal dengan konten
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <main>
      <section className="hero-header">
        <div className="hero-content">
          <h1>
            {home.title1}
            <br />
            {home.title2}
          </h1>
          <p>{home.subtitle}</p>
        </div>
      </section>

      <section className="about py-5" id="about" ref={aboutSectionRef}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className={`img-fluid rounded w-100 ${
                      inView ? "slideInLeft" : ""
                    }`}
                    src={`data:image/jpeg;base64, ${home.tomat1}`}
                    alt="Tomat 1"
                    loading="lazy"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className={`img-fluid rounded w-75 ${
                      inView ? "slideInLeft" : ""
                    }`}
                    src={`data:image/jpeg;base64, ${home.tomat2}`}
                    alt="Tomat 2"
                    style={{ marginTop: "25%" }}
                    loading="lazy"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className={`img-fluid rounded w-75 ${
                      inView ? "slideInRight" : ""
                    }`}
                    src={`data:image/jpeg;base64, ${home.tomat3}`}
                    alt="Tomat 3"
                    loading="lazy"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className={`img-fluid rounded w-100 ${
                      inView ? "slideInRight" : ""
                    }`}
                    src={`data:image/jpeg;base64, ${home.tomat4}`} //perbaiki gambar yang tidak full di firebase sergio
                    alt="Tomat 4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="about-section-title ff-secondary text-start text-primary fw-normal">
                {home.about}
              </h5>
              <h1 className="mb-4">{home.abouttitle}</h1>
              <p className="mb-4">{home.aboutsub1}</p>
              <p className="mb-4">{home.aboutsub2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery py-5" id="gallery">
        <div className="container">
          <h2 className="text-center mb-4">{home.galery}</h2>
          <h3 className="text-center mb-4">{home.galerytitle}</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <img
                src={`data:image/jpeg;base64, ${home.roma}`}
                alt="Tomat Roma"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">{home.g1}</h5>
              <p className="text-center">{home.g1title}</p>
            </div>
            <div className="col-md-4">
              <img
                src={`data:image/jpeg;base64, ${home.beefsteak}`}
                alt="BeefSteak tomat"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">{home.g2}</h5>
              <p className="text-center">{home.g2title}</p>
            </div>
            <div className="col-md-4">
              <img
                src={`data:image/jpeg;base64, ${home.jepang}`}
                alt="Tomat Cerry Jepang"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">{home.g3}</h5>
              <p className="text-center">{home.g3title}</p>
            </div>
            <div className="col-md-4">
              <img
                src={`data:image/jpeg;base64, ${home.marzano}`}
                alt="Tomat Marzano"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">{home.g4}</h5>
              <p className="text-center">{home.g4title}</p>
            </div>
            <div className="col-md-4">
              <img
                src={`data:image/jpeg;base64, ${home.prancis}`}
                alt="Tomat Cerry Prancis"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">{home.g5}</h5>
              <p className="text-center">{home.g5title}</p>
            </div>
            <div className="col-md-4">
              <img
                src={`data:image/jpeg;base64, ${home.kumato}`}
                alt="Tomat Kumato"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">{home.g6}</h5>
              <p className="text-center">{home.g6title}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">{home.faq}</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button onClick={() => openModal(faq.answer)}>
                  {faq.question}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" class="support-section py-5">
        <div class="container">
          <h3 class="text-center mb-4">{home.suptitle}</h3>
          <h4 class="text-center mb-4">{home.supsubtitle}</h4>
        </div>

        <div class="col-md-6">
          <h5>{home.info}</h5>
          <p>
            <strong>{home.sergio} </strong>{" "}
            <a href="https://github.com/sergiopoli77">{home.sergiogit}</a>
          </p>
          <p>
            <strong>{home.gloria} </strong>{" "}
            <a href="https://github.com/Gloriaamandagii">{home.gloriagit}</a>
          </p>
          <p>
            <strong>{home.josua} </strong>{" "}
            <a href="https://github.com/Joshuatandilobo-unklab">
              {home.josuagit}
            </a>
          </p>
          <p>
            <strong>{home.grivin} </strong>{" "}
            <a href="https://github.com/grivin1028">{home.grivingit}</a>
          </p>
          <p>
            <strong>{home.jonald} </strong>{" "}
            <a href="https://github.com/Jonald2004">{home.jonaldgit}</a>
          </p>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{home.jawaban}</h2>
            <p>{modalContent}</p>
          </div>
        </div>
      )}

      {scrollToTopVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          ↑
        </button>
      )}

      <style jsx>{`
        .hero-header {
          position: relative;
          height: 100vh;
          background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.3)
            ),
            url(./img/bg4.jpeg) no-repeat center center/cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: left;
          color: #ffffff;
          text-align: left important;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 20px;
        }
        .hero-header h1 {
          font-size: 3em;
          font-weight: bold;
          margin-bottom: 15px;
          color: #fofofo;
          text-shadow: 2px 2px 4px black;
        }
        .hero-header p {
          font-size: 1.2em;
          margin-bottom: 20px;
          color: #f0f0f0;
          padding: 5px;
        }
        .btn {
          background-color: #ff2222;
          color: #ffffff;
          padding: 12px 30px;
          font-size: 1em;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .btn:hover {
          background-color: #1a9728;
        }
        .about-section-title {
          font-size: 1.8em;
          font-weight: bold;
          color: #ff0000 !important;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-align: left;
          margin-bottom: 20px;
        }
        .about {
          padding: 50px 0;
          background-color: #f4f4f4;
        }
        .about h1 {
          font-size: 2.5em;
          color: #45a049;
        }
        .about p {
          font-size: 1.1em;
          line-height: 1.6;
          color: #666666;
          margin-top: 20px;
        }

        /* Galeri utama */
        .gallery {
          background-color: #f5f5f5; /* Latar belakang netral yang lembut */
          padding: 120px 0; /* Memberikan lebih banyak ruang vertikal */
          border-top: 2px solid #ff6347; /* Border atas lebih tegas dan mencolok dengan warna tomat */
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1); /* Bayangan halus untuk kedalaman */
          border-radius: 20px; /* Sudut yang lebih halus dan elegan */
          overflow: hidden; /* Menghindari konten keluar dari batas */
        }

        /* Heading utama galeri */
        .gallery h2 {
          font-size: 4em; /* Ukuran font yang sangat besar untuk kesan dominan */
          color: #b22222; /* Warna merah tua untuk menarik perhatian */
          text-align: center;
          margin-bottom: 60px; /* Jarak lebih besar antara heading dan galeri */
          font-weight: 700;
          letter-spacing: 4px; /* Spasi huruf lebih lebar untuk tampilan lebih mewah */
          text-transform: uppercase;
          position: relative;
          font-family: "Playfair Display", serif; /* Font serif elegan */
          transition: color 0.5s ease-in-out, letter-spacing 0.3s ease; /* Transisi halus pada warna dan spasi */
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Efek bayangan untuk teks */
        }

        /* Efek hover untuk judul */
        .gallery h2:hover {
          color: #ff6347; /* Warna merah cerah yang lebih mencolok saat hover */
          letter-spacing: 6px; /* Lebih renggang untuk efek dramatis */
          text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3); /* Bayangan lebih kuat saat hover */
        }

        /* Garis bawah pada judul */
        .gallery h2::before,
        .gallery h2::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 140px;
          height: 6px;
          background-color: #ff6347;
          transform: translateY(-50%);
          border-radius: 10px; /* Sudut lebih lembut */
        }

        .gallery h2::before {
          left: 60px;
        }

        .gallery h2::after {
          right: 60px;
        }

        /* Penataan baris dan elemen galeri */
        .gallery .row {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          justify-content: center;
        }

        /* Elemen gambar galeri */
        .gallery .col-md-4 {
          position: relative;
          width: 100%;
          max-width: 340px; /* Ukuran gambar lebih proporsional dan tidak terlalu besar */
          margin: 25px;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.12); /* Bayangan lembut */
          transition: transform 0.5s ease, box-shadow 0.4s ease,
            border 0.3s ease;
          cursor: pointer;
          border: 1px solid #ddd;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Efek hover untuk elemen galeri */
        .gallery .col-md-4:hover {
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2); /* Bayangan lebih besar dan dramatis */
          border-color: #ff6347; /* Menambahkan border berwarna tomat saat hover */
        }

        /* Efek gambar saat hover */
        .gallery .img-fluid {
          width: 100%;
          height: auto;
          border-radius: 20px;
          transition: transform 0.5s ease, filter 0.5s ease;
        }

        .gallery .col-md-4:hover .img-fluid {
          transform: scale(1.1); /* Memperbesar gambar secara halus */
          filter: brightness(1.1) contrast(1.2); /* Menambah kecerahan dan kontras untuk efek visual */
        }

        /* Overlay teks pada gambar */
        .gallery .text-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.85),
            rgba(0, 0, 0, 0.5)
          );
          color: white;
          text-align: center;
          padding: 35px;
          opacity: 0;
          transition: opacity 0.4s ease-in-out, transform 0.3s ease;
          transform: translateY(
            20px
          ); /* Menggeser sedikit ke bawah untuk efek */
          border-radius: 0 0 20px 20px;
        }

        /* Menampilkan overlay teks saat hover */
        .gallery .col-md-4:hover .text-overlay {
          opacity: 1;
          transform: translateY(0); /* Efek muncul halus */
        }

        /* Penataan teks di overlay */
        .gallery .text-overlay h5 {
          font-size: 1.8em;
          margin-bottom: 15px;
          color: #ffdf00;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-family: "Roboto", sans-serif;
        }

        .gallery .text-overlay p {
          font-size: 1.2em;
          line-height: 1.8;
          color: #fff;
          margin-bottom: 20px;
          font-weight: 400;
          font-family: "Lora", serif;
        }

        /* Penataan heading setiap gambar */
        .gallery h5 {
          font-size: 1.4em;
          font-weight: bold;
          margin-top: 20px;
          color: #b22222;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: "Roboto", sans-serif;
        }

        /* Penataan deskripsi gambar */
        .gallery p {
          font-size: 1.1em;
          line-height: 1.7;
          color: #555;
          text-align: center;
          margin-top: 10px;
          text-align: justify;
          font-family: "Lora", serif;
        }

        .faq-section {
          background-color: #f7f9fc;
          padding: 3rem 0;
          border-top: 2px solid #ff6347; /* Border atas lebih tegas dan mencolok dengan warna tomat */
          border-radius: 20px; /* Sudut yang lebih halus dan elegan */
        }
        .faq-list {
          max-width: 900px;
          margin: 0 auto;
          padding: 1rem;
        }
        .faq-item {
          margin-bottom: 1.5rem;
        }
        .faq-item button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          border: 2px solid #007bff;
          border-radius: 10px;
          padding: 1.2rem 2rem;
          width: 100%;
          font-size: 1.1rem;
          color: #333;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .faq-item button:hover {
          background: #f0f8ff;
          transform: translateY(-3px);
        }
        .faq-item button:focus {
          outline: none;
        }
        .faq-item button .question-text {
          font-weight: 500;
        }
        .faq-item button i {
          font-size: 1.3rem;
          color: #007bff;
          transition: transform 0.3s ease;
        }
        .faq-item button:hover i {
          transform: rotate(180deg);
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }
        .modal-content {
          background: #fff;
          padding: 2rem 3rem;
          border-radius: 12px;
          max-width: 600px;
          width: 100%;
        }
        .modal-content .close {
          font-size: 1.8rem;
          font-weight: bold;
          color: #333;
          cursor: pointer;
        }
        .modal-content .close:hover {
          color: #ff0000;
        }

        /* Section Support Styling */

        .support-section {
          margin-top: 40px;
        }

        /* Header Styling */
        .support-section h3 {
          font-family: "Arial", sans-serif;
          font-weight: 600;
          color: #333;
          text-align: center !important;
        }

        .support-section h4 {
          font-family: "Arial", sans-serif;
          font-weight: 600;
          color: #333;
          text-align: center !important;
        }

        /* Contact Information Styling */
        .support-section .col-md-6 {
          background-color: #ffffff;
          padding: 30px;
          margin-top: 30px;
          text-align: left !important;
          margin-left: 50px !important;
        }

        .support-section p {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 15px;
          text-align: left !important;
          margin-left: 50px !important;
        }

        .support-section p strong {
          color: #4caf50;
          font-weight: 600;
        }

        .support-section a {
          color: #007bff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .support-section a:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        .support-section .btn-link {
          font-weight: 500;
          color: #007bff;
        }

        .slideInLeft {
          opacity: 0;
          transform: translateX(-100%);
          animation: slideInLeft 2.5s forwards;
        }
        .slideInRight {
          opacity: 0;
          transform: translateX(100%);
          animation: slideInRight 2.5s forwards;
        }
        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .scroll-to-top {
          position: fixed;
          bottom: 50px;
          right: 20px;
          background-color: #45a049;
          color: white;
          border: none;
          border-radius: 50%;
          padding: 15px;
          font-size: 20px;
          cursor: pointer;
          z-index: 1000;
        }
        .scroll-to-top:hover {
          background-color: #ff2600;
        }
      `}</style>
    </main>
  );
};

export default Home;
