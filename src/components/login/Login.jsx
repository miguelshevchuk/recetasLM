import {React, useState} from 'react'
import { Modal, Form, Button, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useUsuarioStore } from '../../hooks/useUsuarioStore';
import './LoginStyle.scss'

export const Login = ({usrLogged, setUserLogged}) => {

    const [ formLoginValues, handleInputLoginChange, resetLogin ] = useForm({
        usuario: "",
        pass: ""
      });
    
    const [formRegistrationValues,handleInputRegistrationChange ] = useForm({
        nombre: "",
        apellido: "",
        email:"",
        telefono:"",
        contrasenia:""
    });
    
    const { usuario, pass} = formLoginValues;
    const {nombre, apellido, email, telefono, contrasenia} = formRegistrationValues;

    const [validated, setValidated] = useState(false);
    const [showError, setShowError] = useState(false);
    const [userLogueado, login, logout] = useUsuarioStore()

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

  /* PEDIR QUE MIGUE ME EXPLIQUE UN POCO QUE HIZO EN ESTA PARTE, entiendo que usa el hook */
    const handleRegistration = async (event) => {
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

    const handleCloseRegistro = () => setShow(false);
    const handleShowRegistro = () => setShow(true);

    const handleCloseLogin = () => setShow(true);
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
                    to="/recetas/me"
                    >
                    <Nav.Link onClick={handleShowRegistro}>
                        Registrarse
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

      {/* MODAL DE REGISTRO*/}
      <Modal show={show} onHide={handleCloseRegistro}>
        <Modal.Header closeButton>
          <Modal.Title bsPrefix='modal-titleCustom'>Crea tu cuenta en Kitchen Community</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleRegistration}>
        <Modal.Body bsPrefix='modal-bodyCustom'> 
         
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder="Ingrese su Nombre" 
                name="nombre"
                value={ nombre }
                onChange={ handleInputRegistrationChange }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control placeholder="Ingrese su Nombre" 
                name="apellido"
                value={ apellido }
                onChange={ handleInputRegistrationChange }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom03" >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su Email"
                autoFocus
                name="email"
                value={ email }
                onChange={ handleInputRegistrationChange }
              />
              <Form.Control.Feedback type="invalid">Por favor, ingresa un Email valido</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control placeholder="Ingrese su teléfono"
                type='number' 
                name="telefono"
                value={ telefono }
                onChange={ handleInputRegistrationChange } 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su Contraseña" 
                name="contrasenia"
                value={ contrasenia }
                onChange={ handleInputRegistrationChange }
                />
                <Form.Control.Feedback type="invalid">Por favor, ingresa una Contraseña valida</Form.Control.Feedback>
            </Form.Group>
          
        </Modal.Body>
        <div className={ 'text-danger text-align-center p-2 ' + ((showError) ? 'd-block' : 'd-none')}>
            Los datos ingresados son Incorrectos
        </div>
        <Modal.Footer>
        <Button variant="primary" type="submit">
            Registrarse
          </Button>
          <Button variant="secondary" onClick={handleCloseRegistro}>
            Cancelar
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
      
    </>
  )
}
