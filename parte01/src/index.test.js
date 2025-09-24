const { validarUsuario } = require("./validator");

test("validarUsuario - Dados válidos", () => {
  expect(validarUsuario("Diego", "teste@email.com")).toEqual({
    valid: true,
    message: "Os dados estão corretos!",
  });
});

test("validarUsuario - Nome inválido", () => {
  expect(validarUsuario("", "teste@email.com")).toEqual({
    valid: false,
    message: "O nome é inválido ou não foi informado!",
  });
});

test("validarUsuario - E-mail inválido", () => {
  expect(validarUsuario("Diego", "testeemail.com")).toEqual({
    valid: false,
    message: "O e-mail é inválido ou não foi informado!",
  });
});
