import taxi from "./assets/images/taxi.svg";
import { useEffect } from "react";

const Cjenik = () => {
  function titleSet() {
    useEffect(() => {
      document.title = "Cjenik - Žuti Taxi Vinkovci";
    }, []);
  }

  titleSet();

  const mjesta = [
    {
      mjesto: "Andrijaševci",
      cijena: "8,00 € // 60,27kn",
      id: 1,
    },
    {
      mjesto: "Antunovac",
      cijena: "15,00 € // 113,01kn",
      id: 2,
    },
    {
      mjesto: "Babina Greda",
      cijena: "27,00 € // 203,43kn",
      id: 3,
    },
    {
      mjesto: "Banovci",
      cijena: "20,00 € // 150,69kn",
      id: 4,
    },
    {
      mjesto: "Berak",
      cijena: "16,00 € // 120,55kn",
      id: 5,
    },
    {
      mjesto: "Bobota",
      cijena: "16,00 € // 120,55kn",
      id: 6,
    },
    {
      mjesto: "Bogdanovci",
      cijena: "12,00 € // 90,41kn",
      id: 7,
    },
    {
      mjesto: "Borovo Selo",
      cijena: "19,00 € // 143,15kn",
      id: 8,
    },
    {
      mjesto: "Bošnjaci",
      cijena: "28,00 € // 210,76kn",
      id: 9,
    },
    {
      mjesto: "Bršadin",
      cijena: "12,00 € // 90,41kn",
      id: 10,
    },
    {
      mjesto: "Cerna",
      cijena: "13,00 € // 97,94kn",
      id: 11,
    },
    {
      mjesto: "Čepin",
      cijena: "32,00 € // 241,10kn",
      id: 12,
    },
    {
      mjesto: "Donje Novo Selo",
      cijena: "26,00 € // 195,89kn",
      id: 13,
    },
    {
      mjesto: "Drenovci",
      cijena: "39,00 € // 293,84kn",
      id: 14,
    },
    {
      mjesto: "Đakovo",
      cijena: "32,00 € // 241,10kn",
      id: 15,
    },
    {
      mjesto: "Đeletovci",
      cijena: "18,00 € // 135,62kn",
      id: 16,
    },
    {
      mjesto: "Gaboš",
      cijena: "12,00 € // 90,41kn",
      id: 17,
    },
    {
      mjesto: "GP Bajakovo",
      cijena: "36,00 € // 271,24kn",
      id: 18,
    },
    {
      mjesto: "GP Orašje",
      cijena: "27,00 € // 203,43kn",
      id: 19,
    },
    {
      mjesto: "Gradište",
      cijena: "19,00 € // 143,15kn",
      id: 20,
    },
    {
      mjesto: "Gunja",
      cijena: "36,00 € // 271,24kn",
      id: 21,
    },
    {
      mjesto: "Gundinci",
      cijena: "31,00 € // 233,56kn",
      id: 22,
    },
    {
      mjesto: "Ernestinovo",
      cijena: "23,00 € // 173,29kn",
      id: 23,
    },
    {
      mjesto: "Ilača",
      cijena: "23,00 € // 173,29kn",
      id: 24,
    },
    {
      mjesto: "Ilok",
      cijena: "43,00 € // 323,98kn",
      id: 25,
    },
    {
      mjesto: "Ivankovo",
      cijena: "8,00 € // 60,27kn",
      id: 26,
    },
    {
      mjesto: "Jankovci",
      cijena: "9,00 € // 67,81kn",
      id: 27,
    },
    {
      mjesto: "Jarmina",
      cijena: "8,00 € // 60,27kn",
      id: 28,
    },
    {
      mjesto: "Komletinci",
      cijena: "22,00 € // 165,75kn",
      id: 29,
    },
    {
      mjesto: "Korođ",
      cijena: "19,00 € // 143,15kn",
      id: 30,
    },
  ];

  return (
    <div className="text-white flex flex-col items-center overflow-x-hidden">
      <div className="w-screen bg-taxiYellow flex justify-center gap-16">
        <img src={taxi} className="w-12 hidden md:block" />
        <h1 className="text-taxiBlack p-4 font-bold text-2xl">
          Cjenik izvan Vinkovaca
        </h1>
        <img src={taxi} className="w-12 hidden md:block" />
      </div>
      <div className="w-full h-8 blackAndYellowStatic" />
      <div className="w-[50vw] pt-8 flex flex-col gap-4 px-8 xl:px-24 shadowCjenik">
        {mjesta.map((mjesto) => (
          <div className="flex justify-between list-none" key={mjesto.id}>
            <li>{mjesto.mjesto}</li>
            <span></span>
            <li>{mjesto.cijena}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cjenik;
