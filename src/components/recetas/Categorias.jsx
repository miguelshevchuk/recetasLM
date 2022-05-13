import React from 'react'
import {Nav} from 'react-bootstrap'

export const Categorias = ({addParam, navigateParam}) => {


    const filtrar = (tipo) => {
        addParam({
            param: "tipo",
            value: tipo
          })
        navigateParam()
    }

  return (
    <div className='d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block'>
        <Nav className="justify-content-center" bsPrefix='nav' activeKey="/home">
              <Nav.Item>
                <Nav.Link onClick={()=>filtrar("")} bsPrefix='nav-link' >TODO</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={()=>filtrar(3)} eventKey="link-1" bsPrefix='nav-link' >DULCE</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={()=>filtrar(4)} eventKey="link-2" bsPrefix='nav-link' >PASTAS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={()=>filtrar(1)} eventKey="link-3" bsPrefix='nav-link' >SOPAS Y VERDURAS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={()=>filtrar(5)} eventKey="link-4" bsPrefix='nav-link' >CARNES</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={()=>filtrar(6)} eventKey="link-5" bsPrefix='nav-link' >PESCADO</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={()=>filtrar(2)} eventKey="link-6" bsPrefix='nav-link' >POLLO</Nav.Link>
            </Nav.Item>
          </Nav>
    </div>
  )
}
