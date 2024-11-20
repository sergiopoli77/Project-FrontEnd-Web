import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties, useRef } from "react";

const Merawat = () => {
  const [merawat, setMerawat] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const merawatRef = ref(db, "merawat");
    onValue(merawatRef, (snapshot) => {
      const data = snapshot.val();
      setMerawat(data);
    });
  }, []);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  useEffect(() => {
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

  const benefitData = [
    {
      title: merawat.datatitle1,
      description: merawat.datades1,
      image: `data:image/jpeg;base64, ${merawat.tanah}`,
    },
    {
      title: merawat.datatitle2,
      description: merawat.datades2,
      image: `data:image/jpeg;base64, ${merawat.persiapan}`,
    },
    {
      title: merawat.datatitle3,
      description: merawat.datades3,
      image: `data:image/jpeg;base64, ${merawat.biji}`,
    },
    {
      title: merawat.datatitle4,
      description: merawat.datades4,
      image: `data:image/jpeg;base64, ${merawat.siram}`,
    },
    {
      title: merawat.datatitle5,
      description: merawat.datades5,
      image: `data:image/jpeg;base64, ${merawat.pemupukan}`,
    },
    {
      title: merawat.datatitle6,
      description: merawat.datades6,
      image: `data:image/jpeg;base64, ${merawat.penyangga}`,
    },
    {
      title: merawat.datatitle7,
      description: merawat.datades7,
      image: `data:image/jpeg;base64, ${merawat.obat}`,
    },
    {
      title: merawat.datatitle8,
      description: merawat.datades8,
      image: `data:image/jpeg;base64, ${merawat.panen}`,
    },
  ];

  return (
    <main>
      <section className="hero-header">
        <div className="hero-content">
          <h1>{merawat.title}</h1>
          <p>{merawat.subtitle}</p>
        </div>
      </section>

      <section className="benefits-section py-5" id="benefits">
        <div className="container">
          <h2 className="text-center mb-5">{merawat.subtitle2}</h2>
          <div className="row g-4">
            {benefitData.map((benefit, index) => (
              <div className="col-md-6" key={index}>
                <div className="card-horizontal">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="card-image img-fluid rounded"
                    loading="lazy"
                  />
                  <div className="card-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tips-section py-5" id="tips">
        <div className="container">
          <h2 className="text-center mb-5">{merawat.tipstitle}</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{merawat.tips1}</h3>
                  <p className="card-text">{merawat.tips1title}</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{merawat.tips2}</h3>
                  <p className="card-text">{merawat.tips2title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {scrollToTopVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          ↑
        </button>
      )}

      <style jsx>{`
        .hero-header {
          position: relative;
          height: 100vh;
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
            url(./img/bg5.jpeg) no-repeat center center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        .hero-content {
          max-width: 800px;
        }
        .hero-header h1 {
          font-size: 3em;
          font-weight: bold;
          color: white;
        }
        .hero-header p {
          font-size: 1.2em;
          margin-top: 20px;
        }
        .benefits-section {
          background-color: #f4f4f4;
        }
        .benefits-section h2 {
          font-size: 2.5em;
          font-weight: bold;
          color: #b22222;
        }
        .card-horizontal {
          display: flex;
          gap: 15px;
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-horizontal:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .card-image {
          width: 150px;
          height: auto;
          border-radius: 10px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .card-image:hover {
          transform: scale(1.1);
          opacity: 0.8;
        }
        .card-content h3 {
          font-size: 1.2em;
          margin-bottom: 10px;
          color: #333;
        }
        .card-content p {
          font-size: 1em;
          color: #555;
        }
        .tips-section {
          background-color: #f8f8f8;
        }
        .tips-section h2 {
          font-size: 2.5em;
          font-weight: bold;
          color: #b22222;
        }
        .card {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .card-title {
          font-size: 1.5em;
          color: #b22222;
        }
        .card-text {
          font-size: 1em;
          color: #555;
        }
        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #ff4500;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .scroll-to-top:hover {
          background-color: #45a049;
          transform: scale(1.1);
        }
      `}</style>
    </main>
  );
};

export default Merawat;
