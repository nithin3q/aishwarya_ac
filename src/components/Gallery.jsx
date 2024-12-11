import React from "react";
import ClientGallery from "./ClientGallery";
import image1 from '../assets/img/ac1.jpeg'
import image2 from '../assets/img/ac2.jpeg'
import image3 from '../assets/img/ac3.jpeg'
import image4 from '../assets/img/ac4.jpeg'
import image5 from '../assets/img/ac5.jpeg'

const images = [
  {
    src: {image1},
    title: "AC Installation",
    description: "Installed a high-efficiency AC unit in a residential property.",
    link: "#",
  },
  {
    src: {image2},
    title: "AC Repair",
    description: "Fixed a central AC system for a commercial client.",
    link: "#",
  },
  {
    src: {image3},
    title: "Duct Cleaning",
    description: "Provided thorough duct cleaning for improved air quality.",
    link: "#",
  },
  {
    src: {image4},
    title: "HVAC Maintenance",
    description: "Regular maintenance to enhance HVAC performance.",
    link: "#",
  },
  
];

const Gallery = () => {
  return <ClientGallery images={images} />;
};

export default Gallery;
