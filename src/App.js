import React from "react";
import Header from "./Strukturs/Header";
import Footer from "./Strukturs/Footer";
import Merawat from "./Components/pages/Merawat";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />

      <main className="site-content">
        <Merawat />
      </main>

      <Footer />
    </div>
  );
};

export default App;
