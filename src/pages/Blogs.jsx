import { Link } from "react-router-dom";

const entradas = [
  {
    slug: "la-gran-torta-de-1995",
    etiqueta: "Historia",
    titulo: "La gran torta de 1995",
    resumen:
      "Un recorrido por el hito que marcó la historia de Pastelería Dulce Encanto.",
    imagen: "/assets/img/Concurso-de-tortas.jpg",
  },
  {
    slug: "reposteria-y-nuevos-talentos",
    etiqueta: "Comunidad",
    titulo: "Repostería y nuevos talentos",
    resumen:
      "Cómo la formación gastronómica y la comunidad pueden encontrarse alrededor de la pastelería.",
    imagen: "/assets/img/Cursos-pasteleria.jpg",
  },
];

export default function Blogs() {
  return (
    <>
      <section className="page-title-encanto">
        <div className="container">
          <span className="eyebrow">Repostería y comunidad</span>
          <h1>Blogs</h1>
          <p className="mb-0">
            Noticias, datos curiosos, recetas y consejos vinculados a la tienda.
          </p>
        </div>
      </section>

      <section className="section-encanto pt-0">
        <div className="container">
          <div className="row g-4">
            {entradas.map((entrada) => (
              <div className="col-12 col-lg-6" key={entrada.slug}>
                <article className="blog-card h-100">
                  <img
                    className="blog-imagen"
                    src={entrada.imagen}
                    alt={entrada.titulo}
                  />
                  <div className="p-4">
                    <span className="badge-categoria">{entrada.etiqueta}</span>
                    <h2 className="h4 mt-3">{entrada.titulo}</h2>
                    <p>{entrada.resumen}</p>
                    <Link
                      className="btn btn-encanto btn-sm"
                      to={`/blogs/${entrada.slug}`}
                    >
                      Leer más
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
