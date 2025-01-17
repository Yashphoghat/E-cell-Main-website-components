import React from "react";
import myImage from './assets/E-cell-logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#002421] w-full h-[109.12px]">
      <div className="flex justify-between items-center w-[90%] max-w-[1350px] h-full mx-auto px-4">
        <div className="logo">
          <img src={myImage} alt="E-Cell Logo" className="w-[150px] h-auto" />
        </div>
        <div className="flex gap-[50px]">
          <a href="#home" className="text-white text-[18px] leading-[28px] font-poppins transition-colors duration-300 hover:text-[#20B475]">
            Home
          </a>
          <a href="#events" className="text-white text-[18px] leading-[28px] font-poppins transition-colors duration-300 hover:text-[#20B475]">
            Events
          </a>
          <a href="#team" className="text-white text-[18px] leading-[28px] font-poppins transition-colors duration-300 hover:text-[#20B475]">
            Team
          </a>
          <a href="#about" className="text-white text-[18px] leading-[28px] font-poppins transition-colors duration-300 hover:text-[#20B475]">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;