import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CardRecetaStyle.scss'

export const CardReceta = ({id,
    nombre,
    descripcion,
    categoria,
    ingredientes,
    preparacion,
    imagen}) => {
  return (
      <Col>
        <Card style={{ width: '18rem' }} className="card" bsPrefix='card-flyer'>
          <a className='a' href={`/receta/${id}`}>
            <Card.Img variant="top" src={imagen}/>
            <Card.Body>
                <Card.Subtitle bsPrefix='subtitulo'>{categoria}</Card.Subtitle>
                <Card.Title bsPrefix='titulo'>{nombre}</Card.Title>
                <Card.Text bsPrefix='descripcion'>{descripcion}</Card.Text>
            </Card.Body>
          </a> 
        </Card>
        </Col>
  )
}