import React from 'react'
import { Button, Form } from 'react-bootstrap'
import queryString from 'query-string'
import { useParams, Navigate } from 'react-router-dom'
import { getRecetaById } from '../../domain/service/recetas/RecetasService';
import { useForm } from '../../hooks/useForm';

export const FormReceta = () => {

    const {recetaId} = useParams()
    const receta = getRecetaById(recetaId)

    const [ formValues, handleInputChange, reset] = useForm({
        nombreReceta: (!receta)?undefined: receta.nombre,
        categoriaReceta: (!receta)?undefined: receta.categoria.id,
        dificultadReceta: (!receta)?undefined: receta.dificultad,
        descripcionReceta: (!receta)?undefined: receta.descripcion,
      });
    
    
    const { nombreReceta, categoriaReceta, dificultadReceta, descripcionReceta } = formValues;


  return (
    <div className='container'>
        <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nombreReceta">Nombre</Form.Label>
                    <Form.Control id="nombreReceta" placeholder="Ingrese un Nombre para la receta" 
                        type="text"
                        name="nombreReceta"
                        className="form-control"
                        value={ nombreReceta }
                        onChange={ handleInputChange }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="categoriaReceta">Categoria</Form.Label>
                    <Form.Select aria-label="Seleccione una categoria"
                      name="categoriaReceta"
                      id="categoriaReceta"
                      value={categoriaReceta}
                      onChange={handleInputChange}>
                        <option value="">Seleccione una categoria</option>
                        <option value="1">Sopa</option>
                        <option value="2">Postre</option>
                        <option value="3">Ensalada</option>
                        <option value="4">Guiso</option>
                        <option value="5">Carnes</option>
                        <option value="6">Pollo</option>
                        <option value="7">Otros</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="dificultadReceta">Dificultad</Form.Label>
                    <Form.Select aria-label="Seleccione una dificultad"
                      name="dificultadReceta"
                      id="dificultadReceta"
                      value={dificultadReceta}
                      onChange={handleInputChange}>
                        <option value="">Seleccione una dificultad</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="descripcionReceta">Descripcion</Form.Label>
                    <Form.Control id="descripcionReceta" placeholder="Ingrese una descripcion para su receta" 
                        as="textarea" 
                        rows={3}
                        name="descripcionReceta"
                        className="form-control"
                        value={ descripcionReceta }
                        onChange={ handleInputChange }
                        />
                </Form.Group>



                <Button type="submit">Submit</Button>
        </Form>
    
    </div>
  )
}
