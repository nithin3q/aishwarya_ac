import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock, faCheck } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", number: "", message: "", services: []
  });

  const servicesOptions = [
    "AC Installation", "AC Repair", "AC Service",
    "HVAC Maintenance", "Duct Cleaning"
  ];

  const contactInfo = [
    { icon: faPhone, title: "Phone", info: "+91 99630 88128", link: "tel:+919963088128" },
    { icon: faEnvelope, title: "Email", info: "rajutheking9999@gmail.com", link: "mailto:rajutheking9999@gmail.com" },
    { icon: faLocationDot, title: "Location", info: "H.NO.2-3-225/A/170, Rahmath Nagar, Yousufguda, Hyderabad" },
    { icon: faClock, title: "Working Hours", info: "Mon - Sun: 9:00 AM - 9:00 PM" }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_te7e0vy",
      "template_sxj8mnl",
      { ...formData, services: formData.services.join(", ") },
      "Up-XYUI4vUWGqymay"
    ).then(() => {
      setFormData({ name: "", email: "", number: "", message: "", services: [] });
      alert("Message sent successfully!");
    });
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3">
            Contact Us
          </span>
          <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Ready to experience superior AC services? Contact us today for quick response and professional support.
          </p>
        </motion.div>

        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="contact-info-wrapper p-4 rounded-4 bg-light h-100">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="contact-info-item mb-4"
                >
                  <div className="d-flex align-items-center">
                    <div className="contact-icon-wrapper me-3">
                      <FontAwesomeIcon icon={item.icon} className="contact-icon" />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">{item.title}</h5>
                      {item.link ? (
                        <a href={item.link} className="text-muted text-decoration-none">
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-muted mb-0">{item.info}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="contact-form-wrapper p-4 rounded-4 bg-white shadow-sm"
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      placeholder="Phone Number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <div className="services-grid mb-3">
                      {servicesOptions.map((service, index) => (
                        <div key={index} className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`service-${index}`}
                            value={service}
                            checked={formData.services.includes(service)}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor={`service-${index}`}>
                            <FontAwesomeIcon icon={faCheck} className="me-2 text-primary" />
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control form-control-lg"
                      rows="4"
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
