"use client"
import React from 'react'

const page = () => {
  return (
    <>
    <div className="flex justify-center bg-[#071013] text-white py-6 px-4">
  <div className=" p-6 shadow-md w-full max-w-4xl space-y-6">

    {/* Section Title */}
    <h1 className="text-2xl font-semibold">Work History</h1>

    {/* Web Programmer */}
    <div className="space-y-1">
      <h2 className="text-lg sm:text-xl text-gray-100">Web Programmer</h2>
      <p className="text-sm sm:text-base">Aptech Computer Education, Jamshoro</p>
      <span className="text-sm text-gray-400 block">Jun 2024 – April 2025</span>
      <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
        <li>Designed and developed custom web applications for student projects.</li>
        <li>Conducted hands-on coding sessions and provided real-world project training.</li>
        <li>Improved the curriculum by introducing modern frameworks and best practices.</li>
      </ul>
    </div>

    {/* E-commerce Website */}
    <div className="space-y-1">
      <h2 className="text-lg sm:text-xl text-gray-100">E-commerce Website</h2>
      <p className="text-sm text-gray-400">HTML, CSS, JavaScript, PHP, MySQL</p>
      <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
        <li>Developed a fully functional e-commerce website.</li>
        <li>Implemented responsive design for an optimized mobile and desktop experience.</li>
        <li>Designed an admin panel to manage products, orders, and users.</li>
      </ul>
    </div>

    {/* Portfolio Website */}
    <div className="space-y-1">
      <h2 className="text-lg sm:text-xl text-gray-100">Personal Portfolio Website</h2>
      <p className="text-sm text-gray-400">HTML, CSS, JavaScript, PHP</p>
      <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
        <li>Built a modern, interactive portfolio website to showcase work and skills.</li>
        <li>Integrated a contact form with email notifications for client inquiries.</li>
      </ul>
    </div>

    {/* Amazon Book Code */}
    <div className="space-y-1">
      <h2 className="text-lg sm:text-xl text-gray-100">Book Listing Code</h2>
      <p className="text-sm text-gray-400">HTML, CSS</p>
      <p className="text-sm text-gray-300 mt-1">
        Built front-end code for listing books on Amazon's self-publishing platform.
      </p>
    </div>

    {/* Bulk Email Signature Tool */}
    <div className="space-y-1">
      <h2 className="text-lg sm:text-xl text-gray-100">Bulk Email Signature/Brand Sender</h2>
      <p className="text-sm text-gray-400">PHP, PHPMailer, CSV, XAMPP</p>
      <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
        <li>Created a bulk email sender using PHP Mailer for marketing campaigns.</li>
        <li>Sends promotional email signatures to a large customer base with one click.</li>
        <li>Works fully on localhost (XAMPP) without a live server.</li>
        <li>Uses a CSV file to manage and update customer emails efficiently.</li>
      </ul>
    </div>

  </div>
</div>























































    </>
  )
}

export default page
