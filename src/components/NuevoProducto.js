import React, { useState } from 'react';

//actions de redux
import { crearNuevoProductoAction } from '../actions/productoAction';
import { useDispatch, useSelector } from 'react-redux';

const NuevoProducto = () => {
  //state del componente
  const [nombre, guardarNombre] = useState('');
  const [precio, guardarPrecio] = useState(0);

  //usar el dispatch y crear una funcion
  const dispatch = useDispatch();

  //manda llamar el action de productoAction
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  //submit
  const submitNuevoProducto = (e) => {
    e.preventDefault();
    //validaciones
    if (nombre.trim() === '' || precio <= 0) {
      return;
    }
    //revisar errores
    //crear nuevo producto
    agregarProducto({
      nombre,
      precio,
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label htmlFor="">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />

                <label htmlFor="">Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-success font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
