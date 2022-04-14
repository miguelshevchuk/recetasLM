import React, { useState } from 'react'
import { Row, Col, Form, Button, Offcanvas, FloatingLabel} from 'react-bootstrap'

export const MasFiltros = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Mas Filtros
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mas Filtros</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <FloatingLabel controlId="floatingSelect" label="Categoria" className="mb-3">
                <Form.Select aria-label="Seleccione una categoria">
                          <option>Seleccione una categoria</option>
                          <option value="postre">Postre</option>
                          <option value="ensalada">Ensalada</option>
                          <option value="sopa">Sopa</option>
                          <option value="guiso">Guiso</option>
                          <option value="carne">Carnes</option>
                          <option value="pollo">Pollo</option>
                          <option value="otros">Otros</option>
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelect" label="Dificultad" className="mb-3">
                <Form.Select aria-label="Seleccione una dificultad">
                          <option>Seleccione una dificultad</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                </Form.Select>
            </FloatingLabel>
            <Button variant='success'>Aplicar</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
