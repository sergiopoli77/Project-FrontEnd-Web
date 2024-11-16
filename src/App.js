import React from "react";
import Header from "./components/Strukturs/Header";
import Footer from "./components/Strukturs/Footer";
import Home from "./components/pages/Home";


const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main>
          <Home /> 
      <Footer />
      </main>
    </div>
  );
};

export default App;
