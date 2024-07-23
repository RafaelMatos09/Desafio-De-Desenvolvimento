const express = require("express");
const { listar, cadastrar, detalhar, atualizar, deletar } = require("./controladores/usuarios");
const validarCorpoRequisicao = require("./intermediarios/validaCorpoRequisicao");
const schemaUsuario = require("./schemas/cadastroUsuario");
const verificaParametroId = require("./intermediarios/verificaParametroId");

const rotas = express();

rotas.get("/usuario", listar);
rotas.get("/usuario/:id", verificaParametroId, detalhar);
rotas.post("/usuario", validarCorpoRequisicao(schemaUsuario), cadastrar);
rotas.put("/usuario/:id", verificaParametroId, validarCorpoRequisicao(schemaUsuario), atualizar);
rotas.delete("/usuario/:id", verificaParametroId, deletar);

module.exports = rotas;