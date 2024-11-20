import React, { useState } from "react";

const HamaComponent = () => {
  const [selectedHama, setSelectedHama] = useState(null);

  const hamaDetails = [
    {
      title: "Kutu Daun Thrips Tomat",
      image: "/img/kututhrips.jpeg",
      description:
        "Ciri-ciri kutu daun thrip adalah panjangnya 1 mm dan berwarna hitam. Kutu daun thrips ini menye...",
      extendedDescription:
        "Ciri-ciri kutu daun thrip adalah panjangnya 1 mm dan berwarna hitam. Kutu daun thrips ini menyebabkan kerusakan pada daun, bunga, dan buah. Untuk mengatasi hama ini, dapat digunakan insektisida berbahan aktif seperti abamektin atau imidakloprid.",
      treatment: [
        "Gunakan insektisida berbahan aktif seperti abamektin atau imidakloprid.",
        "Pasang perangkap kuning untuk menarik thrips.",
      ],
    },
    {
      title: "Ulat Buah Tomat",
      image: "/img/ulatbuah.jpeg",
      description:
        "Ulat buah tomat ini menyerang daun, bunga, dan buah tanaman tomat. Ciri ciri hama ulat",
      extendedDescription:
        "Ulat buah tomat ini menyerang daun, bunga, dan buah tanaman tomat. Ciri ciri hama ulat dapat menyebabkan kerusakan besar pada tanaman tomat. Semprotkan insektisida untuk mengatasinya.",
      treatment: [
        "Semprotkan insektisida untuk membasmi ulat.",
        "Gunakan perangkap feromon untuk mengontrol ulat.",
      ],
    },
    {
      title: "Kutu Daun Aphis Hijau",
      image: "/img/kutuaphis.jpeg",
      description:
        "Aphis hijau lebih sering disebut kutu daun hijau. Ciri ciri aphis hijau ada...",
      extendedDescription:
        "Aphis hijau sering ditemukan pada bagian bawah daun tomat dan dapat menyebabkan daun menggulung. Untuk mengatasi, gunakan insektisida sistemik atau pestisida alami.",
      treatment: [
        "Gunakan insektisida sistemik berbahan aktif seperti imidakloprid.",
        "Semprotkan pestisida alami seperti sabun insektisida atau minyak neem.",
      ],
    },
    {
      title: "Cacing Tanah",
      image: "/img/cacingtanah.jpeg",
      description:
        "Serangan hama ini pada tanaman tomat ditandai dengan terpotong tanaman pada pang..",
      extendedDescription:
        "Cacing tanah sering merusak akar tanaman tomat, menyebabkan tanaman layu dan mati. Pengendalian dapat dilakukan dengan rotasi tanaman atau menggunakan nematisida.",
      treatment: [
        "Lakukan rotasi tanaman untuk mengurangi keberadaan cacing tanah.",
        "Gunakan nematisida untuk membasmi cacing tanah.",
      ],
    },
    {
      title: "Lalat Buah",
      image: "/img/lalatbuah.jpeg",
      description:
        "Ukuran hama ini sekitar 8 mm dengan warna tubuh hitam kehijauan dan sayap transparan...",
      extendedDescription:
        "Lalat buah menginfeksi buah tomat yang masih muda dengan cara meletakkan telurnya di dalam buah. Semprotkan insektisida berbahan aktif malathion atau diazinon untuk mengendalikannya.",
      treatment: [
        "Semprotkan insektisida malathion atau diazinon.",
        "Gunakan perangkap lalat buah atau perangkap feromon.",
      ],
    },
    {
      title: "Kutu Kebul",
      image: "/img/kutukebul.jpeg",
      description:
        "Hama kutu daun bersayap putih ini merupakan salah hama paling berbahaya dalam budidaya tanam...",
      extendedDescription:
        "Kutu kebul menyebarkan virus tanaman dan dapat menyebabkan kerusakan pada daun, batang, dan bunga. Gunakan insektisida berbahan aktif seperti pirimicarb untuk pengendalian.",
      treatment: [
        "Gunakan insektisida pirimicarb atau insektisida berbahan alami.",
        "Pasang perangkap kuning untuk menarik kutu kebul.",
      ],
    },
  ];

  const handleSeeMore = (hama) => {
    setSelectedHama(hama);
    document.body.style.overflow = "hidden"; // Menyembunyikan scroll di body saat modal aktif
  };

  const handleCloseModal = () => {
    setSelectedHama(null);
    document.body.style.overflow = "auto"; // Mengembalikan scroll di body saat modal ditutup
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-header">
        <div className="hero-content">
          <h1>
            <br />
            Hama Pada Tumbuhan Tomat
          </h1>
          <p>
            Temukan informasi lengkap tentang hama yang sering menyerang tanaman
            tomat dan cara mengatasinya.
          </p>
        </div>
      </section>
      {/* Hero Section */}
      <section id="hero" className="section-hero">
        <h1>Daftar Hama Utama</h1>
        <p>
          Tanaman tomat sangat rentan terhadap serangan hama. Berikut ini adalah
          daftar beberapa hama yang sering menyerang tanaman tomat.
        </p>
      </section>

      {/* Container Hama Section */}
      <div className="container-hama">
        {hamaDetails.map((hama, index) => (
          <section key={index} className="hama-section">
            <img src={hama.image} alt={hama.title} className="hama-image" />
            <div className="hama-content">
              <h2 className="hama-title">{hama.title}</h2>
              <p className="hama-description">
                {hama.description.substring(0, 100)}...
              </p>
              <button
                className="more-info-button"
                onClick={() => handleSeeMore(hama)}
              >
                Lihat Selengkapnya
              </button>
            </div>
          </section>
        ))}

        {selectedHama && (
          <div className="modal">
            <div className="modal-content">
              <h2>{selectedHama.title}</h2>
              <div className="modal-body">
                <img
                  src={selectedHama.image}
                  alt={selectedHama.title}
                  className="modal-image"
                />
                <div className="modal-text">
                  <p>{selectedHama.extendedDescription}</p>
                  <h3>Cara Mengatasi:</h3>
                  <ul>
                    {selectedHama.treatment.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="back-button" onClick={handleCloseModal}>
                Kembali
              </button>
            </div>
          </div>
        )}
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

        .section-hero {
          text-align: center;
          padding: 60px 20px;
          background-color: #fff;
        }

        .section-hero h1 {
          font-size: 2.5rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
        }

        .section-hero p {
          font-size: 1.1rem;
          color: #666;
        }

        /* Container Hama Section */
        .container-hama {
          padding: 60px 20px;
          background-color: #f1f1f1;
        }

        .hama-section {
          display: flex;
          align-items: center;
          margin-bottom: 50px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: #fff;
        }

        .hama-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .hama-image {
          width: 100%;
          height: 320px;
          object-fit: cover;
          max-width: 450px;
          transition: transform 0.3s ease-in-out;
        }

        .hama-image:hover {
          transform: scale(1.05);
        }

        .hama-content {
          padding: 30px;
          max-width: 650px;
          text-align: left;
          position: relative;
        }

        .hama-title {
          font-size: 2.2rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
          text-transform: capitalize;
          position: relative;
        }

        .hama-title::before {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50px;
          height: 3px;
          background-color: #f2a900;
        }

        .hama-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
          font-weight: 400;
        }

        .more-info-button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #f2a900;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
        }

        .more-info-button:hover {
          background-color: #d18a00;
        }

        /* Modal Styles */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .modal-content {
          background-color: #fff;
          padding: 30px;
          border-radius: 10px;
          max-width: 800px;
          width: 100%;
          text-align: left;
        }

        .modal-body {
          display: flex;
        }

        .modal-image {
          width: 150px;
          height: 150px;
          object-fit: cover;
          margin-right: 20px;
        }

        .modal-text {
          max-width: 600px;
        }

        .close-button {
          font-size: 1.5rem;
          background: none;
          border: none;
          color: #333;
          cursor: pointer;
          position: absolute;
          top: 10px;
          right: 10px;
        }

        .back-button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #f2a900;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .back-button:hover {
          background-color: #d18a00;
        }
      `}</style>
    </main>
  );
};

export default HamaComponent;
