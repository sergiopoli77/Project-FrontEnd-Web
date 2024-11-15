const Home = () => {
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

      <section className="about py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            
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
                Di sini, kami juga menyediakan panduan perawatan tomat yang
                praktis dan mudah. Baik Anda seorang pemula ataupun penghobi
                tanaman, panduan kami akan membantu Anda menumbuhkan tomat yang
                sehat dan subur di rumah.
              </p>
              <a className="btn-readmore py-3 px-5 mt-2" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
