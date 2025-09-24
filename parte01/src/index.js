const { validarUsuario } = require("./validator");

const functions = require("firebase-functions");

const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

exports.cadastrarUsuario = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Método não permitido");
  }

  const { nome, email } = req.body;

  const dadosUsuario = validarUsuario(nome, email);

  if (!dadosUsuario.valid) {
    return res.status(400).send(dadosUsuario.message);
  }

  const usuariosRef = db.collection("usuarios").doc();

  const existeUsuario = await usuariosRef
    .where("email", "==", email)
    .limit(1)
    .get();

  if (!existeUsuario.empty) {
    return res.status(400).send("E-mail já cadastrado");
  }

  await usuariosRef.set({
    nome,
    email,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return res.status(201).send("Usuário cadastrado com sucesso");
});
