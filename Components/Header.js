import React from 'react'
import Link from 'next/link'



const Header = () => {
  return (
    <>
  <div className=' flex justify-center py-6 bg-[#071013] text-white' >
    <div className='border-4 rounded flex gap-40 px-6 py-2'>
      <Link href={"/"}>Home</Link>
      <Link href={"/Projects"}>Projects</Link>
      <Link href={"/"}>Socials</Link>
      <Link href={"/"}>Contact</Link>
    </div>
  </div>
    </>
  )
}

export default Header

