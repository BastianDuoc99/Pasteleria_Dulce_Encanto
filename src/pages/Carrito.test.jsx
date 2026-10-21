import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import {
  CARRITO_KEY,
  CarritoProvider,
  useCarrito,
} from "../context/CarritoContext.jsx";
import Carrito from "./Carrito.jsx";

const itemBase = {
  codigo: "TC001",
  nombre: "Torta Cuadrada de Chocolate",
  precio: 45000,
  qty: 2,
  categoria: "Tortas Cuadradas",
  imagen: "/assets/img/TC001.jpg",
};

function EspiaAviso() {
  const { aviso } = useCarrito();
  return <p data-testid="aviso">{aviso}</p>;
}

function renderizar(conAviso = false) {
  render(
    <MemoryRouter>
      <CarritoProvider>
        <Carrito />
        {conAviso ? <EspiaAviso /> : null}
      </CarritoProvider>
    </MemoryRouter>
  );
}

describe("Página del Carrito", () => {
  it("muestra el estado vacío cuando no hay productos", () => {
    renderizar();
    expect(
      screen.getByRole("heading", { name: /tu carrito está vacío/i })
    ).toBeInTheDocument();
  });

  it("renderiza los productos guardados y calcula el total", () => {
    localStorage.setItem(CARRITO_KEY, JSON.stringify([itemBase]));
    renderizar();

    expect(screen.getByText(itemBase.nombre)).toBeInTheDocument();
    expect(screen.getByLabelText(`Cantidad de ${itemBase.nombre}`)).toHaveValue(
      "2"
    );
    expect(screen.getAllByText("$90.000 CLP").length).toBeGreaterThan(0);
  });

  it("aumenta la cantidad de un producto", async () => {
    const user = userEvent.setup();
    localStorage.setItem(CARRITO_KEY, JSON.stringify([{ ...itemBase, qty: 1 }]));
    renderizar();

    await user.click(
      screen.getByRole("button", {
        name: `Aumentar cantidad de ${itemBase.nombre}`,
      })
    );

    expect(screen.getByLabelText(`Cantidad de ${itemBase.nombre}`)).toHaveValue(
      "2"
    );
  });

  it("no permite superar el máximo de 10 unidades y avisa al usuario", async () => {
    const user = userEvent.setup();
    localStorage.setItem(
      CARRITO_KEY,
      JSON.stringify([{ ...itemBase, qty: 10 }])
    );
    renderizar(true);

    await user.click(
      screen.getByRole("button", {
        name: `Aumentar cantidad de ${itemBase.nombre}`,
      })
    );

    expect(screen.getByTestId("aviso")).toHaveTextContent(
      /Máximo 10 unidades/i
    );
    expect(screen.getByLabelText(`Cantidad de ${itemBase.nombre}`)).toHaveValue(
      "10"
    );
  });

  it("elimina un producto del carrito", async () => {
    const user = userEvent.setup();
    localStorage.setItem(
      CARRITO_KEY,
      JSON.stringify([{ ...itemBase, qty: 1 }])
    );
    renderizar();

    await user.click(screen.getByRole("button", { name: /eliminar/i }));

    expect(
      screen.getByRole("heading", { name: /tu carrito está vacío/i })
    ).toBeInTheDocument();
  });
});
