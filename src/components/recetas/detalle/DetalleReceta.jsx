import React from 'react'
import { Image, ListGroup, Accordion } from 'react-bootstrap'
import { useParams, Navigate } from 'react-router-dom'
import { getRecetaById } from '../../../domain/service/recetas/RecetasService'

export const DetalleReceta = () => {

  const {recetaId} = useParams()
  const receta = getRecetaById(recetaId)

  if(!receta){
    return <Navigate to = "/"/>
  }

  return (
 <>
  <div className='container mt-5 center border float-start float-sm-start' >
        <h1>{receta.nombre}</h1>
        <hr className='mb-0'/>
        <div className='float-start float-sm-start mt-3' style={{ width: '370px' }}>
          <Image src={receta.imagen} style={{ width: '350px' }}/>
        </div>
        <div className='float-start border-start p-3' style={{ width: '350px' }}>
          <div>
            <h3 className='mt-3'>Ingredientes</h3>
            <ListGroup as="ol" numbered>
              {
                receta.ingredientes.map(ingrediente => {
                  return <ListGroup.Item as="li">{ingrediente}</ListGroup.Item>
                })
              }
              
            </ListGroup>
          </div >
          <div className='mt-3 mb-5 float-start' style={{ width: '350px' }}>
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
    </div>
    </>
  )
}
