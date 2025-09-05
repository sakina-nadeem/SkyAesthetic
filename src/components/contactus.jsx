// src/components/ContactUs.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Please fill name, email and message." });
      return;
    }

    setSending(true);

    // ---- EmailJS integration ----
    emailjs
      .send(
        "your_service_id", // 🔹 replace with your Service ID
        "your_template_id", // 🔹 replace with your Template ID
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          course: form.course,
          message: form.message,
        },
        "your_public_key" // 🔹 replace with your Public Key
      )
      .then(
        () => {
          setStatus({
            type: "success",
            text: "Message sent successfully. We'll contact you soon.",
          });
          setForm({ name: "", email: "", phone: "", course: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus({
            type: "error",
            text: "Failed to send message. Try again later.",
          });
        }
      )
      .finally(() => setSending(false));
  };

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
              marginTop: "20px",
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

          <div className="d-flex align-items-center" style={{ marginTop: "50px" }}>
            <a
              href="tel:01615265555"
              className="btn blink-hover me-3 d-flex align-items-center"
            >
              <FaPhoneAlt className="me-2" /> 0161 526 5555
            </a>
          </div>

          <div className="d-flex align-items-center mt-3">
            <a
              href="https://wa.me/447507500507"
              target="_blank"
              rel="noreferrer"
              className="btn blink-hover d-flex align-items-center"
            >
              <FaWhatsapp className="me-2" /> 07507 500507
            </a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="col-lg-7 col-md-12">
          <form onSubmit={handleSubmit}>
            {status && (
              <div
                className={`alert ${
                  status.type === "success" ? "alert-success" : "alert-danger"
                }`}
                role="alert"
              >
                {status.text}
              </div>
            )}

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              className="form-control mb-3 placeholder-light"
              placeholder="Name"
              required
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="form-control mb-3 placeholder-light"
              placeholder="Email Address"
              required
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
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
              name="course"
              value={form.course}
              onChange={handleChange}
              className="form-control mb-3 placeholder-light"
              style={{
                width: "100%",
                height: "50px",
                borderWidth: "1px",
                padding: "12px 20px",
                color: "#21252973 ",
              }}
            >
              <option value="">Select a course</option>
              <option>Web Development</option>
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>UI/UX Design</option>
              <option>React.js Course</option>
              <option>Data Science</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="form-control mb-3 placeholder-light"
              placeholder="Message"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="btn w-100 blink-hover-submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .placeholder-light::placeholder { color: #6c757da8 !important; opacity: 1; }
        .blink-hover { background: #23A6F0; color: #fff; font-family: Lato; font-weight: 700; font-size: 14.4px; line-height: 24px; border-radius: 80px; height: 48px; padding: 10px 20px; border: none; transition: all 0.3s ease-in-out; display: inline-flex; align-items: center; justify-content: center; }
        .blink-hover:hover { box-shadow: 0 0 12px 2px #23A6F0, 0 0 20px 4px #23A6F0; animation: blink 1s infinite; }
        .blink-hover-submit { background: #23A6F0; color: #fff; border-radius: 2000px; height: 50px; font-weight: 600; border: none; transition: all 0.3s ease-in-out; }
        .blink-hover-submit:hover { box-shadow: 0 0 14px 3px #23A6F0, 0 0 22px 6px #23A6F0; animation: blink 1s infinite; }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0.6} }
        input, select, textarea { width: 100%; border: 1px solid #ced4da; padding: 12px 20px; font-size: 14px; margin-bottom: 1rem; border-radius: 4px; box-sizing: border-box; }
        @media (max-width: 768px) { .col-lg-5, .col-lg-7 { text-align: center; } .blink-hover, .blink-hover-submit { width: 100%; justify-content: center; } }
      `}</style>
    </section>
  );
}
