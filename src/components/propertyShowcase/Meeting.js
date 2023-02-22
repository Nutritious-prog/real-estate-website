import React from 'react'
import { FaGreaterThan } from "react-icons/fa";


function Meeting() {
  return (
    <div className='w-full flex  py-10 bg-[#C28563]'>
        <div className='w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col'>
        <div className="xl:w-[70%] w-[90%] mx-auto flex justify-center text-center flex-col text-white tracking-widest ">
          <h2 className="xl:text-5xl text-3xl p-5 font-bold">SKONTAKTUJ SIĘ Z NAMI PO WIĘCEJ INFORMACJI!</h2>
          <p className="tracking-normal text-xl py-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look. There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look. 
          </p>
          <div className="flex w-full xl:w-[60%] justify-evenly xl:p-5 mx-auto">
            <button className="flex bg-[#19130B] text-white tracking-widest xl:p-3 p-1 ease-in duration-500 hover:bg-white mr-1 hover:text-[#19130B]">
              <p className="p-2">CONTACT US!</p>
              <p className="p-3 font-thin">
                <FaGreaterThan />
              </p>
            </button>
            <button className="flex bg-slate-100 text-[#19130B] tracking-widest xl:p-3 p-1 ease-in duration-500 hover:text-slate-100 hover:bg-[#19130B] ml-1">
              <p className="p-2">GET IN TOUCH!</p>
              <p className="p-3 font-thin">
                <FaGreaterThan />
              </p>
            </button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Meeting