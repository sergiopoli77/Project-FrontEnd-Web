import React from "react";
import SignUp from "./components/pages/SignUp";
import HamaComponent from "./components/pages/Hama";
import Manfaat from "./components/pages/Manfaat";
import Merawat from "./Components/pages/Merawat";
import Header from "./components/Strukturs/Header";
import Footer from "./components/Strukturs/Footer";
import Home from "./components/pages/Home";


const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main>
          <Home />
          <SignUp />
          <Manfaat />
          <Merawat />
          <HamaComponent /> 
      <Footer />
    </div>
  );
};

export default App;
