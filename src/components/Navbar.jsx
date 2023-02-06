import React from "react";
import Logo from "../assets/Logo.png";
import HRV from "../assets/HRV.png";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="bg-taxiYellow py-5 md:py-7 relative" id="navbar">
      <div className="container flex items-center justify-center md:justify-between md:mx-auto ">
        <a href="#">
          <img src={Logo} alt="logo" className="w-36" />
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <button>
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="pr-8 text-xl font-semibold"
            >
              Naslovna
            </Link>
          </button>
          <button>
            <Link
              to="cjenik"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="pr-8 text-lg"
            >
              Cjenik
            </Link>
          </button>
          <button>
            <Link
              to="kontakt"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-lg"
            >
              Kontakt
            </Link>
          </button>
        </div>
        <div className="hidden w-full md:flex md:flex-row md:w-auto">
          <a href="#" className="flex">
            <div className="w-full">
              <img src={HRV} alt="" className="w-8 pr-2" />
            </div>
            <span className="pr-2">HR</span>
            <span>&#9660;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
