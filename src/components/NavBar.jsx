import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext.jsx";
import { useSesion } from "../context/SesionContext.jsx";

function claseNav({ isActive }) {
  return isActive ? "nav-link active" : "nav-link";
}

export default function NavBar() {
  const [abierto, setAbierto] = useState(false);
  const { cantidadTotal } = useCarrito();
  const { usuario, cerrarSesion } = useSesion();

  const cerrarMenu = () => setAbierto(false);

  return (
    <nav className="navbar navbar-expand-lg site-navbar sticky-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/" onClick={cerrarMenu}>
          <img
            src="/assets/img/logo.svg"
            alt="Pastelería Dulce Encanto"
            className="brand-logo"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setAbierto((valor) => !valor)}
          aria-controls="menu-principal"
          aria-expanded={abierto}
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${abierto ? "show" : ""}`}
          id="menu-principal"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <NavLink className={claseNav} to="/" end onClick={cerrarMenu}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={claseNav} to="/productos" onClick={cerrarMenu}>
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={claseNav} to="/nosotros" onClick={cerrarMenu}>
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={claseNav} to="/blogs" onClick={cerrarMenu}>
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={claseNav} to="/contacto" onClick={cerrarMenu}>
                Contacto
              </NavLink>
            </li>

            {usuario ? (
              <>
                <li className="nav-item">
                  <span className="nav-link usuario-activo">
                    Hola, {usuario.nombre || usuario.email}
                  </span>
                </li>
                <li className="nav-item">
                  <NavLink className={claseNav} to="/admin" onClick={cerrarMenu}>
                    Admin
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-link nav-link"
                    onClick={() => {
                      cerrarSesion();
                      cerrarMenu();
                    }}
                  >
                    Salir
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink className={claseNav} to="/login" onClick={cerrarMenu}>
                  Ingresar
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link cart-link active" : "nav-link cart-link"
                }
                to="/carrito"
                onClick={cerrarMenu}
              >
                Carrito
                <span className="cart-badge">{cantidadTotal}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
