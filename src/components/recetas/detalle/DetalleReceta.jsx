import React from 'react'
import { Image, ListGroup, Accordion, Container, Row, Col } from 'react-bootstrap'
import { useParams, Navigate } from 'react-router-dom'
import { getRecetaById } from '../../../domain/service/recetas/RecetasService'
import './DetalleRecetaStyle.scss'
export const DetalleReceta = () => {

  const {recetaId} = useParams()
  const receta = getRecetaById(recetaId)

  if(!receta){
    return <Navigate to = "/"/>
  }

  return (
 <>
 <Container>
   <Row className="justify-content-md-center">
{/*   <div className='container mt-5 center  float-start float-sm-start' >
 */}        
    <h1 className='titleReceta'>{receta.nombre}</h1>
    <h2 className='descrip'>{receta.descripcion}</h2>
    <hr className='mb-0'/>

        <Row>
          <div className='alineo'>
            <Image src={receta.imagen} style={{ width: '75%', padding:'20px', borderRadius:'24px'}} />
          </div> 
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12}  md ={9} lg={9}>
                <h3 className='titulo'>Ingredientes</h3>

                <ListGroup variant='flush'>
                  {
                    receta.ingredientes.map(ingrediente => {
                      return <ListGroup.Item as="li">{ingrediente}</ListGroup.Item>
                    })
                  }
                  
                </ListGroup>

          </Col>

        </Row>

        
        <div className='float-start border-start p-3' style={{ width: '600px' }}>

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
{/*     </div>
 */}      </Row>
    </Container>
    </>
  )
}
