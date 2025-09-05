import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function AestheticsSection() {
   const navigate = useNavigate();

  return (
    <section
      className="position-relative text-white"
      style={{
        backgroundImage: "url('/bg-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Left side transparent overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%", // only left half
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(88, 167, 212, 0.9) 0%, rgba(66, 166, 224, 0.6) 100%)",
          zIndex: 1,
        }}
      ></div>

      <div
        className="container-fluid h-100 position-relative"
        style={{ zIndex: 2 }}
      >
        <div className="row h-100">
          {/* Left Column Content */}
          <div className="col-lg-6 col-md-12 d-flex align-items-center">
            <div className="p-4">
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "140%",
                  letterSpacing: "0.02em",
                  margin: 0,
                  padding: "90px",
                  paddingLeft: "7rem",
                }}
              >
                Founded by <strong>Noreen Aslam</strong>, we are your premier
                destination for the ultimate in aesthetics training courses in
                Manchester. Our courses offer a blend of cutting-edge techniques
                and practical insights designed to empower you with the skills
                necessary to thrive in this evolving industry. From mastering
                advanced injectables to perfecting facial rejuvenation methods,
                our curated curriculum caters to a range of skill levels and
                interests. Join us as we uncover the artistry behind aesthetic
                excellence and take your career to new heights. Let’s embark on
                this journey together!
              </p>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="col-lg-6 col-md-12 p-5 text-start d-flex flex-column justify-content-center">
            <h2
              style={{
                fontFamily: "Syne",
                fontSize: "32px",
                lineHeight: "120%",
                letterSpacing: "2%",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              <div>Aesthetics</div>
              <div>Training Courses</div>
              <div>in Manchester</div>
            </h2>

            <p
              className="mt-3"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "150%",
                letterSpacing: "2%",
                color: "#fff",
              }}
            >
              Accredited training designed to help you master skills with
              confidence and clarity.
            </p>

            {/* Modern Button */}
            <button
              className="btn mt-4"
              style={{
                width: "180px",
                height: "48px",
                borderRadius: "30px",
                background:
                  "linear-gradient(180deg, rgba(99,119,165,0.85), rgba(74,135,231,0.85))",
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "600",
                border: "none",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #46ADE7 0%, #6ED0F6 100%)";
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0px 6px 16px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.background =
                  "linear-gradient(180deg, rgba(99,119,165,0.85), #6ED0F6 100%)";
                e.target.style.transform = "translateY(0px)";
                e.target.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.2)";
              }}
              onClick={() => navigate("/pricing")}
            >
              View Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
