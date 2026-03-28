import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/logo-white.png"
            alt="TEDx UNS"
            className="h-6 md:h-7 object-contain"
          />
        </div>

        {/* Center Menu - Desktop */}
        <div
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-sm text-gray-200"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#theme" className="hover:text-white transition">Event</a>
          <a href="#card" className="hover:text-white transition">Merchandise</a>
          <a href="#card" className="hover:text-white transition">Partnership</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            className="bg-[#d6b1a3] text-black px-5 py-2 rounded-full text-sm hover:opacity-90 transition"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Login
          </button>

          {/* Hamburger - Mobile Only */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-6 flex flex-col gap-4 text-sm text-gray-200"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <a href="#hero" onClick={() => setMenuOpen(false)} className="hover:text-white transition pt-2">Home</a>
          <a href="#theme" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Event</a>
          <a href="#card" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Merchandise</a>
          <a href="#card" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Partnership</a>
        </div>
      )}
    </div>
  );
}