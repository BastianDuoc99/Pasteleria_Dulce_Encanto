import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import RutaProtegida from "./components/RutaProtegida.jsx";
import { CarritoProvider } from "./context/CarritoContext.jsx";
import { SesionProvider } from "./context/SesionContext.jsx";
import Admin from "./pages/Admin.jsx";
import BlogDetalle from "./pages/BlogDetalle.jsx";
import Blogs from "./pages/Blogs.jsx";
import Carrito from "./pages/Carrito.jsx";
import Contacto from "./pages/Contacto.jsx";
import Inicio from "./pages/Inicio.jsx";
import Login from "./pages/Login.jsx";
import NoEncontrado from "./pages/NoEncontrado.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";
import Productos from "./pages/Productos.jsx";
import Registro from "./pages/Registro.jsx";

export default function App() {
  return (
    <CarritoProvider>
      <SesionProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="productos" element={<Productos />} />
            <Route path="producto/:codigo" element={<ProductoDetalle />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:slug" element={<BlogDetalle />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Registro />} />
            <Route
              path="admin"
              element={
                <RutaProtegida>
                  <Admin />
                </RutaProtegida>
              }
            />
            <Route path="*" element={<NoEncontrado />} />
          </Route>
        </Routes>
      </SesionProvider>
    </CarritoProvider>
  );
}
