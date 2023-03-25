import React from "react";

const CKtemp = () => {
  return (
    <div
      className="hidden md:flex items-center justify-center half min-h-[95vh] w-screen text-center"
      id="cjenik"
    >
      <div className="flex flex-row justify-around h-full w-full">
        {/* CJENIK */}
        <div className="bg-taxiYellow text-taxiBlack rounded-lg w-[40%] flex flex-col lg:px-16 xl:px-[6vw] lg:py-8 xl:py-[8vh] gap-8">
          <div className="flex items-center flex-col">
            <h1 className="font-bold text-3xl pb-4">Gradska Vožnja</h1>
            <hr className="border-1 border-taxiBlack w-full pb-4" />
            <h3 className="text-xl">00-24h</h3>
            <h3 className="text-xl">Maks. 4 osobe</h3>
            <h3 className="text-xl">3km</h3>
            <h1 className="font-bold text-4xl py-4">3,00 &euro; / 22,60kn</h1>
            <hr className="border-1 border-taxiBlack w-full" />
            <div className="w-full pt-4 xl:px-4">
              <div className="flex flex-row justify-between">
                <h3>Vožnja po km</h3>
                <h3>0,80 &euro; / 6,02kn</h3>
              </div>
              <div className="flex flex-row justify-between">
                <h3>Čekanje po satu</h3>
                <h3>8,00 &euro; / 60,27kn</h3>
              </div>
            </div>
            <span className="opacity-50 pt-4">
              Vožnja unutar Vinkovaca obavlja se po cjeniku usluga. Taxi sat se
              uključuje po dolasku pred adresu korisnika.
            </span>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="font-bold text-3xl pb-4">Izvan Vinkovaca</h1>
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
              Vožnja u određene gradove i sela izvan Vinkovaca obavlja se po
              zasebnom cjeniku.{" "}
              <a href="" className="underline underline-offset-2">
                Cjenik sa listom mjesta možete pronaći ovdje.
              </a>
            </span>
            <span className="opacity-50">
              Za sva ostala mjesta molimo da nas nazovete.
            </span>
          </div>
        </div>
        {/* KONTAKT */}
        <div className="bg-taxiBlack text-taxiYellow rounded-lg w-[40%] flex flex-col justify-center lg:px-16 xl:px-[6vw] lg:py-8 xl:py-[10vh] gap-16">
          <div className="flex flex-col items-center">
            <div className="flex flex-row gap-8">
              <a href="tel:+385992302000">
                <img src={Phone} alt="link na poziv" className="w-8" />
              </a>
              <a href="https://wa.me/+385992302000">
                <img src={WhatsApp} alt="link na whatsapp" className="w-8" />
              </a>
            </div>
            <h1 className="text-xl pt-8">
              Nazovite ili pošaljite SMS poruku na:
            </h1>
            <h1 className="font-bold text-4xl py-4">099 230 2000</h1>
            <h1 className="text-lg">SMS | Viber | Whatsapp</h1>
          </div>

          <div>
            <a href="https://www.facebook.com/profile.php?id=100057088434942">
              <img src={Facebook} alt="link na facebook" />
            </a>
            <h1 className="text-xl ">
              Posjetite našu Facebook stranicu ili pošaljite poruku na naš
              Messenger:
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
  );
};

export default CKtemp;
