import React, { useState } from "react";
import Home from "./Home";
import HomeUK from "./HomeUK";
import CjenikEN from "./CjenikEN";
import { Routes, Route } from "react-router-dom";
import Cjenik from "./Cjenik";
import HomeDE from "./HomeDE";
import CjenikDE from "./CjenikDE";
import HomeTR from "./HomeTR";
import CjenikTR from "./CjenikTR";
import HomeFR from "./HomeFR";
import CjenikFR from "./CjenikFR";
import { app, analytics } from "../firebaseConfig";

const App = () => {
  app;
  analytics;
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/en" element={<HomeUK />} />
        <Route path="/hr" element={<Home />} />
        <Route path="/en/pricelist" element={<CjenikEN />} />
        <Route path="/hr/cjenik" element={<Cjenik />} />
        <Route path="/de" element={<HomeDE />} />
        <Route path="/de/preisliste" element={<CjenikDE />} />
        <Route path="/tr" element={<HomeTR />} />
        <Route path="/tr/fiyatlandirma" element={<CjenikTR />} />
        <Route path="/fr" element={<HomeFR />} />
        <Route path="/fr/tarifs" element={<CjenikFR />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
