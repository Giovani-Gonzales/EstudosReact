import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarStyled.css';

const NavbarFunction = () => {
  return (
    <>
      <Navbar className='BodyNav'>
        <Container className="navbar-custom-container">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a>Pricing</a>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarFunction;
