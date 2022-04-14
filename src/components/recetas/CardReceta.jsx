import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CardReceta = ({id,
    nombre,
    descripcion,
    ingredientes,
    preparacion,
    imagen}) => {
  return (
      <Col>
        <Card style={{ width: '18rem' }} className="card">
            <Card.Img variant="top" src={imagen}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                {descripcion}
                </Card.Text>
                <Link to={`/receta/${id}`} className="btn-primary btn">Ver mas</Link>
            </Card.Body>
        </Card>
        </Col>
  )
}
