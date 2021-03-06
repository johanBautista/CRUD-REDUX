import React, { Fragment, useEffect } from 'react';
import Producto from './Producto';

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

    // eslint-disable-next-line
  }, []);

  //obtener el state
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}
      {cargando ? <p className="text-center"> Cargando..</p> : null}

      <table className="table table-striped">
        <thead className="bg-success table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0
            ? 'No hay Productos'
            : productos.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Productos;
