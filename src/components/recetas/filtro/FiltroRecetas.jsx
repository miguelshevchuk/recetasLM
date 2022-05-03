import {React, useState} from 'react'
import { Row, Col, Form,  Offcanvas, FloatingLabel} from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import queryString from 'query-string'

export const FiltroRecetas = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { desc = '', tipo = '', dif = '' } = queryString.parse(location.search);

  const [ formValues, handleInputChange, reset] = useForm({
    searchText: desc,
    searchTipo: tipo,
    searchDificultad: dif,
  });

  const { searchText, searchTipo, searchDificultad } = formValues;

  const filtrar = (e) => {
    e.preventDefault();
    handleClose();
    let nText = ''
    if(searchText){
      nText = `?desc=${ searchText }`
    }
    if(searchTipo){
      nText += (nText === '')?'?' : '&'
      nText +=`tipo=${ searchTipo }`
    }
    if(searchDificultad){
      nText += (nText === '')?'?' : '&'
      nText += `dif=${ searchDificultad }`
    }
    navigate(`${ nText }`)
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
        <Form id="formFiltros" onSubmit={ filtrar }>
            <Row>
                <Col>
                  <Form.Control 
                    type="text"
                    placeholder="Ingrese su busqueda" 
                    name="searchText"
                    id="searchText"
                    className="form-control"
                    value={ searchText }
                    onChange={ handleInputChange }
                  />
                  
                </Col>
                <Col>
                  <button className="btn btn-outline-secondary" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                    <span className="visually-hidden">Button</span>
                  </button>
                  <a  onClick={handleShow} className="p-3 link-info">
                    Mas Filtros
                  </a>
                </Col>               
                
            </Row>
            <Row>
              <Col>
                
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Mas Filtros</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                      <FloatingLabel controlId="floatingSelect" label="Categoria" className="mb-3">
                          <Form.Select aria-label="Seleccione una categoria"
                              name="searchTipo"
                              id="searchTipo"
                              value={ searchTipo }
                              onChange={ handleInputChange }>
                                    <option value="">Seleccione una categoria</option>
                                    <option value="1">Sopa</option>
                                    <option value="2">Postre</option>
                                    <option value="3">Ensalada</option>
                                    <option value="4">Guiso</option>
                                    <option value="5">Carnes</option>
                                    <option value="6">Pollo</option>
                                    <option value="7">Otros</option>
                          </Form.Select>
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingSelect" label="Dificultad" className="mb-3">
                          <Form.Select aria-label="Seleccione una dificultad"
                              name="searchDificultad"
                              id="searchDificultad"
                              value={ searchDificultad }
                              onChange={ handleInputChange }>
                                    <option value="">Seleccione una dificultad</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                          </Form.Select>
                      </FloatingLabel>
                      <button className="btn btn-success" type="submit" onClick={filtrar}>Aplicar</button>
                  </Offcanvas.Body>
                </Offcanvas>
              </Col>
            </Row>
        </Form>
        
    </>
  )
}
