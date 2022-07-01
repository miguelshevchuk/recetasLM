import {React, useEffect} from 'react'
import { Image, ListGroup, Accordion, Container, Row, Col } from 'react-bootstrap'
import { useParams, Navigate } from 'react-router-dom'
import { useRecetaStore } from '../../../hooks/useRecetaStore'
import {toast} from 'react-toastify';
import './DetalleRecetaStyle.scss'
import ReactStars from 'react-stars'






export const DetalleReceta = ({usrLogged}) => {

  
  const {recetaId} = useParams()
  const [receta, recetaExistente, reload, calificarReceta] = useRecetaStore(recetaId);

  if(!recetaExistente){
    return <Navigate to = "/"/>
  }
  
  const ratingChanged = async (newRating) => {

    try{
      await calificarReceta (recetaId,newRating)
      
    }catch(e){
        toast.error("Debe estar registrado para calificar la recate")
        console.log(e)
    }

    calificarReceta (recetaId,newRating)
    console.log(recetaId, newRating)
  }
  return (
 <>
 <Container>
   <Row className="justify-content-md-center">
{/*   <div className='container mt-5 center  float-start float-sm-start' >
 */}        
    <h1 className='titleReceta'>{receta?.nombre}</h1>
    <h2 className='descrip'>{receta?.descripcion}</h2>
    <hr className='mb-0'/>

        <Row>
          <div className='alineo'>
             <Image src={receta?.imagen} style={{width:'40%', padding:'20px',borderRadius:'24px'}} />
          </div> 
          <div className='alineo'>
            <h2 className='descrip'>Calificación general</h2>
          </div>
          <div className='alineo'>
            <ReactStars  count={5}  onChange={ratingChanged}  size={24}  color2={'#ffd700'} half={true} value={receta?.calificacionPromedio} edit={
              (usrLogged)?(true):(false)
              }/>
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12}  md ={9} lg={9}>
                <h3 className='ingrediente'>Ingredientes</h3>
                <ListGroup variant='flush' >
                  {
                    receta?.ingredientes.map(ingrediente => {
                      return <ListGroup.Item as="li" bsPrefix='fuentePasos'>{ingrediente}</ListGroup.Item>
                    })
                  }
                </ListGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12}  md ={9} lg={9}>
          <h3 className='ingrediente'>Preparacion</h3>
            <Accordion alwaysOpen flush>
              {
                receta?.preparacion.map(pasoPreparacion => {
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
          </Col>
        </Row>           
      </Row>
    </Container>
    </>
  )
}
