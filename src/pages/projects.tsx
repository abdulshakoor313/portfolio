import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-start gap-8 p-6 bg-[#071013] text-white">

      {/* Portfolio Card */}
      <div className="flex-1 max-w-lg rounded-lg shadow-xl text-center p-4 bg-gray-900">
        <img
          src="/images/portfolio.png"
          alt="Portfolio"
          className="w-full h-auto rounded-t-lg mb-4"
        />

        <h1 className="text-xl text-amber-100 mb-2">Portfolio</h1>

        <p className="text-sm text-gray-300">
          A clean, responsive portfolio to showcase my web development work,
          skills, and contact details. Designed for clarity and fast access to
          projects and code samples.
        </p>

        <a
          href="https://portfolio.abdul-shakoor.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
        >
          Live Demo
        </a>
      </div>

      {/* Book Author Card */}
      <div className="flex-1 max-w-lg rounded-lg shadow-xl text-center p-4 bg-gray-900">
        <img
          src="/images/books.png"
          alt="Book Author Website"
          className="w-full h-auto rounded-t-lg mb-4"
        />

        <h1 className="text-xl text-amber-100 mb-2">
          Book Author Website
        </h1>

        <p className="text-sm text-gray-300">
          A personal site for an independent author featuring book listings,
          an author bio, and blog updates — designed for easy reading and smooth navigation.
        </p>

        <a
          href="https://books-app-beige.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
        >
          Live Demo
        </a>
      </div>

      {/* Electric Services Card */}
      <div className="flex-1 max-w-lg rounded-lg shadow-xl text-center p-4 bg-gray-900">
        <img
          src="/images/elctrician.png"
          alt="Electric Services"
          className="w-full h-auto rounded-t-lg mb-4"
        />

        <h1 className="text-xl text-amber-100 mb-2">
          Electric Services Website
        </h1>

        <p className="text-sm text-gray-300">
          A service-focused website built for an electrician to highlight offerings,
          client testimonials, and booking information — fully responsive and mobile-friendly.
        </p>

        <a
          href="https://electrician-rho.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
        >
          Live Demo
        </a>
      </div>

    </div>
  );
};

export default Projects;