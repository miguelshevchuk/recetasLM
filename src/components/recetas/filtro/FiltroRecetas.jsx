import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { MasFiltros } from './MasFiltros';

export const FiltroRecetas = () => {
  return (
      <>
        <Form>
            <Row>
                <Col>
                 <Form.Control placeholder="Ingrese su busqueda" />
                </Col>
                <Col>
                    <MasFiltros />
                </Col>
                
            </Row>
        </Form>
        
    </>
  )
}
