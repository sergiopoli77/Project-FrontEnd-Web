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
        <button className="back-button">←</button>
        <h1>Hama</h1>
      </header>
      {Hama.map((pest) => (
        <div key={pest.id} className="pest-item">
          <div className="pest-info">
            <h2 className="pest-title">{pest.title}</h2>
            <p className="pest-description">{pest.description}</p>
          </div>
          <button className="details-button">ℹ️</button>
        </div>
      ))}
    </div>
  );
};

export default HamaComponent;
