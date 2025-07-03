"use client"
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
<div className=' flex justify-center py-6 bg-[#071013] text-white gap-40 border-white'>
  <div className=''>
    <h1 className='text-amber-100'>Book Auther Website</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <h1 ><Link href={"https://books-app-beige.vercel.app/"}>Live Demo</Link></h1>

  </div>
</div>


<h1 ><Link href={"https://portfolio-ten-kappa-7qp0rekt97.vercel.app/"}>Portfolio</Link></h1>
      <h1 ><Link href={"https://electrician-rho.vercel.app/"}>Electric Serves Website</Link></h1>
   </>
    
  )
}

export default page


