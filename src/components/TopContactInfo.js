import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function TopContactInfo() {
  return (
    <div className="contentContainer    w-full h-fit bg-[#19130B] flex">
      <div className="content    md:w-[90%] mx-auto flex text-slate-300 flex-shrink md:text-base text-xs">
        <div className="phoneData   flex xl:border-x-[1px] border-[#34291c] p-2 min-w-fit">
          <p className="p-3">
            <FaPhoneAlt />
          </p>
          <p className="p-2 font-bold">
            <a href="tel:507800077">+48 507 800 077</a>
          </p>
        </div>
        <div className="emailData   flex xl:border-x-[1px] xl:ml-5 border-[#34291c] p-2">
          <p className="p-3">
            <FaEnvelope />
          </p>
          <p className="p-2 font-bold">
            <a href="mailto:mgtartanus@gmail.com">
              biuro@zwierzynieckapark.pl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopContactInfo;
