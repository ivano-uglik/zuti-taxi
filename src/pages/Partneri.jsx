import React from "react";
import PlavaVinkovacka from "../assets/images/PlavaVinkovacka.png";

const Partneri = () => {
  return (
    <div className="overflow-hidden" id="partneri">
      <div className="md:w-screen md:h-screen bg-taxiBlack">
        <div className="flex flex-col basis-1/3 h-full justify-around">
          <h1 className="flex justify-center pt-8 font-bold text-3xl md:text-4xl text-taxiYellow h-1/3">
            Partneri
          </h1>
          <div className="flex flex-col justify-center md:flex-row gap-8 text-taxiYellow text-3xl ">
            <div className="glassmorphismBlack p-8">
              <img src={PlavaVinkovacka} alt="Plava Vinkovačka" />
            </div>
            <div className="glassmorphismBlack p-8">
              <img src={PlavaVinkovacka} alt="Plava Vinkovačka" />
            </div>
            <div className="glassmorphismBlack p-8">
              <img src={PlavaVinkovacka} alt="Plava Vinkovačka" />
            </div>
            <div className="glassmorphismBlack p-8">
              <img src={PlavaVinkovacka} alt="Plava Vinkovačka" />
            </div>
            <div className="glassmorphismBlack p-8">
              <img src={PlavaVinkovacka} alt="Plava Vinkovačka" />
            </div>
          </div>
          <div className="h-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Partneri;
