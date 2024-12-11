import React from "react";
import image1 from "../assets/img/ac8.jpeg";
const AboutUs = () => {
  return (
    <section className="container my-5" id="aboutus">
                 <h1 className="display-4 text-center mb-5">About Us</h1>
      <div className="row align-items-center">
        {/* Left Side: Image */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src={image1}
            alt="AC Repair and Servicing"
            className="img-fluid  img-1 "
            style={{
              borderRadius: "12px",
              boxShadow: "10px 14px 20px rgba(0, 0, 0, 0.2)",
              border:"0.1px solid white"
            }}
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="col-12 col-md-6">
          <h2 className="text-blue mb-3"> Aishwarya AC Sales & Repairs</h2>
          <p className="text-muted fs-5">
            At <strong>Aishwarya AC Sales and Repairs</strong>, we take pride in delivering exceptional air conditioning solutions tailored to your needs. With extensive experience in the industry, our expert team ensures top-notch service and complete customer satisfaction.
          </p>
          <p className="text-muted fs-5">
            Whether it's routine maintenance, repair, or installation, we offer comprehensive AC services designed to keep your cooling systems operating at peak performance. Our goal is to provide you with hassle-free, reliable, and professional service.
          </p>
          <p className="text-muted fs-5">
            Enjoy the convenience of booking our services from the comfort of your home. Simply give us a call or send us your query to schedule doorstep repair solutions. We offer a 30-day service warranty, ensuring the best value and peace of mind for every service.
          </p>
          <a
            href="#contact"
            className="btn btn-warning btn-lg text-dark mt-3"
            style={{
              borderRadius: "8px",
            }}
          >
            <i className="fas fa-phone-alt me-2"></i>Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
