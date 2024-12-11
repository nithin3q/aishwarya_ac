// Features Component
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Features = () => {
  return (
    <section className="py-5 bg-ac">
      <div className="container">
        <div className="row text-center">
          {/* First Feature */}
          <div className="col-md-4">
            <div className="feature-box blue-bg p-4 rounded">
              <img
                src="https://kit.envalab-demos.com/colek/wp-content/uploads/2023/08/div-icon1.png"
                alt="Feature Icon"
                width="64"
                height="64"
                className="mb-3"
              />
              <h5 className="text-white">Get the Best Air Conditioning Services</h5>
              <p className="text-white">We ensure top-notch services for all your air conditioning needs.</p>
            </div>
          </div>

          {/* Middle Feature */}
          <div className="col-md-4 position-relative">
            <div className="feature-box middle-box p-4 rounded position-relative">
              <img
                src="https://kit.envalab-demos.com/colek/wp-content/uploads/2023/08/ac-object.png"
                alt="AC Object"
                width="100%"
                height="auto"
                className=""
              />
              <div className="color-overlay"></div>
            </div>
          </div>

          {/* Last Feature */}
          <div className="col-md-4">
            <div className="feature-box orange-bg p-4 rounded">
              <img
                src="https://kit.envalab-demos.com/colek/wp-content/uploads/2023/08/div-icon2.png"
                alt="Feature Icon"
                width="64"
                height="64"
                className="mb-3"
              />
              <h5 className="text-white">Reliable Maintenance</h5>
              <p className="text-white">Keep your AC in top condition with our maintenance services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
