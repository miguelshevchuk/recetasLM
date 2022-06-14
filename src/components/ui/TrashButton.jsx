import React from 'react'
import './TrashButtonStyle.scss'
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useDeleteRecetaStore } from '../../hooks/useDeleteRecetaStore';

export const TrashButton = ({usuario, recetaId}) => {

    const usuarioIdLogueado = localStorage.getItem("usuarioId")
    const navigate = useNavigate();

    const [receta, removeReceta] = useDeleteRecetaStore(recetaId);

    const editar = () => {
        navigate(`/receta/carga/${ receta }`)
    }
    const eliminar = async () => {
        await removeReceta()
        navigate(`/recetas`)
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
