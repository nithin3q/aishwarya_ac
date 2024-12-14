import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/img/logo22.png';
import '../styles/Navbar.css';

function Navbar() {
  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
  
    // Close the sidebar first
    const offcanvasElement = document.getElementById('mobileMenu');
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  
    // Delay the scroll to allow sidebar to close completely
    const targetId = event.currentTarget.getAttribute('href'); // e.g., "#services"
    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Delay in milliseconds (matches Bootstrap's closing animation)
  };
  

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-lg d-none d-lg-block">
        <div className="container-fluid container-lg">
          <a className="navbar-brand fw-bold fs-3" href="/">
            <img
              className="img-fluid me-2"
              width="185"
              height="20"
              src={logo}
              alt="Aishwarya AC Sales & Repairs"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-neon" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-neon" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-neon" href="#aboutus">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-neon" href="#contact">Contact Us</a>
              </li>
            </ul>
            <a href="#contact" className="btn btn-neon ms-lg-3">
              Contact Us <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="mobile-header d-lg-none bg-light py-2 px-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="mobile-logo">
            <a href="/">
              <img src={logo} alt="Aishwarya AC Sales & Repairs" width="185" height="50" />
            </a>
          </div>
          <button
            className="mobile-nav-icon text-neon"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="offcanvas offcanvas-start sidebar-dark" id="mobileMenu">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-neon">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li>
              <a href="#home" className="sidebar-link" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="sidebar-link" onClick={handleLinkClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#aboutus" className="sidebar-link" onClick={handleLinkClick}>
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="sidebar-link" onClick={handleLinkClick}>
                Contact Us
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="btn btn-neon w-100 my-3"
            onClick={handleLinkClick}
          >
            Contact Us <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <div className="contact-info">
            <p><FontAwesomeIcon icon={faPhone} /> +91 99630 88128</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> rajutheking9999@gmail.com</p>
            <p><FontAwesomeIcon icon={faLocationDot} /> H.NO.2-3-225/A/170, Rahmath Nagar, Yousufguda, Hyderabad</p>
          </div>
          <div className="social-links d-flex justify-content-around mt-4">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
