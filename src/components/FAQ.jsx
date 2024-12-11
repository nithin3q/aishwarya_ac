import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of air conditioners do you sell?",
      answer:
        "We offer a variety of air conditioners, including split, window, and inverter ACs, from trusted brands to suit different needs and budgets.",
    },
    {
      question: "Do you provide installation services?",
      answer:
        "Yes, we provide professional installation services for all ACs purchased from us. Our technicians ensure proper and efficient installation.",
    },
    {
      question: "How often should an AC be serviced?",
      answer:
        "An air conditioner should ideally be serviced once every 6 months to ensure optimal performance and longevity.",
    },
    {
      question: "What is included in your AC repair services?",
      answer:
        "Our AC repair services cover cleaning, gas refilling, fixing leaks, and repairing or replacing faulty components.",
    },
    {
      question: "Do you offer a warranty on repairs?",
      answer:
        "Yes, we provide a 30-day service warranty on all repairs to ensure customer satisfaction and peace of mind.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Left Side: FAQ Accordion */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h2 className="text-blue mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div key={index} className="card border-0 mb-3">
                <div
                  className="card-header p-3"
                  style={{
                    backgroundColor: "#f4faff",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <h5 className="mb-0 d-flex align-items-center">
                    <i
                      className={`fas ${
                        activeIndex === index ? "fa-minus" : "fa-plus"
                      } me-2`}
                      style={{ color: "#054182" }}
                    ></i>
                    {faq.question}
                  </h5>
                </div>
                <div
                  className={`collapse ${
                    activeIndex === index ? "show" : ""
                  }`}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "10px 15px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                >
                  <p className="text-muted">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="https://kit.envalab-demos.com/colek/wp-content/uploads/2023/08/indian-man-setting-up-air-conditioner-RJ9VBA6.jpg"
            alt="AC Technician"
            className="img-fluid rounded shadow"
            style={{
              maxWidth: "500px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
