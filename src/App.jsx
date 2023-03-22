import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import NumberNavbar from "./components/NumberNavbar";
// import Naslovna from "./pages/Naslovna";
// import Footer from "./components/Footer";
// import ImgTemp from "./components/ImgTemp";
// import CjenikKontakt from "./pages/CjenikKontakt";
import Home from "./Home";
import HomeEn from "./HomeEn";
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
