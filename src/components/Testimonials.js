import React from 'react'
import { FaStar } from "react-icons/fa";

import './Advantages.css'

function Testimonials() {
  return (
    <div className="w-full flex testimonials pb-10">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col">
        {/* UP PART */}
        <div className="w-[75%] text-center mx-auto flex flex-col py-14 mt-10">
          <p className="text-[#C28563] py-2 text-lg montserrat-font">TESTIMONIALS</p>
          <h2 className="font-bold text-5xl py-4 text-white">SEE WHAT OUR CLIENTS WANT TO SAYS</h2>
        </div>
        {/* DOWN PART */}
        <div className="w-full bg-white flex xl:flex-row flex-col mx-auto text-center relative">
          <div className="xl:w-1/2 w-full text-center xl:text-left border-r-[1px] border-slate-200 flex flex-col px-10 py-5">
            <p className="py-4 text-[#C28563] text-xl mx-auto xl:mx-0 flex justify-center">
              <p className='px-1'><FaStar /></p>
              <p className='px-1'><FaStar /></p>
              <p className='px-1'><FaStar /></p>
              <p className='px-1'><FaStar /></p>
              <p className='px-1'><FaStar /></p>
            </p>
            <p className='text-xl text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour publishing packages and web page.</p>

            <div className='flex w-full mt-5'>
            <span class="w-[10%] transition-all duration-500 h-0.5 bg-[#C28563] mx-auto"></span>

            </div>
            <div className="w-[75%] text-center mx-auto flex flex-col">
            <h2 className="font-thin text-2xl py-4 mt-2">JAN KOWALSKI</h2>

          <p className="text-[#C28563] py-2 text-lg montserrat-font">ARCHITEKT</p>
        </div>
          </div>
          <div className="xl:w-1/2 w-full text-center xl:text-left border-r-[1px] border-slate-200 flex flex-col px-10 py-5">
            <p className="py-4 text-[#C28563] text-xl mx-auto xl:mx-0 flex justify-center">
              <p className='px-1'><FaStar /></p>
              <p className='px-1'><FaStar /></p>
              <p className='px-1'><FaStar /></p>
              <p className='px-1'><FaStar /></p>
              <p className='px-1'><FaStar /></p>
            </p>
            <p className='text-xl text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour publishing packages and web page.</p>

            <div className='flex w-full mt-5'>
            <span class="w-[10%] transition-all duration-500 h-0.5 bg-[#C28563] mx-auto"></span>

            </div>
            <div className="w-[75%] text-center mx-auto flex flex-col">
            <h2 className="font-thin text-2xl py-4 mt-2">ADAM NOWAK</h2>

          <p className="text-[#C28563] py-2 text-lg montserrat-font">DEWELOPER</p>
        </div>
          </div>
          {/* CIRCLE */}
          <div className='absolute hidden rounded-full bg-[#C28563] w-[100px] h-[100px] justify-center align-middle xl:flex flex-col text-white center_using_calc bottom-5'>
            <p className='text-4xl font-bold'>92%</p>
            <p>od 2020</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials