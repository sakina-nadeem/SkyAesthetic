import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "../components/contactus";
import "./pricing.css";

export default function EnrollNow() {
  const navigate = useNavigate();
  const formRef = useRef(null);

  // Scroll to Contact Form
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="hero-title">Enroll Now</h1>
              <p className="hero-subtitle">
                Secure your spot today and take the first step toward becoming a
                certified beauty professional.
              </p>
              <div className="hero-buttons mt-4">
                {/* Redirect to Pricing Page */}
                <button
                  className="btn btn-lg me-3 courses-btn"
                  onClick={() => navigate("/pricing")}
                >
                  <i className="fas fa-book-open me-2"></i> View Courses
                </button>

                {/* Scroll to Form */}
                <button
                  className="btn btn-lg enquire-btn"
                  onClick={scrollToForm}
                >
                  <i className="fas fa-edit me-2"></i> Complete Enrollment Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ContactUs Section (Form) */}
      <div
        ref={formRef}
        className="row justify-content-center mt-5"
        style={{ marginBottom: "10rem" }}
      >
        <div className="col-lg-10">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
