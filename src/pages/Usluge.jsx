import React from "react";

const Usluge = () => {
  return (
    <div className="overflow-hidden taxiTEMP" id="cjenik">
      <div className=" md:w-screen">
        <div className="flex justify-center py-8 font-bold text-3xl md:text-4xl text-taxiYellow">
          <h1>Cjenik</h1>
        </div>
        <section className="flex flex-col md:flex-row md:h-96 justify-center text-center md:gap-x-16 mx-8 md:mx-auto">
          <article className="glassmorphism p-8 md:basis-1/3 h-full mb-12 md:mb-auto">
            <ul>
              <li className="text-3xl font-bold">Gradska vožnja</li>
              <li className="text-2xl">00-24h</li>
              <li className="text-lg">Maks. 4 osobe</li>
              <li className="text-lg">3km</li>
              <li className="text-4xl py-2 font-bold">3,00 &euro; / 22,60kn</li>
              <hr className="border-1 border-black mb-4" />
              <div className="flex flex-row w-full pb-2 justify-between">
                <li className="text-md">Vožnja po km</li>
                <li className="text-md">0,80 &euro; / 6,02kn</li>
              </div>
              <div className="flex flex-row w-full pb-2 justify-between">
                <li className="text-md text-start">Čekanje po satu</li>
                <li className="text-md text-end">8,00 &euro; / 60,27kn</li>
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
              <div className="relative">
                <li className="text-lg md:text-2xl absolute">Zagreb</li>
                <li className="text-lg md:text-2xl text-end">
                  240,00 &euro; / 1808,28kn
                </li>
              </div>
              <div className="relative py-2">
                <li className="text-lg md:text-2xl absolute text-start">
                  Vukovar
                </li>
                <li className="text-lg md:text-2xl text-end">
                  16,00 &euro; / 120,55kn
                </li>
              </div>
              <div className="relative py-2">
                <li className="text-lg md:text-2xl absolute text-start">
                  Osijek
                </li>
                <li className="text-lg md:text-2xl text-end">
                  32,00 &euro; / 241,10kn
                </li>
              </div>
              <hr className="border-1 border-black mt-4" />
              <div className="pt-4 font-light">
                <li>Vožnje izvan Vinkovaca se vode po fiksnom cjeniku.</li>
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
  );
};

export default Usluge;
