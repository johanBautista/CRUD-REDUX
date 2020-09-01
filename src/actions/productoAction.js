import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// crear nuevo producto
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());
    try {
      //insertar en la API-DB
      await clienteAxios.post('/productos', producto);
      //si todo sale ok actualiza el state
      dispatch(agregarProductoExito(producto));
      //alerta
      Swal.fire('Correcto', 'El producto se agrego corectamente', 'success');
    } catch (error) {
      console.log(error);
      //si hay error cambia el state
      dispatch(agregarProductoError(true));
      //alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo',
      });
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProductoError = () => ({
  type: AGREGAR_PRODUCTO_ERROR,
});

//funcion que descarga los productos de la DB
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());
  };
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true,
});
