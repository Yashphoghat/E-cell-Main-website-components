import React, { useState } from "react";
import logo from "./assets/E-cell-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#002421] text-white py-[20px] px-[29px]">
      <div className="max-w-[1383px] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img src={logo} alt="E-Cell Logo" className="w-[150px] h-auto" />

          {/* Hamburger Menu Button */}
          <button
            className="sm:hidden flex items-center text-white"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } sm:flex flex-col sm:flex-row sm:items-center sm:gap-0 absolute sm:static top-[100px] left-0 w-full sm:w-auto bg-[#002421] sm:bg-transparent transition-all duration-300`}
          >
            <a
              href="#home"
              className="text-[16px] font-medium px-[15px] py-[10px] sm:py-0 sm:px-[20px] transition-colors duration-300 hover:text-[#20B475]"
            >
              Home
            </a>
            <a
              href="#events"
              className="text-[16px] font-medium px-[15px] py-[10px] sm:py-0 sm:px-[20px] transition-colors duration-300 hover:text-[#20B475]"
            >
              Events
            </a>
            <a
              href="#team"
              className="text-[16px] font-medium px-[15px] py-[10px] sm:py-0 sm:px-[20px] transition-colors duration-300 hover:text-[#20B475]"
            >
              Team
            </a>
            <a
              href="#about"
              className="text-[16px] font-medium px-[15px] py-[10px] sm:py-0 sm:px-[20px] transition-colors duration-300 hover:text-[#20B475]"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
