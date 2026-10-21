import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { SesionProvider } from "../context/SesionContext.jsx";
import { SESION_KEY, USUARIO_KEY } from "../utils/sesion.js";
import Login from "./Login.jsx";

function renderizar() {
  render(
    <MemoryRouter>
      <SesionProvider>
        <Login />
      </SesionProvider>
    </MemoryRouter>
  );
}

describe("Inicio de sesión", () => {
  it("muestra errores con correo no permitido y contraseña corta", async () => {
    const user = userEvent.setup();
    renderizar();

    await user.type(screen.getByLabelText(/^Correo/i), "maria@correo.cl");
    await user.type(screen.getByLabelText(/^Contraseña/i), "123");
    await user.click(screen.getByRole("button", { name: "Ingresar" }));

    expect(
      await screen.findByText(/Solo se permiten correos/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Debe tener entre 4 y 10 caracteres/i)
    ).toBeInTheDocument();
    expect(localStorage.getItem(SESION_KEY)).toBeNull();
  });

  it("inicia sesión con credenciales válidas cuando no hay usuario registrado", async () => {
    const user = userEvent.setup();
    renderizar();

    await user.type(screen.getByLabelText(/^Correo/i), "maria@duoc.cl");
    await user.type(screen.getByLabelText(/^Contraseña/i), "1234");
    await user.click(screen.getByRole("button", { name: "Ingresar" }));

    expect(
      await screen.findByText(/Bienvenido de nuevo/i)
    ).toBeInTheDocument();

    const sesion = JSON.parse(localStorage.getItem(SESION_KEY));
    expect(sesion.email).toBe("maria@duoc.cl");
  });

  it("rechaza credenciales que no coinciden con el usuario registrado", async () => {
    const user = userEvent.setup();
    localStorage.setItem(
      USUARIO_KEY,
      JSON.stringify({
        email: "maria@duoc.cl",
        password: "1234",
        nombre: "María",
      })
    );
    renderizar();

    await user.type(screen.getByLabelText(/^Correo/i), "maria@duoc.cl");
    await user.type(screen.getByLabelText(/^Contraseña/i), "9999");
    await user.click(screen.getByRole("button", { name: "Ingresar" }));

    expect(
      await screen.findByText(/Correo o contraseña incorrectos/i)
    ).toBeInTheDocument();
    expect(localStorage.getItem(SESION_KEY)).toBeNull();
  });
});
