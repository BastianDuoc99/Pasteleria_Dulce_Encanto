import { useState } from "react";
import { Link } from "react-router-dom";
import { useSesion } from "../context/SesionContext.jsx";
import { getUsuarioGuardado } from "../utils/sesion.js";
import { validarLogin } from "../utils/validaciones.js";

const FORMULARIO_INICIAL = { email: "", password: "" };

export default function Login() {
  const { iniciarSesion } = useSesion();
  const [formulario, setFormulario] = useState(FORMULARIO_INICIAL);
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState("");

  function actualizar(campo, valor) {
    setFormulario((previo) => ({ ...previo, [campo]: valor }));
  }

  function enviar(evento) {
    evento.preventDefault();
    const erroresEncontrados = validarLogin(formulario);
    setErrores(erroresEncontrados);
    setMensaje("");

    if (Object.keys(erroresEncontrados).length > 0) return;

    const registrado = getUsuarioGuardado();
    if (
      registrado &&
      (registrado.email !== formulario.email.trim() ||
        registrado.password !== formulario.password)
    ) {
      setErrores({ general: "Correo o contraseña incorrectos." });
      return;
    }

    const sesion = {
      email: formulario.email.trim(),
      nombre: registrado?.nombre || formulario.email.split("@")[0],
    };

    iniciarSesion(sesion);
    setMensaje(`Bienvenido de nuevo, ${sesion.nombre}!`);
    setFormulario(FORMULARIO_INICIAL);
  }

  return (
    <>
      <section className="page-title-encanto">
        <div className="container">
          <span className="eyebrow">Acceso</span>
          <h1>Iniciar sesión</h1>
        </div>
      </section>

      <section className="section-encanto pt-0">
        <div className="container">
          <div className="form-card form-card-angosto">
            {mensaje ? (
              <div className="alert alert-success" role="status">
                {mensaje}{" "}
                <Link to="/" className="alert-link">
                  Ir al inicio
                </Link>
              </div>
            ) : null}

            {errores.general ? (
              <div className="alert alert-danger" role="alert">
                {errores.general}
              </div>
            ) : null}

            <form onSubmit={enviar} noValidate>
              <div className="mb-3">
                <label className="form-label" htmlFor="login-email">
                  Correo
                </label>
                <input
                  id="login-email"
                  type="email"
                  className="form-control"
                  placeholder="correo@dominio.com"
                  maxLength={100}
                  value={formulario.email}
                  onChange={(evento) => actualizar("email", evento.target.value)}
                />
                {errores.email ? (
                  <p className="error-campo">{errores.email}</p>
                ) : null}
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="login-password">
                  Contraseña
                </label>
                <input
                  id="login-password"
                  type="password"
                  className="form-control"
                  maxLength={10}
                  value={formulario.password}
                  onChange={(evento) =>
                    actualizar("password", evento.target.value)
                  }
                />
                {errores.password ? (
                  <p className="error-campo">{errores.password}</p>
                ) : null}
              </div>

              <button type="submit" className="btn btn-encanto w-100">
                Ingresar
              </button>
            </form>

            <hr />
            <p className="mb-0">
              ¿No tienes cuenta?{" "}
              <Link to="/registro" className="enlace-encanto">
                Registrarme
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
