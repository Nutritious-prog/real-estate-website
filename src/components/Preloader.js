import React from 'react'

import logo from '../assets/logo-test-1.png'
function Preloader() {
  return (
    <div className='preloaderContainer   w-full h-[100vh] flex'>
        <div className='preloaderPhoto   m-auto animate-pulse w-[200px] h-auto'>
        <img className='w-100% h-auto' src={logo} alt="Logo" />
        </div>
    </div>
  )
}

export default Preloader