import { createContext, useContext, useState } from "react";
import {
  cerrarSesion as limpiarSesion,
  getSesion,
  guardarSesion,
} from "../utils/sesion.js";

const SesionContext = createContext(null);

export function SesionProvider({ children }) {
  const [usuario, setUsuario] = useState(getSesion);

  function iniciarSesion(sesion) {
    guardarSesion(sesion);
    setUsuario(sesion);
  }

  function cerrarSesion() {
    limpiarSesion();
    setUsuario(null);
  }

  return (
    <SesionContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </SesionContext.Provider>
  );
}

export function useSesion() {
  const contexto = useContext(SesionContext);
  if (!contexto) {
    throw new Error("useSesion debe usarse dentro de SesionProvider");
  }
  return contexto;
}
