import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TrashButton } from '../ui/TrashButton'
import './CardRecetaStyle.scss'

export const CardReceta = ({id,
    nombre,
    descripcion,
    categoria,
    ingredientes,
    preparacion,
    imagen,
  usuario}) => {

  return (
      <Col>
      
        <Card style={{ width: '19rem' }} className="card" bsPrefix='card-flyer'>
        <TrashButton key={id} usuario={usuario.id} recetaId={id}/>
          <Link to={`/receta/${id}`} className='a'>
            <Card.Img variant="top" src={imagen}/>
            <Card.Body>
                <Card.Subtitle bsPrefix='subtitulo'>{categoria.descripcion}</Card.Subtitle>
                <Card.Title bsPrefix='titulo'>{nombre} </Card.Title> 
                <Card.Text bsPrefix='descripcion'>{descripcion}</Card.Text>
            </Card.Body>
          </Link> 
        </Card>
      </Col>
  )
}