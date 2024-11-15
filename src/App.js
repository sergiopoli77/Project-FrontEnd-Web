import React from "react";
import Header from "./components/Strukturs/Header";
import Footer from "./components/Strukturs/Footer";
import Manfaat from "./components/pages/Manfaat";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />

      <main>
        <Manfaat />
      </main>

      <Footer />
    </div>
  );
};

export default App;
