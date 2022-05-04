import {React} from 'react'
import { Container, Navbar,  Nav, Image} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { Login } from '../Login/Login'
import logo from '../Img/Kitchen community.svg'
import insta from '../Img/Insta.svg';
import face from '../Img/facebook.svg';
import youtube from '../Img/youtube.svg';
import './NavbarLMStyle.scss'
export const NavbarLM = ({usrLogged, setUserLogged}) => {

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      <a className="redes" href='www.instagram.com'><img src={insta} alt="instagram logo" /></a>
      <a className="redes" href='www.facebook.com'><img src={face} alt="facebook logo" /></a>
      <a className="redes" href='www.youtube.com'><img src={youtube} alt="youtube logo" /></a>
    
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
  <Navbar>
    <NavLink className="text-decoration-none" to="/recetas" >
      <div className='logo'>
        <Image src={logo} fluid />
      </div>
    </NavLink>
  </Navbar>


  </>
  )
}
