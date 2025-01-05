
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';
import Features from './components/Features';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import './App.css'

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      {/* <Home/> */}
      <Hero/>
      <Services/>
      <ServicesSection/>
      <Features/>
      <Gallery/>
      <ContactUs/>
      <AboutUs/>
      <FAQ />
      <Footer/>
      </Router>
    </div>
  )
}

export default App
