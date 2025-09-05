// src/pages/AboutUs.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./aboutus.css";

export default function AboutUs() {
  return (
    <div className="aboutus-page">
      {/* Background Video */}
      <div className="intro-bg-video">
        <video autoPlay muted loop playsInline id="introVideo">
          <source
            src="https://demo.awaikenthemes.com/assets/videos/glowix-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay Content */}
      <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="display-3 fw-bold text-white">About Us</h1>
        <p className="lead text-white px-3 px-md-5">
          We are passionate about creating aesthetic, user-friendly, and
          innovative solutions that help brands grow digitally. Our goal is to
          combine design and technology to deliver experiences that leave a
          lasting impact.
        </p>
      </div>
    </div>
  );
}
