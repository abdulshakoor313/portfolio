import React from "react";

const WorkHistory: React.FC = () => {
  const cardStyle =
    "bg-[#0f1f24] border border-gray-700 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-green-900/20 transition duration-300 hover:-translate-y-1";

  const titleStyle = "text-lg sm:text-xl font-semibold text-white";

  const subText = "text-sm text-gray-400";

  const listStyle = " list-inside text-sm text-gray-300 mt-2 space-y-1";

  return (
    <div className="flex justify-center bg-[#071013] text-white py-10 px-4">
      <div className="w-full max-w-5xl space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold">Work History</h1>
          <p className="text-gray-400 text-sm sm:text-base">
            My professional journey, projects, and technical experience
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6">

          {/* Web Programmer */}
          <div className={cardStyle}>
            <h2 className={titleStyle}>Web Programmer</h2>
            <p className="text-sm text-gray-300">
              Aptech Computer Education, Jamshoro
            </p>
            <span className={subText}>Jun 2024 – Apr 2025</span>

            <ul className={listStyle}>
              <li>Designed and developed student-level web applications.</li>
              <li>Conducted practical coding sessions and mentorship.</li>
              <li>Improved curriculum using modern frameworks and best practices.</li>
            </ul>
          </div>

            {/* Amazon */}
          <div className={cardStyle}>
            <h2 className={titleStyle}>Book Listing System On Upwork</h2>
            <p className={subText}>HTML, CSS </p>

            <h3 className="text-sm text-gray-300 mt-2">
             	Designed Amazon KDP, compliant HTML & CSS for book product listings
            </h3>
          </div>

          {/* E-commerce */}
          <div className={cardStyle}>
            <h2 className={titleStyle}>E-commerce Website</h2>
            <p className={subText}>HTML, CSS, JavaScript, PHP, MySQL</p>

            <ul className={listStyle}>
              <li>Built a fully functional responsive e-commerce platform.</li>
              <li>Implemented product management and order system.</li>
              <li>Designed admin dashboard for control panel features.</li>
            </ul>
          </div>

          {/* Portfolio */}
          <div className={cardStyle}>
            <h2 className={titleStyle}>Personal Portfolio Website</h2>
            <p className={subText}>HTML, CSS, JavaScript, PHP</p>

            <ul className={listStyle}>
              <li>Created a modern personal portfolio to showcase skills.</li>
              <li>Integrated contact form with email notification system.</li>
            </ul>
          </div>

        

          {/* Email Tool */}
          <div className={cardStyle}>
            <h2 className={titleStyle}>Bulk Email Sender Tool</h2>
            <p className={subText}>PHP, PHPMailer, CSV, XAMPP</p>

            <ul className={listStyle}>
              <li>Built bulk email system for marketing campaigns.</li>
              <li>Supports CSV-based email management.</li>
              <li>Runs locally using XAMPP without live server dependency.</li>
              <li>Automates branded email signature distribution.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkHistory;