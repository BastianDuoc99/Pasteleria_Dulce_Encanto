import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { CarritoProvider } from "../context/CarritoContext.jsx";
import { PRODUCTOS } from "../data/productos.js";
import Productos from "./Productos.jsx";

function renderizar() {
  render(
    <MemoryRouter>
      <CarritoProvider>
        <Productos />
      </CarritoProvider>
    </MemoryRouter>
  );
}

describe("Página de Productos", () => {
  it("renderiza una tarjeta por cada producto del catálogo", () => {
    renderizar();
    expect(screen.getAllByTestId("producto-card")).toHaveLength(
      PRODUCTOS.length
    );
  });

  it("filtra por texto de búsqueda", async () => {
    const user = userEvent.setup();
    renderizar();

    await user.type(screen.getByLabelText(/buscar producto/i), "chocolate");

    const tarjetas = screen.getAllByTestId("producto-card");
    expect(tarjetas).toHaveLength(3);
    expect(screen.getByText("Mousse de Chocolate")).toBeInTheDocument();
  });

  it("filtra por categoría y muestra un estado vacío cuando no hay coincidencias", async () => {
    const user = userEvent.setup();
    renderizar();

    await user.selectOptions(
      screen.getByLabelText(/categoría/i),
      "Tortas Cuadradas"
    );
    expect(screen.getAllByTestId("producto-card")).toHaveLength(2);

    await user.type(screen.getByLabelText(/buscar producto/i), "producto-inexistente");
    expect(
      screen.getByText(/No se encontraron productos/i)
    ).toBeInTheDocument();
  });
});
