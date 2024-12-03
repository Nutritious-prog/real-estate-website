import React from 'react'
import Breadcrumb from './Breadcrumb'

function Title() {
  return (
    <div className='w-full flex bg-[#FBF9F7] border-b-[1px] border-slate-100'>
        <div className='w-[90%] mx-auto xl:p-5 p-2 text-center xl:text-left'>
            <h1 className='text-6xl xl:px-5 px-2'>O NAS</h1>
            <Breadcrumb />
        </div>
    </div>
  )
}

export default Title