import taxi from "./assets/images/taxi.svg";
import { useEffect } from "react";
import { lokacije } from "./Lokacije";

const CjenikTR = () => {
  function titleSet() {
    useEffect(() => {
      document.title = "Fiyatlandırma - Žuti Taxi Vinkovci";
    }, []);
  }

  titleSet();
  return (
    <div>
      <div className="text-white flex flex-col items-center overflow-x-hidden">
        <div className="w-screen bg-taxiYellow flex justify-center gap-16">
          <img src={taxi} className="w-12 hidden md:block" />
          <h1 className="text-taxiBlack p-4 font-bold text-2xl">
            Fiyatlandırma Vinkovci dışında
          </h1>
          <img src={taxi} className="w-12 hidden md:block" />
        </div>
        <div className="w-full h-8 blackAndYellowStatic" />
        <div className="w-[50vw] pt-8 flex flex-col gap-4 px-8 xl:px-24 shadowCjenik list-none">
          {lokacije.map((mjesto) => (
            <div className="flex justify-between" key={mjesto.id}>
              <li>{mjesto.mjesto}</li>
              <span></span>
              <li>{mjesto.cijena}</li>
            </div>
          ))}
          <div className="pb-8"></div>
        </div>
      </div>
    </div>
  );
};

export default CjenikTR;
