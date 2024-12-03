import React from "react";

import { FaHome, FaShieldAlt, FaRoute, FaRulerCombined } from "react-icons/fa";

function Advantages() {
  return (
    <div name="info" className="w-full py-10 flex flex-col bg-[#FBF9F7]">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto">
        <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto">
          <div className="xl:w-[70%] w-[90%] mx-auto flex justify-center text-center flex-col text-white tracking-widest ">
            <span className="xl:text-lg text-[#C28563] text-md p-2 montserrat-font">
              ODKRYJ NASZE NIERUCHOMOŚCI
            </span>
            <h2 className="xl:text-6xl text-4xl p-5 text-black">
              CO ZNAJDZIESZ NA OSIEDLU ZWIERZYNIECKA PARK?
            </h2>
          </div>
        </div>
        <div className="flex xl:w-[80%] w-[90%] mx-auto justify-between py-5 xl:flex-row flex-col">
          <div className="flex w-full xl:w-1/2 p-5">
            <p className="pr-4 text-[#C28563] text-5xl p-4">
              <FaRoute />
            </p>
            <div className="flex flex-col">
            <p className="text-xl font-bold">Doskonała lokalizacja</p>
            <p className="text-lg text-[#666364]">
            Osiedle Zwierzyniecka Park znajduje się w dogodnej lokalizacji, blisko centrum miasta. To oznacza łatwy dostęp do sklepów, restauracji, szkół i innych udogodnień, które są niezbędne w codziennym życiu.
            </p>
            </div>
          </div>
          <div className="flex w-full xl:w-1/2 p-5">
            <p className="pr-4 text-[#C28563] text-5xl p-4">
              <FaRulerCombined />
            </p>
            <div className="flex flex-col">
            <p className="text-xl font-bold">Wysoka jakość wykończenia</p>
            <p className="text-lg text-[#666364]">
              Domy na osiedlu Zwierzyniecka Park cechuje wysoka jakość wykończenia. Projektując wnętrza, zwracamy uwagę na detale i używamy wysokiej jakości materiałów, aby zapewnić trwałość i elegancję.
            </p>
            </div>
          </div>
        </div>
        <div className="flex xl:w-[80%] w-[90%] mx-auto justify-between pb-5 xl:flex-row flex-col">
          <div className="flex w-full xl:w-1/2 p-5">
            <p className="pr-4 text-[#C28563] text-5xl p-4">
              <FaHome />
            </p>
            <div className="flex flex-col">
            <p className="text-xl font-bold">Przestronne wnętrza</p>
            <p className="text-lg text-[#666364]">
            Domy na osiedlu Zwierzyniecka Park są zaprojektowane tak, aby zapewnić przestrzeń i wygodę. Oferujemy różne układy pomieszczeń, które dostosowują się do różnych potrzeb i preferencji naszych mieszkańców.
            </p>
            </div>
          </div>
          <div className="flex w-full xl:w-1/2 p-5">
            <p className="pr-4 text-[#C28563] text-5xl p-4">
              <FaShieldAlt />
            </p>
            <div className="flex flex-col">
            <p className="text-xl font-bold">Prywatność i przestrzeń</p>
            <p className="text-lg text-[#666364]">
            Mieszkanie na osiedlu Zwierzyniecka Park to gwarancja prywatności i przestrzeni. Każdy dom jednorodzinny posiada indywidualną posesję, co daje poczucie prywatności i możliwość cieszenia się swoim własnym ogrodem i tarasem.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
