import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid space">
        {/* Logo */}
        <Link className="navbar-brand ms-5 d-flex align-items-center" to="/">
          <img src="/logo.svg" alt="Logo" className="custom-logo" />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items + Button */}
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            <li className="nav-item">
              <Link className="nav-link custom-nav active" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav" to="/whatweteach">
                WE TEACH
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav" to="/pricing">
                Courses & Prices
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-nav"
                href="https://skyeducationltd.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                #SkyEducation
              </a>
            </li>
          </ul>

          <button
            className="btn custom-btn ms-5 me-5"
            onClick={() => navigate("/enrollnow")}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
