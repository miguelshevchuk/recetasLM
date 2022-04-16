import {React,useState} from 'react'
import { Container, Navbar, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const NavbarLM = ({usrLogged, setUserLogged}) => {

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem('tokenRefresh')
    localStorage.removeItem('nombre')
    localStorage.removeItem('email')
    localStorage.removeItem('usuarioId')
    setUserLogged(false)
  }

  const login = () => {
    localStorage.setItem('token', 'sadfasdfasdf')
    localStorage.setItem('tokenRefresh', 'sadfasdfasdf')
    localStorage.setItem('nombre', 'Miguel Shevchuk')
    localStorage.setItem('email', 'shevchuk.miguel@gmail.com')
    localStorage.setItem('usuarioId', 1)
    setUserLogged(true)
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
    <Navbar.Brand >Recetas LM</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      
        <NavLink 
            className="text-decoration-none" 
            to="/recetas"
        >
          <Nav.Link href="#1">
            Inicio
          </Nav.Link>
        </NavLink>
        
        {
          (usrLogged) && 
          <NavLink 
              className="text-decoration-none"
              to="/recetas/me"
          >
            <Nav.Link href="#2">
              Mis recetas
            
            </Nav.Link>
          </NavLink>
        }
      </Nav>
      <Nav>
        
        <Link 
          className="text-decoration-none" 
          to="/ayuda"
        >
          <Nav.Link href="#3">
          Ayuda
          </Nav.Link>
        </Link>
        
        {
          (usrLogged) ?(
          <NavDropdown title={localStorage.getItem("nombre")} id="collasible-nav-dropdown">
            <NavDropdown.Item href="#4">
              <Link 
                className="dropdown-item" 
                to="/ayuda"
              >
                Mis Datos
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#5">
              <Link 
                  onClick={logout}
                  className="dropdown-item" 
                  to="/"
              >
              Logout
              </Link>
            </NavDropdown.Item>
          </NavDropdown>)
          :(
                <Link 
                onClick={login}
              className="text-decoration-none" 
              to="/"
            >
              <Nav.Link href="#6">
              Login
              </Nav.Link>
            </Link>
          )
        }
        
        
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
