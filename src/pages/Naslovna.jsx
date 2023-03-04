import React from "react";
import leftArrow from "../assets/images/LeftArrow.png";
import rightArrow from "../assets/images/RightArrow.png";

const Naslovna = () => {
  return (
    <div className="overflow-hidden taxiTEMP">
      <div className="flex flex-col w-screen h-[82vh] justify-around py-36 md:py-auto md:justify-center md:gap-24">
        <div className="flex items-center justify-center">
          <div className="flex">
            <h1 className="md:p-8 glassmorphismBlack text-taxiYellow mx-8 md:mx-auto md:px-auto  text-2xl md:text-4xl font-semibold rounded-full text-center">
              Najbolja Taxi Služba u Vinkovcima i okolici!
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-center md:justify-between px-4 items-center">
          <img src={leftArrow} className="h-4 md:h-16 hidden md:block" />
          <a href="tel:+385992302000">
            <h1 className="text-3xl md:text-7xl font-extrabold glassmorphismBlack p-4 md:p-12 rounded-full text-taxiYellow">
              099 230 2000
            </h1>
          </a>
          <img src={rightArrow} className="h-4 md:h-16 hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Naslovna;
