import React from "react";
import HRV from "../assets/images/HRV.png";
import ENG from "../assets/images/ENG.png";
const Dropdown = () => {
  return (
    <div className="absolute top-8">
      <div className="bg-black rounded-lg w-[4.7rem] text-taxiYellow py-1 text-end">
        <div className="flex flex-row justify-between items-center py-2 px-1 hover:bg-taxiYellow hover:text-black">
          <img src={HRV} className="w-7 h-7" />
          <a href="#">HR</a>
        </div>
        <div className="flex flex-row justify-between items-center py-2 px-1 hover:bg-taxiYellow hover:text-black">
          <img src={ENG} className="w-7 h-6" />
          <a href="#">EN</a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
