import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CATEGORIAS,
  eliminarProducto,
  formatearCLP,
  getProductos,
  guardarProducto,
} from "../data/productos.js";
import { validarProducto } from "../utils/validaciones.js";

const FORMULARIO_INICIAL = {
  codigo: "",
  nombre: "",
  categoria: CATEGORIAS[0],
  descripcion: "",
  precio: "",
  stock: "",
  imagen: "",
};

export default function Admin() {
  const [productos, setProductos] = useState(getProductos);
  const [formulario, setFormulario] = useState(FORMULARIO_INICIAL);
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState("");

  function actualizar(campo, valor) {
    setFormulario((previo) => ({ ...previo, [campo]: valor }));
  }

  function refrescar() {
    setProductos(getProductos());
  }

  function enviar(evento) {
    evento.preventDefault();
    const erroresEncontrados = validarProducto(formulario);
    setErrores(erroresEncontrados);
    setMensaje("");

    if (Object.keys(erroresEncontrados).length > 0) return;

    guardarProducto({
      ...formulario,
      codigo: formulario.codigo.trim().toUpperCase(),
      nombre: formulario.nombre.trim(),
      precio: Number(formulario.precio),
      stock: Number(formulario.stock),
      imagen: formulario.imagen.trim() || "/assets/img/Pasteleria.jpg",
      tipo: "personalizado",
    });

    refrescar();
    setMensaje(`Producto ${formulario.codigo.trim().toUpperCase()} guardado correctamente.`);
    setFormulario(FORMULARIO_INICIAL);
  }

  function borrar(codigo) {
    eliminarProducto(codigo);
    refrescar();
    setMensaje(`Producto ${codigo} eliminado del mantenedor.`);
  }

  return (
    <>
      <section className="page-title-encanto">
        <div className="container">
          <span className="eyebrow">Panel interno</span>
          <h1>Administración de productos</h1>
          <p className="mb-0">
            Mantenedor simple con persistencia en localStorage.
          </p>
        </div>
      </section>

      <section className="section-encanto pt-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-xl-5">
              <div className="form-card">
                <h2 className="h5 mb-3">Agregar o actualizar producto</h2>

                {mensaje ? (
                  <div className="alert alert-success" role="status">
                    {mensaje}
                  </div>
                ) : null}

                <form onSubmit={enviar} noValidate>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label" htmlFor="admin-codigo">
                        Código *
                      </label>
                      <input
                        id="admin-codigo"
                        className="form-control"
                        value={formulario.codigo}
                        onChange={(evento) =>
                          actualizar("codigo", evento.target.value)
                        }
                      />
                      {errores.codigo ? (
                        <p className="error-campo">{errores.codigo}</p>
                      ) : null}
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label" htmlFor="admin-nombre">
                        Nombre *
                      </label>
                      <input
                        id="admin-nombre"
                        className="form-control"
                        maxLength={100}
                        value={formulario.nombre}
                        onChange={(evento) =>
                          actualizar("nombre", evento.target.value)
                        }
                      />
                      {errores.nombre ? (
                        <p className="error-campo">{errores.nombre}</p>
                      ) : null}
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label" htmlFor="admin-categoria">
                        Categoría *
                      </label>
                      <select
                        id="admin-categoria"
                        className="form-select"
                        value={formulario.categoria}
                        onChange={(evento) =>
                          actualizar("categoria", evento.target.value)
                        }
                      >
                        {CATEGORIAS.map((categoria) => (
                          <option key={categoria} value={categoria}>
                            {categoria}
                          </option>
                        ))}
                      </select>
                      {errores.categoria ? (
                        <p className="error-campo">{errores.categoria}</p>
                      ) : null}
                    </div>

                    <div className="col-12 col-md-3">
                      <label className="form-label" htmlFor="admin-precio">
                        Precio *
                      </label>
                      <input
                        id="admin-precio"
                        type="number"
                        min="0"
                        className="form-control"
                        value={formulario.precio}
                        onChange={(evento) =>
                          actualizar("precio", evento.target.value)
                        }
                      />
                      {errores.precio ? (
                        <p className="error-campo">{errores.precio}</p>
                      ) : null}
                    </div>

                    <div className="col-12 col-md-3">
                      <label className="form-label" htmlFor="admin-stock">
                        Stock *
                      </label>
                      <input
                        id="admin-stock"
                        type="number"
                        min="0"
                        className="form-control"
                        value={formulario.stock}
                        onChange={(evento) =>
                          actualizar("stock", evento.target.value)
                        }
                      />
                      {errores.stock ? (
                        <p className="error-campo">{errores.stock}</p>
                      ) : null}
                    </div>

                    <div className="col-12">
                      <label className="form-label" htmlFor="admin-descripcion">
                        Descripción
                      </label>
                      <textarea
                        id="admin-descripcion"
                        className="form-control"
                        rows={3}
                        maxLength={500}
                        value={formulario.descripcion}
                        onChange={(evento) =>
                          actualizar("descripcion", evento.target.value)
                        }
                      />
                      {errores.descripcion ? (
                        <p className="error-campo">{errores.descripcion}</p>
                      ) : null}
                    </div>

                    <div className="col-12">
                      <label className="form-label" htmlFor="admin-imagen">
                        Imagen (URL)
                      </label>
                      <input
                        id="admin-imagen"
                        className="form-control"
                        placeholder="/assets/img/Pasteleria.jpg"
                        value={formulario.imagen}
                        onChange={(evento) =>
                          actualizar("imagen", evento.target.value)
                        }
                      />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-encanto">
                        Guardar producto
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-12 col-xl-7">
              <div className="tabla-card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="h5 mb-0">Productos del catálogo</h2>
                  <Link className="btn btn-outline-secondary btn-sm" to="/productos">
                    Ver tienda
                  </Link>
                </div>

                <div className="table-responsive">
                  <table className="table table-sm align-middle mb-0">
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {productos.map((producto) => (
                        <tr key={producto.codigo}>
                          <td>{producto.codigo}</td>
                          <td>{producto.nombre}</td>
                          <td>{producto.categoria}</td>
                          <td>{formatearCLP(producto.precio)}</td>
                          <td>{producto.stock ?? "—"}</td>
                          <td className="text-end">
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-sm"
                              aria-label={`Eliminar ${producto.nombre}`}
                              onClick={() => borrar(producto.codigo)}
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
