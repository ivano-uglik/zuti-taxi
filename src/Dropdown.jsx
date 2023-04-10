import React from "react";
import hr from "./assets/images/hr.svg";
import uk from "./assets/images/uk.svg";
import de from "./assets/images/de.svg";
import tr from "./assets/images/tr.svg";
import fr from "./assets/images/fr.svg";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="hidden absolute top-8 cursor-pointer" id="dropdown">
      <div className="bg-black rounded-lg w-[4.7rem] text-taxiYellow py-1 text-end">
        <Link to="/hr">
          <div className="flex flex-row justify-between items-center py-2 px-1 hover:bg-taxiYellow hover:text-black">
            <img src={hr} className="w-7 h-7" />
            <span>HR</span>
          </div>
        </Link>
        <Link to="/en">
          <div className="flex flex-row justify-between items-center py-2 px-1 hover:bg-taxiYellow hover:text-black">
            <img src={uk} className="w-7 h-7" />
            <span>EN</span>
          </div>
        </Link>
        <Link to="/de">
          <div className="flex flex-row justify-between items-center py-2 px-1 hover:bg-taxiYellow hover:text-black">
            <img src={de} className="w-7 h-7" />
            <span>DE</span>
          </div>
        </Link>
        <Link to="/tr">
          <div className="flex flex-row justify-between items-center py-2 px-1 hover:bg-taxiYellow hover:text-black">
            <img src={tr} className="w-7 h-7" />
            <span>TR</span>
          </div>
        </Link>
        <Link to="/fr">
          <div className="flex flex-row justify-between items-center py-2 px-1 hover:bg-taxiYellow hover:text-black">
            <img src={fr} className="w-7 h-7" />
            <span>FR</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
