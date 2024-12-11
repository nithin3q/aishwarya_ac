import React from 'react';

const ServicesSection = () => {
  return (
    <section
      className="position-relative container-fluid my-5"
      style={{
        backgroundImage: 'url(https://kit.envalab-demos.com/colek/wp-content/uploads/2023/08/different-types-of-air-conditioners-and-electric-f-2021-08-26-22-28-09-utc-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Blue Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(255, 153, 0, 0.8)', // Dark orange color with opacity
          zIndex: 1,
        }}
      ></div>

      <div className="row py-5 container mx-auto position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <div className="col-12 d-flex flex-column flex-md-row align-items-center justify-content-between mb-5">
          {/* Left Header */}
          <div className="col-12 col-md-4 text-start mb-3 mb-md-0">
            <h2 className="display-4 text-dark">Check what else we’re doing</h2>
          </div>

          {/* Middle Header */}
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <p className="lead text-blue fs-4">
              Aishwarya AC Sales & Repairs offers comprehensive HVAC solutions for every need.
            </p>
          </div>

          {/* Right Header - Contact Button */}
          <div className="col-12 col-md-4 text-end">
            <a href="#contact" className="btn bg-blue-1 text-white btn-lg"><i className="fas fa-phone-alt me-2"></i> Contact Us</a>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="row container mx-auto position-relative" style={{ zIndex: 2 }}>
        {/* HVAC Installation */}
        <div className="col-md-3 mb-4">
          <div className="card bg-blue-1 text-white shadow-sm h-100">
            <div className="card-body d-flex justify-content-center">
              <img
                src="https://kit.envalab-demos.com/colek/wp-content/uploads/2023/08/service-feature-icon1.png"
                className="card-img-top"
                alt="HVAC Installation"
                style={{ width: '65px', height: '65px' }} // Small icon size
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">HVAC Installation</h5>
              <p className="card-text">We provide expert HVAC installation for homes and businesses, ensuring comfort and energy efficiency.</p>
            </div>
          </div>
        </div>

        {/* Duct Repairing */}
        <div className="col-md-3 mb-4">
          <div className="card bg-blue-1 text-white shadow-sm h-100">
            <div className="card-body d-flex justify-content-center">
              <img
                src="https://kit.envalab-demos.com/colek/wp-content/uploads/2023/08/service-feature-icon2.png"
                className="card-img-top"
                alt="Duct Repairing"
                style={{ width: '65px', height: '65px' }} // Small icon size
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Duct Repairing</h5>
              <p className="card-text">Our duct repairing services ensure your HVAC system is running smoothly and efficiently.</p>
            </div>
          </div>
        </div>

        {/* Indoor Air Quality */}
        <div className="col-md-3 mb-4">
          <div className="card bg-blue-1 text-white shadow-sm h-100">
            <div className="card-body d-flex justify-content-center">
              <img
                src="https://kit.envalab-demos.com/colek/wp-content/uploads/2023/08/service-feature-icon3.png"
                className="card-img-top"
                alt="Indoor Air Quality"
                style={{ width: '65px', height: '65px' }} // Small icon size
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Indoor Air Quality</h5>
              <p className="card-text">We offer solutions to improve your indoor air quality for healthier and more comfortable living spaces.</p>
            </div>
          </div>
        </div>

        {/* Geothermal Systems */}
        <div className="col-md-3 mb-4">
          <div className="card bg-blue-1 text-white shadow-sm h-100">
            <div className="card-body d-flex justify-content-center">
              <img
                src="https://kit.envalab-demos.com/colek/wp-content/uploads/2023/08/service-feature-icon4.png"
                className="card-img-top"
                alt="Geothermal Systems"
                style={{ width: '65px', height: '65px' }} // Small icon size
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Geothermal Systems</h5>
              <p className="card-text">Harness the power of the earth with our geothermal HVAC systems, offering long-term sustainability and energy savings.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
