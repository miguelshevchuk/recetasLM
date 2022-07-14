import {React, useState, useEffect} from 'react'
import { Button, Form } from 'react-bootstrap';
import { Stepper, Step } from 'react-form-stepper'
import { useForm } from '../../hooks/useForm';
import { useUsuarioStore } from '../../hooks/useUsuarioStore';
import './LoginStyle.css'

export const RecuperarPass = () => {

    const [userLogueado, login, logout, registrarUsuario,changePasss,getPreguntaSecreta, recuperarPass ] = useUsuarioStore()
    const [completeStep1, setCompleteStep1] = useState(false);
    const [completeStep2, setCompleteStep2] = useState(false);
    const [activeStep, setActiveStep] = useState(1);
    const [showStep1, setShowStep1] = useState(true);
    const [showStep2, setShowStep2] = useState(false);
    const [showResultado, setShowResultado] = useState(false);
    const [preguntaSecreta, setPreguntaSecreta] = useState();
    const [usuarioId, setUsuarioId] = useState();
    const [email, setEmail] = useState();
    const [respuesta, setRespuesta] = useState();
    const [pass, setPass] = useState();
    const [repeatPass, setRepeatPass] = useState();
    const [showError, setShowError] = useState(false);

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePass = (event) => {
        setPass(event.target.value);
    }

    const changeRespuesta = (event) => {
        setRespuesta(event.target.value);
    }

    const changeRepeatPass = (event) => {
        setRepeatPass(event.target.value);
    }

    const buscarPreguntaSecreta = async () => {
        try{
            let pregunta = await getPreguntaSecreta(email)
            setPreguntaSecreta(pregunta.preguntaSecreta)
            setUsuarioId(pregunta.id)
            setCompleteStep1(true)
            setActiveStep(2)
            setShowStep1(false)
            setShowStep2(true)
            setShowError(false)
            setShowResultado(false)
        }
        catch(error){
            setShowError(true)
        }
        
    }

    const volver = () => {
        setCompleteStep1(false)
        setActiveStep(1)
        setShowStep2(false)
        setShowStep1(true)
        setShowError(false)
        setShowResultado(false)
        
    }

    const finalizar = async () => {
        try{
            setShowError(false)
            await recuperarPass(usuarioId, respuesta, pass)
            setCompleteStep2(true)
            setShowStep2(false)
            setShowResultado(true)
        }
        catch(error){
            setShowError(true)
        }
        
    }

  return (
    <div className='container mb-5'>
        <Stepper activeStep={activeStep}>
            <Step completed={completeStep1} onClick={volver} label="Email" />
            <Step completed={completeStep2} disabled={(activeStep == 1)} label="Cambie su contraseña" />
        </Stepper>

        <div className={'container-forgot '+((showStep1) ? 'd-block' : 'd-none')}>
            <div className={ 'text-danger text-align-center p-2 ' + ((showError) ? 'd-block' : 'd-none')}>
                Los datos ingresados son Incorrectos
            </div>
        <Form noValidate>
            <Form.Group className="mb-3" controlId="validationCustom03" >
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Ingrese su Email"
                    autoFocus
                    name="email"
                    value={ email }
                    onChange={ changeEmail }
                />
                <Form.Control.Feedback type="invalid">Por favor, ingresa un Email valido</Form.Control.Feedback>
            </Form.Group>
            </Form>
            <Button onClick={buscarPreguntaSecreta}>Siguiente</Button>
        </div>

        <div className={'container-forgot '+((showStep2) ? 'd-block' : 'd-none')}>
            <div className={ 'text-danger text-align-center p-2 ' + ((showError) ? 'd-block' : 'd-none')}>
                Los datos ingresados son Incorrectos
            </div>
            <h6>{preguntaSecreta}</h6>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Ingrese su respuesta" 
                    name="respuestaSecreta"
                    value={ respuesta } 
                    onChange={ changeRespuesta }/>
                    <Form.Control.Feedback type="invalid">Por favor, ingresa una respuesta valida</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                        <Form.Label>Contraseña nueva</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su Contraseña nueva" 
                        name="newPass"
                        value={ pass }
                        onChange={ changePass }/>
                        <Form.Control.Feedback type="invalid">Por favor, ingresa una Contraseña valida</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Repita su contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Repita su Contraseña nueva" 
                        name="repeatNewPass"
                        value={ repeatPass }
                        onChange={ changeRepeatPass }/>
                        <Form.Control.Feedback type="invalid">Por favor, ingresa una Contraseña valida</Form.Control.Feedback>
                    </Form.Group>

                <Button variant="secondary" onClick={volver} className="m-3">Volver</Button>
                <Button  onClick={finalizar}>Finalizar</Button>
        </div>


        <div className={'container-forgot '+((showResultado) ? 'd-block' : 'd-none')}>
            Su clave se reestablecio con Exito
        </div>
    </div>
  )
}
