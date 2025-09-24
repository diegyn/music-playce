exports.validarUsuario = (nome, email) => {
  if (!nome || typeof nome !== "string" || nome.trim() === "") {
    return { valid: false, message: "O nome é inválido ou não foi informado!" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || typeof email !== "string" || !emailRegex.test(email)) {
    return {
      valid: false,
      message: "O e-mail é inválido ou não foi informado!",
    };
  }

  return { valid: true, message: "Os dados estão corretos!" };
};
