import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import NumberNavbar from "./components/NumberNavbar";
// import Naslovna from "./pages/Naslovna";
// import Footer from "./components/Footer";
// import ImgTemp from "./components/ImgTemp";
// import CjenikKontakt from "./pages/CjenikKontakt";
import Home from "./Home";
import Logo from "./assets/images/Logo.png";
import HRV from "./assets/images/HRV.png";
import ENG from "./assets/images/ENG.png";
import { Link as Link1 } from "react-scroll";
import { Link } from "react-router-dom";
import Phone from "./assets/images/Phone.png";
import ImgTemp from "./components/ImgTemp";
import PlavaVinkovacka from "./assets/images/PlavaVinkovacka.png";
import OptikaMarko from "./assets/images/OptikaMarko.jpg";
import Pattern from "./assets/images/blackAndYellow.png";
import Facebook from "./assets/images/Facebook.png";
import PhoneInvert from "./assets/images/PhoneInvert.png";
import WhatsappInvert from "./assets/images/WhatsappInvert.png";
import ViberButton from "./assets/images/ViberButton.png";
import FacebookInvert from "./assets/images/FacebookInvert.png";
import leftArrow from "./assets/images/LeftArrow.png";
import rightArrow from "./assets/images/RightArrow.png";
import taxi from "./assets/images/taxi.svg";
import HomeEn from "./HomeEn";
import DemoCarousel from "./DemoCarousel";
import Phone1 from "./assets/images/Phone.svg";
import WhatsApp1 from "./assets/images/WhatsApp.svg";
import Facebook1 from "./assets/images/Facebook.svg";

import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/en" element={<HomeEn />} />
        <Route path="/hr" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {/* <NumberNavbar />
      <Navbar />
      <ImgTemp />
      <Naslovna />
      <CjenikKontakt />
      <Footer /> */}
    </div>
  );
};

export default App;
