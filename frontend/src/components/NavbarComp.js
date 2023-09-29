import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import './NavbarComp.css'

export default class NavbarComp extends Component {
    render() {
        return (
          <div> 
            <Navbar expand= "lg" bg= "dark" data-bs-theme= "light">
            <Container>
           
              <Navbar.Brand href="#home">
                        <img
                        src= 'https://thenounproject.com/api/private/icons/187638/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0'
                        width=""
                        height=""
                        className="d-inline-block align-top"
                        alt="Hiking Logo"
                        />
              </Navbar.Brand>
                  <Navbar.Brand href="#home">Learn Your Parks</Navbar.Brand>
                      <Nav className="me-auto">
                          <Nav.Link href="#home">Home</Nav.Link>
                          <Nav.Link href="#pages/comment">Comments</Nav.Link>
                      </Nav>
            
            </Container>
            </Navbar>
          </div>
        )
    }
}
   