import { Link } from "react-router-dom";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer-encanto mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <img
              src="/assets/img/logo.svg"
              alt="Pastelería Dulce Encanto"
              className="footer-logo"
            />
            <p className="mt-3 mb-0">
              Tradición, calidad e innovación en repostería chilena. Celebramos
              nuestra historia y apoyamos la formación de nuevos talentos en
              gastronomía.
            </p>
          </div>

          <div className="col-6 col-lg-3">
            <h3 className="h6 text-uppercase">Enlaces</h3>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/productos">Productos</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
              <li>
                <Link to="/nosotros">Nosotros</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-4">
            <h3 className="h6 text-uppercase">Comunidad</h3>
            <p className="mb-3">
              Las compras apoyan a estudiantes de gastronomía y a la comunidad
              local.
            </p>
            <div className="social-links">
              <span aria-label="Instagram">Instagram</span>
              <span aria-label="Facebook">Facebook</span>
              <span aria-label="WhatsApp">WhatsApp</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {anio} Pastelería Dulce Encanto · Proyecto frontend académico
          DSY1104
        </div>
      </div>
    </footer>
  );
}
