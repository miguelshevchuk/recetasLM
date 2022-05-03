import {React} from 'react'
import { Container, Navbar,  Nav} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { Login } from '../Login/Login'

export const NavbarLM = ({usrLogged, setUserLogged}) => {

  return (
    <>
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
          to="/recetas/me"
        >
          <Nav.Link href="#3">
          Ayuda
          </Nav.Link>
        </Link>
        
        <Login usrLogged={usrLogged} setUserLogged={setUserLogged}/>
        
        
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  </>
  )
}
