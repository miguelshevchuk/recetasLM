import {React, useState} from 'react'
import { Modal, Form, Button, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useUsuarioStore } from '../../hooks/useUsuarioStore';
import './RegistroStyle.scss'

export const Registro = ({showreg,handleShowReg}) => {
    
    const [formRegistrationValues,handleInputRegistrationChange,resetRegistro ] = useForm({
        nombreYApellido: "",
        email:"",
        telefono:"",
        password:""
    });
    const [userLogueado, login, logout, registrarUsuario] = useUsuarioStore()
    const {nombreYApellido, email, telefono, password} = formRegistrationValues;

    const [validated, setValidated] = useState(false);
    const [showError, setShowError] = useState(false);

    


  /* PEDIR QUE MIGUE ME EXPLIQUE UN POCO QUE HIZO EN ESTA PARTE, entiendo que usa el hook */
    const handleRegistration = async (event) => {
      const form = event.currentTarget;
      console.log(form.checkValidity())
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          setValidated(true);
      }else{
          setValidated(true);
          event.stopPropagation();
          event.preventDefault();
          try{
            await registrarUsuario(email, password, nombreYApellido, telefono)
            resetRegistro()
            handleShowReg(false)
            setValidated(false);
            setShowError(false)
          }catch(e){
              setShowError(true)
              console.log(e)
          }
      }
  };

  return (
    <>
      <Modal show={showreg} onHide={handleShowReg}>
        <Modal.Header closeButton>
          <Modal.Title bsPrefix='modal-titleCustom'>Crea tu cuenta en Kitchen Community</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleRegistration}>
        <Modal.Body bsPrefix='modal-bodyCustom'> 
         
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control placeholder="Ingrese su Nombre y apellido" 
                name="nombreYApellido"
                value={ nombreYApellido }
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
                name="password"
                value={ password }
                onChange={ handleInputRegistrationChange }
                />
                <Form.Control.Feedback type="invalid">Por favor, ingresa una Contraseña valida</Form.Control.Feedback>
            </Form.Group>
          
        </Modal.Body>
        <div className={ 'text-danger text-align-center p-2 ' + ((showError) ? 'd-block' : 'd-none')}>
            Ya se encuentra una cuenta registrada con este correo
        </div>
        <Modal.Footer>
        <Button variant="primary" type="submit">
            Registrarse
          </Button>
          <Button variant="secondary" onClick={handleShowReg}>
            Cancelar
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
      
    </>
  )
}
