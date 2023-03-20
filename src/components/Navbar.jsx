import React from "react";
import Logo from "../assets/images/Logo.png";
import HRV from "../assets/images/HRV.png";
import ENG from "../assets/images/ENG.png";
import { Link } from "react-scroll";
import ImgTemp from "./ImgTemp";

const Navbar = () => {
  const changeLanguage = (language) => {
    // const [lang, setLang] = useState(null);
    if (language === "hr") {
      console.log(document.getElementById("en"));
      document.getElementById("hr").classList.toggle("hidden");
      document.getElementById("en").classList.toggle("hidden");
    } else if (language === "en") {
      document.getElementById("en").classList.add("block");
      document.getElementById("hr").classList.add("hidden");
    }
  };

  return (
    <div className="bg-taxiYellow py-5 md:py-7" id="navbar">
      <div className="container flex items-center justify-center md:justify-between md:mx-auto ">
        <a href="#">
          <img src={Logo} alt="logo" className="w-36" />
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <Link
            to="naslovna"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="pr-8 text-lg"
          >
            <button>Naslovna </button>
          </Link>
          <Link
            to="cjenik"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="pr-8 text-lg"
          >
            <button>Cjenik</button>
          </Link>
          <Link
            to="kontakt"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-lg"
          >
            <button>Kontakt</button>
          </Link>
        </div>
        <div className="hidden w-full md:flex md:flex-row md:w-auto relative">
          <div
            onClick={() => {
              document.getElementById("dropdown").classList.toggle("hidden");
            }}
          >
            <div className="flex justify-around cursor-pointer w-full gap-2">
              <img src={HRV} alt="" className="w-6 h-6" />
              <span className="">HR</span>
              <span>&#9660;</span>

              <div
                className="hidden absolute top-8 cursor-pointer"
                id="dropdown"
              >
                <div className="bg-black rounded-lg w-[4.7rem] text-taxiYellow py-1 text-end">
                  <div
                    className="flex flex-row justify-between items-center py-2 px-1 hover:bg-taxiYellow hover:text-black"
                    onClick={() => {
                      changeLanguage("hr");
                    }}
                  >
                    <img src={HRV} className="w-7 h-7" />
                    <span>HR</span>
                  </div>
                  <div
                    className="flex flex-row justify-between items-center py-2 px-1 hover:bg-taxiYellow hover:text-black"
                    onClick={() => {
                      changeLanguage("en");
                    }}
                  >
                    <img src={ENG} className="w-7 h-6" />
                    <span>EN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
