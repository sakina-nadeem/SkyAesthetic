import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ourcollaborators.css";

export default function OurCollaborators() {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "We are a fully insured, trusted and accredited Aesthetics Training Course Provider";

  const leftRef = useRef(null);

  useEffect(() => {
    let index = 0;
    let interval;

    const startTyping = () => {
      clearInterval(interval);
      setTypedText("");
      index = 0;
      interval = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) clearInterval(interval);
      }, 40);
    };

    // Trigger on hover
    const node = leftRef.current;
    node.addEventListener("mouseenter", startTyping);

    // Trigger on scroll into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTyping();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);

    return () => {
      clearInterval(interval);
      node.removeEventListener("mouseenter", startTyping);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-100">
      <div className="d-flex flex-wrap m-0 p-0">
        {/* Left Side Animated */}
        <div className="left-side-wrapper" ref={leftRef}>
          <div className="shimmer-overlay"></div>
          <div className="pulse-overlay"></div>

          <div className="left-content">
            <h5
              className="left-title"
              style={{ fontSize: "2rem", marginRight: "3rem" }}
            >
              WHO WE
            </h5>
            <h2
              className="left-subtitle"
              style={{ fontSize: "2.8rem", marginRight: "3rem" }}
            >
              COLLABORATE WITH
            </h2>
            <p
              className="left-text"
              style={{ fontSize: "0.8rem", marginRight: "3rem" }}
            >
              {typedText}
            </p>
          </div>
        </div>

        {/* Right Side Partners */}
        <div className="d-flex justify-content-center align-items-center flex-grow-1 right-side-wrapper">
          <div className="row w-100 justify-content-center align-items-center">
            <div className="col-6 col-md-3 d-flex justify-content-center mb-3 mb-md-0">
              <img
                src="/partner1.png"
                alt="Partner 1"
                className="partner-img img-fluid"
              />
            </div>
            <div className="col-6 col-md-3 d-flex justify-content-center mb-3 mb-md-0">
              <img
                src="/partner2.png"
                alt="Partner 2"
                className="partner-img img-fluid"
              />
            </div>
            <div className="col-6 col-md-3 d-flex justify-content-center mb-3 mb-md-0">
              <img
                src="/partner3.png"
                alt="Partner 3"
                className="partner-img img-fluid"
              />
            </div>
            <div className="col-6 col-md-3 d-flex justify-content-center mb-3 mb-md-0">
              <img
              style={{height: "70%", width: "70%",}}
                src="/partner4.png"
                alt="Partner 4"
                className="partner-img img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
