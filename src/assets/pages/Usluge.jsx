import React from "react";

const Usluge = () => {
  return (
    <div className="taxiTEMP">
      <h1
        className="flex justify-center pt-8 pb-8 md:pb-16 font-bold text-3xl md:text-4xl text-taxiYellow"
        id="cjenik"
      >
        Cjenik
      </h1>
      <div className="flex flex-col md:flex-row py-8 md:justify-between items-center mx-4 md:mx-64 h-[32rem]">
        <div className="md:w-full glassmorphism text-center mb-8 md:mb-0 h-full flex flex-col justify-center">
          <div>
            <h1 className="pt-8 font-bold text-xl">Gradska vožnja</h1>
            <h3 className="font-semibold text-lg">00-24h</h3>
            <h3 className="text-lg">3km</h3>
          </div>
          <h1 className="font-extrabold text-3xl p-4">3,00 &euro; / 22,60kn</h1>
          <hr className="border-1 border-black mx-8" />
          <div className="">
            <h2 className="pt-8">Vožnja po km</h2>
            <h2>0,80 &euro; / 6,02kn</h2>
          </div>
          <div>
            <h2>Čekanje po satu</h2>
            <h2 className="pb-8">8,00 &euro; / 60,27kn</h2>
          </div>
          <hr className="border'1 border-black py-4 mx-8" />
          <p className="pb-8 font-light mx-12">
            Vožnja unutar Vinkovaca obavlja se po cjeniku usluga. Taxi sat se
            uključuje po odlasku pred adresu korisnika.
          </p>
        </div>
        <div className="md:w-full glassmorphism text-center md:ml-8 h-full flex flex-col justify-center">
          <div>
            <h1 className="pt-2 font-bold text-xl">Izvan Vinkovaca</h1>
          </div>
          <h1 className="font-extrabold text-xl pt-4">
            Zagreb - 240,00 &euro; / 1808,28kn{" "}
          </h1>
          <h1 className="font-extrabold text-xl">
            Zagreb - 240,00 &euro; / 1808,28kn{" "}
          </h1>
          <h1 className="font-extrabold text-xl">
            Zagreb - 240,00 &euro; / 1808,28kn{" "}
          </h1>
          <h1 className="font-extrabold text-xl pb-8">
            Zagreb - 240,00 &euro; / 1808,28kn{" "}
          </h1>
          <p className="pb-8 font-light mx-12">
            Vožnje izvan Vinkovaca se vode po fiksnom cjeniku.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Usluge;
