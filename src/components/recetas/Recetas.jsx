import React from 'react'
import { Row } from 'react-bootstrap'
import { recetas } from '../data/recetas/recetas'
import { CardReceta } from './CardReceta'
import { FiltroRecetas } from './filtro/FiltroRecetas'

export const Recetas = () => {
    const recetasA = recetas
  return (
    <div>
        <div className='container mt-5 mb-3'>
            <FiltroRecetas />
        </div>
        <div className='container'>
            <Row xs={1} md={3} className="g-4">
                {
                    recetasA.map(receta => {
                        return <CardReceta key={receta.id} {...receta} />
                    })
                }
            </Row>
        </div>
        
        

    </div>
  )
}
