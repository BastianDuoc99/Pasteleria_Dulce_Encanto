import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { USUARIO_KEY } from "../utils/sesion.js";
import Registro from "./Registro.jsx";

function renderizar() {
  render(
    <MemoryRouter>
      <Registro />
    </MemoryRouter>
  );
}

async function completar(user, overrides = {}) {
  const datos = {
    run: "12345678-5",
    nombre: "María",
    apellidos: "González",
    email: "alumna@duoc.cl",
    password: "1234",
    direccion: "Av. Siempre Viva 123",
    ...overrides,
  };

  await user.type(screen.getByLabelText(/^RUN/i), datos.run);
  await user.type(screen.getByLabelText(/^Nombre/i), datos.nombre);
  await user.type(screen.getByLabelText(/^Apellidos/i), datos.apellidos);
  await user.type(screen.getByLabelText(/^Correo/i), datos.email);
  await user.type(screen.getByLabelText(/^Contraseña/i), datos.password);
  await user.type(screen.getByLabelText(/^Dirección/i), datos.direccion);
}

describe("Formulario de Registro", () => {
  it("muestra errores y no guarda cuando los datos son inválidos", async () => {
    const user = userEvent.setup();
    renderizar();

    await completar(user, {
      run: "12345678-9",
      email: "alumna@correo.cl",
    });
    await user.click(screen.getByRole("button", { name: "Crear cuenta" }));

    expect(await screen.findByText(/RUN inválido/i)).toBeInTheDocument();
    expect(screen.getByText(/Correo inválido o no permitido/i)).toBeInTheDocument();
    expect(localStorage.getItem(USUARIO_KEY)).toBeNull();
  });

  it("guarda el usuario y confirma cuando los datos son válidos", async () => {
    const user = userEvent.setup();
    renderizar();

    await completar(user);
    await user.type(
      screen.getByLabelText(/código promocional/i),
      "FELICES50"
    );
    await user.click(screen.getByRole("button", { name: "Crear cuenta" }));

    expect(await screen.findByText(/Registro exitoso/i)).toBeInTheDocument();

    const guardado = JSON.parse(localStorage.getItem(USUARIO_KEY));
    expect(guardado.email).toBe("alumna@duoc.cl");
    expect(guardado.run).toBe("12345678-5");
    expect(guardado.codigoPromocional).toBe("FELICES50");
    expect(guardado.nombre).toBe("María");
  });
});
