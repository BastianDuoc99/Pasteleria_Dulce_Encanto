import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { PRODUCTOS } from "../data/productos.js";
import ProductCard from "./ProductCard.jsx";

const producto = PRODUCTOS[0];

function renderizar(onAgregar = vi.fn()) {
  render(
    <MemoryRouter>
      <ProductCard producto={producto} onAgregar={onAgregar} />
    </MemoryRouter>
  );
  return onAgregar;
}

describe("ProductCard", () => {
  it("muestra nombre, categoría, precio en CLP, imagen y enlace de detalle", () => {
    renderizar();

    expect(screen.getByText(producto.nombre)).toBeInTheDocument();
    expect(screen.getByText(producto.categoria)).toBeInTheDocument();
    expect(screen.getByText(/45\.000/)).toBeInTheDocument();
    expect(screen.getByAltText(producto.nombre)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: `Ver ${producto.nombre}` })
    ).toHaveAttribute("href", `/producto/${producto.codigo}`);
  });

  it("llama al manejador con el producto al pulsar Añadir", async () => {
    const user = userEvent.setup();
    const onAgregar = renderizar();

    await user.click(screen.getByRole("button", { name: /añadir/i }));

    expect(onAgregar).toHaveBeenCalledTimes(1);
    expect(onAgregar).toHaveBeenCalledWith(producto);
  });
});
