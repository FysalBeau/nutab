import React from "react";
import "./About.css"; 

interface AboutProps {
  onHoverChange: (hovered: boolean) => void;
}

const About: React.FC<AboutProps> = ({ onHoverChange }) => {
  const handleMouseEnter = () => {
    // Emit a custom event when mouse enters
    window.dispatchEvent(new CustomEvent('about-hover', { detail: { isHovering: true } }));
  };

  const handleMouseLeave = () => {
    // Emit a custom event when mouse leaves
    window.dispatchEvent(new CustomEvent('about-hover', { detail: { isHovering: false } }));
  };
  
  return (
    <section className="about-section">
      <div className="about-container">
      
        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="about-description">
        At <strong>NuTab</strong><sup>+</sup>, we see every project as an opportunity to innovate and exceed expectations
        </p>

        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="about-description">
        High-quality software that drives client success through expertise, reliability, and efficiency
        </p>

        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="about-description">
        Custom solutions that connect businesses with technology designed to grow with them
        </p>

      </div>
    </section>
  );
};

export default About;