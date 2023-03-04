import React from "react";
import Navbar from "./components/Navbar";
import NumberNavbar from "./components/NumberNavbar";
import Naslovna from "./pages/Naslovna";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import ImgTemp from "./components/ImgTemp";
import Partneri from "./pages/Partneri";
import CjenikKontakt from "./pages/CjenikKontakt";

const App = () => {
  return (
    <div>
      <NumberNavbar />
      <Navbar />
      <ImgTemp />
      <Naslovna />
      <CjenikKontakt />
      <Partneri />
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default App;
