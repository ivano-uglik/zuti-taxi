import React from "react";
import Phone from "../assets/images/Phone.png";
import Facebook from "../assets/images/Facebook.png";
import Whatsapp from "../assets/images/Whatsapp.png";
import Viber from "../assets/images/Viber.png";
import WhatsappLogo from "../assets/images/Whatsapp_logo.png";
import PhoneInvert from "../assets/images/PhoneInvert.png";
import WhatsappInvert from "../assets/images/WhatsappInvert.png";
import ViberButton from "../assets/images/ViberButton.png";
import FacebookInvert from "../assets/images/FacebookInvert.png";

const CjenikKontakt = () => {
  return (
    <div className="overflow-x-hidden" id="kontakt">
      {/* CJENIK & KONTAKT HIDDEN MOBILE*/}
      <div className="block md:hidden">
        {/* CJENIK HIDDEN */}
        <div id="kontakt">
          <div>
            <div className=" md:w-screen md:h-screen flex justify-center flex-col w-full h-full">
              <div className="flex md:hidden justify-center py-8 font-bold text-3xl md:text-4xl text-taxiYellow">
                <h1>Cjenik</h1>
              </div>
              <section className="flex md:hidden flex-col md:flex-row justify-center text-center md:gap-x-16 mx-8 md:mx-auto">
                <article className="glassmorphism p-8 md:basis-1/3 h-full mb-12 md:mb-auto">
                  <ul>
                    <li className="text-3xl font-bold">Gradska vožnja</li>
                    <li className="text-2xl">00-24h</li>
                    <li className="text-lg">Maks. 4 osobe</li>
                    <li className="text-lg">3km</li>
                    <li className="text-4xl py-2 font-bold">
                      3,00 &euro; / 22,60kn
                    </li>
                    <hr className="border-1 border-black mb-4" />
                    <div className="flex flex-row w-full pb-2 justify-between">
                      <li className="text-md">Vožnja po km</li>
                      <li className="text-md">0,80 &euro; / 6,02kn</li>
                    </div>
                    <div className="flex flex-row w-full pb-2 justify-between">
                      <li className="text-md">Čekanje po satu</li>
                      <li className="text-md">8,00 &euro; / 60,27kn</li>
                    </div>
                    <hr className="border-1 border-black mt-4" />
                    <div className="py-2 ">
                      <li className="font-light opacity-80">
                        Vožnja unutar Vinkovaca obavlja se po cjeniku usluga.
                      </li>
                      <li className="font-light opacity-80">
                        Taxi sat se uključuje po dolasku pred adresu korisnika.
                      </li>
                    </div>
                  </ul>
                </article>
                <article className="glassmorphism p-8 md:basis-1/3 h-full">
                  <ul>
                    <li className="text-3xl font-bold pb-4">Izvan Vinkovaca</li>
                    <div className="flex flex-row w-full pb-2 justify-between">
                      <li className="text-lg md:text-2xl text-start">Zagreb</li>
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
                      <li className="text-lg md:text-2xl text-start">Osijek</li>
                      <li className="text-lg md:text-2xl text-end">
                        32,00 &euro; / 241,10kn
                      </li>
                    </div>
                    <hr className="border-1 border-black mt-4" />
                    <div className="pt-4 font-light">
                      <li>
                        Vožnje izvan Vinkovaca se vode po fiksnom cjeniku.
                      </li>
                      <li>
                        <a href="" className="underline underline-offset-4">
                          Za punu listu gradova i sela, kliknite ovdje.
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
        <div className="flex md:hidden justify-center pt- pb-12 font-bold text-3xl md:text-4xl text-taxiYellow">
          <h1>Kontakt</h1>
        </div>
        <section className="flex md:hidden flex-col md:flex-row md:h-96 justify-center text-center md:gap-x-16 mx-8 md:mx-auto mb-12">
          <article className="glassmorphism p-8 md:basis-1/4 mb-12 md:mb-auto h-full">
            <div className="flex justify-center">
              <span className="p-8 absolute glassmorphismBlack rounded-full top-[-2rem]"></span>
              <img src={Facebook} className="w-8 absolute top-[-1rem]" />
            </div>
            <div className="flex flex-col pt-6 h-full gap-y-8">
              <h1 className="text-lg">
                Posjetite našu Facebook stranicu ili pošaljite poruku na naš
                Messenger:{" "}
              </h1>
              <a
                href="https://web.facebook.com/people/%C5%BDuti-Taxi-Vinkovci/100057088434942/"
                className="underline text-3xl font-semibold"
                target={"_blank"}
              >
                Žuti Taxi Vinkovci
              </a>
            </div>
          </article>
          <article className="glassmorphism p-8 md:basis-1/4 mb-12 md:mb-auto h-full">
            <div className="flex justify-center">
              <span className="p-8 absolute glassmorphismBlack rounded-full top-[-2rem]"></span>
              <img src={Phone} className="w-8 absolute top-[-1rem]" />
            </div>
            <div className="flex flex-col justify-around h-full gap-y-8">
              <div className="">
                <h2 className="text-lg">
                  Nazovite ili pošaljite SMS poruku na:
                </h2>
                <h1 className="text-4xl font-bold py-8">099 230 2000</h1>
                <h1>SMS | Viber | WhatsApp</h1>
              </div>
              <p className="text-xs font-light opacity-80">
                *Ovisno o Vašem mobilnom operateru, standardne tarife poziva i
                SMS-a se primijenjuju.
              </p>
            </div>
          </article>
        </section>
      </div>
      {/* CJENIK & KONTAKT HIDDEN DESKTOP*/}
      <div className="hidden md:block" id="cjenik">
        <div className="w-screen h-screen flex flex-row basis-1/2">
          <section className="bg-taxiBlack w-full h-full">
            <div className="text-taxiYellow font-bold text-4xl flex justify-center py-16">
              <h1>Cjenik</h1>
            </div>
            <div className="grid place-items-center">
              <div className="h-full w-[80%] bg-taxiYellow px-32 pt-8 text-taxiBlack rounded-lg">
                <div className="flex items-center flex-col">
                  <h1 className="font-bold text-3xl ">Gradska Vožnja</h1>
                  <h3 className="text-xl">00-24h</h3>
                  <h3 className="text-xl">Maks. 4 osobe</h3>
                  <h3 className="text-xl">3km</h3>
                  <h1 className="font-bold text-4xl py-4">
                    3,00 &euro; / 22,60kn
                  </h1>
                  <hr className="border-1 border-taxiBlack w-full py-2" />
                  <div className="flex flex-row justify-between w-full xl:px-4">
                    <h3 className="">Vožnja po km</h3>
                    <h3 className="">0,80 &euro; / 6,02kn</h3>
                  </div>
                  <div className="flex flex-row justify-between w-full xl:px-4 pb-4">
                    <h3>Čekanje po satu</h3>
                    <h3>8,00 &euro; / 60,27kn</h3>
                  </div>
                  <hr className="border-1 border-taxiBlack w-full" />
                  <span className="text-center opacity-50 pt-4">
                    Vožnja unutar Vinkovaca obavlja se po cjeniku usluga. Taxi
                    sat se uključuje po dolasku pred adresu korisnika.
                  </span>
                </div>
                <div className="flex items-center flex-col pt-16">
                  <h1 className="font-bold text-3xl pb-4">Izvan Vinkovaca</h1>
                  <hr className="border-1 border-taxiBlack w-full py-2" />
                  <div className="flex flex-row justify-between w-full xl:px-4">
                    <h3 className="">Zagreb</h3>
                    <h3 className="">240,00 &euro; / 1808,28kn</h3>
                  </div>
                  <div className="flex flex-row justify-between w-full xl:px-4">
                    <h3 className="">Vukovar</h3>
                    <h3 className="">16,00 &euro; / 120,55kn</h3>
                  </div>
                  <div className="flex flex-row justify-between w-full xl:px-4 pb-4">
                    <h3>Vukovar</h3>
                    <h3>16,00 &euro; / 120,55kn</h3>
                  </div>
                  <hr className="border-1 border-taxiBlack w-full" />
                  <span className="text-center opacity-50 pt-4 pb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis saepe unde delectus explicabo quae, sit quo.
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-taxiYellow w-full h-full">
            <div className="text-taxiBlack font-bold text-4xl flex justify-center py-16">
              <h1>Kontakt</h1>
            </div>
            <div className="grid place-items-center text-center h-[43rem]">
              <div className="h-full w-[80%] bg-taxiBlack px-32 pt-8 text-taxiYellow rounded-lg">
                <div className="flex items-center flex-col py-8">
                  <div className="flex flex-row gap-4">
                    <div className="flex justify-center">
                      <div className="bg-taxiYellow rounded-full h-full">
                        <img src={PhoneInvert} className="w-8 m-4" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-taxiYellow rounded-full h-full">
                        <img src={WhatsappInvert} className="w-8 m-4" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-taxiYellow rounded-full h-full">
                        <img src={ViberButton} className="w-8 m-4" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-8">
                    <h1 className="text-xl">
                      Nazovite ili pošaljite SMS poruku na:{" "}
                    </h1>
                    <h1 className="font-bold text-4xl py-4">099 230 2000</h1>
                    <h1 className="text-lg">SMS | Viber | Whatsapp</h1>
                  </div>
                  <div className="bg-taxiYellow rounded-full h-full mt-8">
                    <img src={FacebookInvert} className="w-8 m-4" />
                  </div>
                  <div>
                    <h1 className="mt-8 text-xl">
                      Posjetite našu Facebook stranicu ili pošaljite poruku na
                      naš Messenger:
                    </h1>
                    <h1 className="py-4 text-4xl font-bold underline">
                      Žuti Taxi Vinkovci
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CjenikKontakt;
