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
        <div className="hero-overlay"></div>
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
                About Us
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
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
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
