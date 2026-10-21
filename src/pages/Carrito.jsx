import { useState } from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext.jsx";
import { formatearCLP } from "../data/productos.js";

export default function Carrito() {
  const { items, cambiarCantidad, eliminar, total } = useCarrito();
  const [confirmado, setConfirmado] = useState("");

  if (!items.length) {
    return (
      <section className="section-encanto">
        <div className="container">
          <div className="estado-vacio">
            <h1 className="h3">Tu carrito está vacío</h1>
            <p>Agrega algunas delicias para comenzar.</p>
            <Link className="btn btn-encanto" to="/productos">
              Ver productos
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
          <span className="eyebrow">Tu compra</span>
          <h1>Carrito de compras</h1>
        </div>
      </section>

      <section className="section-encanto pt-0">
        <div className="container">
          {confirmado ? (
            <div className="alert alert-success" role="status">
              {confirmado}
            </div>
          ) : null}

          <div className="lista-carrito">
            {items.map((item) => (
              <div className="item-carrito" key={item.codigo}>
                <div className="item-info">
                  <strong>{item.nombre}</strong>
                  <span className="texto-muted small">{item.codigo}</span>
                </div>

                <div className="cantidad-control">
                  <button
                    type="button"
                    aria-label={`Disminuir cantidad de ${item.nombre}`}
                    onClick={() => cambiarCantidad(item.codigo, -1)}
                  >
                    −
                  </button>
                  <input
                    aria-label={`Cantidad de ${item.nombre}`}
                    value={item.qty}
                    readOnly
                  />
                  <button
                    type="button"
                    aria-label={`Aumentar cantidad de ${item.nombre}`}
                    onClick={() => cambiarCantidad(item.codigo, 1)}
                  >
                    +
                  </button>
                </div>

                <strong className="item-subtotal">
                  {formatearCLP(item.precio * item.qty)}
                </strong>

                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => eliminar(item.codigo)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="banner-encanto d-flex flex-wrap justify-content-between align-items-center gap-3 mt-4">
            <div>
              <span className="texto-muted">Total</span>
              <div className="total-carrito">{formatearCLP(total)}</div>
            </div>
            <button
              type="button"
              className="btn btn-encanto"
              onClick={() =>
                setConfirmado(
                  "Pedido confirmado en modo demostración. Gracias por preferir Dulce Encanto."
                )
              }
            >
              Confirmar pedido
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
