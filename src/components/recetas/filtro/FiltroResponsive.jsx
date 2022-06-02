import {React, useState} from 'react'
import { Row, Col, Form,  Offcanvas, FloatingLabel} from 'react-bootstrap'
import { useForm } from '../../../hooks/useForm';

export const FiltroResponsive = ({setFDescripcion, setFDificultad}) => {

  const [ formValues, handleInputChange ] = useForm({
    searchText: undefined,
    searchTipo: undefined,
    searchDificultad: undefined,
  });

  const { searchText, searchTipo, searchDificultad } = formValues;

  const filtrar = (e) => {
    e.preventDefault();
    setFDificultad(searchDificultad)
    setFDescripcion(searchText)

    handleClose()

  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div className="d-block d-sm-none d-sm-block d-md-none d-md-block d-lg-none">
        <Form id="formFiltros" onSubmit={ filtrar }>
            <Row>
                <Col>
                  <button className="btn btn-outline-secondary" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                    <span className="visually-hidden">Button</span>
                  </button>
                  <a  onClick={handleShow} className="p-3 link-info">
                    Aplicar Filtros
                  </a>
                </Col>               
                
            </Row>
            <Row>
              <Col>
                
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filtros</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                      <FloatingLabel controlId="floatingSelect" label="Categoria" className="mb-3">
                          <Form.Select aria-label="Seleccione una categoria"
                              name="searchTipo"
                              value={ searchTipo }
                              onChange={ handleInputChange }>
                                    <option value="">Seleccione una categoria</option>
                                    <option value="3">Dulce</option>
                                    <option value="4">Pastas</option>
                                    <option value="1">Sopas y Verduras</option>
                                    <option value="5">Carnes</option>
                                    <option value="6">Pescado</option>
                                    <option value="2">Pollo</option>
                          </Form.Select>
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingSelect" label="Dificultad" className="mb-3">
                          <Form.Select aria-label="Seleccione una dificultad"
                              name="searchDificultad"
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
        
    </div>
  )
}
