import React from "react";

const Services = () => {
  return (
    <section id="services" className="mb-5 mt-5">
      <div className="container">
        <div className="row text-center mb-5">
          <h1 className="display-4">Our Services</h1>
          <p className="lead text-muted">Providing you with the best air conditioning services</p>
        </div>
        <div className="row">
          {/* First Service */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card p-4 border rounded shadow-sm">
              <div className="service-image mb-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yxEhuXuV6tkgYj7LGGMvR9Dz2ULuIC9ELA&usqp=CAU"
                  alt="AC Installation"
                  style={{ width: "100%", height: "268px", objectFit: "cover" }} // Fixed width and height
                />
              </div>
              <h3 className="h5 mb-3">AC Installation</h3>
              <p className="text-muted mb-3">
                Professional air conditioning installation service. Get your AC installed quickly and efficiently.
              </p>
              <p className="product-price mb-3">
                <strong>Free Service Calls</strong>
              </p>
              <a href="#contact" className="btn btn-primary bg-blue-1">
                <i className="fas fa-phone-alt me-2"></i> Contact Now
              </a>
            </div>
          </div>

          {/* Second Service */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card p-4 border rounded shadow-sm">
              <div className="service-image mb-3">
                <img
                  src="https://swiftcare.pk/wp-content/uploads/2022/02/Top-10-Reasons-Why-Air-Conditioning-Service-is-Important-Featured.jpg"
                  alt="Maintenance & Repair"
                  style={{ width: "100%", height: "268px", objectFit: "cover" }} // Fixed width and height
                />
              </div>
              <h3 className="h5 mb-3">Maintenance & Repair</h3>
              <p className="text-muted mb-3">
                Keep your air conditioning system running at peak efficiency with regular maintenance and repairs.
              </p>
              <p className="product-price mb-3">
                <strong>Free Estimates</strong>
              </p>
              <a href="#contact" className="btn btn-primary bg-blue-1">
                <i className="fas fa-phone-alt me-2"></i> Contact Now
              </a>
            </div>
          </div>

          {/* Third Service */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-card p-4 border rounded shadow-sm">
              <div className="service-image mb-3">
                <img
                  src="https://content.jdmagicbox.com/comp/def_content/ac_repair_and_services/default-ac-repair-services-16.jpg"
                  alt="Cooling & Heating Services"
                  style={{ width: "100%", height: "268px", objectFit: "cover" }} // Fixed width and height
                />
              </div>
              <h3 className="h5 mb-3">Cooling & Heating Services</h3>
              <p className="text-muted mb-3">
                Ensure comfort year-round with our 24-hour cooling and heating services.
              </p>
              <p className="product-price mb-3">
                <strong>24-Hour Emergency Service</strong>
              </p>
              <a href="#contact" className="btn btn-primary  bg-blue-1">
                <i className="fas fa-phone-alt me-2"></i> Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
