import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faHeadset, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image10 from "../assets/img/ac10.jpeg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of air conditioners do you service?",
      answer: "We service all major brands and types of air conditioners including split ACs, window ACs, central AC systems, and inverter ACs. Our technicians are trained to handle both residential and commercial units.",
      icon: "🔧"
    },
    {
      question: "How often should I service my AC?",
      answer: "We recommend servicing your AC every 6 months for optimal performance. Regular maintenance helps prevent major breakdowns, ensures energy efficiency, and extends the life of your unit.",
      icon: "📅"
    },
    {
      question: "What's included in your AC service?",
      answer: "Our comprehensive AC service includes cleaning of filters and coils, checking refrigerant levels, inspecting electrical connections, testing system performance, and ensuring proper drainage. We also provide a detailed report of the service.",
      icon: "✓"
    },
    {
      question: "Do you provide emergency AC repair services?",
      answer: "Yes, we offer 24/7 emergency AC repair services. Our team is always ready to respond quickly to urgent repair needs to minimize your discomfort.",
      icon: "🚨"
    },
    {
      question: "What warranty do you offer on repairs?",
      answer: "We provide a 30-day warranty on all our repair services. If any issues arise with our repair work within this period, we'll fix it at no additional cost.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="faq-section py-5" id="faq">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3">
            FAQ
          </span>
          <h2 className="display-4 fw-bold mb-3">Frequently Asked Questions</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Find quick answers to common questions about our AC services
          </p>
        </motion.div>

        <div className="row align-items-center g-5">
          {/* Left Side: FAQ Accordion */}
          <motion.div 
            className="col-lg-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="accordion-wrapper">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="faq-item mb-4"
                >
                  <div
                    className={`faq-header ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <span className="faq-icon">{faq.icon}</span>
                    <h3 className="faq-question">{faq.question}</h3>
                    <FontAwesomeIcon 
                      icon={activeIndex === index ? faMinus : faPlus}
                      className="toggle-icon"
                    />
                  </div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="faq-answer"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Support Card */}
          <motion.div 
            className="col-lg-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="support-card text-center p-5 rounded-4">
              <div className="support-icon mb-4">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <h3 className="mb-4">Still have questions?</h3>
              <p className="mb-4">Our support team is here to help you 24/7</p>
              <a href="#contact" className="btn btn-primary btn-lg rounded-pill">
                Contact Support <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
