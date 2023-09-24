import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

export default class NavbarComp extends Component {
    render() {
        return (
          <div>
            <Navbar bg="dark" data-bs-theme="dark">
              <Container>
              <Navbar.Brand href="#home">
                        <img
                        src= 'https://www.fohvos.info/wp-content/uploads/2018/07/hiker-icon.png'
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Hiking Logo"
                        />
              </Navbar.Brand>
                  <Navbar.Brand href="#home">Learn Your Parks</Navbar.Brand>
                      <Nav className="me-auto">
                          <Nav.Link href="#home">Home</Nav.Link>
                          <Nav.Link href="#about">About</Nav.Link>
                          <Nav.Link href="#messageboard">Message Board</Nav.Link>
                      </Nav>
              </Container>
            </Navbar>
          </div>
        )
    }
}
   