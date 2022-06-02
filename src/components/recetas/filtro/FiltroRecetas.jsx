import {React} from 'react'
import { Row, Col, Form, FloatingLabel} from 'react-bootstrap'
import { useForm } from '../../../hooks/useForm';

export const FiltroRecetas = ({setFDescripcion, setFDificultad}) => {


  const [ formValues, handleInputChange, reset] = useForm({
    searchText: undefined,
    searchDificultad: undefined,
  });

  const { searchText, searchDificultad } = formValues;

  const filtrar = (e) => {
    e.preventDefault();

    setFDificultad(searchDificultad)
    setFDescripcion(searchText)

  }

  return (
      <div className="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
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
                  <FloatingLabel controlId="floatingSelect" label="Dificultad" className="mb-3">
                    <Form.Select aria-label="Seleccione una dificultad"
                        name="searchDificultad"
                        id="searchDificultad"
                        value={searchDificultad}
                        onChange={handleInputChange}>
                          <option value="">Seleccione una dificultad</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col>
                  <button className="btn btn-outline-secondary d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                    <span className="visually-hidden">Button</span>
                  </button>
                </Col>               
                
            </Row>
        </Form>
        
    </div>
  )
}
