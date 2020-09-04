import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

//actions de redux
import { useDispatch } from 'react-redux';
import {
  borrarProductoAction,
  obtenerProductoEditar,
} from '../actions/productoAction';

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();
  const history = useHistory(); //habilitar este hook para hacer la redireccion

  //confirmar si se desea eliminarlo
  const confirmarEliminarProducto = (id) => {
    //preguntar al usuario- confirmacion con sweetalert
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Un producto que se elimina no se puede recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        //pasarlo al action
        dispatch(borrarProductoAction(id));
      }
    });
  };

  //funcion para redirigir de forma
  const redireccionarEdicion = (producto) => {
    dispatch(obtenerProductoEditar(producto));
    history.push(`/productos/editar/${producto.id}`);
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">${precio}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={() => redireccionarEdicion(producto)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
