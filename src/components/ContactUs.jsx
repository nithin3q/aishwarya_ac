import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    services: [],
  });

  const servicesOptions = [
    "AC Repair",
    "AC Installation",
    "AC Service",
    "HVAC Maintenance",
    "Duct Cleaning",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => {
        const services = checked
          ? [...prevState.services, value]
          : prevState.services.filter((service) => service !== value);
        return { ...prevState, services };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_te7e0vy";
    const templateID = "template_sxj8mnl";
    const userID = "Up-XYUI4vUWGqymay";

    const emailData = {
      ...formData,
      services: formData.services.join(", "),
    };

    emailjs
      .send(serviceID, templateID, emailData, userID)
      .then((response) => {
        alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
          services: [],
        });
      })
      .catch(() => {
        alert("Failed to send your message. Please try again later.");
      });
  };

  return (
    <section className="container my-5" id="contact">
                <h1 className="display-4 text-center mb-5">Contact Us</h1>
      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-blue-1">
        <div className="row">
          {/* Name Field */}
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label text-white">
              Name
            </label>
            <input
              type="text"
              className="form-control border-0 bg-blue-11 text-white"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email
            </label>
            <input
              type="email"
              className="form-control border-0 bg-blue-11 text-white"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          {/* Phone Number Field */}
          <div className="col-md-6 mb-3">
            <label htmlFor="number" className="form-label text-white">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control border-0 bg-blue-11 text-white"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>

          {/* Services Selection */}
          <div className="col-md-6 mb-3">
            <label className="form-label text-white">Select Services</label>
            <div>
              {servicesOptions.map((service, index) => (
                <div className="form-check" key={index}>
                  <input
                    type="checkbox"
                    className="form-check-input bg-blue-11 text-white border-0"
                    id={`service-${index}`}
                    value={service}
                    onChange={handleChange}
                    checked={formData.services.includes(service)}
                  />
                  <label
                    className="form-check-label text-white"
                    htmlFor={`service-${index}`}
                  >
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Field */}
        <div className="row">
          <div className="col-12 mb-3">
            <label htmlFor="message" className="form-label text-white">
              Message
            </label>
            <textarea
              className="form-control bg-blue-11 text-white border-0"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn bg-orange btn-lg text-white">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
