import React from "react";
import PlavaVinkovacka from "../assets/images/PlavaVinkovacka.png";
import OptikaMarko from "../assets/images/OptikaMarko.jpg";

const Footer = () => {
  return (
    <div className="">
      <footer className="text-xs md:text-base flex w-full flex-row bg-gray-900 text-taxiYellow justify-around font-light py-2 md:py-4 px-36">
        <div className="flex flex-row gap-8">
          <img
            src={PlavaVinkovacka}
            alt="Plava Vinkovačka"
            className="w-16 h-16"
          />
          <img src={OptikaMarko} alt="Optika Marko" className="w-16 h-16" />
          <img
            src={PlavaVinkovacka}
            alt="Plava Vinkovačka"
            className="w-16 h-16"
          />
        </div>
        <div className="flex justify-center flex-col md:flex-row text-center items-center">
          <h1>&#169; 2023 - Žuti Taxi Vinkovci. Sva prava pridržana.&nbsp;</h1>
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
        <div className="flex flex-row gap-8">
          <img
            src={PlavaVinkovacka}
            alt="Plava Vinkovačka"
            className="w-16 h-16"
          />
          <img src={OptikaMarko} alt="Plava Vinkovačka" className="w-16 h-16" />
          <img
            src={PlavaVinkovacka}
            alt="Plava Vinkovačka"
            className="w-16 h-16"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
