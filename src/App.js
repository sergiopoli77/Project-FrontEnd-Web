import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header "./Components/Strukturs/Header";
import Footer "./Components/Strukturs/Footer";

const App = () => {
  return (
    <Router>
      <div className="body-wrap">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manfaat" element={<Manfaat />} />
            <Route path="/merawat" element={<Merawat />} />
            <Route path="/penyakit" element={<Penyakit />} />
            <Route path="/hama" element={<Hama />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
