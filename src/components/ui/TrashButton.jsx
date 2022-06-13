import React from 'react'
import './TrashButtonStyle.scss'
import { useNavigate } from 'react-router-dom';
import { deleteReceta } from '../../domain/service/recetas/RecetasService';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export const TrashButton = ({usuario, recetaId}) => {

    const usuarioIdLogueado = localStorage.getItem("usuarioId")
    const navigate = useNavigate();

    const editar = () => {
        navigate(`/receta/carga/${ recetaId }`)
    }
    const eliminar = () => {
        deleteReceta(recetaId)
    }

     

  return (
    <>
    {(usuarioIdLogueado == usuario) && 
    
        <div>
        <DropdownButton id="dropdown-basic-button" bsPrefix='myDropdown'>
            <Dropdown.Item onClick={editar}>Editar</Dropdown.Item>
            <Dropdown.Item onClick={eliminar}>Eliminar </Dropdown.Item>
        </DropdownButton>
        </div>
    }
    
    
    </>
  )
}
