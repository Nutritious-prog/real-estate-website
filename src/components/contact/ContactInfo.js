import React from "react";

import { FaMapMarkerAlt, FaRegEnvelope, FaTabletAlt } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="w-full xl:w-[40%] flex bg-[#C28563] py-5 xl:py-0">
      <div className="w-[80%] mx-auto my-auto tracking-widest mt-10">
        <p className="text-white py-2 text-md montserrat-font tracking-[0.2rem]">
          POROZMAWIAJMY!
        </p>
        <h2 className="font-bold text-5xl py-4 text-white tracking-wider">
          Skontaktuj się z nami!
        </h2>
        <p className="text-white py-2 text-lg">
          Nasi doświadczeni doradcy są gotowi, aby odpowiedzieć na Twoje pytania
          i umówić Cię na prywatną prezentację. Przyjdź i przekonaj się sam,
          dlaczego nasze nieruchomości są tak wyjątkowe. Czekamy na Twój telefon
          lub e-mail!
        </p>
        <div>
          <div className="flex w-full xl:p-5 p-2 text-left">
            <p className="text-[#C28563] text-5xl p-4 bg-white rounded-full">
              <FaMapMarkerAlt />
            </p>
            <div className="flex flex-col ml-8 my-auto">
              <p className="xl:text-xl text-xl font-bold text-white">
                NASZ ADRES
              </p>
              <p className="xl:text-lg text-md font-bold text-white">
                Zwierzyniecka 5 i 9, Skierniewice
              </p>
            </div>
          </div>
          <div className="flex w-full xl:p-5 p-2 text-left">
            <p className="text-[#C28563] text-5xl p-4 bg-white rounded-full">
              <FaRegEnvelope />
            </p>
            <div className="flex flex-col ml-8 my-auto">
              <p className="xl:text-xl text-xl font-bold text-white">
                NASZ EMAIL
              </p>
              <p className="xl:text-lg text-md font-bold text-white">
                <a href="mailto:biuro@zwierzynieckapark.com.pl">
                  biuro@zwierzynieckapark.com.pl
                </a>
              </p>
            </div>
          </div>
          <div className="flex w-full xl:p-5 p-2 text-left">
            <p className="text-[#C28563] text-5xl p-4 bg-white rounded-full">
              <FaTabletAlt />
            </p>
            <div className="flex flex-col ml-8 my-auto">
              <p className="xl:text-xl text-xl font-bold text-white">
                NASZ TELEFON
              </p>
              <p className="xl:text-lg text-md font-bold text-white">
                <a href="tel:507800077">+48 507 800 077</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
