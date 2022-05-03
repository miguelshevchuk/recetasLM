import {React, useState} from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'
import queryString from 'query-string'
import { useParams, useNavigate } from 'react-router-dom'
import { getRecetaById, saveReceta } from '../../domain/service/recetas/RecetasService';
import { useForm } from '../../hooks/useForm';
import { Receta } from '../../domain/model/Receta';

export const FormReceta = () => {

    const navigate = useNavigate();
    const {recetaId} = useParams()
    const receta = getRecetaById(recetaId)

    const [ formValues, handleInputChange, reset] = useForm({
        nombreReceta: (!receta)?undefined: receta.nombre,
        categoriaReceta: (!receta)?undefined: receta.categoria.id,
        dificultadReceta: (!receta)?undefined: receta.dificultad,
        descripcionReceta: (!receta)?undefined: receta.descripcion,
        imagenReceta:undefined
      });
    
    
    const { nombreReceta, categoriaReceta, dificultadReceta, descripcionReceta, imagenReceta } = formValues;
    const [ingredientes, setIngredientes] = useState((receta)?receta.ingredientes:[])
    const [preparacion, setPreparacion] = useState((receta)?receta.preparacion.map(paso=> paso.descripcion): [])

    const agregarIngrediente = () => {
        let nuevoIngrediente = document.getElementById("nuevoIngrediente").value
        if(nuevoIngrediente){
            setIngredientes(ingredientes.concat(nuevoIngrediente))
        }
        document.getElementById("nuevoIngrediente").value = null
    }

    const eliminarIngrediente = (ingredienteE) => {
        setIngredientes(ingredientes.filter(ingrediente => ingrediente != ingredienteE))
    }

    const agregarPaso = () => {
        let nuevoPaso = document.getElementById("nuevoPaso").value
        if(nuevoPaso){
            setPreparacion(preparacion.concat(nuevoPaso))
        }
        document.getElementById("nuevoPaso").value = null
    }

    const eliminarPaso = (pasoE) => {
        setPreparacion(preparacion.filter(paso => paso != pasoE))
    }

    const guardarReceta = (e) => {
        e.preventDefault();

        let nuevaReceta = new Receta()
        nuevaReceta.id = (receta)?receta.id:null
        nuevaReceta.imagen = (receta)?receta.imagen:imagenReceta
        nuevaReceta.categoria.id = categoriaReceta
        nuevaReceta.nombre = nombreReceta
        nuevaReceta.dificultad = dificultadReceta
        nuevaReceta.descripcion = descripcionReceta
        nuevaReceta.ingredientes = ingredientes

        nuevaReceta.preparacion = []
        for(let i=1; i <= preparacion.length; i++){
            nuevaReceta.preparacion.push({paso: i, descripcion: preparacion[i-1]})
        }
        
        saveReceta(nuevaReceta)

        navigate(`/recetas/me`)
    }

  return (
    <div className='container'>
        <h1>{(receta)? "Modificar Receta" : "Agregar Receta" }</h1>
        <Form onSubmit={guardarReceta}>
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

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Seleccione una imagen de su receta</Form.Label>
                    <Form.Control type="file" 
                        name="imagenReceta"
                        className="form-control"
                        value={ imagenReceta }
                        onChange={ handleInputChange }
                    />
                </Form.Group>
                <h3>Ingredientes</h3>
                <Form.Group className="mb-3" name="ingredientes">
                    <Form.Control id="nuevoIngrediente" placeholder="Ingrese un nuevo Ingrediente" 
                        type="text"
                        name="nuevoIngrediente"
                        className="form-control"
                    />
                    <Button onClick={agregarIngrediente}  className='btn p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle m-1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </Button>
                </Form.Group>
                <ListGroup>
                {
                    ingredientes.map(ingrediente =>  
                        <ListGroup.Item key={ingrediente}>
                            {ingrediente}
                            <Button onClick={() => eliminarIngrediente(ingrediente)} className="btn p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                            </Button>
                        </ListGroup.Item>
                    )
                }
                </ListGroup>
                <h3>Pasos</h3>
                <Form.Group className="mb-3" name="pasos">
                    <Form.Control id="nuevoPaso" placeholder="Ingrese un nuevo Paso" 
                        as="textarea"
                        name="nuevoPaso"
                        className="form-control"
                    />
                    <Button onClick={agregarPaso}  className='btn p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle m-1" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </Button>
                </Form.Group>
                <ListGroup>
                {
                    preparacion.map(paso =>  
                        <ListGroup.Item key={paso}>
                            {paso}
                            <Button onClick={() => eliminarPaso(paso)} className="btn p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                            </Button>
                        </ListGroup.Item>
                    )
                }
                </ListGroup>


                <Button type="submit">Guardar</Button>
        </Form>
    
    </div>
  )
}
