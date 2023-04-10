import Logo from "./assets/images/Logo.png";
import de from "./assets/images/de.svg";
import { Link as Link1 } from "react-scroll";
import { Link } from "react-router-dom";
import Phone from "./assets/images/Phone.png";
import PlavaVinkovacka from "./assets/images/PlavaVinkovacka.png";
import OptikaMarko from "./assets/images/OptikaMarko.jpg";
import Facebook from "./assets/images/Facebook.png";
import taxi from "./assets/images/taxi.svg";
import DemoCarousel from "./DemoCarousel";
import Phone1 from "./assets/images/Phone.svg";
import WhatsApp1 from "./assets/images/WhatsApp.svg";
import Facebook1 from "./assets/images/Facebook.svg";
import { scrollToTop } from "./ScrollToTop";
import Dropdown from "./Dropdown";

const HomeDE = () => {
  // var Carousel = require("react-responsive-carousel").Carousel;

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
      <div className="bg-taxiYellow min-h-[10vh] flex items-center" id="navbar">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around md:mx-auto w-full h-full">
          <a href="#" className="order-1 p-4">
            <img src={Logo} alt="logo" className="w-36" />
          </a>
          <div className="h-full w-full md:h-auto md:w-auto order-2 md:order-3 pb-4 md:pb-0 flex flex-row items-center justify-center">
            <div className="flex md:flex-row md:w-auto justify-center relative z-10 ">
              <div
                onClick={() => {
                  document
                    .getElementById("dropdown")
                    .classList.toggle("hidden");
                }}
              >
                <div className="flex justify-around items-center cursor-pointer w-full gap-2">
                  <img src={de} alt="" className="w-7 h-7" />
                  <span className="">DE</span>
                  <span>&#9660;</span>

                  <Dropdown />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-full md:block md:w-auto md:order-2">
            <Link1
              to="naslovna"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="pr-8 text-lg"
            >
              <button className="text-xl">Home</button>
            </Link1>
            <Link1
              to="cjenik"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="pr-8 text-lg"
            >
              <button className="text-xl">Preisliste</button>
            </Link1>
            <Link1
              to="kontakt"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-lg"
            >
              <button className="text-xl">Kontakt</button>
            </Link1>
          </div>
        </div>
      </div>
      {/* IMG TEMP  */}
      <div className="w-full h-8 blackAndYellow"></div>
      {/* NASLOVNA / CAROUSEL */}
      <DemoCarousel />
      {/* NASLOVNICA */}
      <div className="min-h-[50vh] flex flex-col justify-center items-center w-full h-full ">
        <div className="flex flex-col md:flex-row items-center h-full text-center bg-taxiYellow">
          <div className="flex flex-col justify-center gap-4 md:gap-16 items-center min-h-[50vh] h-full w-full p-2 md:p-8 pb-8">
            <h1 className="font-bold text-2xl xl:text-5xl pt-4 md:pt-auto">
              Bestes Taxi in Vinkovci und Umgebung!
            </h1>
            <p className="text-justify px-8 lg:px-32">
              Willkommen auf der Website von Žuti Taxi Vinkovci ("Gelbes Taxi"),
              dem führenden Taxidienst in Vinkovci.
              <p>
                Unser Team von professionellen Fahrern steht Ihnen rund um die
                Uhr zur Verfügung, um Ihnen sicheren und komfortablen Transport
                zu den erschwinglichsten Preisen anzubieten.
              </p>
              <p>
                Mit unserer modernen Fahrzeugflotte und einfachen Online-Buchung
                garantieren wir Ihnen einen hochwertigen und zuverlässigen
                Service, der Ihren Bedürfnissen gerecht wird.
              </p>
            </p>
            <div className="font-extrabold text-3xl lg:text-[3.5rem] w-auto p-4 rounded-xl bg-taxiBlack text-white">
              <a href="tel:+385992302000">
                <h1 className="">(+385) 099 230 2000</h1>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center min-h-[50vh] md:h-full w-full bg-taxiBlack">
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
                  <h1>Preisliste</h1>
                </div>
                <section className="flex md:hidden flex-col md:flex-row justify-center text-center md:gap-x-16 mx-8 md:mx-auto">
                  <article className="glassmorphism p-8 md:basis-1/3 h-full mb-12 md:mb-auto">
                    <ul>
                      <li className="text-3xl font-bold">Fahrt in Vinkovci</li>
                      <li className="text-2xl">00-24h</li>
                      <li className="text-lg">Max. 4 Personen</li>
                      <li className="text-lg">3km</li>
                      <li className="text-4xl py-2 font-bold">
                        3,00 &euro; / 22,60kn
                      </li>
                      <hr className="border-1 border-black mb-4" />
                      <div className="flex flex-row w-full pb-2 justify-between">
                        <li className="text-md">Pro Kilometer</li>
                        <li className="text-md">0,80 &euro; / 6,02kn</li>
                      </div>
                      <div className="flex flex-row w-full pb-2 justify-between">
                        <li className="text-md">Warten (pro Stunde)</li>
                        <li className="text-md">8,00 &euro; / 60,27kn</li>
                      </div>
                      <hr className="border-1 border-black mt-4" />
                      <div className="py-2 ">
                        <li className="font-light opacity-80">
                          Fahrten innerhalb von Vinkovci erfolgen gemäß der
                          Servicepreisliste.{" "}
                        </li>
                        <li className="font-light opacity-80">
                          Die Taxiuhr wird bei Ankunft vor der Adresse des
                          Kunden eingeschaltet.
                        </li>
                      </div>
                    </ul>
                  </article>
                  <article className="glassmorphism p-8 md:basis-1/3 h-full">
                    <ul>
                      <li className="text-3xl font-bold pb-4">
                        Außerhalb von Vinkovci
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
                          Fahrten in bestimmte Städte und Dörfer außerhalb von
                          Vinkovci erfolgen gemäß einer separaten{" "}
                        </li>
                        <li>
                          <Link to="/de/preisliste" onClick={scrollToTop}>
                            <span className="underline underline-offset-4 opacity-100">
                              Für eine vollständige Liste von Städten und
                              Dörfern klicken Sie hier.
                            </span>
                          </Link>
                        </li>
                        <li>Für alle anderen Orte rufen Sie uns bitte an.</li>
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
              <h1>Kontakt</h1>
            </div>
            <section className="flex md:hidden flex-col md:flex-row md:h-96 justify-center text-center md:gap-x-16 mx-8 md:mx-auto text-taxiYellow">
              <article className="bg-taxiBlack backdrop-blur-none rounded-[16px] p-8 md:basis-1/4 mb-12 md:mb-auto h-full">
                <div className="flex justify-center">
                  <span className="p-8 absolute glassmorphismBlack rounded-full top-[-2rem]"></span>
                  <img src={Facebook} className="w-8 absolute top-[-1rem]" />
                </div>
                <div className="flex flex-col pt-6 h-full gap-y-8">
                  <h1 className="text-lg">
                    Besuchen Sie unsere Facebook-Seite oder senden Sie uns eine
                    Nachricht auf unserem Messenger:
                  </h1>
                  {/* <a
                    href="https://web.facebook.com/people/%C5%BDuti-Taxi-Vinkovci/100057088434942/"
                    className="underline text-3xl font-semibold"
                    target={"_blank"}
                  >
                    Žuti Taxi Vinkovci
                  </a> */}
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
                      Rufen Sie an oder senden Sie eine SMS an:
                    </h2>
                    <h1 className="text-4xl font-bold py-8">
                      (+385) 099 230 2000
                    </h1>
                    <h1>SMS | Viber | WhatsApp</h1>
                  </div>
                  <p className="text-xs font-light opacity-80">
                    *Je nach Ihrem Mobilfunkanbieter gelten die standardmäßigen
                    Anruf- und SMS-Gebühren.
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
                <h1 className="font-bold text-3xl pb-4">Fahrt in Vinkovci</h1>
                <hr className="border-1 border-taxiBlack w-full pb-4" />
                <h3 className="text-xl">00-24h</h3>
                <h3 className="text-xl">Max. 4 Personen</h3>
                <h3 className="text-xl">3km</h3>
                <h1 className="font-bold text-4xl py-4">
                  3,00 &euro; / 22,60kn
                </h1>
                <hr className="border-1 border-taxiBlack w-full" />
                <div className="w-full pt-4 xl:px-4">
                  <div className="flex flex-row justify-between">
                    <h3>Pro Kilometer</h3>
                    <h3>0,80 &euro; / 6,02kn</h3>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h3>Warten (pro Stunde)</h3>
                    <h3>8,00 &euro; / 60,27kn</h3>
                  </div>
                </div>
                <span className="opacity-50 pt-4">
                  Fahrten innerhalb von Vinkovci erfolgen gemäß der
                  Servicepreisliste. Die Taxiuhr wird bei Ankunft vor der
                  Adresse des Kunden eingeschaltet.
                </span>
              </div>
              <div className="flex items-center flex-col">
                <h1 className="font-bold text-3xl pb-4">
                  Außerhalb von Vinkovci
                </h1>
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
                  Fahrten in bestimmte Städte und Dörfer außerhalb von Vinkovci
                  erfolgen gemäß einer separaten Preisliste.
                  <Link to="/de/preisliste" onClick={scrollToTop}>
                    <span className="underline underline-offset-4">
                      Für eine vollständige Liste von Städten und Dörfern
                      klicken Sie hier.
                    </span>
                  </Link>
                </span>
                <span className="opacity-50">
                  Für alle anderen Orte rufen Sie uns bitte an.
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
                  Rufen Sie an oder senden Sie eine SMS an:
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
                  Besuchen Sie unsere Facebook-Seite oder senden Sie uns eine
                  Nachricht auf unserem Messenger:
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
              <h1>
                &#169; 2023 - Žuti Taxi Vinkovci. Alle Rechte vorbehalten.
              </h1>
              <h1>
                Webseitenerstellung - Ivano Uglik.&nbsp;|&nbsp;
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

export default HomeDE;
