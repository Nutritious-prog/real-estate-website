import React from 'react'
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function TopContactInfo() {
  return (
    <div className='contentContainer    w-full h-fit bg-[#19130B] flex'>
        <div className='content    md:w-[90%] mx-auto flex text-slate-300 flex-shrink md:text-base text-xs'>
            <div className='phoneData   flex border-x-[1px] border-[#34291c] p-2 min-w-fit'>
                <p className='p-3'><FaPhoneAlt /></p>
                <p className='p-2 font-bold'>+48 123 456 789</p>
            </div>
            <div className='emailData   flex border-x-[1px] ml-5 border-[#34291c] p-2'>
                <p className='p-3'><FaEnvelope /></p>
                <p className='p-2 font-bold'>jan.kowalski@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default TopContactInfo