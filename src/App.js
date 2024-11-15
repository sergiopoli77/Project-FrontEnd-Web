import React from "react";
import SignUp from "./components/pages/SignUp";
import HamaComponent from "./components/pages/Hama";
import Header from "./components/Strukturs/Header";
import Footer from "./components/Strukturs/Footer";
import Manfaat from "./components/pages/Manfaat";
import Merawat from "./Components/pages/Merawat";


const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main>
          <SignUp />
          <Manfaat />
          <Merawat />
          <HamaComponent /> 
    
      </main>
      <Footer />
    </div>
  );
};

export default App;
