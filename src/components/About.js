import React from "react";
import team from "./assets/team.png"; 
import instagramIcon from "./assets/instagram-white.png";
import linkedinIcon from "./assets/linkedin-white.png";
import twitterIcon from "./assets/twitter-white.png";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#011211] px-5 py-10 gap-8 text-white">
      <h1 className="font-bold text-4xl md:text-5xl text-[#20b475] text-center max-w-screen-lg">
        Who are we?
      </h1>

      <div className="flex flex-col gap-5 max-w-screen-lg rounded-lg overflow-hidden">
        <img src={team} alt="E-Cell Team" className="w-full rounded-md object-cover" />

        <div className="bg-[#022523] p-6 rounded-md">
          <h2 className="text-2xl font-semibold">E-CELL SRMIST</h2>
          <p className="text-lg leading-relaxed">
            E-Cell, SRMIST is a student-run entrepreneurial body focused on promoting
            entrepreneurship among students. We’re proud to have been ranked 4th among the
            top 10 performing entrepreneurial organizations nationwide under the NEC
            (National Entrepreneurship Challenge) hosted by E-Cell, IIT Bombay.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 bg-[#011211] p-5 rounded-lg shadow-md max-w-screen-lg">
        <h2 className="text-3xl font-medium text-center">Connect with us</h2>

        <div className="flex flex-wrap justify-center gap-5">
  {[
    { icon: instagramIcon, label: "Instagram", color: "#066602" },
    { icon: linkedinIcon, label: "LinkedIn", color: "#066602" },
    { icon: twitterIcon, label: "Twitter", color: "#066602" },
  ].map(({ icon, label, color }, index) => (
    <div
      key={index}
      className="flex items-center gap-4 bg-white p-4 w-64 rounded-lg shadow-md hover:scale-105 transition-transform"
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-md"
        style={{ backgroundColor: color }}
      >
        <img src={icon} alt={label} className="w-8 h-8" />
      </div>
      <div>
        <p className="text-lg font-semibold text-[#011211]">{label}</p>
        <span className="text-sm text-gray-500">Let’s Connect</span>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default AboutSection;