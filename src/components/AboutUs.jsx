import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faUsers, faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image1 from "../assets/img/ac8.jpeg";

const AboutUs = () => {
  const features = [
    { icon: faMedal, title: "Expert Team", text: "Certified technicians with years of experience" },
    { icon: faUsers, title: "24/7 Support", text: "Round-the-clock customer service" },
    { icon: faCheckCircle, title: "Quality Service", text: "100% satisfaction guaranteed" }
  ];

  return (
    <section className="about-section py-5" id="aboutus">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3">
            About Us
          </span>
          <h2 className="display-4 fw-bold mb-3">Your Trusted AC Service Partner</h2>
        </motion.div>

        <div className="row align-items-center g-5">
          {/* Left Side: Image */}
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-wrapper position-relative">
              <img
                src={image1}
                alt="AC Service"
                className="img-fluid rounded-4 shadow-lg"
              />
              <div className="experience-badge">
                <span className="h2 fw-bold mb-0">12+</span>
                <span className="text-uppercase">Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-content">
              <h3 className="h2 mb-4">Excellence in AC Services Since 2010</h3>
              <p className="lead text-muted mb-4">
                At Aishwarya AC Sales & Repairs, we deliver professional air conditioning solutions with a commitment to quality and customer satisfaction.
              </p>

              {/* Features Grid */}
              <div className="features-grid mb-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="feature-item d-flex align-items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="feature-icon-wrapper me-3">
                      <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
                    </div>
                    <div>
                      <h4 className="h6 fw-bold mb-1">{feature.title}</h4>
                      <p className="text-muted mb-0">{feature.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="row g-4 mb-4">
                <div className="col-6 col-md-4">
                  <div className="stat-item text-center">
                    <h3 className="fw-bold text-primary mb-1">500+</h3>
                    <p className="text-muted mb-0">Projects Done</p>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="stat-item text-center">
                    <h3 className="fw-bold text-primary mb-1">100%</h3>
                    <p className="text-muted mb-0">Satisfaction</p>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="stat-item text-center">
                    <h3 className="fw-bold text-primary mb-1">24/7</h3>
                    <p className="text-muted mb-0">Support</p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="btn btn-primary btn-lg rounded-pill">
                Get Free Quote <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
