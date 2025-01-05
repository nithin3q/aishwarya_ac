import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faToolbox, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import image1 from "../assets/img/ac1.jpeg";
import image2 from "../assets/img/ac2.jpeg";
import image3 from "../assets/img/ac3.jpeg";
import image4 from "../assets/img/ac4.jpeg";
import image5 from "../assets/img/ac5.jpeg";
import image6 from "../assets/img/ac6.jpeg";
import image7 from "../assets/img/ac7.jpeg";
import image9 from "../assets/img/ac9.jpeg";

const galleryItems = [
  {
    image: image1,
    title: "AC Installation",
    category: "Installation",
    description: "Professional split AC installation with precise mounting"
  },
  {
    image: image2,
    title: "Maintenance Check",
    category: "Maintenance",
    description: "Regular maintenance service for optimal performance"
  },
  {
    image: image3,
    title: "Repair Service",
    category: "Repair",
    description: "Expert AC repair and component replacement"
  },
  {
    image: image4,
    title: "Commercial HVAC",
    category: "Commercial",
    description: "Large-scale commercial AC solutions"
  },
  {
    image: image5,
    title: "Duct Cleaning",
    category: "Maintenance",
    description: "Professional duct cleaning service"
  },
  {
    image: image6,
    title: "Emergency Repair",
    category: "Repair",
    description: "24/7 emergency AC repair service"
  },
  {
    image: image7,
    title: "System Upgrade",
    category: "Installation",
    description: "AC system modernization and upgrades"
  },
  {
    image: image9,
    title: "Performance Test",
    category: "Maintenance",
    description: "Comprehensive AC performance testing"
  }
];

const Gallery = () => {
  return (
    <section className="gallery-section py-5">
      <div className="container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3">
            Our Gallery
          </span>
          <h2 className="display-4 fw-bold mb-3">Recent Projects</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Explore our portfolio of successful AC installations, repairs, and maintenance projects
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="row g-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="gallery-card position-relative">
                <div className="gallery-image-wrapper rounded-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-image w-100"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="gallery-overlay">
                    <span className="category-badge">{item.category}</span>
                    <div className="overlay-content">
                      <h4 className="text-white mb-2">{item.title}</h4>
                      <p className="text-white-50 mb-3">{item.description}</p>
                      {/* <button className="btn btn-light btn-sm rounded-pill">
                        <FontAwesomeIcon icon={faExpand} className="me-2" />
                        View Details
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="row mt-5 pt-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-md-4">
            <div className="stat-item">
              <FontAwesomeIcon icon={faToolbox} className="stat-icon text-primary mb-3" />
              <h3 className="fw-bold">500+</h3>
              <p className="text-muted">Projects Completed</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-item">
              <FontAwesomeIcon icon={faCheckCircle} className="stat-icon text-primary mb-3" />
              <h3 className="fw-bold">100%</h3>
              <p className="text-muted">Client Satisfaction</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-item">
              <FontAwesomeIcon icon={faToolbox} className="stat-icon text-primary mb-3" />
              <h3 className="fw-bold">12+</h3>
              <p className="text-muted">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
