import React from "react";
import { FaGreaterThan } from "react-icons/fa";

import { Link as OuterLink } from "react-router-dom";

function Meeting() {
  return (
    <div className="w-full flex  py-10 bg-[#C28563]">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col">
        <div className="xl:w-[70%] w-[90%] mx-auto flex justify-center text-center flex-col text-white tracking-widest ">
          <h2 className="xl:text-5xl text-3xl p-5 font-bold">
            SKONTAKTUJ SIĘ Z NAMI PO WIĘCEJ INFORMACJI!
          </h2>
          <p className="tracking-normal text-xl py-3">
            Zachęcamy do skontaktowania się z naszym biurem i umówienia się na
            osobiste obejrzenie naszych nieruchomości. Nie ma nic bardziej
            inspirującego niż możliwość zobaczenia ich na własne oczy i poczucie
            atmosfery, która sprawi, że poczujesz się jak w domu. Nasi
            doświadczeni doradcy są gotowi odpowiedzieć na Twoje pytania,
            przedstawić szczegóły dotyczące dostępnych nieruchomości i umówić
            Cię na prywatną prezentację. Przyjdź i odkryj potencjał tych
            pięknych domków jednorodzinnych. Już teraz czekamy na Twój telefon
            lub e-mail!
          </p>
          <div className="flex w-full xl:w-[60%] justify-evenly xl:p-5 mx-auto">
            <OuterLink to="/kontakt">
              <button className="flex bg-slate-100 text-[#19130B] tracking-widest xl:p-3 p-1 ease-in duration-500 hover:text-slate-100 hover:bg-[#19130B] ml-1">
                <p className="p-2">DO DZIEŁA!</p>
                <p className="p-3 font-thin">
                  <FaGreaterThan />
                </p>
              </button>
            </OuterLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
