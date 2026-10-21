import { Link } from "react-router-dom";
import { formatearCLP } from "../data/productos.js";

function recortarTexto(texto = "", maximo = 105) {
  return texto.length > maximo ? `${texto.slice(0, maximo).trim()}…` : texto;
}

export default function ProductCard({ producto, onAgregar }) {
  return (
    <article className="card producto-card h-100" data-testid="producto-card">
      <Link to={`/producto/${producto.codigo}`} aria-label={`Ver ${producto.nombre}`}>
        <img
          src={producto.imagen || "/assets/img/Pasteleria.jpg"}
          className="card-img-top producto-imagen"
          alt={producto.nombre}
          loading="lazy"
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <span className="badge-categoria">{producto.categoria}</span>
        <h3 className="h6 mt-2 mb-1">{producto.nombre}</h3>
        <p className="texto-muted small mb-2">
          {recortarTexto(producto.descripcion)}
        </p>
        <div className="precio mt-auto">{formatearCLP(producto.precio)}</div>
        <div className="d-flex gap-2 mt-3">
          <Link
            className="btn btn-outline-secondary btn-sm flex-fill"
            to={`/producto/${producto.codigo}`}
          >
            Ver detalle
          </Link>
          <button
            type="button"
            className="btn btn-encanto btn-sm flex-fill"
            onClick={() => onAgregar?.(producto)}
          >
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
}
