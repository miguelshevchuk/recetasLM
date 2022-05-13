import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
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
        <Card style={{ width: '18rem' }} className="card" bsPrefix='card-flyer'>
          <Link to={`/receta/${id}`} className='a'>
            <Card.Img variant="top" src={imagen}/>
            <Card.Body>
                <Card.Subtitle bsPrefix='subtitulo'>{categoria.descripcion}</Card.Subtitle>
                <Card.Title bsPrefix='titulo'>{nombre} <TrashButton key={id} usuario={usuario.id} recetaId={id}/></Card.Title> 
                <Card.Text bsPrefix='descripcion'>{descripcion}</Card.Text>
            </Card.Body>
          </Link> 
        </Card>
        </Col>
  )
}