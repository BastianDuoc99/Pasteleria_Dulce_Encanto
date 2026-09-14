function setError(id, msg) {
  const e = document.getElementById(id);
  if (e) e.textContent = msg;
}

function validEmail(v) {
  return /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i.test(v);
}

function validRun(v) {
  return /^\d{7,8}[0-9kK]$/.test(v.replace(/\.|-/g, ""));
}

document.addEventListener("DOMContentLoaded", () => {
  const login = document.getElementById("loginForm");

  if (login) {
    login.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = login.email.value.trim();
      const pass = login.password.value;
      let ok = true;

      setError("emailError", "");
      setError("passwordError", "");

      if (!email) {
        setError("emailError", "El correo es requerido.");
        ok = false;
      } else if (email.length > 100) {
        setError("emailError", "Máximo 100 caracteres.");
        ok = false;
      } else if (!validEmail(email)) {
        setError(
          "emailError",
          "Solo @duoc.cl, @profesor.duoc.cl o @gmail.com."
        );
        ok = false;
      }

      if (!pass) {
        setError("passwordError", "La contraseña es requerida.");
        ok = false;
      } else if (pass.length < 4 || pass.length > 10) {
        setError(
          "passwordError",
          "Debe tener entre 4 y 10 caracteres."
        );
        ok = false;
      }

      if (ok) {
        localStorage.setItem(
          "sesionMilSabores",
          JSON.stringify({ email })
        );
        document.getElementById("loginSuccess").textContent =
          "Inicio de sesión validado correctamente (modo demostración).";
        document.getElementById("loginSuccess").hidden = false;
      }
    });
  }

  const contact = document.getElementById("contactForm");

  if (contact) {
    contact.addEventListener("submit", (e) => {
      e.preventDefault();

      const n = contact.nombre.value.trim();
      const em = contact.correo.value.trim();
      const co = contact.comentario.value.trim();
      let ok = true;

      ["nombreError", "correoError", "comentarioError"].forEach((x) =>
        setError(x, "")
      );

      if (!n) {
        setError("nombreError", "El nombre es requerido.");
        ok = false;
      } else if (n.length > 100) {
        setError("nombreError", "Máximo 100 caracteres.");
        ok = false;
      }

      if (em && (!validEmail(em) || em.length > 100)) {
        setError("correoError", "Correo inválido o no permitido.");
        ok = false;
      }

      if (!co) {
        setError("comentarioError", "El comentario es requerido.");
        ok = false;
      } else if (co.length > 500) {
        setError("comentarioError", "Máximo 500 caracteres.");
        ok = false;
      }

      if (ok) {
        contact.reset();
        document.getElementById("contactSuccess").textContent =
          "Mensaje enviado correctamente (modo demostración).";
        document.getElementById("contactSuccess").hidden = false;
      }
    });
  }

  const register = document.getElementById("registerForm");

  if (register) {
    register.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;

      [
        "runError",
        "nombreError",
        "apellidoError",
        "correoError",
        "direccionError",
      ].forEach((x) => setError(x, ""));

      if (!validRun(register.run.value)) {
        setError(
          "runError",
          "RUN requerido. Use 7-9 caracteres, sin puntos ni guion. Ej: 19011022K."
        );
        ok = false;
      }

      if (
        !register.nombre.value.trim() ||
        register.nombre.value.length > 50
      ) {
        setError("nombreError", "Requerido, máximo 50 caracteres.");
        ok = false;
      }

      if (
        !register.apellidos.value.trim() ||
        register.apellidos.value.length > 100
      ) {
        setError("apellidoError", "Requerido, máximo 100 caracteres.");
        ok = false;
      }

      if (
        !validEmail(register.correo.value.trim()) ||
        register.correo.value.length > 100
      ) {
        setError("correoError", "Correo inválido o no permitido.");
        ok = false;
      }

      if (
        !register.direccion.value.trim() ||
        register.direccion.value.length > 300
      ) {
        setError("direccionError", "Requerida, máximo 300 caracteres.");
        ok = false;
      }

      if (ok) {
        document.getElementById("registerSuccess").textContent =
          "Registro validado correctamente. ¡Bienvenido a Dulce Encanto!";
        document.getElementById("registerSuccess").hidden = false;
        register.reset();
      }
    });
  }
});
