import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 taxiTEMP">
      <footer className="text-xs md:text-base flex w-full flex-row bg-gray-900 text-taxiYellow justify-center font-light py-2 md:py-4">
        <div className="flex justify-center flex-col md:flex-row text-center">
          <h1>&#169; 2023 - Žuti Taxi Vinkovci. Sva prava pridržana.&nbsp;</h1>
          <h1>
            Izrada web stranice - Ivano Uglik&nbsp;|&nbsp;
            <a
              href="https://github.com/ivano-uglik/zuti-taxi"
              className="underline"
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
