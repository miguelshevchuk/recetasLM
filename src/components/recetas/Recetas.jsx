import {React, useState} from 'react'
import { Image, Row, Col, Container } from 'react-bootstrap'
import { CardReceta } from '../CardReceta/CardReceta'
import { FiltroRecetas } from './filtro/FiltroRecetas'
import { Link } from 'react-router-dom';
import { Categorias } from './Categorias'
import { FiltroResponsive } from './filtro/FiltroResponsive'
import { useRecetasStore } from '../../hooks/useRecetasStore';

export const Recetas = ({usuario}) => {

    const [fDescripcion, setFDescripcion] = useState(undefined);
    const [fTipo, setFTipo] = useState(undefined);
    const [fDificultad, setFDificultad] = useState(undefined);
  //  const [recetas, setRecetas] = useState([]);
    const [recetasStore, reiniciarRecetas] = useRecetasStore();    

    const filtroDificultad = (receta) => {
        if(fDificultad){
            return receta.dificultad == fDificultad
        }
        return true
    }

    const filtroNombre = (receta) => {
        if(fDescripcion){
            return receta.nombre.toLowerCase().includes(fDescripcion.toLowerCase())
        }
        return true
    }

    const filtroTipo = (receta) => {
        if(fTipo){
            return receta.categoria.id == fTipo
        }
        return true
    }

    let filtroUsuario = (receta) => {
        if(usuario){
            return receta.usuario.id == usuario
        }
        return true
    }

    const recetas = recetasStore.filter(receta => filtroUsuario(receta) && filtroDificultad(receta) 
    && filtroNombre(receta) && filtroTipo(receta))


  return (
      <>
      <Categorias setFTipo={setFTipo}/>
    <div className='container'>
        {(!usuario)? <h1 className='ingrediente'>Recetas</h1> : <h1 className='ingrediente'>Mis Recetas</h1>}
        <div className='mt-4 mb-3'>
            <FiltroRecetas setFDescripcion={setFDescripcion}  setFDificultad={setFDificultad} /> 
            <FiltroResponsive  setFDescripcion={setFDescripcion}  setFDificultad={setFDificultad}   /> 
            
            {(usuario) && 
                <div>
                    <Link to='/receta/carga' className='btn mt-1 p-1 btn-outline-secondary'>
                        Agregar
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle m-1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </Link>
                </div>
            }
            
        </div>
        <div>
        <Row xs={1}  md ={2} lg={3}>
                {
                    (recetas.length >0)?
                    recetas.map(receta => {
                        return <CardReceta key={receta.id} {...receta} />
                    }) 
                    : 
                    <>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col>
                                <div className='text-center text-danger mb-5'>
                                <div className='mt-5'>
                                    <h5>No encontramos recetas que coincidan con tu busqueda.</h5>
                                </div>   
                                <div className='ml-5 m-auto'>
                                    <Image src="/assets/giphy.gif" style={{ width: '15rem' }}/>
                                </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    </> 
                }
            </Row>
        </div>
        
        

    </div>
    </>
  )
}
