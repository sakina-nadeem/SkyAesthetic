import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="container py-5">
      <div className="row align-items-start">
        {/* Left Side */}
        <div className="col-lg-5 col-md-12 mb-4">
          <p
            style={{
              fontFamily: "Syne",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              marginTop: "20px"
            }}
          >
            Got questions? Let’s talk
          </p>

          <h2
            style={{
              fontFamily: "Syne",
              fontWeight: 700,
              fontSize: "28px",
              lineHeight: "31.64px",
              letterSpacing: "2%",
              textTransform: "uppercase",
              color: "#23A6F0",
            }}
          >
            GET IN TOUCH
          </h2>

          <p
            style={{
              fontFamily: "Inter",
              fontSize: "12px",
              lineHeight: "100%",
              maxWidth: "400px",
              color: "#212529b9",
              marginTop: "30px",
            }}
          >
            If you would like to know more or would like to enroll on a course,
            get in touch with us below.
          </p>

          {/* Call Button */}
          <div className="d-flex align-items-center" style={{marginTop: "50px"}}>
            <button className="btn blink-hover me-3 d-flex align-items-center">
              <FaPhoneAlt className="me-2" /> 0161 526 5555 / 07507
            </button>
          </div>

          {/* WhatsApp Button */}
          <div className="d-flex align-items-center mt-3">
            <button className="btn blink-hover d-flex align-items-center">
              <FaWhatsapp className="me-2" /> +447507
            </button>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="col-lg-7 col-md-12">
          <form>
            <input
              type="text"
              className="form-control mb-3 placeholder-light"
              placeholder="Name"
            />

            <input
              type="email"
              className="form-control mb-3 placeholder-light"
              placeholder="Email Address"
            />

            <input
              type="text"
              className="form-control mb-3 placeholder-light"
              placeholder="Phone Number"
            />

            <label
              style={{
                fontFamily: "Syne",
                fontWeight: 500,
                marginBottom: "5px",
                color: "#434a52d5",
              }}
            >
              Courses
            </label>
            <select
              className="form-control mb-3 placeholder-light"
              defaultValue=""
              style={{
                width: "100%",
                height: "50px",
                borderWidth: "1px",
                padding: "12px 20px",
                color: "#21252973 ",
              }}
            >
              <option value="" disabled>
                Select a course
              </option>
              <option>Web Development</option>
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>UI/UX Design</option>
              <option>React.js Course</option>
              <option>Data Science</option>
            </select>

            <textarea
              className="form-control mb-3 placeholder-light"
              placeholder="Message"
              rows="4"
            ></textarea>

            <button type="submit" className="btn w-100 blink-hover-submit">
              Send
            </button>
          </form>
        </div>
      </div>

      {/* CSS for placeholder color & blink effect */}
      <style>
        {`
          .placeholder-light::placeholder {
            color: #6c757da8 !important;
            opacity: 1;
          }

          .blink-hover {
            background: #23A6F0;
            color: #fff;
            font-family: Lato;
            font-weight: 700;
            font-size: 14.4px;
            line-height: 24px;
            border-radius: 80px;
            height: 48px;
            padding: 10px 20px;
            border: none;
            transition: all 0.3s ease-in-out;
          }

          .blink-hover:hover {
            box-shadow: 0 0 12px 2px #23A6F0, 0 0 20px 4px #23A6F0;
            animation: blink 1s infinite;
          }

          .blink-hover-submit {
            background: #23A6F0;
            color: #fff;
            border-radius: 2000px;
            height: 50px;
            font-weight: 600;
            border: none;
            transition: all 0.3s ease-in-out;
          }

          .blink-hover-submit:hover {
            box-shadow: 0 0 14px 3px #23A6F0, 0 0 22px 6px #23A6F0;
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }

          /* Make form inputs responsive */
          input, select, textarea {
            width: 100%;
            border: 1px solid #ced4da;
            padding: 12px 20px;
            font-size: 14px;
            margin-bottom: 1rem;
            border-radius: 4px;
            box-sizing: border-box;
          }

          @media (max-width: 768px) {
            .col-lg-5, .col-lg-7 {
              text-align: center;
            }

            .blink-hover, .blink-hover-submit {
              width: 100%;
              justify-content: center;
            }
          }
        `}
      </style>
    </section>
  );
}
