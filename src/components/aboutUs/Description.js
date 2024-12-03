import React from "react";

import "./Description.css";

function Description() {
  return (
    <div className="w-screen flex mt-10 pb-10 flex-col">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex justify-between xl:flex-row flex-col">
        {/* left */}
        <div className="xl:w-1/2 p-3 w-full tracking-widest">
          <p className="text-black py-2 text-lg montserrat-font flex items-center">
            WITAMY W{" "}
            <p className="text-[#C28563] py-2 text-lg montserrat-font p-1 font-bold">
              PARKU!
            </p>
          </p>
          <h1 className="font-bold text-5xl py-4">SPRAWDŹ KIM JESTEŚMY!</h1>
          <p
            className="tracking-normal text-xl py-3 text-justify first-line:tracking-widest
                        first-letter:text-7xl first-letter:font-bold
                        first-letter:mr-3 first-letter:float-left"
          >
            Przedsiębiorstwo Budowlano Handlowe mgr inż. Marek{" "}
            <span className="text-[#C28563] font-bold">TARTANUS</span> jest
            firmą działającą w branży budowlanej nieprzerwanie od 1996 roku.
            Realizujemy projekty mieszkaniowe, komercyjne, ochrony zdrowia,
            obiekty związane z branżą turystyczną i przemysłem. Firmą kieruje
            zespół ludzi posiadający wieloletnie doświadczenie związane z
            rynkiem nieruchomości, co pozwoliło nam na wypracowanie i
            ugruntowanie pozycji solidnego wykonawcy i organizatora procesu
            budowlanego.
          </p>

          <div className="flex w-full justify-between border-b-[1px] border-slate-200 xl:flex-row flex-col"></div>

          <p className="tracking-normal text-xl py-3 text-justify border-b-[1px] border-slate-200">
            Od 2015 roku realizujemy projekt deweloperski{" "}
            <span className="text-[#C28563] font-bold">ZWIERZYNIECKA PARK</span>{" "}
            w Skierniewicach polegający na stworzeniu nowego osiedla domów
            jednorodzinnych w zabudowie szeregowej. Obecnie realizowany jest
            kolejny etap polegający na wznoszeniu ośmiu domów.
          </p>
        </div>
        
        {/* right */}
        <div className="xl:w-[45%] w-full flex p-3">
          <div className="w-[100%] h-full my-auto plan-photo"></div>
        </div>
      </div>
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex">
        <p className="tracking-normal text-xl p-3 xl:columns-2 xl:gap-40 text-justify">
          Przedsiębiorstwo Budowlano Handlowe mgr inż. Marek{" "}
          <span className="text-[#C28563] font-bold">TARTANUS</span> jest firmą
          działającą w branży budowlanej nieprzerwanie od 1996 roku. Realizujemy
          projekty mieszkaniowe, komercyjne, ochrony zdrowia, obiekty związane z
          branżą turystyczną i przemysłem. Firmą kieruje zespół ludzi
          posiadający wieloletnie doświadczenie związane z rynkiem
          nieruchomości, co pozwoliło nam na wypracowanie i ugruntowanie pozycji
          solidnego wykonawcy i organizatora procesu budowlanego.
        </p>
      </div>
    </div>
  );
}

export default Description;
