import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <section className="hero-section">
      {/* Full-Height Background Section */}
      <div className="bg-image d-flex align-items-center position-relative" style={{ height: '90vh' }}>
        <div className="container">
          <div className="text-left text-light">
            <h1 className="fw-bold display-4">
              Doorstep AC Repair and Service
            </h1>
            <p className="lead my-4">
              Quick and reliable AC repair services delivered at your doorstep. Let us keep you comfortable.
            </p>
            <a href="#contact" className="btn btn-orange btn-lg">
              <FontAwesomeIcon icon={faPhoneAlt} className="me-2" /> Contact Us
            </a>
          </div>
        </div>
        {/* Overlaying Card Section */}
        <div className="container position-absolute w-100 card-container">
          <div className="card shadow p-4">
            <div className="row text-center">
              {/* Satisfaction Guarantee */}
              <div className="col-md-4">
                <img
                  src="https://kit.envalab-demos.com/colek/wp-content/uploads/2023/08/guaranteed.png"
                  alt="Satisfaction Guarantee"
                  className="img-fluid mb-3"
                  width="64"
                  height="64"
                />
                <h5 className="fw-bold">Satisfaction Guarantee</h5>
                <p>We ensure the highest quality and customer satisfaction with every service.</p>
              </div>

              {/* 12 Years Experience */}
              <div className="col-md-4">
                <img
                  src="https://kit.envalab-demos.com/colek/wp-content/uploads/2023/08/experience.png"
                  alt="12 Years Experience"
                  className="img-fluid mb-3"
                  width="64"
                  height="64"
                />
                <h5 className="fw-bold">12 Years Experience</h5>
                <p>Expert technicians with over a decade of industry experience.</p>
              </div>

              {/* Emergency Services */}
              <div className="col-md-4">
                <img
                  src="https://kit.envalab-demos.com/colek/wp-content/uploads/2023/08/call-center-service.png"
                  alt="Emergency Services"
                  className="img-fluid mb-3"
                  width="64"
                  height="64"
                />
                <h5 className="fw-bold">Emergency Services</h5>
                <p>Available for urgent repairs whenever you need us most.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
