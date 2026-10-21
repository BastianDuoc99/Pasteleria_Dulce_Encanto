import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { useCarrito } from "../context/CarritoContext.jsx";
import { getProductos } from "../data/productos.js";

export default function Inicio() {
  const { agregar } = useCarrito();
  const destacados = getProductos().slice(0, 8);

  return (
    <>
      <section className="hero-encanto">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <span className="eyebrow">Desde 1976 · 50 aniversario</span>
              <h1 className="hero-titulo">
                La tradición que se comparte en cada sabor
              </h1>
              <p className="hero-texto">
                Pastelería Dulce Encanto renueva su experiencia de venta online
                manteniendo sus raíces históricas, su calidad y su pasión por la
                repostería chilena.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Link className="btn btn-encanto" to="/productos">
                  Ver productos
                </Link>
                <Link className="btn btn-encanto-secundario" to="/nosotros">
                  Conócenos
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid hero-imagen"
                src="/assets/img/Pasteleria.jpg"
                alt="Pastelería Dulce Encanto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-encanto">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
            <div>
              <span className="eyebrow">Nuestros favoritos</span>
              <h2 className="mb-0">Delicias para cada ocasión</h2>
            </div>
            <Link className="btn btn-encanto-secundario" to="/productos">
              Ver catálogo completo
            </Link>
          </div>

          <div className="row g-3">
            {destacados.map((producto) => (
              <div className="col-12 col-sm-6 col-lg-3" key={producto.codigo}>
                <ProductCard producto={producto} onAgregar={agregar} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-encanto pt-0">
        <div className="container">
          <div className="row g-3">
            <div className="col-12 col-md-4">
              <div className="feature-card h-100">
                <span className="feature-icon">✦</span>
                <h3 className="h5">Historia y tradición</h3>
                <p className="mb-0">
                  Referentes de la repostería chilena y participantes del récord
                  Guinness de 1995.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="feature-card h-100">
                <span className="feature-icon">♥</span>
                <h3 className="h5">Impacto comunitario</h3>
                <p className="mb-0">
                  Las compras ayudan a estudiantes de gastronomía y a la
                  comunidad local.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="feature-card h-100">
                <span className="feature-icon">🎂</span>
                <h3 className="h5">Personalización</h3>
                <p className="mb-0">
                  Encuentra tortas para celebraciones y añade mensajes
                  especiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-encanto pt-0">
        <div className="container">
          <div className="banner-encanto text-center text-lg-start d-lg-flex align-items-center justify-content-between gap-4">
            <div>
              <h2 className="mb-2">¿Tienes una celebración?</h2>
              <p className="mb-0">
                Descubre nuestras tortas especiales de cumpleaños y boda.
              </p>
            </div>
            <Link className="btn btn-encanto mt-3 mt-lg-0" to="/productos">
              Explorar tortas especiales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
