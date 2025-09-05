import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhyChooseUs.css"; // custom css file

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="container-fluid">
        <div className="row">
          {/* Left Content */}
          <div
            className="col-lg-6 mt-5"
            style={{ paddingLeft: "170px", marginTop: "60px" }}
          >
            {/* Heading */}
            <h5
              className="text-uppercase fw-bold mb-2"
              style={{
                fontFamily: "Syne",
                fontSize: "18.46px",
                lineHeight: "100%",
                letterSpacing: "2%",
              }}
            >
              Why Choose Us
            </h5>

            {/* Subheading */}
            <h2
              className="text-uppercase fw-bold mb-3"
              style={{
                fontFamily: "Syne",
                fontSize: "28px",
                lineHeight: "100%",
                letterSpacing: "2%",
                color: "#23A6F0",
              }}
            >
              Sky Aesthetics Training?
            </h2>

            {/* Paragraph */}
            <p
              className="mb-5"
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                lineHeight: "160%",
                letterSpacing: "2%",
                color: "#525252",
                maxWidth: "520px",
              }}
            >
              Join a community of satisfied students who have transformed their
              careers with our training, backed by testimonials and success
              stories.
            </p>

            {/* Cards */}
            <div className="row g-4">
              <div className="col-md-6">
                <div className="why-card d-flex">
                  <img src="/icon1.png" alt="Icon 1" className="why-icon" />
                  <div style={{ maxWidth: "250px" }}>
                    <h6
                      className="fw-bold mb-1"
                      style={{ fontFamily: "Syne", fontSize: "14px" }}
                    >
                      Expert Guidance
                    </h6>
                    <p className="why-text">
                      Benefit from instruction by experienced professionals with
                      a wealth of knowledge in the aesthetics industry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="why-card d-flex">
                  <img src="/icon2.png" alt="Icon 2" className="why-icon" />
                  <div style={{ maxWidth: "250px" }}>
                    <h6
                      className="fw-bold mb-1"
                      style={{ fontFamily: "Syne", fontSize: "14px" }}
                    >
                      Hands-On Training
                    </h6>
                    <p className="why-text">
                      Gain practical experience through interactive sessions and
                      live demonstrations, ensuring confidence in applying
                      learned skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="why-card d-flex">
                  <img src="/icon3.png" alt="Icon 3" className="why-icon" />
                  <div style={{ maxWidth: "250px" }}>
                    <h6
                      className="fw-bold mb-1"
                      style={{ fontFamily: "Syne", fontSize: "14px" }}
                    >
                      Cutting-Edge Techniques
                    </h6>
                    <p className="why-text">
                      Stay ahead of the curve with instruction on the latest
                      advancements and innovations in aesthetic procedures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="why-card d-flex">
                  <img src="/icon4.png" alt="Icon 4" className="why-icon" />
                  <div style={{ maxWidth: "250px" }}>
                    <h6
                      className="fw-bold mb-1"
                      style={{ fontFamily: "Syne", fontSize: "14px" }}
                    >
                      Success Stories
                    </h6>
                    <p className="why-text">
                      Join a community of satisfied students who have
                      transformed their careers with our training, backed by
                      success stories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image with Effect */}
          <div className="col-lg-6 d-flex justify-content-end align-items-start p-0">
            <div className="why-image-wrapper">
              <img
                src="/chooseus-right.png"
                alt="Why Choose Us"
                className="img-fluid why-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
