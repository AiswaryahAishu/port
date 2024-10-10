import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Frontend from './resumes/aiswarya mc (1).pdf'
import Teacher from './resumes/science techer cv.pdf'
import { Link,NavLink } from 'react-router-dom';



const Header = () => {
   
    
      return (
        <Navbar expand="lg" style={{ backgroundColor: '#B0C4DE' }} className="bg-body-light ">
          <Container>
            <Navbar.Brand href="#home">Aiswarya.Mc</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-4">
                <Nav.Link  as={NavLink} to='/'>Home</Nav.Link>
                <Nav.Link  as={NavLink} to='/about'>About</Nav.Link>
                <Nav.Link  as={NavLink} to='/skills'>Skills</Nav.Link>
                <Nav.Link  as={NavLink} to='/services'>Services</Nav.Link>
                <NavDropdown title="Resume" id="basic-nav-dropdown">
                  <NavDropdown.Item href={Frontend}>Front-End Developer</NavDropdown.Item>
                  <NavDropdown.Item href={Teacher}>
                  Science Teacher
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Back-End developer</NavDropdown.Item>
                  <NavDropdown.Item href="#">React developer</NavDropdown.Item>
                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
   

export default Header
