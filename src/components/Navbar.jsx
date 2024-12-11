import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faWandMagicSparkles, faPhone, faFan } from '@fortawesome/free-solid-svg-icons';
import { NavHashLink } from "react-router-hash-link";
import logo from '../assets/img/logo2bg (1).png'

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 fixed-top shadow " data-bs-theme="dark">
        <div className="container-fluid container-lg">
          <div className="logo">
            <a className="navbar-brand fw-bold fs-3" href="#">
              <img className="img-fluid" width="80" height="20" src={logo} alt="cine special effects" />
            </a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <NavHashLink className="nav-link " smooth to="#home" >
                  <FontAwesomeIcon icon={faHome} className='fs-5 nav-icons' /> Home
                </NavHashLink>
              </li>
              <li className="nav-item">
                <NavHashLink className="nav-link " smooth to="#services" >
                  <FontAwesomeIcon icon={faFan} className='fs-5 nav-icons' /> Services
                </NavHashLink>
              </li>
              <li className="nav-item">
                <NavHashLink className="nav-link " smooth to="#aboutus" >
                  <FontAwesomeIcon icon={faInfoCircle} className='fs-5 nav-icons' /> About Us
                </NavHashLink>
              </li>
              <li className="nav-item">
                <NavHashLink className="nav-link " smooth to="#contact" >
                  <FontAwesomeIcon icon={faPhone} className='fs-5 nav-icons' /> Contact Us
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