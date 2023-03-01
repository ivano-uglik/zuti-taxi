import React from "react";
import Navbar from "./components/Navbar";
import NumberNavbar from "./components/NumberNavbar";
import Naslovna from "./pages/Naslovna";
import Kontakt from "./pages/Kontakt";
import Usluge from "./pages/Usluge";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import ImgTemp from "./components/ImgTemp";

const App = () => {
  return (
    <div>
      <NumberNavbar />
      <Navbar />
      <ImgTemp />
      <Naslovna />
      <Usluge />
      <Kontakt />
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default App;
