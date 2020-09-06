import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//actions de redux
import { crearNuevoProductoAction } from '../actions/productoAction';
import { mostrarAlerta } from '../actions/alertaAction';

const NuevoProducto = ({ history }) => {
  //state del componente
  const [nombre, guardarNombre] = useState('');
  const [precio, guardarPrecio] = useState(0);

  //acceder al state del store
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);

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
      const alerta = {
        msg: 'Ambos Campos son Obligatorios',
        clases: 'alert alert-danger text-center text-uppercase p3',
      };
      dispatch(mostrarAlerta(alerta));
      return;
    }
    //revisar errores
    //crear nuevo producto
    agregarProducto({
      nombre,
      precio,
    });
    //redireccionar al componente principal por medio de prop history
    history.push('/');
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
            {cargando ? <p>Cargando...</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
