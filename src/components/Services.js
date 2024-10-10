import React from 'react'
import  './Service.css'
import { GiTeacher } from "react-icons/gi";
import { MdDeveloperMode } from "react-icons/md";
import { SiAltiumdesigner } from "react-icons/si";

// import Serviceimg from './images/home-img.jpg'
// import Img1 from './images/developer.jpg'
// import Img2 from './images/ui-ux.jpg'
// import Img3 from './images/teach.jpg'

// import Button from'react-bootstrap/Button'

const Services = () => {
  return (
    <>
  
    <div>
      <div className="container">
  <div className="row">
    <div className="col-md-12" style={{textAlign:'center', marginTop:'50px'}}><br></br><br></br>
      <h1 ><b>Services</b></h1>
      <h4>I build responsive websites and tutor students in programming.</h4>
    
    </div>
    <div className="container-service">
      <div className="box"><MdDeveloperMode size={60} />
      <h2><b>Developer</b></h2>
      <p>I develop dynamic, user-friendly websites using modern web technologies, such as React, Node.js, and MongoDB.</p>
      </div>
      <div className="box"><SiAltiumdesigner size={60} />
      <h3><b>UI/UX Designer</b></h3>
      <p>I create engaging, user-friendly interfaces and experiences for websites using design principles, such as wireframes, prototyping, and user testing.</p>
      </div>
      <div className="box">
      <GiTeacher size={60}/>
      <h2><b>Teacher</b></h2>
      <p>I offer personalized tutoring sessions for students of all levels, focusing on coding, programming languages, and web development.</p>
      </div>
    </div>
  </div>
</div>
    </div>
</>

  )
}

export default Services
