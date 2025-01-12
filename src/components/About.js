import React from "react";
import "./About.css";
import team from "./assets/team.png"; // Update this to your image path
import instagramIcon from "./assets/instagram-white.png"; // Add your icon paths
import linkedinIcon from "./assets/linkedin-white.png";
import twitterIcon from "./assets/twitter-white.png";

const AboutSection = () => {
  return (
    <div className="about-section1">
      {/* "Who are we" section */}
      <h1 className="title1">Who are we?</h1>

      <div className="content1">
        <img src={team} alt="E-Cell Team" className="team-image1" />

        <div className="description1">
          <h2 className="sub-title1">E-CELL SRMIST</h2>
          <p className="text1">
            E-Cell, SRMIST is a student-run entrepreneurial body whose aim is to
            promote entrepreneurship among students. It was currently placed
            4th in the list of top 10 performing entrepreneurial organizations
            nationwide under the NEC (National Entrepreneurship Challenge)
            conducted by E-Cell, IIT Bombay.
          </p>
        </div>
      </div>

      {/* Connect with us Section */}
      <div className="connect-section1">
        <h2 className="connect-title1">Connect with us</h2>
        <div className="social-buttons1">
          <div className="social-card1">
            <div className="icon-container1">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon1"
              />
            </div>
            <div className="social-info1">
              <p className="social-title1">Instagram</p>
              <span className="social-subtitle1">Let's Connect</span>
            </div>
          </div>

          <div className="social-card1">
            <div className="icon-container1">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon1" />
            </div>
            <div className="social-info1">
              <p className="social-title1">LinkedIn</p>
              <span className="social-subtitle1">Let's Connect</span>
            </div>
          </div>

          <div className="social-card1">
            <div className="icon-container1">
              <img src={twitterIcon} alt="Twitter" className="social-icon1" />
            </div>
            <div className="social-info1">
              <p className="social-title1">Twitter</p>
              <span className="social-subtitle1">Let's Connect</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
