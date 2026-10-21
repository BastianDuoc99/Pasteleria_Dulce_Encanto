import { Link, useParams } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext.jsx";
import { formatearCLP, getProductos } from "../data/productos.js";

export default function ProductoDetalle() {
  const { codigo } = useParams();
  const { agregar } = useCarrito();
  const producto = getProductos().find((item) => item.codigo === codigo);

  if (!producto) {
    return (
      <section className="section-encanto">
        <div className="container">
          <div className="estado-vacio">
            <h1 className="h3">Producto no encontrado</h1>
            <p>El producto solicitado no existe en el catálogo.</p>
            <Link className="btn btn-encanto" to="/productos">
              Volver al catálogo
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-title-encanto">
        <div className="container">
          <span className="eyebrow">Detalle</span>
          <h1>{producto.nombre}</h1>
        </div>
      </section>

      <section className="section-encanto pt-0">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid detalle-imagen"
                src={producto.imagen || "/assets/img/Pasteleria.jpg"}
                alt={producto.nombre}
              />
            </div>

            <div className="col-12 col-lg-6">
              <span className="badge-categoria">{producto.categoria}</span>
              <h2 className="mt-3">{producto.nombre}</h2>
              <p className="precio fs-4">{formatearCLP(producto.precio)}</p>
              <p>{producto.descripcion}</p>

              <div className="aviso-producto">
                <strong>Personalización:</strong> las tortas pueden incorporar
                mensajes especiales según el requerimiento del cliente.
              </div>

              <div className="d-flex flex-wrap gap-2 mt-3">
                <button
                  type="button"
                  className="btn btn-encanto"
                  onClick={() => agregar(producto)}
                >
                  Añadir al carrito
                </button>
                <Link className="btn btn-encanto-secundario" to="/carrito">
                  Ver carrito
                </Link>
                <Link className="btn btn-outline-secondary" to="/productos">
                  Seguir comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
