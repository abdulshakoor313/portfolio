'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#071013] text-white py-4 px-6">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold">My Portfolio</h1>

        {/* Hamburger Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu for desktop */}
        <nav className="hidden sm:flex gap-8 text-sm">
          <Link href="/Hero" className="hover:text-amber-400">Home</Link>
          <Link href="/Projects" className="hover:text-amber-400">Projects</Link>
          <Link href="/Socials" className="hover:text-amber-400">Socials</Link>
          <Link href="/Contact" className="hover:text-amber-400">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col items-center gap-4 text-sm">
          <Link href="/Hero" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">Home</Link>
          <Link href="/Projects" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">Projects</Link>
          <Link href="/Socials" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">Socials</Link>
          <Link href="/Contact" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
