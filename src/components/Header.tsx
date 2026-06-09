import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold text-white">
            My Portfolio
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-white font-medium">
            <Link to="/" className="hover:text-blue-500">Home</Link>
              <Link to="/projects" className="hover:text-blue-500">Projects</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <nav className="flex flex-col px-4 py-3 space-y-3 text-white">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/projects" className="hover:text-blue-500">Projects</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;