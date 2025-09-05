import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutusVideo from "../assets/videos/aboutusvideo.mp4";
import ContactUs from "../components/contactus";
import WhyChooseUs from "../components/whychooseus";

export default function AboutUs() {
  return (
    <div>
      {/* Video Section */}
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="position-relative" style={{ width: "85%" }}>
          <video
            autoPlay
            muted
            loop
            className="w-100 rounded-4 shadow-lg"
            style={{ height: "65vh", objectFit: "cover" }}
          >
            <source src={aboutusVideo} type="video/mp4" />
          </video>
          <div
            className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          ></div>
          <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
            <h1 className="display-2 fw-bold">About Us</h1>
          </div>
        </div>
      </div>

      {/* WhyChooseUs Section */}
      <div className="mb-5">
        <WhyChooseUs />
      </div>

      {/* CEO Profile Section */}
      <div style={{ backgroundColor: "#f8f9fa", paddingTop: "15rem" }}>
        <div className="container-fluid px-5">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-lg-12">
              <div className="ceo-card">
                <div className="row g-0">
                  {/* CEO Image */}
                  <div className="col-md-5">
                    <div
                      className="ceo-image-container"
                      style={{ height: "500px", overflow: "hidden" }}
                    >
                      <img
                        src="/ceo-img.webp"
                        alt="Noreen Aslam - Founder and CEO"
                        className="ceo-image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          padding: "1rem",
                        }}
                      />
                    </div>
                  </div>

                  {/* CEO Content */}
                  <div className="col-md-7 d-flex">
                    <div className="ceo-info d-flex flex-column justify-content-center">
                      <h2 className="ceo-name">Meet Noreen Aslam</h2>
                      <p className="ceo-title">Founder and CEO</p>
                      <div className="ceo-description">
                        <p>
                          I'm <span className="highlight">Noreen Aslam</span>,
                          the CEO and founder of{" "}
                          <span className="highlight">Sky Education</span>, a
                          pioneering institute dedicated to elevating your
                          journey in aesthetics.
                        </p>
                        <p>
                          With a background in business management and a
                          portfolio of successful ventures across the UK and
                          Scotland, I established Sky Education to redefine
                          educational excellence in the aesthetics industry.
                        </p>
                        <p>
                          At Sky Education, we believe in reaching new heights,
                          where the horizon is limitless for your educational
                          aspirations. As an approved Ofqual center, we uphold
                          the highest standards of quality and professionalism.
                        </p>
                        <p>
                          Our team boasts over{" "}
                          <span className="highlight">
                            50 years of collective experience
                          </span>
                          , poised to impart invaluable knowledge and expertise
                          in the art and science of aesthetics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ContactUs Section */}
      <div
        className="row justify-content-center mt-5"
        style={{ marginBottom: "10rem" }}
      >
        <div className="col-lg-10">
          <ContactUs />
        </div>
      </div>

      <style jsx>{`
        .ceo-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-top: -100px;
          position: relative;
          z-index: 10;
        }

        .ceo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .ceo-info {
          padding: 2.5rem;
        }

        .ceo-name {
          font-family: "Syne", sans-serif;
          font-size: 28px;
          line-height: 100%;
          color: #23a6f0;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .ceo-title {
          color: #6c757d;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .ceo-description {
          color: #495057;
          line-height: 1.6;
        }

        .ceo-description p {
          margin-bottom: 1.2rem;
        }

        .highlight {
          color: #23a6f0;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .ceo-image-container {
            height: 400px !important;
          }

          .ceo-info {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .ceo-image-container {
            height: 350px !important;
          }

          .ceo-info {
            padding: 1.5rem;
          }

          .ceo-name {
            font-size: 24px;
          }

          .ceo-description p {
            margin-bottom: 1rem;
          }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
