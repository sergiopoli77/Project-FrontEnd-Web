import React from "react";

const Manfaat = () => {
  const benefitData = [
    {
      title: "Kaya Akan Nutrisi",
      description:
        "Tomat mengandung banyak vitamin dan mineral penting seperti vitamin C, vitamin K, kalium, dan folat. Nutrisi ini penting untuk menjaga kesehatan tubuh secara keseluruhan.",
    },
    {
      title: "Antioksidan Tinggi",
      description:
        "Tomat kaya akan antioksidan seperti likopen, yang dapat membantu melindungi sel-sel tubuh dari kerusakan akibat radikal bebas dan mengurangi risiko penyakit kronis.",
    },
    {
      title: "Menjaga Kesehatan Jantung",
      description:
        "Konsumsi tomat secara teratur dapat membantu menurunkan kadar kolesterol dan tekanan darah, yang berkontribusi pada kesehatan jantung yang lebih baik.",
    },
    {
      title: "Meningkatkan Kesehatan Kulit",
      description:
        "Kandungan vitamin C dan antioksidan dalam tomat dapat membantu menjaga kulit tetap sehat, mencegah penuaan dini, dan melindungi kulit dari kerusakan akibat sinar matahari.",
    },
    {
      title: "Meningkatkan Penglihatan",
      description:
        "Tomat kaya akan vitamin A, yang penting untuk menjaga kesehatan mata dan penglihatan yang baik.",
    },
    {
      title: "Membantu Pencernaan",
      description:
        "Tomat tinggi serat, yang dapat membantu mempromosikan pencernaan yang sehat dan mencegah sembelit.",
    },
  ];

  return (
    <div className="manfaat-container">
      <h1 className="subjudul">Manfaat Tomat</h1>
      <div className="grid">
        {benefitData.map((benefit, index) => (
          <div className="card" key={index}>
            <h2>{benefit.title}</h2>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .manfaat-container {
          background-color: #f7fafc;
          font-family: "Roboto", sans-serif;
          padding: 20px;
        }

        .subjudul {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
          text-align: left;
          margin-bottom: 20px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .card {
          background-color: #fff5f5;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .card h2 {
          font-size: 1.5rem;
          color: #b22222;
          margin-bottom: 10px;
        }

        .card p {
          color: #4a5568;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default Manfaat;
