import { Link, useParams } from "react-router-dom";

const articulos = {
  "la-gran-torta-de-1995": {
    etiqueta: "Historia",
    titulo: "La gran torta de 1995",
    imagen: "/assets/img/Concurso-de-tortas.jpg",
    parrafos: [
      "Pastelería Dulce Encanto es reconocida por su participación en 1995 en la creación de la torta más grande del mundo. Este hito forma parte de las raíces que la marca busca celebrar mientras moderniza su experiencia de compra online.",
      "En esta etapa del proyecto, este contenido representa una vista de detalle de blog relacionada con la tienda, tal como solicita la evaluación.",
    ],
  },
  "reposteria-y-nuevos-talentos": {
    etiqueta: "Comunidad",
    titulo: "Repostería y nuevos talentos",
    imagen: "/assets/img/Cursos-pasteleria.jpg",
    parrafos: [
      "La propuesta de la pastelería pone especial énfasis en el impacto positivo sobre la comunidad y en la formación de nuevos talentos en gastronomía. Cada compra puede ser parte de una experiencia que conecta tradición, aprendizaje y creatividad.",
      "En esta etapa del proyecto, este contenido representa una vista de detalle de blog relacionada con la tienda, tal como solicita la evaluación.",
    ],
  },
};

export default function BlogDetalle() {
  const { slug } = useParams();
  const articulo = articulos[slug];

  if (!articulo) {
    return (
      <section className="section-encanto">
        <div className="container">
          <div className="estado-vacio">
            <h1 className="h3">Artículo no encontrado</h1>
            <Link className="btn btn-encanto" to="/blogs">
              Volver a blogs
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
          <span className="eyebrow">{articulo.etiqueta}</span>
          <h1>{articulo.titulo}</h1>
        </div>
      </section>

      <section className="section-encanto pt-0">
        <div className="container">
          <article className="blog-card">
            <img
              className="blog-imagen blog-imagen-grande"
              src={articulo.imagen}
              alt={articulo.titulo}
            />
            <div className="p-4 p-lg-5">
              {articulo.parrafos.map((parrafo) => (
                <p key={parrafo}>{parrafo}</p>
              ))}
              <Link className="btn btn-encanto-secundario" to="/blogs">
                Volver a blogs
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
