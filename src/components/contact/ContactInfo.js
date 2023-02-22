import React from "react";

import { FaMapMarkerAlt, FaRegEnvelope, FaTabletAlt } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="w-full xl:w-[40%] flex bg-[#C28563]">
      <div className="p-8">
        <p className="text-white py-2 text-md montserrat-font tracking-[0.2rem]">
          LET'S TALK
        </p>
        <h2 className="font-bold text-5xl py-4 text-white tracking-wider">
          CONTACT US
        </h2>
        <p className="text-white py-2 text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <div>
          <div className="flex w-full p-5">
            <p className="pr-4 text-[#C28563] text-5xl p-4 bg-white rounded-full">
              <FaMapMarkerAlt />
            </p>
            <div className="flex flex-col mx-4">
              <p className="text-2xl font-bold text-white">OUR ADDRESS</p>
              <p className="text-xl font-bold text-white">
                Themeforest, Envato HQ 24 Fifth st.,
              </p>
              <p className="text-xl font-bold text-white">Los Angeles, USA</p>
            </div>
          </div>
          <div className="flex w-full p-5">
            <p className="pr-4 text-[#C28563] text-5xl p-4 bg-white rounded-full">
              <FaRegEnvelope />
            </p>
            <div className="flex flex-col mx-4">
              <p className="text-2xl font-bold text-white">OUR EMAIL</p>
              <p className="text-xl font-bold text-white">
                jan.kowalski@gmail.com
              </p>
            </div>
          </div>
          <div className="flex w-full p-5">
            <p className="pr-4 text-[#C28563] text-5xl p-4 bg-white rounded-full">
              <FaTabletAlt />
            </p>
            <div className="flex flex-col mx-4">
              <p className="text-2xl font-bold text-white">OUR PHONE</p>
              <p className="text-xl font-bold text-white">
                +48 123-456-789
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
