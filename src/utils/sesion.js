export const USUARIO_KEY = "dulceEncantoUsuario";
export const SESION_KEY = "sesionDulceEncanto";

function leerJson(clave) {
  if (typeof localStorage === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(clave) || "null");
  } catch {
    return null;
  }
}

export function getUsuarioGuardado() {
  return leerJson(USUARIO_KEY);
}

export function guardarUsuario(usuario) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(USUARIO_KEY, JSON.stringify(usuario));
}

export function getSesion() {
  return leerJson(SESION_KEY);
}

export function guardarSesion(sesion) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(SESION_KEY, JSON.stringify(sesion));
}

export function cerrarSesion() {
  if (typeof localStorage === "undefined") return;
  localStorage.removeItem(SESION_KEY);
}
