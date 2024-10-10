import React from 'react'
import Button from 'react-bootstrap/Button';
import './Skills.css'; // External CSS 


const Skills = () => {
  return (
    <>
 
    <div className="container" >
      <div className="row">
        <div className="col-md-12">
          <div className='contents'><br></br><br></br>
          <h1><b>Skills</b></h1>
          <h4>I build responsive websites using modern web technologies.</h4>
          </div>

          <div className="skills-flexbox">
            <Button variant="primary" className="skill-button">HTML</Button>{' '}
            <Button variant="secondary" className="skill-button">CSS</Button>{' '}
            <Button variant="success" className="skill-button">JavaScript</Button>{' '}
            <Button variant="warning" className="skill-button">React</Button>{' '}
            <Button variant="danger" className="skill-button">MongoDB</Button>{' '}
            <Button variant="info" className="skill-button">Node.js</Button>{' '}
            <Button variant="secondary" className="skill-button">Express</Button>{' '}
            <Button variant="success" className="skill-button">Bootstrap</Button>{' '}
            <Button variant="secondary" className="skill-button">Communication</Button>
            <Button variant="primary" className="skill-button">TIme Management</Button>{' '}
            <Button variant="warning" className="skill-button">Problem Solving</Button>{' '}
            <Button variant="danger" className="skill-button">Team work</Button>{' '}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Skills;
