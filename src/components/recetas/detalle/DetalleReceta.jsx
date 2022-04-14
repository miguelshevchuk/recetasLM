import React from 'react'
import { Image, ListGroup, Accordion } from 'react-bootstrap'
import { useParams, Navigate } from 'react-router-dom'
import { getRecetaById } from '../../data/recetas/getRecetaById'

export const DetalleReceta = () => {

  const {recetaId} = useParams()
  const receta = getRecetaById(recetaId)

  if(!receta){
    return <Navigate to = "/"/>
  }

  return (
    <div className='container mt-5 center'>
        <h1>{receta.nombre}</h1>
        <div>
          <Image src={receta.imagen} />
        </div>
        <div className='mt-3'>
          <h3>Ingredientes</h3>
          <ListGroup as="ol" numbered>
            {
              receta.ingredientes.map(ingrediente => {
                return <ListGroup.Item as="li">{ingrediente}</ListGroup.Item>
              })
            }
            
          </ListGroup>
        </div>
        <div className='mt-3 mb-5'>
          <h3>Preparacion</h3>
          <Accordion>
            {
              receta.preparacion.map(pasoPreparacion => {
                return (
                <Accordion.Item eventKey={pasoPreparacion.paso}>
                  <Accordion.Header>Paso {pasoPreparacion.paso}</Accordion.Header>
                  <Accordion.Body>
                    {pasoPreparacion.descripcion}
                  </Accordion.Body>
                </Accordion.Item>
                )
              })
            }
          </Accordion>
        </div>
        

    </div>
  )
}
