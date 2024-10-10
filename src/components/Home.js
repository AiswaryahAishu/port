import React from 'react';
import Homecss from './Home.module.css';
import Homeimg from './images/home-img.jpg';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import desired icons
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Skills from './Skills';
import Services from './Services';


const Home = () => {
  return (
    <>
    <Header/>
   
  
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-4">
          <div className={Homecss.hero}>
            <h1><b>Hey, I'm Aiswarya</b></h1>
            <h3>Welcome to my Portfolio</h3>
            <h5>Bridging The Gap between technology and Education.</h5>
            
            <div className={Homecss.socialLinks}>
              <a href="https://www.instagram.com/aiswarya______" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.linkedin.com/in/Aiswarya Mc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={Homecss.image}>
            <img src={Homeimg} className="img-fluid" alt="profile"/>
          </div>
        </div>
      </div>
    </div>
    <About/>
    <Skills/>
    <Services/>
    <Footer/>
    </>
  );
}

export default Home;
