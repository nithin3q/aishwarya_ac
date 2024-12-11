import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhone, faFan } from '@fortawesome/free-solid-svg-icons';
import { NavHashLink } from "react-router-hash-link";
// import logo from '../assets/img/logo2bg (1).png';
import logo from '../assets/img/logo22.png';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-lg">
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-lg-auto text-center ">
              <li className="nav-item mx-2 ">
                <NavHashLink className="nav-link text-blue px-2  " smooth to="#home">
                  <FontAwesomeIcon icon={faHome} className="fs-5 nav-icons me-1" /> Home
                </NavHashLink>
              </li>
              <li className="nav-item mx-2">
                <NavHashLink className="nav-link px-2" smooth to="#services">
                  <FontAwesomeIcon icon={faFan} className="fs-5 nav-icons me-1" /> Services
                </NavHashLink>
              </li>
              <li className="nav-item mx-2">
                <NavHashLink className="nav-link px-2" smooth to="#aboutus">
                  <FontAwesomeIcon icon={faInfoCircle} className="fs-5 nav-icons me-1" /> About Us
                </NavHashLink>
              </li>
              <li className="nav-item mx-2">
                <NavHashLink className="nav-link px-2" smooth to="#contact">
                  <FontAwesomeIcon icon={faPhone} className="fs-5 nav-icons me-1" /> Contact Us
                </NavHashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
