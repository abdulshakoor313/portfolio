"use client"
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
 <>
  <div className='flex flex-col md:flex-row justify-center items-start gap-8 p-6 bg-[#071013] text-white'>
    
    {/* Portfolio Card */}
    <div className='flex-1 max-w-lg rounded-lg shadow-xl text-center p-4 bg-gray-900'>
            <img
        src='/images/portfolio.png'
        alt='Electric Serves'
        className='w-full h-auto rounded-t-lg mb-4'
      />
      <h1 className='text-xl text-amber-100 mb-2'>Portfolio</h1>
      <p className='text-sm text-gray-300'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
      </p>
      <Link href='https://portfolio-ten-kappa-7qp0rekt97.vercel.app/' passHref>
        <button className='mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600'>
          Live Demo
        </button>
      </Link>
    </div>

    {/* Book Author Card */}
    <div className='flex-1 max-w-lg rounded-lg shadow-xl text-center p-4 bg-gray-900'>
            <img
        src='/images/books.png'
        alt='Electric Serves'
        className='w-full h-auto rounded-t-lg mb-4'
      /> 
      <h1 className='text-xl text-amber-100 mb-2'>Book Author Website</h1>
      <p className='text-sm text-gray-300'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
      </p>
      <Link href='https://books-app-beige.vercel.app/' passHref>
        <button className='mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600'>
          Live Demo
        </button>
      </Link>
    </div>

    {/* Electric Serves Card */}
    <div className='flex-1 max-w-lg rounded-lg shadow-xl text-center p-4 bg-gray-900'>
      <img
        src='/images/elctrician.png'
        alt='Electric Serves'
        className='w-full h-auto rounded-t-lg mb-4'
      />
      <h1 className='text-xl text-amber-100 mb-2'>Electric Serves Website</h1>
      <p className='text-sm text-gray-300'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
      </p>
      <Link href='https://electrician-rho.vercel.app/' passHref>
        <button className='mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600'>
          Live Demo
        </button>
      </Link>
    </div>

  </div>
</>




    
  )
}

export default page


