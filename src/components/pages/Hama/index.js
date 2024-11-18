import React from "react";

const Hama = [
  {
    id: 1,
    title: "Kutu Daun Thrips Tomat",
    description:
      "Ciri-ciri kutu daun thrips adalah panjangnya 1 mm dan berwarna hitam. Kutu daun thrips ini menyerang...",
  },
  {
    id: 2,
    title: "Ulat Buah Tomat",
    description:
      "Umumnya ulat buah tomat ini menyerang daun, bunga dan buah tanaman tomat. Ciri-ciri hama ulat...",
  },
  {
    id: 3,
    title: "Kutu Daun Aphis Hijau Pada Tomat",
    description:
      "Aphis hijau lebih sering di sebut kutu daun hijau. Ciri-ciri aphis hijau adalah...",
  },
  {
    id: 4,
    title: "Cacing Tanah",
    description:
      "Serangan hama ini pada tanaman tomat di tandai dengan terpotongnya tanaman pada pangkal...",
  },
  {
    id: 5,
    title: "Lalat Buah",
    description:
      "Ukuran hama ini sekitar 8 mm dengan warna tubuh hitam kehijauan dan sayap transparan...",
  },
  {
    id: 6,
    title: "Kutu Kebul",
    description:
      "Hama kutu daun bersayap putih ini menjadi salah satu hama paling berbahaya dalam budidaya tanaman...",
  },
];

const HamaComponent = () => {
  return (
    <div className="pest-list">
      <header className="header">
        <h1>Hama pada Tanaman Tomat</h1>
      </header>

      <section className="introduction">
        <p className="intro-text">
          Hama adalah organisme yang dapat merusak tanaman tomat dan mengganggu
          pertumbuhannya. Mereka dapat menyerang bagian-bagian penting tanaman,
          seperti daun, bunga, dan buah. Mengidentifikasi dan menangani hama
          dengan tepat adalah langkah penting untuk menjaga kesehatan tanaman
          tomat.
        </p>
      </section>

      {Hama.map((pest) => (
        <div key={pest.id} className="pest-item">
          <div className="pest-info">
            <h2 className="pest-title">{pest.title}</h2>
            <p className="pest-description">{pest.description}</p>
          </div>
          <button className="details-button">ℹ️</button>
        </div>
      ))}

      <style jsx>{`
        /* Global Styles */
        body,
        html {
          margin: 0;
          padding: 0;
          font-family: "Montserrat", sans-serif;
          background-color: #f1f1f1;
          color: #333;
          height: 100%;
        }

        /* Header Styling */
        .header {
          background: linear-gradient(145deg, #4caf50, #2e7d32);
          color: white;
          padding: 60px 20px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .header h1 {
          font-size: 40px;
          font-weight: 700;
          margin: 0;
          letter-spacing: 2px;
        }

        /* Introduction Styling */
        .introduction {
          padding: 40px 20px;
          background-color: #ffffff;
          text-align: center;
          margin: 20px 0;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }

        .intro-text {
          font-size: 20px;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.8;
          color: #555;
        }

        /* Pest List Container */
        .pest-list {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Pest Item Styling */
        .pest-item {
          display: flex;
          background-color: #ffffff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
          align-items: flex-start;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          cursor: pointer;
        }

        .pest-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .pest-info {
          flex: 1;
          margin-right: 20px;
        }

        .pest-title {
          font-size: 28px;
          color: #4caf50;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .pest-description {
          font-size: 16px;
          color: #666;
          line-height: 1.7;
        }

        /* Details Button Styling */
        .details-button {
          font-size: 22px;
          background-color: #ffcc00;
          color: #333;
          border: none;
          border-radius: 50%;
          width: 55px;
          height: 55px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .details-button:hover {
          background-color: #f7b800;
          transform: scale(1.1);
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .pest-item {
            flex-direction: column;
            text-align: center;
          }

          .details-button {
            margin-top: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default HamaComponent;
