import React from 'react'
import { Container, Navbar, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const NavbarLM = () => {
  const nombre = "Miguel Shevchuk"
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="/">Recetas LM</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link  href="/me" >
          Mis recetas
        </Nav.Link>
        
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Ayuda</Nav.Link>
        <NavDropdown title={nombre} id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Mis Datos</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
