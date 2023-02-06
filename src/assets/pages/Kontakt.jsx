import React from "react";
import Phone from "../Phone.png";
import Facebook from "../Facebook.png";
import Whatsapp from "../Whatsapp.png";
import Viber from "../Viber.png";
import WhatsappLogo from "../Whatsapp_logo.png";

const Kontakt = () => {
  return (
    <div className="taxiTEMP">
      <h1
        className="flex justify-center pt-8 pb-16 font-bold text-3xl md:text-4xl text-taxiYellow"
        id="kontakt"
      >
        Kontakt
      </h1>
      <div className="flex flex-col md:flex-row py-8 md:justify-between items-center">
        <div className="md:w-full glassmorphism flex flex-col relative items-center md:py-16 mx-8 md:mx-0 md:ml-8 md:mr-8">
          <span className="p-8 absolute glassmorphismBlack rounded-full top-[-2rem]"></span>
          <img src={Phone} className="w-8 absolute top-[-1rem]" />
          <h2 className="p-8 pt-12 md:text-xl ">
            Nazovite ili pošaljite SMS poruku na:
          </h2>
          <h1 className="font-extrabold text-3xl md:text-5xl">099 230 2000</h1>
          <p className="text-black text-sm text-opacity-60 p-8 text-center">
            *Ovisno o Vašem mobilnom operateru, standardne tarife poziva i SMS-a
            se primijenjuju.
          </p>
        </div>
        <div className="md:w-full md:order-first glassmorphism flex flex-col relative items-center md:py-12 mt-16 md:mt-0 mx-8 md:mx-0 md:ml-16">
          <span className="p-8 absolute glassmorphismBlack rounded-full top-[-2rem]"></span>
          <img src={Facebook} className="w-8 absolute top-[-1rem]" />
          <h2 className="p-8 pt-12 pb-0 text-center md:text-xl ">
            Posjetite našu Facebook stranicu ili pošaljite poruku na naš
            Messenger:
          </h2>
          <h1 className="text-3xl underline text-blue-900 p-8 pb-16">
            <a href="https://web.facebook.com/people/%C5%BDuti-Taxi-Vinkovci/100057088434942/">
              Žuti Taxi Vinkovci
            </a>
          </h1>
        </div>
        <div className="md:w-full glassmorphism flex flex-col relative items-center mt-16 md:mt-0 mx-0 md:mx-0 md:mr-16">
          <span className="p-8 absolute glassmorphismBlack rounded-full top-[-2rem]"></span>
          <img src={Whatsapp} className="w-8 absolute top-[-1rem]" />
          <h2 className="p-8 pt-12 pb-0 text-center md:text-xl ">
            Nazovite nas ili nam pošaljite poruku na:
          </h2>
          <img src={Viber} className="w-48 p-4 pb-0" />
          <img src={WhatsappLogo} className="w-64 p-4 pt-0" />
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
