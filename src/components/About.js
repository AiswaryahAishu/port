import React from "react";
import Homecss from './Home.module.css'
import Aboutimg from './images/profile-img.jpg'



const About = () => {
  return (
    <>
    
    <div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className={Homecss.About}><br></br><br></br><br></br>
      <h1><b>About Me</b></h1>
      <h4>Turning tech challenges into learning opportunities.</h4>
      <p>As a web developer , I combine my passion for technology with teaching. With over 6 months of experience in web development, I specialize in creating dynamic, user-friendly websites that solve real-world problems. But my passion doesn't stop at coding—I also enjoy sharing my knowledge, helping others master the skills they need to succeed in a digital world. Whether I’m working on a website or tutoring students, my goal is to empower others through technology.</p>
      </div>
    </div>
    <div className="col-md-6">
      <div className={Homecss.aboutimg}> <img src={Aboutimg} className="img-fluid" alt="profile"/></div>
    </div>
  </div>
</div>

</>

  );
};

export default About;



