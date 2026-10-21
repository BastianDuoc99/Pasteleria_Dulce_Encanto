export default function Nosotros() {
  return (
    <>
      <section className="page-title-encanto">
        <div className="container">
          <span className="eyebrow">Nuestra historia</span>
          <h1>Nosotros</h1>
        </div>
      </section>

      <section className="section-encanto pt-0">
        <div className="container">
          <div className="banner-encanto mb-4">
            <h2>50 años de dulzura</h2>
            <p className="mb-0">
              Pastelería Dulce Encanto celebra su 50 aniversario como referente
              de la repostería chilena. Su historia incluye la participación en
              1995 en la creación de la torta más grande del mundo, reconocida
              por un récord Guinness.
            </p>
          </div>

          <div className="row g-3">
            <div className="col-12 col-md-4">
              <div className="feature-card h-100">
                <h3 className="h5">Misión</h3>
                <p className="mb-0">
                  Ofrecer una experiencia dulce y memorable, proporcionando
                  tortas y productos de repostería de alta calidad para todas
                  las ocasiones, celebrando nuestras raíces históricas y
                  fomentando la creatividad.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="feature-card h-100">
                <h3 className="h5">Visión</h3>
                <p className="mb-0">
                  Convertirnos en la tienda online líder de productos de
                  repostería en Chile, reconocida por innovación, calidad e
                  impacto positivo en la comunidad.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="feature-card h-100">
                <h3 className="h5">Comunidad</h3>
                <p className="mb-0">
                  Buscamos resaltar cómo las compras apoyan a estudiantes de
                  gastronomía y a la comunidad local.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center g-4 mt-4">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid detalle-imagen"
                src="/assets/img/Pasteleria.jpg"
                alt="Historia de Pastelería Dulce Encanto"
              />
            </div>
            <div className="col-12 col-lg-6">
              <span className="eyebrow">Tradición viva</span>
              <h2>Nuestra historia en imágenes</h2>
              <p>
                Desde 1976 hemos acompañado celebraciones familiares con
                recetas artesanales, ingredientes de calidad y un compromiso
                permanente con la comunidad.
              </p>
              <p className="mb-0">
                La versión web conserva este relato y lo integra a una
                experiencia moderna, responsiva y accesible desde cualquier
                dispositivo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
