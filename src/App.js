import Header from "./components/Strukturs/Header";
import Footer from "./components/Strukturs/Footer";
import Manfaat from "./components/pages/Manfaat";
import Merawat from "./Components/pages/Merawat";


const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main>
          <Manfaat />
          <Merawat />
      </main>

      <Footer />
    </div>
  );
};

export default App;
