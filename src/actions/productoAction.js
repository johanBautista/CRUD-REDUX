import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from '../types';
import clienteAxios from '../config/axios';

// crear nuevo producto
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());
    try {
      //insertar en la API-DB
      await clienteAxios.post('/productos', producto);
      //si todo sale ok actualiza el state
      dispatch(agregarProductoExito(producto));
    } catch (error) {
      console.log(error);
      //si hay error cambia el state
      dispatch(agregarProductoError(true));
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
