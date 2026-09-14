function setError(id, msg) {
  const e = document.getElementById(id);
  if (e) e.textContent = msg;
}

function validEmail(v) {
  return /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i.test(v);
}

function digitoVerificadorRun(cuerpo) {
  let suma = 0;
  let mult = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += Number(cuerpo[i]) * mult;
    mult = mult === 7 ? 2 : mult + 1;
  }
  const resto = suma % 11;
  const dv = 11 - resto;
  if (dv === 11) return "0";
  if (dv === 10) return "K";
  return String(dv);
}

function validRun(v) {
  const t = String(v || "").replace(/[.\s-]/g, "").toUpperCase();
  const m = t.match(/^(\d{6,8})([0-9K])$/);
  if (!m) return false;
  return digitoVerificadorRun(m[1]) === m[2];
}

function mostrarExito(form, msg) {
  let d = form.parentNode ? form.parentNode.querySelector(".success") : null;
  if (!d) {
    d = document.createElement("div");
    d.className = "success";
    form.parentNode.insertBefore(d, form);
  }
  d.textContent = msg;
  d.hidden = false;
}

function initRegionComuna() {
  const regionSel = document.querySelector('select[name="region"]');
  const comunaSel = document.querySelector('select[name="comuna"]');
  if (!regionSel || !comunaSel) return;

  regionSel.innerHTML = REGIONES.map(
    (r) => `<option value="${r.nombre}">${r.nombre}</option>`
  ).join("");

  function cargarComunas() {
    const region =
      REGIONES.find((r) => r.nombre === regionSel.value) || REGIONES[0];
    comunaSel.innerHTML =
      '<option value="">Seleccione una comuna</option>' +
      region.comunas.map((c) => `<option>${c}</option>`).join("");
  }

  regionSel.addEventListener("change", cargarComunas);
  cargarComunas();
}

document.addEventListener("DOMContentLoaded", () => {
  initRegionComuna();

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
          "sesionDulceEncanto",
          JSON.stringify({ email })
        );
        mostrarExito(
          login,
          "Inicio de sesión validado correctamente (modo demostración)."
        );
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
        mostrarExito(contact, "Mensaje enviado correctamente (modo demostración).");
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
          "RUN inválido. Sin puntos ni guiones (7-9 caracteres). Ej: 123456785."
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
        register.reset();
        mostrarExito(
          register,
          "Registro validado correctamente. ¡Bienvenido a Dulce Encanto!"
        );
      }
    });
  }

  const adminProductForm = document.getElementById("adminProductForm");

  if (adminProductForm) {
    adminProductForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;

      [
        "codigoError",
        "nombreError",
        "descripcionError",
        "precioError",
        "stockError",
        "criticoError",
        "categoriaError",
      ].forEach((x) => setError(x, ""));

      const codigo = adminProductForm.codigo.value.trim();
      const nombre = adminProductForm.nombre.value.trim();
      const descripcion = adminProductForm.descripcion.value.trim();
      const precio = adminProductForm.precio.value.trim();
      const stock = adminProductForm.stock.value.trim();
      const critico = adminProductForm.critico.value.trim();
      const categoria = adminProductForm.categoria.value;
      const imagen = adminProductForm.imagen.value.trim();

      if (!codigo || codigo.length < 3) {
        setError(
          "codigoError",
          "El código es requerido y debe tener al menos 3 caracteres."
        );
        ok = false;
      }

      if (!nombre || nombre.length > 100) {
        setError("nombreError", "Requerido, máximo 100 caracteres.");
        ok = false;
      }

      if (descripcion.length > 500) {
        setError("descripcionError", "Máximo 500 caracteres.");
        ok = false;
      }

      if (!precio || Number(precio) < 0) {
        setError("precioError", "Requerido y debe ser mayor o igual a 0.");
        ok = false;
      } else if (!/^\d+(\.\d{1,2})?$/.test(precio)) {
        setError(
          "precioError",
          "Ingrese un valor numérico válido (se permiten decimales)."
        );
        ok = false;
      }

      if (!stock || Number(stock) < 0 || !/^\d+$/.test(stock.trim())) {
        setError("stockError", "Requerido, entero mayor o igual a 0.");
        ok = false;
      }

      if (critico && (!/^\d+$/.test(critico.trim()) || Number(critico) < 0)) {
        setError("criticoError", "Debe ser un entero mayor o igual a 0.");
        ok = false;
      }

      if (!categoria) {
        setError("categoriaError", "Seleccione una categoría.");
        ok = false;
      }

      if (ok) {
        guardarProducto({
          codigo: codigo,
          categoria: categoria,
          nombre: nombre,
          descripcion: descripcion,
          precio: Number(precio),
          stock: Number(stock),
          stockCritico: critico === "" ? null : Number(critico),
          imagen: imagen,
          tipo: "personalizado"
        });
        mostrarExito(
          adminProductForm,
          `Producto ${codigo} validado y guardado correctamente (modo demostración).`
        );
        adminProductForm.reset();
      }
    });
  }

  const adminUserForm = document.getElementById("adminUserForm");

  if (adminUserForm) {
    adminUserForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;

      [
        "runError",
        "nombreError",
        "apellidoError",
        "correoError",
        "direccionError",
      ].forEach((x) => setError(x, ""));

      if (!validRun(adminUserForm.run.value)) {
        setError(
          "runError",
          "RUN inválido. Sin puntos ni guiones (7-9 caracteres). Ej: 123456785."
        );
        ok = false;
      }

      if (
        !adminUserForm.nombre.value.trim() ||
        adminUserForm.nombre.value.length > 50
      ) {
        setError("nombreError", "Requerido, máximo 50 caracteres.");
        ok = false;
      }

      if (
        !adminUserForm.apellidos.value.trim() ||
        adminUserForm.apellidos.value.length > 100
      ) {
        setError("apellidoError", "Requerido, máximo 100 caracteres.");
        ok = false;
      }

      if (
        !validEmail(adminUserForm.correo.value.trim()) ||
        adminUserForm.correo.value.length > 100
      ) {
        setError("correoError", "Correo inválido o no permitido.");
        ok = false;
      }

      if (
        !adminUserForm.direccion.value.trim() ||
        adminUserForm.direccion.value.length > 300
      ) {
        setError("direccionError", "Requerida, máximo 300 caracteres.");
        ok = false;
      }

      if (ok) {
        mostrarExito(
          adminUserForm,
          "Usuario validado y guardado correctamente (modo demostración)."
        );
        adminUserForm.reset();
      }
    });
  }
});