import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Strukturs/Header";
import Footer from "./Components/Strukturs/Footer";
import Manfaat from "./Components/pages/Manfaat";
import Merawat from "./Components/pages/Merawat";
import Penyakit from "./Components/pages/Penyakit";
import Hama from "./Components/pages/Hama";
import Home from "./Components/pages/Home";

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
