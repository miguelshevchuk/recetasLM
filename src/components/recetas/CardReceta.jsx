import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TrashButton } from '../ui/TrashButton'
import "./CardReceta.css";

export const CardReceta = ({id,
    nombre,
    descripcion,
    ingredientes,
    preparacion,
    imagen,
    usuario}) => {
      //<Link to={`/receta/${id}`} className="btn-primary btn">Ver mas</Link>
  return (
      <Col>
        <Card className="contornoCard">
          <Card.Img variant="top" src={imagen} className="imagenCard mt-1"/>
            <Card.Body className='bodyCard'>
                <Card.Title className="titleCard">{nombre} <TrashButton usuario={usuario} recetaId={id} /></Card.Title>
                <Card.Text className="textCard">
                {descripcion}
                <Link to={`/receta/${id}`} className="btn-primary btn">Ver mas</Link>
                </Card.Text>

            </Card.Body>
        </Card>
        </Col>
  )
}
