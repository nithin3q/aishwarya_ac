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
            background: 'linear-gradient(45deg, rgba(255, 140, 0, 0.6), rgba(12, 54, 127, 0.8))',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></div>

<div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <h1 className="fw-bold display-3 text-white mb-4 animate__animated animate__fadeInUp">
                Professional AC Repair & Service at Your Doorstep
              </h1>
              <p className="lead mb-3 text-white opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
                Experience quick, reliable, and professional AC repair services delivered right to your doorstep. 
                Trust our experts to keep your space comfortable all year round.
              </p>
              <a href="#contact" className="btn btn-lg px-5 py-3 bg-blue-1 text-white shadow-lg hover-scale animate__animated animate__fadeInUp animate__delay-2s">
                <FontAwesomeIcon icon={faPhoneAlt} className="me-2" /> Get Free Consultation
              </a>
            </div>
          </div>
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
