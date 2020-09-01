import React, { Fragment, useEffect } from 'react';

//actions de redux
import { obtenerProductosAction } from '../actions/productoAction';
import { useDispatch, useSelector } from 'react-redux';

const Productos = () => {
  
  //usar el dispatch y crear una funcion
  const dispatch = useDispatch();
  useEffect(() => {
    //consultar la API
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, []);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>
      <table className="table table-striped">
        <thead className="bg-success table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </Fragment>
  );
};

export default Productos;
