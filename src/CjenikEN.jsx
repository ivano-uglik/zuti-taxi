import taxi from "./assets/images/taxi.svg";
import { useEffect } from "react";

const CjenikEN = () => {
  function titleSet() {
    useEffect(() => {
      document.title = "Price List - Žuti Taxi Vinkovci";
    }, []);
  }

  titleSet();
  return (
    <div className="text-white flex flex-col items-center overflow-x-hidden">
      <div className="w-screen bg-taxiYellow flex justify-center gap-16">
        <img src={taxi} className="w-12 hidden md:block" />
        <h1 className="text-taxiBlack p-4 font-bold text-2xl">
          Price List outside of Vinkovci
        </h1>
        <img src={taxi} className="w-12 hidden md:block" />
      </div>
      <div className="w-full h-8 blackAndYellowStatic" />
      <div className="w-[50vw] pt-8 flex flex-col gap-4 px-8 xl:px-24 min-h-screen shadowCjenik">
        <div className="flex justify-between">
          <span>Andrijaševci</span>
          <span>8,00 &euro; // 60,27kn</span>
        </div>
        <div className="flex justify-between">
          <span>Antin</span>
          <span>15,00 &euro; // 113,01kn</span>
        </div>
        <div className="flex justify-between">
          <span>Antunovac</span>
          <span>28,00 &euro; // 210,96kn</span>
        </div>
        <div className="flex justify-between">
          <span>Babina Greda</span>
          <span>27,00 &euro; // 203,43kn</span>
        </div>
        <div className="flex justify-between">
          <span>Banovci</span>
          <span>29,00 &euro; // 150,69kn</span>
        </div>
        <div className="flex justify-between">
          <span>Ime grada</span>
          <span>10,00 &euro; // 75,45kn</span>
        </div>
        <div className="flex justify-between">
          <span>Ime grada</span>
          <span>10,00 &euro; // 75,45kn</span>
        </div>
        <div className="flex justify-between">
          <span>Ime grada</span>
          <span>10,00 &euro; // 75,45kn</span>
        </div>
        <div className="flex justify-between">
          <span>Ime grada</span>
          <span>10,00 &euro; // 75,45kn</span>
        </div>
        <div className="flex justify-between">
          <span>Ime grada</span>
          <span>10,00 &euro; // 75,45kn</span>
        </div>
        <div className="flex justify-between">
          <span>Ime grada</span>
          <span>10,00 &euro; // 75,45kn</span>
        </div>
        <div className="flex justify-between">
          <span>Ime grada</span>
          <span>10,00 &euro; // 75,45kn</span>
        </div>
      </div>
    </div>
  );
};

export default CjenikEN;
