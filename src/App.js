import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Strukturs/Header";
import Footer from "./components/Strukturs/Footer";
import Home from "./components/pages/Home";
import Manfaat from "./components/pages/Manfaat";
import Merawat from "./components/pages/Merawat";
import Hama from "./components/pages/Hama";
import Penyakit from "./components/pages/Penyakit";

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
            <Route path="/Hama" element={<Hama />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
