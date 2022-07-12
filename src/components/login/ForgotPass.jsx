import {React, useState} from 'react'
import { Modal, Form, Button, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useUsuarioStore } from '../../hooks/useUsuarioStore';
import './LoginStyle.scss'


export const ForgotPass = ({showforgotpass,handleShowForogot,handleCloseLogin}) => {

  const [pregunta, setPregunta] = useState();


    const [formRegistrationValues,handleInputRegistrationChange,resetRegistro,changevalues ] = useForm({
        email:"",
        preguntaSecreta:pregunta,
        respuestaSecreta:""

    });

    const [userLogueado, login, logout, registrarUsuario,changePass,getPreguntaSecreta ] = useUsuarioStore()
 
    const [showError, setShowError] = useState(false);
    
    const ObtenerPregunta = async () => {
             try{
                 
              let preguntaSecreta = await getPreguntaSecreta(email)
              setPregunta(preguntaSecreta)
changevalues({
                email:email,
                preguntaSecreta: pregunta.preguntaSecreta,
                respuestaSecreta:""
        
            })
/*               handleShowReg(false)
              toast.success("Usuario registrado")
              setValidated(false);
              setShowError(false) */
              
              
            }catch(e){
                setShowError(true)
                console.log(e)
            }
        }
    

    const {email,preguntaSecreta,respuestaSecreta} = formRegistrationValues
    
    console.log(email)
  
    const cerrarModales = () => {
      handleCloseLogin();
       handleShowForogot();

    }
   
return(
    <Modal show={showforgotpass} onHide={cerrarModales}>
    
    <Modal.Header closeButton>
      <Modal.Title bsPrefix='modal-titleCustom'>Recupero de contraseña</Modal.Title>
    </Modal.Header>

    <Form >
    <Modal.Body bsPrefix='modal-bodyCustom'> 
        <Form.Group className="mb-3" controlId="validationCustom03" >
            <Form.Text bsPrefix='modal-titleCustom'>Para recuperar su contraseña, deberá contestar la pregunta secreta que definio al momento de registrarse.</Form.Text>
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

        {/* Cuando le da submit busco la pregunta secreta asociada a ese email */}      
        </Form.Group>
        <Modal.Footer>
            <Button variant="primary" onClick={ObtenerPregunta}>
            Obtener pregunta secreta
            </Button>
        </Modal.Footer>

        <Form.Group className="mb-3" controlId="validationCustom03" >
          <Form.Label>Pregunta secreta</Form.Label>
          <Form.Control
            placeholder="Pregunta secreta"
            disabled
            readOnly
            value={ preguntaSecreta } 
            
            /* type="email"
            placeholder="Ingrese su Email"
            autoFocus
            name="usuario"
            value={ usuario }
             */
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Respuesta</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su respuesta secreta" 
            name="respuestaSecreta"
            value={ respuestaSecreta } />
            <Form.Control.Feedback type="invalid">Por favor, ingresa una Contraseña valida</Form.Control.Feedback>
        </Form.Group>
        
      
    </Modal.Body>
{/*     <div className={ 'text-danger text-align-center p-2 ' + ((showError) ? 'd-block' : 'd-none')}>
        Los datos ingresados son Incorrectos
    </div> */}
    <Modal.Footer>
    <Button variant="primary" type="submit">
        Enviar
      </Button>
      <Button variant="secondary" onClick={cerrarModales}>
        Cancelar
      </Button>
    </Modal.Footer>
    </Form>
  </Modal>   
)}