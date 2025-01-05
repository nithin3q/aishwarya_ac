import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faWrench, faFan, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      icon: faTools,
      title: "AC Installation",
      description: "Professional installation service with expert technicians. We ensure proper setup and optimal performance of your AC unit.",
      features: ["Free Installation Quote", "Same Day Service", "Quality Assurance"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yxEhuXuV6tkgYj7LGGMvR9Dz2ULuIC9ELA&usqp=CAU"
    },
    {
      icon: faWrench,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance and repair services to keep your AC running efficiently all year round.",
      features: ["24/7 Emergency Repairs", "Scheduled Maintenance", "Genuine Parts"],
      image: "https://swiftcare.pk/wp-content/uploads/2022/02/Top-10-Reasons-Why-Air-Conditioning-Service-is-Important-Featured.jpg"
    },
    {
      icon: faFan,
      title: "Cooling Solutions",
      description: "Complete cooling solutions for residential and commercial spaces. Expert consultation for all your AC needs.",
      features: ["Energy Efficiency", "Smart AC Solutions", "Professional Support"],
      image: "https://content.jdmagicbox.com/comp/def_content/ac_repair_and_services/default-ac-repair-services-16.jpg"
    }
  ];

  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase">Our Services</h6>
          <h2 className="display-5 fw-bold mb-3">Professional AC Services</h2>
          <div className="mx-auto" style={{ maxWidth: "700px" }}>
            <p className="lead text-muted">Delivering excellence in air conditioning solutions with our comprehensive range of services</p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card h-100 rounded-4 overflow-hidden">
                <div className="service-image position-relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-100 service-img"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="service-overlay">
                    <FontAwesomeIcon icon={service.icon} className="service-icon" />
                  </div>
                </div>
                
                <div className="service-content p-4">
                  <h4 className="fw-bold mb-3">{service.title}</h4>
                  <p className="text-muted mb-4">{service.description}</p>
                  
                  <ul className="feature-list mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#contact" className="btn btn-primary bg-blue-1 rounded-pill px-4">
                    Get Service <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
