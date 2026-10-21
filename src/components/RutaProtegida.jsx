import { Navigate } from "react-router-dom";
import { useSesion } from "../context/SesionContext.jsx";

export default function RutaProtegida({ children }) {
  const { usuario } = useSesion();

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
