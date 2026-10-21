import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { useCarrito } from "../context/CarritoContext.jsx";
import { CATEGORIAS, getProductos } from "../data/productos.js";

export default function Productos() {
  const { agregar } = useCarrito();
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");
  const productos = getProductos();

  const filtrados = useMemo(() => {
    const termino = busqueda.trim().toLowerCase();

    return productos.filter((producto) => {
      const coincideTexto =
        !termino ||
        `${producto.nombre} ${producto.descripcion} ${producto.codigo}`
          .toLowerCase()
          .includes(termino);
      const coincideCategoria = !categoria || producto.categoria === categoria;
      return coincideTexto && coincideCategoria;
    });
  }, [busqueda, categoria, productos]);

  return (
    <>
      <section className="page-title-encanto">
        <div className="container">
          <span className="eyebrow">Catálogo</span>
          <h1>Productos</h1>
          <p className="mb-0">
            Busca, filtra y añade tus productos favoritos al carrito.
          </p>
        </div>
      </section>

      <section className="section-encanto pt-0">
        <div className="container">
          <div className="filtros-encanto mb-4">
            <div className="filtro-campo flex-grow-1">
              <label className="form-label" htmlFor="buscar-producto">
                Buscar producto
              </label>
              <input
                id="buscar-producto"
                className="form-control"
                type="search"
                placeholder="Buscar producto o código…"
                value={busqueda}
                onChange={(evento) => setBusqueda(evento.target.value)}
              />
            </div>

            <div className="filtro-campo">
              <label className="form-label" htmlFor="filtrar-categoria">
                Categoría
              </label>
              <select
                id="filtrar-categoria"
                className="form-select"
                value={categoria}
                onChange={(evento) => setCategoria(evento.target.value)}
              >
                <option value="">Todas las categorías</option>
                {CATEGORIAS.map((nombre) => (
                  <option key={nombre} value={nombre}>
                    {nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filtrados.length ? (
            <div className="row g-3">
              {filtrados.map((producto) => (
                <div className="col-12 col-sm-6 col-lg-3" key={producto.codigo}>
                  <ProductCard producto={producto} onAgregar={agregar} />
                </div>
              ))}
            </div>
          ) : (
            <div className="estado-vacio">
              <h2 className="h4">No se encontraron productos.</h2>
              <p className="mb-0">Prueba con otro nombre o categoría.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
