import React from 'react'
import { FaStar } from "react-icons/fa";

import './Advantages.css'

function Testimonials() {
  return (
    <div className="w-full flex testimonials pb-10">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col">
        {/* UP PART */}
        <div className="w-[75%] text-center mx-auto flex flex-col py-14 mt-10">
          <p className="text-[#C28563] py-2 text-lg montserrat-font">REFERENCJE</p>
          <h2 className="font-bold text-5xl py-4 text-white">SPRAWDŹ CO SĄDZĄ KLIENCI KTÓRZY JUŻ NAM ZAUFALI</h2>
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
            <p className='text-xl text-center'>Jestem absolutnie zachwycony moim poprzednim mieszkaniem na tym osiedlu. Wysoka jakość wykończenia, przestronne pomieszczenia i piękny ogród sprawiają, że czuję się tutaj jak w prawdziwym domu. Dodatkowo, lokalizacja blisko centrum miasta i dostęp do udogodnień sprawiają, że codzienne życie jest naprawdę wygodne i komfortowe.</p>

            <div className='flex w-full mt-5'>
            <span class="w-[10%] transition-all duration-500 h-0.5 bg-[#C28563] mx-auto"></span>

            </div>
            <div className="w-[75%] text-center mx-auto flex flex-col">
            <h2 className="font-thin text-2xl py-4 mt-2">JAN KOWALSKI</h2>

          <p className="text-[#C28563] py-2 text-lg montserrat-font">Mieszkaniec</p>
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
            <p className='text-xl text-center'>Mieszkanie na tym osiedlu to była dla mnie najlepsza decyzja. Bezpieczna infrastruktura, spokojna okolica i liczne tereny rekreacyjne w pobliżu dają mi poczucie komfortu i relaksu. Dodatkowo, sąsiedztwo sklepów i restauracji sprawia, że wszystko jest na wyciągnięcie ręki. Jestem bardzo zadowolony z jakości wykonania mieszkania i profesjonalizmu dewelopera.</p>

            <div className='flex w-full mt-5'>
            <span class="w-[10%] transition-all duration-500 h-0.5 bg-[#C28563] mx-auto"></span>

            </div>
            <div className="w-[75%] text-center mx-auto flex flex-col">
            <h2 className="font-thin text-2xl py-4 mt-2">ADAM NOWAK</h2>

          <p className="text-[#C28563] py-2 text-lg montserrat-font">Mieszkaniec</p>
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