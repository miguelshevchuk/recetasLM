import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TrashButton } from '../ui/TrashButton'

export const CardReceta = ({id,
    nombre,
    descripcion,
    ingredientes,
    preparacion,
    imagen,
    usuario}) => {
  return (
      <Col>
        <Card style={{ width: '18rem' }} className="card">
            <Card.Img variant="top" src={imagen}/>
            <Card.Body>
                <Card.Title>{nombre} <TrashButton usuario={usuario} recetaId={id} /></Card.Title>
                <Card.Text>
                {descripcion}
                </Card.Text>
                <Link to={`/receta/${id}`} className="btn-primary btn">Ver mas</Link>
            </Card.Body>
        </Card>
        </Col>
  )
}
