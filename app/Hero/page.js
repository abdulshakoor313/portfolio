"use client"
import React from 'react'

const page = () => {
  return (
    <>
   <div className=' flex justify-center py-6 bg-[#071013] text-white'>
      <div className='border border-gray-100 p-4 w-4xl shadow-neutral-100 flex items-center'>
        <div>
            <div><h1 className='font-bold text-4xl'>Abdul Shakoor</h1></div>
            <p className='text-justify p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="flex flex-wrap w-[1200px]">
<div className="border p-4 flex items-center justify-center w-1/2 h-40">
  <img src="https://img.icons8.com/?size=100&id=zRvbzAjx4VWY&format=png&color=000000" alt="HTML" className="h-full object-cover animate-pulse" />
</div>
<div className="border p-4 flex items-center justify-center w-1/2 h-40">
  <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS" className="h-full object-cover animate-pulse" />
</div>
<div className="border p-4 flex items-center justify-center w-1/2 h-40">
  <img src="https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000" alt="JavaScript" className="h-full object-cover animate-pulse" />
</div>
<div className="border p-4 flex items-center justify-center w-1/2 h-40">
  <img src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="React" className="h-full object-fill animate-pulse" />
</div>
</div>

      </div>
    </div>
    </>
  )
}

export default page
