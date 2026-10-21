import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contacto from "./Contacto.jsx";

describe("Formulario de Contacto", () => {
  it("muestra los campos obligatorios cuando se envía vacío", async () => {
    const user = userEvent.setup();
    render(<Contacto />);

    await user.click(screen.getByRole("button", { name: "Enviar mensaje" }));

    expect(
      await screen.findByText(/El nombre es requerido/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/El comentario es requerido/i)
    ).toBeInTheDocument();
  });

  it("confirma el envío con datos válidos", async () => {
    const user = userEvent.setup();
    render(<Contacto />);

    await user.type(screen.getByLabelText(/^Nombre/i), "María");
    await user.type(screen.getByLabelText(/^Correo/i), "alumna@duoc.cl");
    await user.type(screen.getByLabelText(/^Comentario/i), "Quiero cotizar una torta.");
    await user.click(screen.getByRole("button", { name: "Enviar mensaje" }));

    expect(
      await screen.findByText(/Mensaje enviado correctamente/i)
    ).toBeInTheDocument();
  });
});
