import React from "react";


const Manfaat = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <nav className="bg-gray-800 text-white py-2">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="hover:underline">
                MANFAAT TOMAT
              </a>
            </li>
          </ul>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {benefitData.map((benefit, index) => (
            <div className="bg-red-100 p-4 rounded shadow" key={index}>
              <h2 className="text-xl mt-2">{benefit.title}</h2>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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

export default Manfaat;
