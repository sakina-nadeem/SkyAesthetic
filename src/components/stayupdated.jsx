import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function StayUpdated() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center position-relative"
      style={{
        backgroundImage: "url('/stayupdated-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "277.6px",
        overflow: "hidden",
      }}
    >
      {/* Transparent Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#23A6F0",
          opacity: 0.5,   // adjust for lighter/darker effect
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-12">
            <h5
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "2%",
                textTransform: "uppercase",
                color: "#000",
              }}
            >
              Stay updated with us
            </h5>

            <h2
              className="mt-2"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "100%",
                letterSpacing: "2%",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              Newsletter
            </h2>

            <p
              className="mx-auto mt-3"
              style={{
                maxWidth: "565.6px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "140%",
                letterSpacing: "2%",
                textAlign: "center",
                color: "#fff",
              }}
            >
              Get the latest courses, updates, and industry insights straight to
              your inbox
            </p>
          </div>

          {/* Input + Button */}
          <div className="col-12 d-flex justify-content-center mt-4">
            <div className="input-group" style={{ maxWidth: "500px" }}>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email Address"
                style={{
                  height: "44.8px",
                  borderRadius: "4px 0 0 4px",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  border: "none",
                  color: "#000",
                  marginRight: "1rem",
                }}
              />
              <button
                className="btn"
                type="button"
                style={{
                  width: "151px",
                  height: "44px",
                  borderRadius: "0 2.69px 2.69px 0",
                  backgroundColor: "#000",
                  color: "#fff",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
