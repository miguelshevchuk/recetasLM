import {React, useState} from 'react'
import { Navigate } from 'react-router-dom'
import { cambiarPass, getUsuarioLogueado } from '../../domain/service/usuario/UsuarioService'
import { Card, Button, Form } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm';

export const DatosPersonales = () => {

    
    const usuario = getUsuarioLogueado()

    const [ formValues, handleInputChange, reset] = useForm({
        oldPass: undefined,
        newPass: undefined,
        repeatNewPass: undefined
      });
      const [showError, setShowError] = useState(false);
      const [showOk, setShowOk] = useState(false);
      const [validated, setValidated] = useState(false);

    const { oldPass, newPass, repeatNewPass} = formValues;

    const changePass = (event) => {
        setShowOk(false)
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
                validarPass()
                cambiarPass(oldPass, newPass)
                setValidated(false);
                setShowError(false)
                reset()
                setShowOk(true)
            }catch(e){
                setShowError(true)
            }
            
        }
    };

    const validarPass = () => {
        if(newPass != repeatNewPass){
            throw new Error("Las contraseñas ingresadas son distintas")
        }
    }


  return (
    <div className='container float-start mb-5'>
        <h1>Datos Personales</h1>
        <div className='float-start'>
            <Card style={{ width: '18rem' }} className="card" bsPrefix='card-flyer'>
                <Card.Img variant="top" src="/assets/usuario.png"/>
                <Card.Body>
                    <Card.Title bsPrefix='titulo'>{usuario.nombre}</Card.Title> 
                    <Card.Subtitle bsPrefix='subtitulo'>{usuario.email}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
        <div className='float-start m-5'>
            <h3>Cambiar Contraseña</h3>
        <Form noValidate validated={validated} onSubmit={changePass}>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña actual</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su Contraseña actual" 
                    name="oldPass"
                    value={ oldPass }
                    onChange={ handleInputChange }/>
                    <Form.Control.Feedback type="invalid">Por favor, ingresa una Contraseña valida</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña nueva</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su Contraseña nueva" 
                    name="newPass"
                    value={ newPass }
                    onChange={ handleInputChange }/>
                    <Form.Control.Feedback type="invalid">Por favor, ingresa una Contraseña valida</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Repita su contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Repita su Contraseña nueva" 
                    name="repeatNewPass"
                    value={ repeatNewPass }
                    onChange={ handleInputChange }/>
                    <Form.Control.Feedback type="invalid">Por favor, ingresa una Contraseña valida</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Cambiar
                </Button>
            </Form>


            <div className={ 'text-danger text-align-center p-2 ' + ((showError) ? 'd-block' : 'd-none')}>
                Los datos ingresados son Incorrectos
            </div>
            <div className={ 'text-success text-align-center p-2 ' + ((showOk) ? 'd-block' : 'd-none')}>
                Password cambiada con exito
            </div>
        </div>
        
        


    </div>
  )
}
