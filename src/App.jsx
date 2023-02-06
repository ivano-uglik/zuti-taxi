import React from "react";
import Navbar from "./components/Navbar";
import Naslovna from "./assets/pages/Naslovna";
import NumberNavbar from "./components/NumberNavbar";
import Kontakt from "./assets/pages/Kontakt";
import Usluge from "./assets/pages/Usluge";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NumberNavbar />
      <Navbar />
      {/* <Naslovna /> */}
      <Usluge />
      <Kontakt />
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default App;
