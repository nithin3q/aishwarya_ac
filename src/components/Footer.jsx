import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">About Us</h5>
            <p className="fw-bold">Aishwarya AC Sales & Repairs</p>
            <p>
              Providing reliable AC sales, repair, and maintenance services to keep you comfortable all year round.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#aboutus" className="text-secondary text-decoration-none fs-6">
                  <i className="fas fa-angle-right me-2 orange-arrow"></i> About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary text-decoration-none fs-6">
                  <i className="fas fa-angle-right me-2 orange-arrow"></i> Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary text-decoration-none fs-6">
                  <i className="fas fa-angle-right me-2 orange-arrow"></i> Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="text-secondary text-decoration-none fs-6">
                  <i className="fas fa-angle-right me-2 orange-arrow"></i> FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Address</h5>
            <div className="card bg-orange text-dark p-3 mb-3 card-footer">
              <ul className="list-unstyled">
                <li>
                  <a href="tel:0008880000" className="text-dark text-decoration-none fs-6">
                    <i className="fas fa-phone-alt me-2 "></i> Call Us: +91 99630 88128
                  </a>
                </li>
                <li>
                  <a href="mailto:needhelp@masim.com" className="text-dark text-decoration-none fs-6">
                    <i className="fas fa-envelope me-2 "></i> Email: rajutheking9999@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#location" className="text-dark text-decoration-none fs-6">
                    <i className="fas fa-map-marked-alt me-2 "></i> H.NO.2-3-225/A/170, Rahmath Nagar, Yousufguda, Hyderabad
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2024 Aishwarya AC Sales & Repairs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
