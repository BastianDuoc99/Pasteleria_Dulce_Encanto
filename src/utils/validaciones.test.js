import { describe, expect, it } from "vitest";
import {
  digitoVerificadorRun,
  validEmail,
  validPassword,
  validRun,
  validarContacto,
  validarRegistro,
} from "./validaciones.js";

describe("validEmail", () => {
  it("acepta los dominios permitidos del caso", () => {
    expect(validEmail("alumna@duoc.cl")).toBe(true);
    expect(validEmail("docente@profesor.duoc.cl")).toBe(true);
    expect(validEmail("personal@gmail.com")).toBe(true);
  });

  it("rechaza dominios no permitidos y correos mal formados", () => {
    expect(validEmail("alumna@correo.cl")).toBe(false);
    expect(validEmail("sin-arroba")).toBe(false);
    expect(validEmail("")).toBe(false);
  });
});

describe("digitoVerificadorRun", () => {
  it("calcula el dígito verificador con la regla módulo 11", () => {
    expect(digitoVerificadorRun("12345678")).toBe("5");
    expect(digitoVerificadorRun("11111111")).toBe("1");
  });
});

describe("validRun", () => {
  it("acepta RUN válidos con y sin formato chileno", () => {
    expect(validRun("12345678-5")).toBe(true);
    expect(validRun("12.345.678-5")).toBe(true);
  });

  it("rechaza RUN con dígito verificador incorrecto o formato inválido", () => {
    expect(validRun("12345678-9")).toBe(false);
    expect(validRun("12345")).toBe(false);
    expect(validRun("")).toBe(false);
  });
});

describe("validPassword", () => {
  it("acepta contraseñas de 4 a 10 caracteres", () => {
    expect(validPassword("1234")).toBe(true);
    expect(validPassword("1234567890")).toBe(true);
  });

  it("rechaza contraseñas fuera del rango", () => {
    expect(validPassword("123")).toBe(false);
    expect(validPassword("12345678901")).toBe(false);
  });
});

describe("validarRegistro", () => {
  const valido = {
    run: "12345678-5",
    nombre: "María",
    apellidos: "González",
    email: "alumna@duoc.cl",
    password: "1234",
    direccion: "Av. Siempre Viva 123",
  };

  it("no devuelve errores con datos válidos", () => {
    expect(validarRegistro(valido)).toEqual({});
  });

  it("devuelve errores comprensibles con datos inválidos", () => {
    const errores = validarRegistro({
      run: "12345678-9",
      nombre: "",
      apellidos: "",
      email: "alumna@correo.cl",
      password: "12",
      direccion: "",
    });

    expect(errores.run).toMatch(/RUN inválido/i);
    expect(errores.nombre).toMatch(/nombre es requerido/i);
    expect(errores.apellidos).toMatch(/apellidos son requeridos/i);
    expect(errores.email).toMatch(/Correo inválido/i);
    expect(errores.password).toMatch(/entre 4 y 10/i);
    expect(errores.direccion).toMatch(/dirección es requerida/i);
  });
});

describe("validarContacto", () => {
  it("exige nombre y comentario, pero permite correo vacío", () => {
    const errores = validarContacto({ nombre: "", correo: "", comentario: "" });
    expect(errores.nombre).toMatch(/nombre es requerido/i);
    expect(errores.comentario).toMatch(/comentario es requerido/i);
    expect(errores.correo).toBeUndefined();
  });

  it("valida el correo solo cuando se informa", () => {
    expect(
      validarContacto({
        nombre: "María",
        correo: "alumna@correo.cl",
        comentario: "Hola",
      }).correo
    ).toMatch(/Correo inválido/i);

    expect(
      validarContacto({
        nombre: "María",
        correo: "alumna@duoc.cl",
        comentario: "Hola",
      })
    ).toEqual({});
  });
});
