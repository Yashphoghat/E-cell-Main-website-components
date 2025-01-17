import React from "react";
import insta from './assets/instagram.png';
import LinkedIn from './assets/linkedin.png';
import twitter from './assets/twitter.png';
import myImage from './assets/E-cell-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#011211] text-white py-[35px] px-[29px]">
      <div className="max-w-[1383px] mx-auto">
        <div className="text-center mb-[25px]">
          <h2 className="text-[24px] font-bold mb-[15px]">Connect with us</h2>
          <div className="flex justify-center gap-[36px]">
            <a
              href="https://www.instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#20B475] rounded-full w-[71.4px] h-[71.4px] flex items-center justify-center"
            >
              <img src={insta} alt="Instagram" className="w-[34px] h-[34px]" />
            </a>
            <a
              href="https://www.linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#20B475] rounded-full w-[71.4px] h-[71.4px] flex items-center justify-center"
            >
              <img src={LinkedIn} alt="LinkedIn" className="w-[34px] h-[34px]" />
            </a>
            <a
              href="https://www.twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#20B475] rounded-full w-[71.4px] h-[71.4px] flex items-center justify-center"
            >
              <img src={twitter} alt="Twitter" className="w-[34px] h-[34px]" />
            </a>
          </div>
        </div>

        <div className="text-center mb-[25px]">
          <img src={myImage} alt="E-Cell SRMIST Logo" className="w-[105px] h-[52px] mx-auto" />
          <p className="text-[14px] opacity-50 mt-[15px]">All rights reserved to E-Cell SRMIST</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-[52px]">
            <a href="#privacy" className="text-[16px] font-medium hover:text-[#20B475]">
              Privacy Policy
            </a>
            <a href="#cookies" className="text-[16px] font-medium hover:text-[#20B475]">
              Cookies Policy
            </a>
          </div>
          <p className="text-[16px] font-medium">
            Created by <span className="text-[#FFD700]">Designers</span> and <span className="text-[#FFD700]">Developers</span> at E-Cell SRMIST
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;