import React from "react";

const Manfaat = () => {
  const benefitData = [
    {
      title: "Kaya Akan Nutrisi",
      description:
        "Tomat mengandung banyak vitamin dan mineral penting seperti vitamin C, vitamin K, kalium, dan folat.",
      image: "/img/gambar1.jpg",
    },
    {
      title: "Antioksidan Tinggi",
      description:
        "Tomat kaya akan antioksidan seperti likopen, yang dapat membantu melindungi sel-sel tubuh dari kerusakan akibat radikal bebas.",
      image: "/img/gambar2.jpg",
    },
    {
      title: "Menjaga Kesehatan Jantung",
      description:
        "Konsumsi tomat secara teratur dapat membantu menurunkan kadar kolesterol dan tekanan darah.",
      image: "/img/gambar3.jpg",
    },
    {
      title: "Meningkatkan Kesehatan Kulit",
      description:
        "Kandungan vitamin C dan antioksidan dalam tomat dapat membantu menjaga kulit tetap sehat, mencegah penuaan dini, dan melindungi kulit dari kerusakan akibat sinar matahari.",
      image: "/img/gambar4.jpg",
    },
    {
      title: "Meningkatkan Penglihatan",
      description:
        "Tomat kaya akan vitamin A, yang penting untuk menjaga kesehatan mata dan penglihatan yang baik.",
      image: "/img/gambar5.jpg",
    },
    {
      title: "Membantu Pencernaan",
      description:
        "Tomat tinggi serat, yang dapat membantu mempromosikan pencernaan yang sehat dan mencegah sembelit.",
      image: "/img/gambar6.jpg",
    },
  ];

  return (
    <div className="manfaat-container">
      <div className="header">
        <h1 className="subjudul">Manfaat Tomat</h1>
        <p className="tagline">
          Rasakan manfaat sehat dari tomat untuk tubuh Anda!
        </p>
      </div>
      <div className="list">
        {benefitData.map((benefit, index) => (
          <div className="card-horizontal" key={index}>
            <img
              src={benefit.image}
              alt={benefit.title}
              className="card-image"
            />
            <div className="card-content">
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .manfaat-container {
          background: linear-gradient(
              to bottom,
              rgba(255, 105, 135, 0.8),
              rgba(255, 247, 247, 0.9)
            ),
            url("/img/bgmanfaat1.jpg");
          background-size: cover;
          background-attachment: fixed;
          background-position: center;
          color: #ffffff;
          font-family: "Roboto", sans-serif;
          padding: 40px 10%;
          animation: fadeIn 1.5s ease-out;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
          animation: fadeIn 2s ease-out;
        }

        .subjudul {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: #ffffff;
          text-shadow: 4px 6px 10px rgba(0, 0, 0, 0.6);
        }

        .tagline {
          font-size: 1.8rem;
          color: #ffddcc;
          font-weight: 400;
          margin-bottom: 20px;
        }

        .list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          animation: slideUp 1.5s ease-in;
        }

        .card-horizontal {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            rotate 0.3s ease;
        }

        .card-horizontal:hover {
          transform: translateY(-10px) scale(1.05) rotate(-1deg);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        }

        .card-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.4s ease, filter 0.4s ease;
          filter: brightness(0.9);
        }

        .card-horizontal:hover .card-image {
          transform: scale(1.1);
          filter: brightness(1.1);
        }

        .card-content {
          padding: 20px;
          text-align: center;
        }

        .card-content h2 {
          font-size: 2rem;
          color: #ff6347;
          margin-bottom: 10px;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
        }

        .card-content p {
          color: #666666;
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .subjudul {
            font-size: 2.5rem;
          }

          .tagline {
            font-size: 1.2rem;
          }

          .card-content h2 {
            font-size: 1.5rem;
          }

          .card-content p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Manfaat;
