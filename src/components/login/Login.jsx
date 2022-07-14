import {React, useState} from 'react'
import { Modal, Form, Button, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useUsuarioStore } from '../../hooks/useUsuarioStore';
import { Registro} from '../Registro/Registro'
import { ForgotPass } from './ForgotPass';
import './LoginStyle.scss'

export const Login = ({usrLogged, setUserLogged}) => {

  const navigate = useNavigate();

    const [ formLoginValues, handleInputLoginChange, resetLogin ] = useForm({
        usuario: "",
        pass: ""
      });
    const { usuario, pass} = formLoginValues;
    const [validated, setValidated] = useState(false);
    const [showError, setShowError] = useState(false);
    const [userLogueado, login, logout] = useUsuarioStore()

    const [showreg, setShowReg] = useState(false);
    
    const handleShowReg = ()  => {
      setShowReg(!showreg)
    }
    const [showforgot, setShowForgot] = useState(false);
    
    const handleShowForogot = ()  => {
      handleCloseLogin()
      navigate(`/forgotpass`)
      //setShowForgot(!showforgot)
    }   
    const [show, setShow] = useState(false);


    const handleLogout = () => {
        logout(setUserLogged)
    }

    const handleLogin = async (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }else{
            setValidated(true);
            event.stopPropagation();
            event.preventDefault();
            try{
                await login(usuario, pass, setUserLogged)
                resetLogin()
                handleCloseLogin()
                setValidated(false);
                setShowError(false)
            }catch(e){
                setShowError(true)
            }
        }
    };


    const handleCloseLogin = () => setShow(false);
    const handleShowLogin = () => {
        setValidated(false);
        setShowError(false);
        resetLogin();
        setShow(true)
    };

  return (
    <>

    {
          (usrLogged) ?(
          <NavDropdown title={localStorage.getItem("nombre")} id="collasible-nav-dropdown">
            <NavDropdown.Item href="#2">
              <Link 
                className="dropdown-item" 
                to="/recetas/me"
              >
                Mis Recetas
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#4">
              <Link 
                className="dropdown-item" 
                to="/usuario"
              >
                Mis Datos
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#5">
              <Link 
                  onClick={handleLogout}
                  className="dropdown-item" 
                  to="/"
              >
              Logout
              </Link>
            </NavDropdown.Item>
          </NavDropdown>)
          :(
            <>
                <Nav.Link onClick={handleShowLogin}>
                    Login
                </Nav.Link>
                <Link 
                    className="text-decoration-none" 
                    to="recetas/registro"
                    >
                    <Nav.Link onClick={handleShowReg}>
                      Registro
                    </Nav.Link>
                </Link>

            </>
          )
        }

      <Modal show={show} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title bsPrefix='modal-titleCustom'>Bienvenido a Kitchen Community</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleLogin}>
        <Modal.Body bsPrefix='modal-bodyCustom'> 
         
            <Form.Group className="mb-3" controlId="validationCustom03" >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su Email"
                autoFocus
                name="usuario"
                value={ usuario }
                onChange={ handleInputLoginChange }
              />
              <Form.Control.Feedback type="invalid">Por favor, ingresa un Email valido</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su Contraseña" 
                name="pass"
                value={ pass }
                onChange={ handleInputLoginChange }/>
                <Form.Control.Feedback type="invalid">Por favor, ingresa una Contraseña valida</Form.Control.Feedback>
            </Form.Group>
            <Button variant="link" bsPrefix='btn_forgotpass' onClick={handleShowForogot}>¿Olvido su contraseña?</Button>
          
        </Modal.Body>
        <div className={ 'text-danger text-align-center p-2 ' + ((showError) ? 'd-block' : 'd-none')}>
            Los datos ingresados son Incorrectos
        </div>
        <Modal.Footer>
        <Button variant="primary" type="submit">
            Ingresar
          </Button>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Cancelar
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>      
      <Registro handleShowReg={handleShowReg} showreg={showreg}/>
      <ForgotPass handleShowForogot={handleShowForogot} handleCloseLogin={handleCloseLogin} showforgotpass={showforgot}/>
    </>
  )
}
