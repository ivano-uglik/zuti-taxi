import Home from "./Home";
import Logo from "./assets/images/Logo.png";
import HRV from "./assets/images/HRV.png";
import ENG from "./assets/images/ENG.png";
import { Link as Link1 } from "react-scroll";
import { Link } from "react-router-dom";
import Phone from "./assets/images/Phone.png";
import ImgTemp from "./components/ImgTemp";
import PlavaVinkovacka from "./assets/images/PlavaVinkovacka.png";
import OptikaMarko from "./assets/images/OptikaMarko.jpg";
import Pattern from "./assets/images/blackAndYellow.png";
import Facebook from "./assets/images/Facebook.png";
import PhoneInvert from "./assets/images/PhoneInvert.png";
import WhatsappInvert from "./assets/images/WhatsappInvert.png";
import ViberButton from "./assets/images/ViberButton.png";
import FacebookInvert from "./assets/images/FacebookInvert.png";
import leftArrow from "./assets/images/LeftArrow.png";
import rightArrow from "./assets/images/RightArrow.png";
import taxi from "./assets/images/taxi.svg";
import DemoCarousel from "./DemoCarousel";
import Phone1 from "./assets/images/Phone.svg";
import WhatsApp1 from "./assets/images/WhatsApp.svg";
import Facebook1 from "./assets/images/Facebook.svg";
const HomeEn = () => {
  return (
    <div>
      {/* NUMBER NAVBAR, 5vh */}
      <div className="sticky top-0 z-50">
        <div className="flex justify-center bg-taxiBlack h-[5vh] items-center">
          <a href="tel:+385992302000">
            <div className="flex justify-between ">
              <div>
                <img src={Phone} className="w-8 pr-2" />
              </div>
              <h1 className="text-taxiYellow font-bold pr-2">
                (+385) 099 230 2000
              </h1>
              <div>
                <img src={Phone} className="w-8 pr-2" />
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* NAVBAR */}
      <div className="bg-taxiYellow h-[10vh] flex items-center" id="navbar">
        <div className="flex items-center justify-center md:justify-around md:mx-auto w-full ">
          <a href="#">
            <img src={Logo} alt="logo" className="w-36" />
          </a>
          <div className="hidden w-full md:block md:w-auto">
            <Link1
              to="naslovna"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="pr-8 text-lg"
            >
              <button>Home </button>
            </Link1>
            <Link1
              to="cjenik"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="pr-8 text-lg"
            >
              <button>Pricing</button>
            </Link1>
            <Link1
              to="kontakt"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-lg"
            >
              <button>Contact Us</button>
            </Link1>
          </div>
          <div className="hidden w-full md:flex md:flex-row md:w-auto relative z-10">
            <div
              onClick={() => {
                document.getElementById("dropdown").classList.toggle("hidden");
              }}
            >
              <div className="flex justify-around items-center cursor-pointer w-full gap-2">
                <img src={ENG} alt="" className="w-7 h-7" />
                <span className="">EN</span>
                <span>&#9660;</span>

                <div
                  className="hidden absolute top-8 cursor-pointer"
                  id="dropdown"
                >
                  <div className="bg-black rounded-lg w-[4.7rem] text-taxiYellow py-1 text-end">
                    <Link to="/hr">
                      <div className="flex flex-row justify-between items-center py-2 px-1 hover:bg-taxiYellow hover:text-black">
                        <img src={HRV} className="w-7 h-7" />
                        <span>HR</span>
                      </div>
                    </Link>

                    <div className="flex flex-row justify-between items-center py-2 px-1 hover:bg-taxiYellow hover:text-black">
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
      {/* IMG TEMP  */}
      <div className="w-full h-8 blackAndYellow"></div>
      {/* NASLOVNA / CAROUSEL */}
      <DemoCarousel />
      {/* NASLOVNICA */}
      <div className="min-h-[50vh] flex flex-col justify-center items-center w-full h-full halfInvert">
        <div className="flex flex-col md:flex-row items-center h-full text-center">
          <div className="flex flex-col justify-center gap-4 md:gap-16 items-center h-[50vh] md:h-full w-full p-2 md:p-8">
            <h1 className="font-bold text-2xl xl:text-5xl pt-8 md:pt-auto">
              The best Taxi in Vinkovci and the Surrounding Area!
            </h1>
            <p className="text-justify px-8 lg:px-32">
              Welcome to the "Žuti Taxi Vinkovci" website, the leading taxi
              service in Vinkovci. Our team of professional drivers is at your
              disposal 24/7 to provide you with safe and comfortable
              transportation at the most affordable prices. With our modern
              fleet of vehicles and easy online booking, we guarantee you a
              high-quality and reliable service that will meet your needs.
            </p>
            <div className="font-extrabold text-3xl lg:text-[3.5rem] w-auto p-8 rounded-xl bg-taxiBlack text-white ">
              <a href="tel:+385992302000">
                <h1 className="">(+385) 099 230 2000</h1>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center h-[50vh] md:h-full w-full">
            <img src={taxi} alt="taksi ikona" className="w-[40rem] p-16" />
          </div>
        </div>
      </div>
      <div className="w-full h-8 blackAndYellowStatic"></div>
      {/* CJENIK I KONTAKT  */}
      <div id="kontakt">
        {/* CJENIK & KONTAKT HIDDEN MOBILE*/}
        <div className="block md:hidden">
          {/* CJENIK HIDDEN */}
          <div id="kontakt w-full">
            <div>
              <div className=" md:w-full md:h-screen flex justify-center flex-col w-full h-full bg-taxiBlack pb-8">
                <div className="flex md:hidden justify-center py-8 font-bold text-3xl md:text-4xl text-taxiYellow">
                  <h1>Price List</h1>
                </div>
                <section className="flex md:hidden flex-col md:flex-row justify-center text-center md:gap-x-16 mx-8 md:mx-auto">
                  <article className="glassmorphism p-8 md:basis-1/3 h-full mb-12 md:mb-auto">
                    <ul>
                      <li className="text-3xl font-bold">In Vinkovci</li>
                      <li className="text-2xl">00-24h</li>
                      <li className="text-lg">Max. 4 people</li>
                      <li className="text-lg">3km</li>
                      <li className="text-4xl py-2 font-bold">
                        3,00 &euro; / 22,60kn
                      </li>
                      <hr className="border-1 border-black mb-4" />
                      <div className="flex flex-row w-full pb-2 justify-between">
                        <li className="text-md">Per kilometer</li>
                        <li className="text-md">0,80 &euro; / 6,02kn</li>
                      </div>
                      <div className="flex flex-row w-full pb-2 justify-between">
                        <li className="text-md">{"Waiting (per hour)"}</li>
                        <li className="text-md">8,00 &euro; / 60,27kn</li>
                      </div>
                      <hr className="border-1 border-black mt-4" />
                      <div className="py-2 ">
                        <li className="font-light opacity-80">
                          Rides in Vinkovci are carried out according to the
                          price list.
                        </li>
                        <li className="font-light opacity-80">
                          A Taximeter is turned on upon arriving at the client's
                          location.
                        </li>
                      </div>
                    </ul>
                  </article>
                  <article className="glassmorphism p-8 md:basis-1/3 h-full">
                    <ul>
                      <li className="text-3xl font-bold pb-4">
                        Outside of Vinkovci
                      </li>
                      <div className="flex flex-row w-full pb-2 justify-between">
                        <li className="text-lg md:text-2xl text-start">
                          Zagreb
                        </li>
                        <li className="text-lg md:text-2xl text-end">
                          240,00 &euro; / 1808,28kn
                        </li>
                      </div>
                      <div className="flex flex-row w-full pb-2 justify-between">
                        <li className="text-lg md:text-2xl text-start">
                          Vukovar
                        </li>
                        <li className="text-lg md:text-2xl text-end">
                          16,00 &euro; / 120,55kn
                        </li>
                      </div>
                      <div className="flex flex-row w-full pb-2 justify-between">
                        <li className="text-lg md:text-2xl text-start">
                          Osijek
                        </li>
                        <li className="text-lg md:text-2xl text-end">
                          32,00 &euro; / 241,10kn
                        </li>
                      </div>
                      <hr className="border-1 border-black mt-4" />
                      <div className="pt-4 font-light">
                        <li>
                          Rides outside of Vinkovci are set by a fixed price
                          list.
                        </li>
                        <li>
                          <a href="" className="underline underline-offset-4">
                            You can find the price list here.
                          </a>
                        </li>
                      </div>
                    </ul>
                  </article>
                </section>
              </div>
            </div>
          </div>
          {/* // KONTAKT HIDDEN*/}
          <div className="bg-taxiYellow">
            <div className="flex md:hidden justify-center pt-8 pb-12 font-bold text-3xl md:text-4xl text-taxiBlack">
              <h1>Contact Us</h1>
            </div>
            <section className="flex md:hidden flex-col md:flex-row md:h-96 justify-center text-center md:gap-x-16 mx-8 md:mx-auto text-taxiYellow">
              <article className="bg-taxiBlack backdrop-blur-none rounded-[16px] p-8 md:basis-1/4 mb-12 md:mb-auto h-full">
                <div className="flex justify-center">
                  <span className="p-8 absolute glassmorphismBlack rounded-full top-[-2rem]"></span>
                  <img src={Facebook} className="w-8 absolute top-[-1rem]" />
                </div>
                <div className="flex flex-col pt-6 h-full gap-y-8">
                  <h1 className="text-lg">
                    Find us on Facebook or send us a message on Messenger:
                  </h1>
                  <div className="flex justify-center">
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100057088434942&tabs=timeline&width=200&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      width="200"
                      height="100"
                      frameborder="0"
                      allowfullscreen="true"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      className="border-none overflow-hidden"
                    ></iframe>
                  </div>
                </div>
              </article>
              <article className="bg-taxiBlack backdrop-blur-none rounded-2xl p-8 md:basis-1/4 mb-12 md:mb-auto h-full">
                <div className="flex justify-center">
                  <span className="p-8 absolute glassmorphismBlack rounded-full top-[-2rem]"></span>
                  <img src={Phone} className="w-8 absolute top-[-1rem]" />
                </div>
                <div className="flex flex-col justify-around h-full gap-y-8">
                  <div className="">
                    <h2 className="text-lg">
                      Call us or send us an SMS message on:
                    </h2>
                    <h1 className="text-4xl font-bold py-8">
                      (+385) 099 230 2000
                    </h1>
                    <h1>SMS | Viber | WhatsApp</h1>
                  </div>
                  <p className="text-xs font-light opacity-80">
                    *Depending on your mobile operator, standard call and SMS
                    rates may apply.
                  </p>
                </div>
              </article>
            </section>
          </div>
        </div>

        {/* CJENIK & KONTAKT HIDDEN DESKTOP*/}
        <div
          className="hidden md:flex items-center justify-center half min-h-screen text-center w-full"
          id="cjenik"
        >
          <div className="flex flex-row justify-around h-full">
            {/* CJENIK */}
            <div className="bg-taxiYellow text-taxiBlack rounded-lg w-[40%] flex flex-col lg:px-16 xl:px-[6vw] lg:py-8 xl:py-[8vh] gap-8">
              <div className="flex items-center flex-col">
                <h1 className="font-bold text-3xl pb-4">In Vinkovci</h1>
                <hr className="border-1 border-taxiBlack w-full pb-4" />
                <h3 className="text-xl">00-24h</h3>
                <h3 className="text-xl">Maks. 4 osobe</h3>
                <h3 className="text-xl">3km</h3>
                <h1 className="font-bold text-4xl py-4">
                  3,00 &euro; / 22,60kn
                </h1>
                <hr className="border-1 border-taxiBlack w-full" />
                <div className="w-full pt-4 xl:px-4">
                  <div className="flex flex-row justify-between">
                    <h3>Per kilometer</h3>
                    <h3>0,80 &euro; / 6,02kn</h3>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h3>Waiting (per hour)</h3>
                    <h3>8,00 &euro; / 60,27kn</h3>
                  </div>
                </div>
                <span className="opacity-50 pt-4">
                  Rides in Vinkovci are carried out according to the price list.
                </span>
                <span className="opacity-50 pt-4">
                  A Taximeter is turned on upon arriving at the client's
                  location.
                </span>
              </div>
              <div className="flex items-center flex-col">
                <h1 className="font-bold text-3xl pb-4">Outside of Vinkovci</h1>
                <hr className="border-1 border-taxiBlack w-full" />
                <div className="w-full xl:px-4 pt-4">
                  <div className="flex flex-row justify-between ">
                    <h3>Zagreb</h3>
                    <h3>240,00 &euro; / 1808,28kn</h3>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h3>Vukovar</h3>
                    <h3>16,00 &euro; / 120,55kn</h3>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h3>Osijek</h3>
                    <h3>32,00 &euro; / 241,10kn</h3>
                  </div>
                </div>
                <span className="opacity-50 pt-4">
                  Rides outside of Vinkovci are set by a fixed price list.
                  <a href="" className="underline underline-offset-2">
                    You can find the price list here.
                  </a>
                </span>
                <span className="opacity-50">
                  For all other locations, please contact us.
                </span>
              </div>
            </div>
            {/* KONTAKT */}
            <div className="bg-taxiBlack text-taxiYellow rounded-lg w-[40%] flex flex-col justify-center lg:px-16 xl:px-[6vw] lg:py-8 xl:py-[10vh]">
              <div className="flex flex-col items-center pb-8">
                <div className="flex flex-row gap-8">
                  <a href="tel:+385992302000">
                    <img src={Phone1} alt="link na poziv" className="w-16" />
                  </a>
                  <a href="https://wa.me/+385992302000" target="__blank">
                    <img
                      src={WhatsApp1}
                      alt="link na whatsapp"
                      className="w-16"
                    />
                  </a>
                </div>
                <h1 className="text-xl pt-8">
                  Call Us or send an SMS message on:
                </h1>
                <h1 className="font-bold text-4xl py-4">(+385) 099 230 2000</h1>
                <h1 className="text-lg">SMS | Viber | Whatsapp</h1>
              </div>

              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100057088434942"
                  className="flex justify-center"
                >
                  <img
                    src={Facebook1}
                    alt="link na facebook"
                    className="w-16"
                  />
                </a>
                <h1 className="text-xl pt-8">
                  Find us on Facebook or send us a message on Messenger:
                </h1>
                <div className="flex justify-center pt-4">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100057088434942&tabs=timeline&width=500&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="500"
                    height="130"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="border-none overflow-hidden"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER */}
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
                  alt="Plava Vinkovačka"
                  className="w-16 h-16 md:w-32 md:h-32"
                />
              </div>
            </div>
            <div className="flex justify-center flex-col text-center items-center py-4 text-xs md:text-base px-2">
              <h1>&#169; 2023 - Žuti Taxi Vinkovci. All Rights Reserved.</h1>
              <h1>
                Website made by Ivano Uglik.&nbsp;|&nbsp;
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
      </div>
    </div>
  );
};

export default HomeEn;
