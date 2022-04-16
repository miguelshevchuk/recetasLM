import React from 'react'
import { Row } from 'react-bootstrap'
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
    
    let filtros = new FiltrosReceta()
    filtros.usuario = usuario
    filtros.nombre = desc
    filtros.tipo = tipo
    filtros.dificultad = dif

    const recetas = getRecetas(filtros)

  return (
    <div>
        <div className='container mt-5 mb-3'>
            <FiltroRecetas />
        </div>
        <div className='container'>
            <Row xs={1} md={3} className="g-4">
                {
                    recetas.map(receta => {
                        return <CardReceta key={receta.id} {...receta} />
                    })
                }
            </Row>
        </div>
        
        

    </div>
  )
}
