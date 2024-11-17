import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const [inView, setInView] = useState(false);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const aboutSectionRef = useRef(null);

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

    // Scroll to top visibility
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

  // Handle smooth scroll
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <section className="hero-header">
        <div className="hero-content">
          <h1>
            Panduan Lengkap
            <br />
            Manfaat dan Perawatan Tomat
          </h1>
          <p>
            Mulai dari kandungan antioksidan hingga vitamin, tomat memiliki
            segudang manfaat. Ketahui juga cara merawatnya agar tanaman tomat
            Anda tumbuh subur.
          </p>
          <a href="#about" className="btn btn-primary">
            Pelajari Lebih Lanjut
          </a>
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
                    src="img/tomat1.jpg"
                    alt="Tomat 1"
                    loading="lazy"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className={`img-fluid rounded w-75 ${
                      inView ? "slideInLeft" : ""
                    }`}
                    src="img/tomat2.jpg"
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
                    src="img/tomat3.jpeg"
                    alt="Tomat 3"
                    loading="lazy"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className={`img-fluid rounded w-100 ${
                      inView ? "slideInRight" : ""
                    }`}
                    src="img/tomat4.jpg"
                    alt="Tomat 4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="about-section-title ff-secondary text-start text-primary fw-normal">
                Tentang Kami
              </h5>
              <h1 className="mb-4">Welcome to Tomatik</h1>
              <p className="mb-4">
                Tomatik hadir untuk memberikan Anda informasi lengkap tentang
                manfaat kesehatan dari tomat. Dari meningkatkan daya tahan tubuh
                hingga mendukung kesehatan kulit, tomat adalah buah yang kaya
                akan manfaat yang baik untuk kesehatan Anda.
              </p>
              <p className="mb-4">
                Menyediakan panduan perawatan tomat yang praktis dan mudah. Baik
                Anda seorang pemula ataupun penghobi tanaman, panduan kami akan
                membantu Anda menumbuhkan tomat yang sehat dan subur di rumah.
              </p>
              <button
                className="btn-readmore py-3 px-5 mt-2"
                onClick={openModal} // Perbaikan di sini
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery py-5" id="gallery">
        <div className="container">
          <h2 className="text-center mb-4">Galeri Tomat Dunia</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <img
                src="img/tomat5.jpg"
                alt="Tomat 5"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">Tomat Roma (Italia)</h5>
              <p className="text-center">
                Tomat Roma, terkenal di Italia, sering digunakan untuk membuat
                saus dan pasta.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="img/tomat6.jpg"
                alt="Tomat 6"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">
                Tomat Beefsteak (Amerika Serikat)
              </h5>
              <p className="text-center">
                Tomat Beefsteak, asal Amerika Serikat, dikenal dengan ukurannya
                yang besar dan dagingnya yang padat.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="img/tomat7.jpg"
                alt="Tomat 7"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">Tomat Ceri (Jepang)</h5>
              <p className="text-center">
                Tomat ceri, populer di Jepang, memiliki rasa manis dan sering
                digunakan dalam salad atau sebagai camilan.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="img/tomat8.jpg"
                alt="Tomat 8"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">Tomat San Marzano (Italia)</h5>
              <p className="text-center">
                Tomat San Marzano, berasal dari Italia, terkenal dengan rasa
                manis dan rendah keasamannya, cocok untuk saus tomat.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="img/tomat9.jpg"
                alt="Tomat 9"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">Tomat Cherry (Prancis)</h5>
              <p className="text-center">
                Tomat cherry, yang banyak ditemukan di Prancis, sangat manis dan
                sering digunakan dalam salad segar.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="img/tomat10.jpg"
                alt="Tomat 10"
                className="img-fluid rounded"
                loading="lazy"
              />
              <h5 className="text-center mt-2">Tomat Kumato (Spanyol)</h5>
              <p className="text-center">
                Tomat Kumato, khas dari Spanyol, memiliki warna coklat gelap
                dengan rasa yang lebih manis dan kaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>More Info About Tomatoes</h2>
            <p>Here is some detailed information...</p>
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
              rgba(174, 185, 212, 0),
              rgba(195, 65, 65, 0.443)
            ),
            url(./img/bg1.jpg) no-repeat center center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-align: center;
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
          color: #b22222;
          text-shadow: 2px 2px 4px black;
        }
        .hero-header p {
          font-size: 1.2em;
          margin-bottom: 20px;
          color: #000000;
          padding: 5px;
          text-shadow: 1px 1px 1px white;
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
        .btn-readmore {
          background-color: #ff2600;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          text-align: center;
          transition: background-color 0.3s ease;
        }
        .btn-readmore:hover {
          background-color: #45a049;
          color: white;
        }

        .gallery {
          background-color: #f9f9f9;
          padding: 40px 0;
        }

        .gallery h2 {
          font-size: 2.5em;
          color: #45a049;
          text-align: center;
          margin-bottom: 40px;
          font-weight: bold;
        }

        .gallery .row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .gallery .col-md-4 {
          width: 100%;
          max-width: 350px;
          margin: 0 auto;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery .img-fluid {
          width: 100%;
          height: auto;
          border-radius: 10px;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .gallery .col-md-4:hover .img-fluid {
          transform: scale(1.1);
          filter: brightness(1.1);
        }

        .gallery .col-md-4:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .gallery .col-md-4 {
            width: 100%;
            max-width: 100%;
          }
        }

        @media (min-width: 769px) {
          .gallery .col-md-4 {
            width: 32%;
          }
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
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          width: 60%;
          max-width: 600px;
          text-align: center;
        }
        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 2rem;
          color: #000;
          cursor: pointer;
        }
      `}</style>
    </main>
  );
};

export default Home;
