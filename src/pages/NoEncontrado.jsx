import { Link } from "react-router-dom";

export default function NoEncontrado() {
  return (
    <section className="section-encanto">
      <div className="container">
        <div className="estado-vacio">
          <span className="eyebrow">Error 404</span>
          <h1 className="h2">Página no encontrada</h1>
          <p>La dirección que buscas no existe o fue movida.</p>
          <Link className="btn btn-encanto" to="/">
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
