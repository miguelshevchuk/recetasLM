import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

export const Ayuda = () => {
  return (
    <div className="container">
        <h1>Sobre Kitchen Community</h1>
        
        <Tabs
        defaultActiveKey="Usuario"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
            <Tab eventKey="Usuario" title="Usuario">
                <p className="fw-light">
                    En esta aplicacion encontraras todo lo necesario para operar con tu usuario, de manera segura y facil.<br />
                    Podras crear tu usuario desde la opcion de registro, protegiendolo con una pregunta secreta que solo vos conoces.<br />
                    Desde el Menu de datos personales, podras consultar tus datos y cambiar tu clave de manera rapida y sencilla.<br />
                    Ademas, si perdes tus credenciales, podes recuperarlas en el momento contestando la pregunta secreta que vos mismo definiste al momento del registro.
                </p>
            </Tab>
            <Tab eventKey="Recetas" title="Recetas">
                <p className="fw-light">
                    Consulta todas las recetas de la comunidad sin necesidad de estar registrado. <br />
                    Comparti, califica y opina sobre las recetas que mas te gusten, y practicalas en tu casa!! <br />
                    Ademas, vas a poder subir recetas con tu propio sello, mejorando las recetas que otras personas ya compartieron!
                </p>
            </Tab>
        </Tabs>

    </div>
  )
}
