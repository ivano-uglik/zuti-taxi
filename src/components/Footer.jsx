import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="text-xs md:text-base flex w-full flex-row bg-gray-900 text-taxiYellow justify-center font-light py-2 md:py-4">
        <div className="flex justify-center flex-col md:flex-row text-center">
          <h1>&#169; 2023 - Žuti Taxi Vinkovci. Sva prava pridržana.</h1>
          <h1>
            Izrada web stranice - Ivano Uglik&nbsp;|
            <a href="https://www.github.com/" className="underline">
              &nbsp;GitHub
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
