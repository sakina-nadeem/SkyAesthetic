import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer
        style={{
          backgroundColor: "#F0F9FE",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <Container>
          <Row>
            {/* First Column */}
            <Col lg={3} md={6} sm={12} className="mb-4">
              <img src="/logo.svg" alt="Logo" style={{ width: "100px" }} />
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  marginTop: "1rem",
                  color: "#7C7C7C",
                }}
              >
                Aesthetics Training and Courses in Manchester
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#23A6F0",
                  marginTop: "-1rem",
                }}
              >
                Make a Payment
              </p>
              <div style={{ marginTop: "3rem" }}>
                <img
                  src="/image-box.png"
                  alt="Box"
                  style={{ width: "249px", height: "156px", opacity: 1 }}
                />
              </div>
            </Col>

            {/* Second Column */}
            <Col
              lg={3}
              md={6}
              sm={12}
              className="mb-4"
              style={{ paddingLeft: "3rem" }} // <-- Increased gap between first & second column
            >
              <h5
                style={{
                  fontFamily: "Syne",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "100%",
                }}
              >
                Pages
              </h5>
              <ul className="list-unstyled mt-3">
                {[
                  "Home",
                  "About Us",
                  "Courses & Pricing",
                  "Contact Us",
                  "What We Teach",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{ marginBottom: "12px" }} // <-- added space between list items
                  >
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#7C7C7C" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Third Column */}
            <Col lg={3} md={6} sm={12} className="mb-4">
              <h5
                style={{
                  fontFamily: "Syne",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "100%",
                }}
              >
                Contact
              </h5>
              <div className="d-flex align-items-center mt-3">
                <FaPhoneAlt
                  style={{
                    padding: "5px",
                    color: "#23A6F0",
                    marginRight: "10px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                />
                <span style={{ color: "#7C7C7C" }}>+44 123 456 789</span>
              </div>
              <div className="d-flex align-items-center mt-2">
                <FaWhatsapp
                  style={{
                    padding: "5px",
                    color: "#23A6F0",
                    marginRight: "10px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                />
                <span style={{ color: "#7C7C7C" }}>+44 987 654 321</span>
              </div>
              <div className="d-flex align-items-center mt-2">
                <FaMapMarkerAlt
                  style={{
                    padding: "5px",
                    color: "#23A6F0",
                    marginRight: "10px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                />
                <span style={{ color: "#7C7C7C", maxWidth: "200px" }}>
                  281-283 Barlowmoor Road, Chorlton, Manchester, M21 7GH
                </span>
              </div>
            </Col>

            {/* Fourth Column */}
            <Col lg={3} md={6} sm={12} className="mb-4">
              <h5
                style={{
                  fontFamily: "Syne",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "100%",
                }}
              >
                Subscribe To Our Newsletter
              </h5>
              <p style={{ marginTop: "1rem", color: "#7C7C7C" }}>
                You can contact Us to send email to us
              </p>
              <InputGroup
                className="mb-3"
                style={{ width: "100%", maxWidth: "289px" }}
              >
                <Form.Control
                  placeholder="Enter your email"
                  style={{
                    height: "46px",
                    borderRadius: "25px",
                    color: "#7C7C7C",
                  }}
                />
                <Button
                  variant="primary"
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#23A6F0",
                    border: "none",
                    height: "44px",
                    width: "44px",
                  }}
                >
                  <FaPaperPlane />
                </Button>
              </InputGroup>
              {/* Social Icons aligned in row */}
              <div
                className="d-flex "
                style={{
                  gap: "26px",
                  justifyContent: "flex-end",
                  marginTop: "11rem",
                }}
              >
                <FaFacebookF
                  style={{
                    fontSize: "18px",
                    color: "#23A6F0",
                    minWidth: "25px",
                    minHeight: "25px",
                  }}
                />
                <FaTwitter
                  style={{
                    fontSize: "18px",
                    color: "#23A6F0",
                    minWidth: "25px",
                    minHeight: "25px",
                  }}
                />
                <FaLinkedinIn
                  style={{
                    fontSize: "18px",
                    color: "#23A6F0",
                    minWidth: "25px",
                    minHeight: "25px",
                  }}
                />
                <FaInstagram
                  style={{
                    minWidth: "25px",
                    minHeight: "25px",
                    fontSize: "18px",
                    color: "#23A6F0",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Copyright Footer */}
      <div
        style={{
          backgroundColor: "#23A6F0",
          textAlign: "center",
          padding: "1rem 0",
          color: "#fff",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            lineHeight: "100%",
            margin: 0,
          }}
        >
          Copyright 2025 © - Sky Education Ltd
        </p>
      </div>
    </>
  );
}
