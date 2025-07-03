"use client"
import React from 'react'

const page = () => {
  return (
    <>
   <div className=' flex justify-center py-6 bg-[#071013] text-white'>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 border border-gray-100 p-4 w-full max-w-5xl shadow-neutral-100">
        <div>
            <div><h1 className='font-bold text-4xl'>Abdul Shakoor</h1></div>
            <h2 className="text-lg sm:text-xl text-gray-100">Web Developer</h2>

            <p className='text-justify p-4 text-sm sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="w-full grid grid-cols-2 gap-1">
<div className="border p-4 flex items-center justify-center h-40">
  <img src="https://img.icons8.com/?size=100&id=zRvbzAjx4VWY&format=png&color=000000" alt="HTML" className="h-full w-auto object-contain animate-pulse" />
</div>
<div className="border p-4 flex items-center justify-center h-40">
  <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS" className="h-full w-auto object-contain animate-pulse" />
</div>
<div className="border p-4 flex items-center justify-center h-40">
  <img src="https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000" alt="JavaScript" className="h-full w-auto object-contain animate-pulse" />
</div>
<div className="border p-4 flex items-center justify-center h-40">
  <img src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="React" className="h-full w-auto object-contain animate-pulse" />
</div>
</div>
      </div>
    </div>
    </>
  )
}

export default page
