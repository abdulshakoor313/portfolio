"use client"
import React from 'react'

const page = () => {
  return (
    <>
   <div className=' flex justify-center bg-[#071013] text-white p-4 py-6'>
      <div className='border border-gray-100 p-4  shadow-neutral-100 flex items-center w-full max-w-4xl'>
        <div>
            <div className='flex-col sm:flex-row sm:itemes-center sm:gap-4'><h1 className='text-2xl'>Work History</h1></div>
            <div className='flex flex-wrap'>
                <h2 className="text-lg sm:text-xl text-gray-100 pr-7">Web App Faculty Member</h2>
                <p className='text-sm sm:text-base mt-1 block'>Aptech Computer Education, Jamshoro</p>
            </div>
            <span>Jun 2024 – April-2025</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default page
