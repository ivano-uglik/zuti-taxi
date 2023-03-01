import React from "react";
import Phone from "../assets/images/Phone.png";
import Facebook from "../assets/images/Facebook.png";
import Whatsapp from "../assets/images/Whatsapp.png";
import Viber from "../assets/images/Viber.png";
import WhatsappLogo from "../assets/images/Whatsapp_logo.png";

const Kontakt = () => {
  return (
    <div className="overflow-hidden taxiTEMP" id="kontakt">
      <div className="relative md:w-screen md:h-screen">
        <div className="flex justify-center pt-8 pb-12 font-bold text-3xl md:text-4xl text-taxiYellow">
          <h1>Kontakt</h1>
        </div>
        <section className="flex flex-col md:flex-row md:h-96 justify-center text-center md:gap-x-16 mx-8 md:mx-auto">
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
          {/* <article className="glassmorphism p-8 md:basis-1/4 md:mb-auto h-full">
          <div className="flex justify-center">
            <span className="p-8 absolute glassmorphismBlack rounded-full top-[-2rem]"></span>
            <img src={Whatsapp} className="w-8 absolute top-[-1rem]" />
          </div>
          <h2 className="text-lg ">
            Nazovite nas ili nam pošaljite poruku na:
          </h2>
        </article> */}
        </section>

        {/* <div className="flex flex-col md:flex-row py-8 md:justify-between items-center">
        <div className="md:w-full glassmorphism flex flex-col relative items-center md:py-16 mx-8 md:mx-0 md:ml-8 md:mr-8">
          <h2 className="p-8 pt-12 md:text-xl "></h2>
          <h1 className="font-extrabold text-3xl md:text-5xl"></h1>
          <p className="text-black text-sm text-opacity-60 p-8 text-center"></p>
        </div>
        <div className="md:w-full md:order-first glassmorphism flex flex-col relative items-center md:py-12 mt-16 md:mt-0 mx-8 md:mx-0 md:ml-16">
          <span className="p-8 absolute glassmorphismBlack rounded-full top-[-2rem]"></span>
          <img src={Facebook} className="w-8 absolute top-[-1rem]" />
          <h2 className="p-8 pt-12 pb-0 text-center md:text-xl "></h2>
          <h1 className="text-3xl underline text-blue-900 p-8 pb-16"></h1>
        </div>
        <div className="md:w-full glassmorphism flex flex-col relative items-center mt-16 md:mt-0 mx-0 md:mx-0 md:mr-16">
          <span className="p-8 absolute glassmorphismBlack rounded-full top-[-2rem]"></span>
          <img src={Whatsapp} className="w-8 absolute top-[-1rem]" />
          <h2 className="p-8 pt-12 pb-0 text-center md:text-xl "></h2>
          <img src={Viber} className="w-48 p-4 pb-0" />
          <img src={WhatsappLogo} className="w-64 p-4 pt-0" />
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Kontakt;
