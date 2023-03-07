import React from "react";
import PlavaVinkovacka from "../assets/images/PlavaVinkovacka.png";
import OptikaMarko from "../assets/images/OptikaMarko.jpg";

const Footer = () => {
  return (
    <div className="overflow-hidden">
      <footer className="text-xs md:text-base flex w-full flex-col bg-gray-900 text-taxiYellow justify-around font-light py-2 md:py-4 lg:px-36">
        <div className="flex flex-row gap-4 md:gap-8 justify-center py-4">
          <div className="flex flex-row gap-4 md:gap-8">
            <img
              src={PlavaVinkovacka}
              alt="Plava Vinkovačka"
              className="w-16 h-16 md:w-32 md:h-32"
            />
            <img
              src={OptikaMarko}
              alt="Optika Marko"
              className="w-16 h-16 md:w-32 md:h-32"
            />
            <img
              src={PlavaVinkovacka}
              alt="Plava Vinkovačka"
              className="w-16 h-16 md:w-32 md:h-32"
            />
          </div>
          <div className="flex flex-row gap-4 md:gap-8">
            <img
              src={PlavaVinkovacka}
              alt="Plava Vinkovačka"
              className="w-16 h-16 md:w-32 md:h-32"
            />
            <img
              src={OptikaMarko}
              alt="Plava Vinkovačka"
              className="w-16 h-16 md:w-32 md:h-32"
            />
            <img
              src={PlavaVinkovacka}
              alt="Plava Vinkovačka"
              className="w-16 h-16 md:w-32 md:h-32"
            />
          </div>
        </div>
        <div className="flex justify-center flex-col text-center items-center py-4 text-base">
          <h1>&#169; 2023 - Žuti Taxi Vinkovci. Sva prava pridržana.</h1>
          <h1>
            Izrada web stranice - Ivano Uglik&nbsp;|&nbsp;
            <a
              href="https://github.com/ivano-uglik/zuti-taxi"
              className="underline"
              target="_blank"
            >
              GitHub
            </a>
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
