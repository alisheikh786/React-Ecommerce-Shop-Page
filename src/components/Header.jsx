import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Offcanvas, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <Navbar variant='dark' bg='dark' expand='md' className="mb-3">
    <Container >
      <Navbar.Brand as={NavLink} to='/'>ARS Designs</Navbar.Brand>
      <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
      <Navbar.Offcanvas
        id='offcanvasNavbar-expand-md'
        aria-labelledby='offcanvasNavbarLabel-expand-md'
        placement="end"
        className='bg-dark text-light'
      >
        <Offcanvas.Header closeButton closeVariant='white'>
          <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
            ARS
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
       <Nav className='mx-auto'>
        <Nav.Link as={NavLink} to="/"> Home </Nav.Link>
        <Nav.Link as={NavLink} to="/about"> About </Nav.Link>
        <Nav.Link as={NavLink} to="/contact"> Contact Us </Nav.Link>
       </Nav>
     
            <Button as={NavLink} to='login' variant="outline-light" className='me-3'><FontAwesomeIcon icon="fa-solid fa-right-to-bracket" /> Login</Button>
            <Button as={NavLink} to='register' variant="outline-light" className='me-3'><FontAwesomeIcon icon="fa-solid fa-user-plus" /> Register</Button>
            <Button as={NavLink} to='cart' variant="outline-light"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Cart()</Button>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>

  )
}

export default Header