import React from 'react'
import { Image, Row } from 'react-bootstrap'
import { FiltrosReceta } from '../../domain/model/FiltrosReceta'
import { getRecetas } from '../../domain/service/recetas/RecetasService'
import { CardReceta } from './CardReceta'
import { FiltroRecetas } from './filtro/FiltroRecetas'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { useNavigate, useLocation } from 'react-router-dom';

export const Recetas = ({usuario}) => {

    const location = useLocation();

    const { desc = '', tipo = '', dif = '' } = queryString.parse(location.search);
    
    const filtros = new FiltrosReceta()
    filtros.usuario = usuario
    filtros.nombre = desc
    filtros.tipo = tipo
    filtros.dificultad = dif

    const recetas = getRecetas(filtros)

  return (
    <div className='container'>
        {(!usuario)? <h1>Recetas</h1> : <h1 >Mis Recetas</h1>}
        <div className='mt-4 mb-3'>
            <FiltroRecetas /> 
            {(usuario) && 
                <div>
                <button className='btn mt-1 p-1 btn-outline-secondary'>
                    Agregar
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle m-1" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
                </div>
            }
            
        </div>
        <div>
            <Row xs={1} md={3} className="g-4">
                {
                    (recetas.length >0)?
                    recetas.map(receta => {
                        return <CardReceta key={receta.id} {...receta} />
                    }) 
                    : 
                    <>
                    <div className='text-center text-danger mb-5'>
                    <div className='mt-5'>
                        <h5 style={{ width: '50rem' }}>No encontramos recetas que coincidan con tu busqueda.</h5>
                    </div>   
                    <div className='ml-5 m-auto'>
                        <Image src="/assets/heladeraVacia.jpg" style={{ width: '10rem' }}/>
                    </div>
                    </div>
                    </> 
                        
                    
                    
                }
            </Row>
        </div>
        
        

    </div>
  )
}
