import { useState } from "react";
import { validarContacto } from "../utils/validaciones.js";

const FORMULARIO_INICIAL = { nombre: "", correo: "", comentario: "" };

export default function Contacto() {
  const [formulario, setFormulario] = useState(FORMULARIO_INICIAL);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function actualizar(campo, valor) {
    setFormulario((previo) => ({ ...previo, [campo]: valor }));
  }

  function enviar(evento) {
    evento.preventDefault();
    const erroresEncontrados = validarContacto(formulario);
    setErrores(erroresEncontrados);

    if (Object.keys(erroresEncontrados).length > 0) {
      setEnviado(false);
      return;
    }

    setEnviado(true);
    setFormulario(FORMULARIO_INICIAL);
  }

  return (
    <>
      <section className="page-title-encanto">
        <div className="container">
          <span className="eyebrow">Atención al cliente</span>
          <h1>Contacto</h1>
          <p className="mb-0">Envíanos tu mensaje y te contactaremos.</p>
        </div>
      </section>

      <section className="section-encanto pt-0">
        <div className="container">
          <div className="form-card">
            {enviado ? (
              <div className="alert alert-success" role="status">
                Mensaje enviado correctamente. Gracias por escribirnos.
              </div>
            ) : null}

            <form onSubmit={enviar} noValidate>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="contacto-nombre">
                    Nombre *
                  </label>
                  <input
                    id="contacto-nombre"
                    className="form-control"
                    maxLength={100}
                    value={formulario.nombre}
                    onChange={(evento) => actualizar("nombre", evento.target.value)}
                  />
                  {errores.nombre ? (
                    <p className="error-campo">{errores.nombre}</p>
                  ) : null}
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="contacto-correo">
                    Correo
                  </label>
                  <input
                    id="contacto-correo"
                    type="email"
                    className="form-control"
                    maxLength={100}
                    value={formulario.correo}
                    onChange={(evento) => actualizar("correo", evento.target.value)}
                  />
                  {errores.correo ? (
                    <p className="error-campo">{errores.correo}</p>
                  ) : null}
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="contacto-comentario">
                    Comentario *
                  </label>
                  <textarea
                    id="contacto-comentario"
                    className="form-control"
                    rows={5}
                    maxLength={500}
                    value={formulario.comentario}
                    onChange={(evento) =>
                      actualizar("comentario", evento.target.value)
                    }
                  />
                  {errores.comentario ? (
                    <p className="error-campo">{errores.comentario}</p>
                  ) : null}
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-encanto">
                    Enviar mensaje
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
