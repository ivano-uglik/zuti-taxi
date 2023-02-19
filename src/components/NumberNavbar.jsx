import React from "react";
import Phone from "../assets/images/Phone.png";
const NumberNavbar = () => {
  return (
    <div>
      <div className="flex justify-center bg-gray-900 py-2">
        <div className="flex justify-between ">
          <div>
            <img src={Phone} className="w-8 pr-2" />
          </div>
          <h1 className="text-yellow-300 font-bold pr-2">099 230 2000</h1>
          <div>
            <img src={Phone} className="w-8 pr-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberNavbar;
