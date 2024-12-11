import React from "react";
import image1 from "../assets/img/ac1.jpeg";
import image2 from "../assets/img/ac2.jpeg";
import image3 from "../assets/img/ac3.jpeg";
import image4 from "../assets/img/ac4.jpeg";
import image5 from "../assets/img/ac5.jpeg";
import image6 from "../assets/img/ac6.jpeg";
import image7 from "../assets/img/ac7.jpeg";
import image9 from "../assets/img/ac9.jpeg";

const images = [
  {
    src: image1, // Direct reference to the imported image
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
  {
    src: image4,
  },
  {
    src: image5,
  },
  {
    src: image6,
  },
  {
    src: image7,
  },
  {
    src: image9,
  },
];

const ClientGallery = () => {
  return (
    <section className="container my-5">
      <h1 className=" text-center display-4">Our Work</h1>
      <div className="row g-4">
        {images.map((image, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div
              className="card shadow h-100"
              style={{
                border: "none",
                borderRadius: "12px",
                backgroundColor: "#f4faff", // Light blue background
              }}
            >
              {/* Image */}
              <div
                className="card-img-top"
                style={{
                  backgroundImage: `url(${image.src})`, // Use the correct src value here
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                  borderTopLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientGallery;
