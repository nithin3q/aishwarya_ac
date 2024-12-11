import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import image8 from '../assets/img/ac8888.jpeg';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div
        className="bg-image d-flex align-items-center position-relative"
        style={{
          height: '90vh',
          backgroundImage: `url(${image8})`,
          
        }}
      >
        {/* Orange Overlay */}
        <div
          className="overlay position-absolute w-100 h-100"
          style={{
            backgroundColor: 'rgba(255, 165, 0, 0.5)', // Orange color with transparency
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></div>

        <div className="container position-relative text-left text-dark" style={{ zIndex: 2 }}>
          <h1 className="fw-bold display-4 ">Doorstep AC Repair and Service</h1>
          <p className="lead my-4 text-hero">
            Quick and reliable AC repair services delivered at your doorstep. Let us keep you comfortable.
          </p>
          <a href="#contact" className="btn bg-blue-1 text-white btn-lg">
            <FontAwesomeIcon icon={faPhoneAlt} className="me-2" /> Contact Us
          </a>
        </div>

        {/* Overlaying Card Section */}
        <div className="container position-absolute w-100 card-container" style={{ bottom: '-80px', zIndex: 3 }}>
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
