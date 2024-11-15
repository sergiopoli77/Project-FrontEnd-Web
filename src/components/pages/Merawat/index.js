import React from "react";
import "./styles.css";

const Merawat = () => {
  return (
    <div className="container">
      {" "}
      {/* Perbaikan: classname menjadi className */}
      <h1>Cara Merawat Tanaman Tomat</h1>
      <div className="content">
        <h2>1. Pemilihan Lokasi</h2>
        <p>
          Tanaman tomat membutuhkan sinar matahari penuh, minimal 6-8 jam per
          hari. Pastikan tanah memiliki drainase yang baik dan kaya akan bahan
          organik.
        </p>

        <h2>2. Persiapan Tanah</h2>
        <p>
          Gemburkan tanah dan campurkan pupuk kompos untuk meningkatkan
          kesuburan tanah.
        </p>

        <h2>3. Penanaman</h2>
        <p>
          Pilih bibit tomat yang sehat dan tanam pada kedalaman yang sesuai.
        </p>

        <h2>4. Penyiraman</h2>
        <p>Siram tanaman secara teratur, terutama pada musim panas.</p>

        <h2>5. Pemupukan</h2>
        <p>
          Berikan pupuk dasar saat penanaman dan pupuk tambahan saat berbunga.
        </p>

        <h2>6. Penyangga Tanaman</h2>
        <p>Gunakan tiang atau ajir untuk menopang tanaman agar tidak roboh.</p>

        <h2>7. Pengendalian Hama dan Penyakit</h2>
        <p>
          Periksa tanaman secara rutin dan gunakan insektisida alami untuk
          mengatasi hama.
        </p>

        <h2>8. Panen</h2>
        <p>Panen saat tomat berwarna cerah dan terasa kenyal.</p>

        <h2>9. Pasca Panen</h2>
        <p>Simpan tomat di tempat yang sejuk dan kering.</p>
      </div>
    </div>
  );
};

export default Merawat;
