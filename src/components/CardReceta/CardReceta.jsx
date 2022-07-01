import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TrashButton } from '../ui/TrashButton'
import ReactStars from 'react-stars'
import './CardRecetaStyle.scss'


const usuarioIdLogueado = localStorage.getItem("usuarioId")

export const CardReceta = ({id,
    nombre,
    descripcion,
    categoria,
    ingredientes,
    preparacion,
    imagen,
    usuario,
    calificacionPromedio}) => {

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
          <div className='stars'><ReactStars  count={5}  size={24}  color2={'#ffd700'} half={true} value={calificacionPromedio} edit={false}/></div>
          
        </Card>
      </Col>
  )
}