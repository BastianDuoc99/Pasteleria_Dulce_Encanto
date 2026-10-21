import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext.jsx";
import Footer from "./Footer.jsx";
import NavBar from "./NavBar.jsx";

export default function Layout({ children }) {
  const { aviso, limpiarAviso } = useCarrito();

  useEffect(() => {
    if (!aviso) return undefined;
    const temporizador = setTimeout(limpiarAviso, 2600);
    return () => clearTimeout(temporizador);
  }, [aviso, limpiarAviso]);

  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-grow-1">{children || <Outlet />}</main>
      <Footer />
      {aviso ? (
        <div className="aviso-carrito" role="status">
          {aviso}
        </div>
      ) : null}
    </div>
  );
}
